import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const BookAmbulance = ({ route }) => {
    const { address, name } = route.params;

    const initialRegion = {
        latitude: 21.269190,
        longitude: 72.958649,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                <Marker
                    coordinate={{ latitude: initialRegion.latitude, longitude: initialRegion.longitude }}
                    title={name}
                    description={address}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default BookAmbulance;