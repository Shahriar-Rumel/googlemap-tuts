   
   
   import { StyleSheet, View } from 'react-native';
    import MapView from 'react-native-maps';

    export default function App() {
      return (
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={{
            latitude:23.7338,
            longitude:90.3929,
            latitudeDelta:0.0012,
            longitudeDelta:0.0021
          }}/>
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