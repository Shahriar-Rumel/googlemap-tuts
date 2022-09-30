import { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const TeamDetails = ({ setLoading }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#31006E',
      width: 140,
      paddingVertical: 10,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    buttonText: {
      color: 'white'
    },
    circleBottom: {
      width: 351,
      height: 351,
      borderRadius: 351,
      backgroundColor: '#31006E',
      position: 'absolute',
      bottom: -375,
      right: -200
    },
    circleTop: {
      width: 351,
      height: 351,
      borderRadius: 351,
      backgroundColor: 'orange',
      position: 'absolute',
      top: -375,
      left: -200
    },
    logoContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10
    },
    logo: {
      width: 60,
      height: 60,
      marginTop: -3
    },
    seperator: {
      color: '#7D7D7D',
      textAlign: 'center',
      marginTop: 15,
      fontSize: 10
    },
    teamName: {
      color: '#31006E',
      fontSize: 46,
      fontWeight: '900'
    },
    teamMember: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      borderColor: '#31006E',
      borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 10,
      marginBottom: 60
    },
    teamMemberName: {
      fontSize: 12,
      fontWeight: '400',
      color: '#31006E'
    }
  });
  return (
    <View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode={'contain'}
          source={require('./assets/logo.png')}
        />
        <Text style={styles.teamName}>Locatory</Text>
      </View>
      <Text style={styles.seperator}>Developed By</Text>
      <View style={styles.teamMember}>
        <Text style={styles.teamMemberName}>Fahmida Ara</Text>
        <Text style={styles.teamMemberName}>Shahriar Rumel</Text>
      </View>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setLoading(false)}
        >
          <Text style={styles.buttonText}>See Map</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.circleTop}></View>
      <View style={styles.circleBottom}></View>
    </View>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [marker, setMarker] = useState({
    latitude: 23.7338,
    longitude: 90.3929
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <TeamDetails setLoading={setLoading} />
      ) : (
        <>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 23.7338,
              longitude: 90.3929,
              latitudeDelta: 0.0012,
              longitudeDelta: 0.0021
            }}
            provider={PROVIDER_GOOGLE}
          >
            <Marker
              coordinate={marker}
              draggable={true}
              onDragStart={(e) => {
                console.log('Drag Start', e.nativeEvent.coordinate);
              }}
              onDragEnd={(e) => {
                setMarker({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude
                });
              }}
            >
              <Callout>
                <Text>It's a tooltip</Text>
              </Callout>
            </Marker>
          </MapView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setLoading(true)}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  button: {
    backgroundColor: '#31006E',
    width: 140,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    zIndex: 999,
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  buttonText: {
    color: 'white'
  }
});
