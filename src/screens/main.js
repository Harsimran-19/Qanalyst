import {View, StyleSheet, Text, TouchableOpacity, Image} from "react-native"
import React from 'react';

const Main = () =>{
    return(
        <View style={styles.main}>
            <View style={styles.logo}>
           {/* <Text style={{fontSize: '30%', paddingRight: '5%', fontWeight: '700'}}>&lt;</Text>  */}
            <Image  source={require("../assets/logo.png")} />
            </View>
            <View style={styles.text}>
                <Text style={{fontSize: 20, paddingLeft: '0%'}}>Hi,</Text>
                <Text style={{fontSize: 30, fontWeight: '700'}}>Nitin Aggarwal</Text>
            </View>
            <View style={styles.component}>
                <Image source={require("../../assets/map.png")} />
                <View style={styles.buttons} >
                <Text style={{fontWeight: '600'}}>Locate on maps</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{fontSize: 10}}>Show all</Text>
                </TouchableOpacity>
                </View>
            </View>
            <Text>These Geolocations are acurate upto 5m.</Text>
            <View>
                <Text>Recent</Text>
                <View>

                </View>
            </View>


        </View>

    )

}

const styles  = StyleSheet.create({
main:{
    flex: 1,
    overflow: 'y'
},
logo:{
    flex: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: "5%",
    flexDirection: 'row',
    justifyContent: "left"

},
text:{
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // textAlign: 'center'
    paddingTop: '5%',
    alignItems: 'flex-start'
},
component:{
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'white',
    maxWidth: '84%',
    maxHeight: '30%'
},
buttons:{
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between'
}

})

export default Main;