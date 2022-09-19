
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, CheckBox } from 'react-native';
import { useEffect, useState } from 'react';

const Login  = ({navigation}) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const [check, setCheck] = useState(false)


    const submit = async () =>{
        setCheck(true)
        const res = await fetch("https://d3e4-2409-4055-2e01-9818-2106-5cd3-7e03-75c2.ngrok.io/signin", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json text/html */*',
            },
            body:JSON.stringify({
                email: email,
                password: password
            })
        }).then(res=> res.json())
        .then( ({token})=> {
             setToken(token)
            //  setBtn(false)
            //  setIndi(false)
             
        }).catch(err=>{
            setCheck(false)
        })
        console.log(token)
    }

    // useEffect(()=>{
    //     fetch()
    // })
    return(
        <View style={styles.main}>
            <Image  source={require("../assets/logo.png")} />
            <View style={styles.inputs}>
            <TextInput onChangeText={(e)=> setEmail(e)} style={styles.email} placeholder='email' />
            <TextInput onChangeText={(e)=> setPassword(e)} style={styles.password} placeholder='password' />
            </View>
            <View style={styles.other}>
            {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
                <Text style={{color: '#727272', fontSize: 10, paddingRight: 80}}>Keep me Signed In</Text>
                <Text style={{color: '#727272', fontSize: 10, width: '30%', paddingLeft: '10%'}}>Forgotten your password?</Text>
            </View>
            <TouchableOpacity onPress={submit} style={styles.btn}>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 17}}>
                    SIGNIN
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("Classifier")} style={styles.signup}>
                <Text style={{fontSize: 15, color: '#434343'}}>
                    Not a Member? 
                </Text>  
                <Text style={{ color: '#434343', fontSize: 15, fontWeight: '600'}}>
                    Sign up.
                </Text>

            </TouchableOpacity>

        </View>

    )
}


const styles = StyleSheet.create({
main:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE'
},
inputs:{
    flex: 0
},
email:{
    paddingLeft:30,
    // paddingRight: 120,
    borderWidth: 1,
    // paddingVertical: 13,
    // borderRadius: 15,
    elevation: 10,
    // shadowColor: '#00000050',
    // shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 1,
    // shadowRadius: 10,
    // backgroundColor: 'white',
    fontWeight: "600",
    fontSize: 17,
    maxWidth: 300,
    width: 300,
    height: 45,
    marginTop: '10%',
    borderColor: "#A9A9A9"
},
password:{
    paddingLeft:30,
    // paddingRight: 120,
    borderWidth: 1,
    // paddingVertical: 13,
    // borderRadius: 15,
    elevation: 10,
    shadowColor: '#00000050',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 10,
    // backgroundColor: 'white',
    fontWeight: "600",
    fontSize: 17,
    maxWidth: 300,
    width: 300,
    height: 45,
    borderColor: "#A9A9A9",
    marginTop: 10,
    
},
btn:{
    alignSelf: 'center',
    backgroundColor: '#084A4B',
    paddingHorizontal: 29,
    // borderRadius: 20,
    paddingVertical: 8,
    elevation: 15,
    // shadowColor: '#00000050',
    // shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 1,
    // shadowRadius: 10,
    marginTop:10,
    borderWidth: 1,
    width: 300,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
other:{
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    paddingVertical: 10,
    justifyContent: 'center'
},
signup:{
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
}
})


export default Login;