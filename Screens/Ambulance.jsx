import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Ambulance = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Location permission not granted');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        };

        getLocation();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {location && (
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 21.269190,
                        longitude: 72.958649,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }} >
                    <Marker
                        coordinate={{
                            latitude: 21.269190,
                            longitude: 72.958649,
                        }}
                        title="Current Location"
                    />
                </MapView>
            )}
        </View>
    );
};

export default Ambulance;
