import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DoctorStyle } from './Css/DoctorStyle';

const Appointment = ({ route }) => {
    const { doctor, selectedDate, selectedTime } = route.params;
    const navigation = useNavigation();
    const total = doctor ? doctor.consultation + doctor.adminFee : 0;
    const [modalVisible, setModalVisible] = useState(false);

    const handleBooking = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        navigation.navigate('Home');
    };

    return (
        <View>
            {doctor ? (
                <View style={styles.container}>
                    <View style={styles.list}>
                        <Image source={doctor.image} style={styles.img} />
                        <View>
                            <Text style={styles.name}>{doctor.name}</Text>
                            <Text style={styles.speciality}>{doctor.speciality || doctor.specialist}</Text>
                            <Text style={styles.rate}>★ {doctor.rate}</Text>
                            <Text style={styles.distance}>📍{doctor.distance} </Text>
                        </View>
                    </View>
                    <Text style={styles.about}>Date</Text>
                    <Text style={styles.datetime}>{selectedDate ? selectedDate.toLocaleDateString() : 'N/A'}</Text>
                    <Text style={styles.about}>Time</Text>
                    <Text style={[styles.datetime, { marginBottom: 10 }]}>{selectedTime ? selectedTime.toLocaleTimeString() : 'N/A'}</Text>
                    <View style={styles.border}></View>

                    <Text style={styles.about}>Reason</Text>
                    <Text style={[styles.reason, { marginBottom: 10 }]}>{doctor.reason}</Text>
                    <View style={styles.border}></View>

                    <Text style={styles.about}>Payment Details</Text>
                    <Text style={styles.payIn}>Consultation</Text>
                    <Text style={styles.fee}> {doctor.consultation}</Text>
                    <Text style={styles.payIn}>Admin Fee</Text>
                    <Text style={styles.fee}> {doctor.adminFee}</Text>
                    <Text style={styles.payIn}>Total</Text>
                    <Text style={styles.total}>{total}</Text>
                    <View style={styles.border}></View>

                    <Text style={styles.about}>Payment Method</Text>
                    <Text style={styles.visa}>VISA</Text>
                    <Text style={styles.Total}>Total</Text>
                    <Text style={styles.pay}>{total}</Text>
                </View>
            ) : (
                <Text>Error: Doctor not found</Text>
            )}

            <TouchableOpacity onPress={handleBooking}>
                <View style={styles.booking}>
                    <Text style={styles.bookingText}>Booking</Text>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Booking Successful!</Text>
                        <Text style={styles.modaldownText}>Your payment has been successful, you can have a consultation session with your trusted doctor</Text>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={styles.modalButton}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create(DoctorStyle);
export default Appointment;