import * as React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState,useEffect } from 'react';
import {Base64Binary} from '../../utils/utils';
import {fetch,bundleResourceIO,decodeJpeg} from '@tensorflow/tfjs-react-native'
import {Dimensions} from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import * as tf from '@tensorflow/tfjs';
// import logo from './assets/123.png'
// import ImgToBase64 from 'react-native-image-base64';
// const imageToBase64 = require('image-to-base64');
 import * as ImagePicker from 'expo-image-picker';

// import * as ImagePicker from 'react-native-image-picker'
// import * as FileSystem from 'expo-file-system';
// import { out } from 'react-native/Libraries/Animated/Easing';
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [model, setModel] = useState();
  const [time, setTime] = useState(0);
  const [textshow,setTextshow] = useState('')
  const BITMAP_DIMENSION = 224;
  const TENSORFLOW_CHANNEL = 3;
  const {height: DEVICE_HEIGHT, width: DEVICE_WIDTH} = Dimensions.get('window');
useEffect(() => {
        const getModel = async () => {
            try {
              await tf.ready();
              const modelJson = await require("../assets/models/model.json");
              const weight1=await require("../assets/models/group1-shard1of21.bin")
              const weight2=await require("../assets/models/group1-shard2of21.bin")
              const weight3=await require("../assets/models/group1-shard3of21.bin")
              const weight4=await require("../assets/models/group1-shard4of21.bin")
              const weight5=await require("../assets/models/group1-shard5of21.bin")
              const weight6=await require("../assets/models/group1-shard6of21.bin")
              const weight7=await require("../assets/models/group1-shard7of21.bin")
              const weight8=await require("../assets/models/group1-shard8of21.bin")
              const weight9=await require("../assets/models/group1-shard9of21.bin")
              const weight10=await require("../assets/models/group1-shard10of21.bin")
              const weight11=await require("../assets/models/group1-shard11of21.bin")
              const weight12=await require("../assets/models/group1-shard12of21.bin")
              const weight13=await require("../assets/models/group1-shard13of21.bin")
              const weight14=await require("../assets/models/group1-shard14of21.bin")
              const weight15=await require("../assets/models/group1-shard15of21.bin")
              const weight16=await require("../assets/models/group1-shard16of21.bin")
              const weight17=await require("../assets/models/group1-shard17of21.bin")
              const weight18=await require("../assets/models/group1-shard18of21.bin")
              const weight19=await require("../assets/models/group1-shard19of21.bin")
              const weight20=await require("../assets/models/group1-shard20of21.bin")
              const weight21=await require("../assets/models/group1-shard21of21.bin")
              // load the trained model
             treemodel=await tf.loadLayersModel(bundleResourceIO(modelJson, [weight1,weight2,weight3,weight4,weight5,weight6,weight7,weight8,weight9,weight10,weight11,
             weight12,weight13,weight14,weight15,weight16,weight17,weight18,weight19,weight20,weight21]));
             setModel(treemodel)
            } catch (error) {
              console.log('Could not load model', error);
            }
          };
        // await tf.ready();
        // const modelJson = await require("./assets/models/model.json");
        // const modelWeight = await require("./assets/models/group1-shard.bin");
        // build=bundleResourceIO(modelJson,modelWeight);
        // const treemodel = await tf.loadLayersModel(build)
        // setModel(treemodel)
    getModel();
}, []);
const storedata=()=>{

}
const convertBase64ToTensor = async (base64) => {
    try {

      const uIntArray = Base64Binary.decode(base64);
      console.log('sucess')
      // decode a JPEG-encoded image to a 3D Tensor of dtype
      let decodedImage = decodeJpeg(uIntArray, 3);
      // reshape Tensor into a 4D array
      decodedImage= decodedImage.reshape([
        1,
        BITMAP_DIMENSION,
        BITMAP_DIMENSION,
        TENSORFLOW_CHANNEL,
      ]);
      startPrediction(model,decodedImage)
    } catch (error) {
      console.log('Could not convert base64 string to tesor', error);
    }
  };

  const startPrediction = async (model, tensor) => {
    try {
      // predict against the model
      let output = await model.predict(tensor);
      // return typed array
      output=  output.dataSync();
      console.log(output);
      if(output[0]==1){
        setTextshow('This is a Cedar')
      }else if(output[1]==1){
        setTextshow('This is cypress')
      }else if(output[2]==1){
        setTextshow('This is Palm')
      }
    } catch (error) {
      console.log('Error predicting from tesor image', error);
    }
  };

function deleteImage() {
    setSelectedImage(null)
    setTextshow('')
    setTime(0)
}

let openImagePickerAsync = async () => {
    //let permissionResult = await ImagePicker.requestCameraPermissionsAsync()
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync()
    if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true
    });
    if (pickerResult.cancelled === true) {
        return;
    }
    setSelectedImage({
        localUri: pickerResult.uri,
        width:pickerResult.width,
        height: pickerResult.height

    });
};


let openCamera = async () => {
    ImagePicker.requestCameraPermissionsAsync()
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        //aspect: [4, 3],
        quality: 1,
        base64: true

    })
    setSelectedImage({ localUri: result.uri });
};


const cropPicture = async (imageData) => {
    try {
      const {localUri, width, height} = imageData;
      const actions = [
        {
          resize: {
            width: BITMAP_DIMENSION,
            height: BITMAP_DIMENSION,
          },
        },
      ];
      const saveOptions = {
        compress: 1,
        format: ImageManipulator.SaveFormat.JPEG,
        base64:true
      };
      let x= await ImageManipulator.manipulateAsync(localUri, actions, saveOptions);
      convertBase64ToTensor(x.base64)
    } catch (error) {
      console.log('Could not crop & resize photo', error);
    }
  };





async function predict() {
    try {
        setTextshow(' LOADING...')

        // var start = new Date().getTime();
        console.log(' Load model...')
        await tf.ready();
        console.log('Uffect load model')
        let url=selectedImage.localUri
        cropPicture(selectedImage)
        // const base64 = await FileSystem.readAsStringAsync(selectedImage.localUri, { encoding: FileSystem.EncodingType.Base64 });
        // let base64String =await ImgToBase64.getBase64String(url)
        // const imgB64 = await FileSystem.read(selectedImage.localUri, "base64");
        // const imgB64 = await FileSystem.readAsStringAsync(selectedImage.localUri, {
        //     encoding: FileSystem.EncodingType.Base64,
        // });
        // const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
        // const raw = new Uint8Array(imgBuffer)  
        // const imageTensor = decodeJpeg(raw);
        // startPrediction(model,imageTensor)
        // const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
        // const raw = new Uint8Array(imgBuffer)
        // const imageTensor = decodeJpeg(raw);
        // convertBase64ToTensor(selectedImage.localUri)
        // const prediction = await model.classify(imageTensor);
        // var end = new Date().getTime();
        // var time = end - start;
        // setTextshow(JSON.stringify(prediction))
        // setTime(time)
    }catch (e) {
        setTextshow(e.toString())
        console.log(e)
    }
}
  return (
    <View style={styles.container}>
            {selectedImage == null ?<View>
                <Image  style={styles.logo} />
                {model == null ? <View style={{justifyContent : 'center' , alignContent : 'center'}}>
                        <Text style = {{fontStyle : 'normal', fontSize : 20, fontWeight : 'bold', marginBottom :10 , marginLeft:20}}> Loading model...</Text>
                        <ActivityIndicator size="large" color="#0000ff"  />
                    </View>
                    : <View style={styles.viewLoad}>
                        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                            <Text style={styles.buttonText}>Select image</Text>
                        </TouchableOpacity>
                        <Text style={styles.instructions}>
                            or
                        </Text>
                        <TouchableOpacity onPress={openCamera} style={styles.button}>
                            <Text style={styles.buttonText}>Open camera</Text>
                        </TouchableOpacity>
                    </View>}

            </View> : <View style={styles.viewLoad}>
                <Image
                    source={{ uri: selectedImage.localUri }}
                    style={styles.thumbnail}
                />
                <TouchableOpacity onPress={predict} style={styles.button}>
                    <Text style={styles.buttonText}>Predict image</Text>
                </TouchableOpacity>
                {/*<TouchableOpacity onPress={predictModellocal1} style={styles.button}>*/}
                {/*    <Text style={styles.buttonText}>Nhận diện local</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity onPress={deleteImage} style={styles.buttonDelete}>
                    <Text style={styles.buttonText}>Delete image</Text>
                </TouchableOpacity>
                <Text style={styles.textShow} >{textshow }</Text>
                {time === 0 ? <Text></Text> :<Text style={styles.textTime}>Time: {time} milliseconds</Text>}
            </View>
            }

        </View>
  );
}

const styles = StyleSheet.create({
  logo: {
      width: 200,
      height: 200,
      marginBottom: 20,
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
  },
  viewLoad:{
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
      marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      width: 200
  },
  buttonDelete: {
      marginTop: 5,
      padding: 10,
      borderRadius: 5,
      backgroundColor: 'red',
  },
  buttonText: {
      fontSize: 15,
      color: '#fff',
  },
  thumbnail: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
  },
  textShow: {
      color: 'red',
      marginTop:10,
      fontSize: 15,

  },
  textTime: {
      marginTop:10,
      fontWeight: 'bold'
  },
  btnNhandien:{
      marginTop:10
  }
});
