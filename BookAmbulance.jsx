import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const BookAmbulance = ({ route }) => {
    const { address, name } = route.params;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const handleBooking = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        navigation.navigate('Home');
    };

    const initialRegion = {
        latitude: 21.269190,
        longitude: 72.958649,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={initialRegion}>
                <Marker
                    coordinate={{
                        latitude: initialRegion.latitude,
                        longitude: initialRegion.longitude,
                    }}
                    title={name}
                    description={address}
                    identifier={name}
                />
            </MapView>

            <TouchableOpacity onPress={handleBooking} style={styles.booking}>
                <Text style={styles.bookingText}>Confirm Location</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Confirm Location</Text>
                        <Text style={styles.modaldownText}>
                            Your location has been successful, you can have a consultation session with your trusted doctor
                        </Text>
                        <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    booking: {
        position: 'absolute',
        bottom: 5,
        width: '80%',
        height: 50,
        backgroundColor: '#199A8E',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookingText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '400',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 22,
    },
    modaldownText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
    },
    modalButton: {
        width: 120,
        height: 40,
        backgroundColor: '#199A8E',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlignVertical: 'center',
    },
});

export default BookAmbulance;