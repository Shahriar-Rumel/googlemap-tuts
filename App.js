   
   
    import { useState } from 'react';
    import { StyleSheet, View,Text } from 'react-native';
    import MapView, { Callout, Marker } from 'react-native-maps';

    export default function App() {

      const [marker,setMarker] = useState({
        latitude:23.7338,
        longitude:90.3929
      });

      return (
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={{
            latitude:23.7338,
            longitude:90.3929,
            latitudeDelta:0.0012,
            longitudeDelta:0.0021
          }}>
            <Marker 
              coordinate = {marker} 
              draggable={true}
              onDragStart={(e)=>{
                console.log("Drag Start",e.nativeEvent.coordinate)
              }}
              onDragEnd={(e)=>{
               setMarker({
                latitude:e.nativeEvent.coordinate.latitude,
                longitude:e.nativeEvent.coordinate.longitude
               })
              }}
            >
                <Callout>
                  <Text>It's a tooltip</Text>
                </Callout>
             </Marker>
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