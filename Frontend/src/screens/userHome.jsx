import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const App = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <TouchableOpacity  */}
                <Image
                    source={require('../assets/images/fire_rescue_logo.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.title}>FREM</Text>
            </View>

            <View style={styles.locationButtonContainer}>
                <Button title="Turn on Location" color="blue" onPress={() => { }} />
            </View>

            <TouchableOpacity style={styles.emergencyButton}>
                <Text style={styles.emergencyButtonText}>Emergency Call</Text>
            </TouchableOpacity>

            <Text style={styles.aroundYouText}>Around You</Text>

            <MapView style={styles.map} initialRegion={{
                latitude: location ? location.coords.latitude : 0,
                longitude: location ? location.coords.longitude : 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                <Marker coordinate={{ latitude: 12.9716, longitude: 77.5946 }} title="Location 1" />
                <Marker coordinate={{ latitude: 12.9720, longitude: 77.5950 }} title="Location 2" />
                <Marker coordinate={{ latitude: 12.9710, longitude: 77.5940 }} title="Location 3" />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Dark background color
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    menuButton: {
        marginRight: 20,
    },
    menuIcon: {
        width: 24,
        height: 24,
        tintColor: 'white',
    },
    logo: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    locationButtonContainer: {
        paddingHorizontal: 20,
    },
    emergencyButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        borderRadius: 5,
        marginHorizontal: 20,
        marginTop: 20,
    },
    emergencyButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    aroundYouText: {
        color: 'white',
        fontSize: 16,
        marginTop: 20,
        marginHorizontal: 20,
    },
    map: {
        flex: 1,
    },
});

export default App;