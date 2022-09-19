import {Image, View, TouchableOpacity, ActivityIndicator, StyleSheet, Text} from"react-native"

const Profile = () =>{

    return(
        <View style={styles.main}>
            <View style={styles.logo}>
           {/* <Text style={{fontSize: '30%', paddingRight: '5%', fontWeight: '700'}}>&lt;</Text>  */}
            <Image  source={require("../assets/logo.png")} />
            </View>
            <View style={styles.img}>
            <Image  source={require("../assets/profile.png")} />
            </View>
            <View style={styles.text}>
                <Text style={{fontSize: 20, paddingLeft: '24%'}}>Hi,</Text>
                <Text style={{fontSize: 30, fontWeight: '700', textAlign: 'center'}}>Nitin Aggarwal</Text>
            </View>
            {/* <View style={styles.Image}>
            <Image style={{display: 'flex', alignSelf: "center", marginTop: "10%"}} source={require("../assets/zto.png")} />
            <Image style={{display: 'flex', alignSelf: "center", marginTop: "3%"}} source={require("../assets/line.png")} />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        // display: "flex",
        // alignItems: "center"
        marginTop: '30%'
    },
    logo:{
        display: "flex",
        alignItems: "center",
        paddingLeft: "5%",
        flexDirection: 'row',
        justifyContent: "left"

    },
    img:{
        display: "flex",
        alignSelf: "center",
        paddingTop: "20%"
    },
    text:{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // textAlign: 'center'
        paddingTop: '10%'
    },
    Image:{

    }
})

export default Profile;