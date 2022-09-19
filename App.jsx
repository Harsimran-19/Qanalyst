// import React from 'react';
// import {
//   Alert,
//   Animated,
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   Text
// } from 'react-native';
// import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { NavigationContainer } from '@react-navigation/native';
// // import Map from "./src/screens/map"

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// export default function tabBar() {
//   const Screen = () =>{
//       <Map />
//   }
//   const _renderIcon = (routeName, selectedTab) => {
//     let icon = '';

//     switch (routeName) {
//       case 'title1':
//         icon = 'ios-home-outline';
//         break;
//       case 'title2':
//         icon = 'settings-outline';
//         break;
//     }

//     return (
//       <Ionicons
//         name={icon}
//         size={25}
//         color={routeName === selectedTab ? 'black' : 'gray'}
//       />
//     );
//   };
//   const renderTabBar = ({ routeName, selectedTab, navigate }) => {
//     return (
//       <TouchableOpacity
//         onPress={() => navigate(routeName)}
//         style={{
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         {_renderIcon(routeName, selectedTab)}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <NavigationContainer>
//         <CurvedBottomBar.Navigator
//           style={styles.bottomBar}
//           strokeWidth={0.5}
//           height={55}
//           circleWidth={55}
//           bgColor="white"
//           initialRouteName="title1"
//           borderTopLeftRight
//           renderCircle={({ selectedTab, navigate }) => (
//             <Animated.View style={styles.btnCircle}>
//               <TouchableOpacity
//                 style={{
//                   flex: 1,
//                   justifyContent: 'center',
//                 }}
//                 onPress={() => Alert.alert('Click Action')}>
//                 <Ionicons name={'apps-sharp'} color="gray" size={25} />
//               </TouchableOpacity>
//             </Animated.View>
//           )}
//           tabBar={renderTabBar}>
//           <CurvedBottomBar.Screen
//             name="title1"
//             position="LEFT"
//             component={HomeScreen}
            
//           />
//           <CurvedBottomBar.Screen
//             name="title2"
//             component={SettingsScreen}
//             position="RIGHT"
//           />
//         </CurvedBottomBar.Navigator>
//       </NavigationContainer>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   button: {
//     marginVertical: 5,
//   },
//   bottomBar: {},
//   btnCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 0.5,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 1,
//     bottom: 30,
//   },
//   imgCircle: {
//     width: 30,
//     height: 30,
//     tintColor: 'gray',
//   },
//   img: {
//     width: 30,
//     height: 30,
//   },
// });


// import Map from "./src/screens/map"
// import Login from "./src/screens/login"
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Map from "./src/screens/map"
// import Login from "./src/screens/login"
// import Profile from "./src/screens/profile"
// import Classifier from "./src/screens/classifier"
// // import Bottom from "./src/screens/bottom"

// const Stack  = createNativeStackNavigator();
// export default function App(){
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Login' >
//         <Stack.Screen name='Map' component={Map} options={{headerShown: false}} />
//         <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
//         <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}} />
//         {/* <Stack.Screen name='Bottom' component={Bottom} options={{headerShown: false}} /> */}
//         <Stack.Screen name='Classifier' component={Classifier} options={{headerShown: false}} />



//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Login from './src/screens/login';
import Profile from './src/screens/profile';
import Classifier from "./src/screens/classifier"
import Map from "./src/screens/map"
import Main from './src/screens/main';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#44ACA0"
      labelStyle={{ fontSize: 12 }}
      // style={{borderRadius: '50%'}}
      barStyle={{ backgroundColor: 'white' }}
    >
            <Tab.Screen
        name="Home"
        component={Login}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
            <Tab.Screen
        name="check"
        component={Main}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons  name="note-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={Classifier}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <View style={{backgroundColor: '#44ACA0', display: 'flex', alignSelf: 'center', padding: 25
            , position: 'relative' }} >
            <MaterialCommunityIcons style={{position: 'absolute', top: 8, left: 7}} name="camera" color={"white"} size={35} />
            </View>
          ),
        }}
        
      />
      <Tab.Screen
        name="location"
        component={Map}
        options={{
          // tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-maps" color={color} size={26} />
          ),
        }}
        
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          // tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
