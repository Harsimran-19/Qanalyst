import * as React from 'react';
import MapView, {Circle, Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import {  } from 'react-native-maps';

export default function Map() {

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, }}
            >
            <Marker
       coordinate={{  latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}}
        // image={{uri: 'https://in.element14.com/sharpie/1985857/permanent-marker-fine-tip-black/dp/3253131'}}
      pinColor="green"
    >

    </Marker>
    <Circle center={{latitude: 37.78825,
        longitude: -122.4324,}} radius={300}
         />
    </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});