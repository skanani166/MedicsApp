import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { DoctorDetailStyle } from '../assets/CSS/DetailStyle';
import { useNavigation } from '@react-navigation/native';

const Appointment = ({ route }) => {
    const { doctor, selectedDate, selectedTime, consultationFee, adminFee } = route.params;
    const total = consultationFee + adminFee;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const handleBooking = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        navigation.navigate('Home')
    };

    return (
        <View>
            {doctor && (
                <View style={style.container}>
                    <View style={style.list}>
                        <Image source={doctor.image} style={style.img} />
                        <View>
                            <Text style={style.name}>{doctor.name}</Text>
                            <Text style={style.speciality}>{doctor.speciality}</Text>
                            <Text style={style.rate}>★ {doctor.rate}</Text>
                            <Text style={style.distance}>📍 {doctor.distance}</Text>
                        </View>
                    </View>
                    <Text style={style.date}>Date</Text>
                    <Text style={style.dateText}>{selectedDate ? selectedDate.toLocaleDateString() : 'N/A'}</Text>
                    <Text style={style.time}>Time</Text>
                    <Text style={style.timeText}>{selectedTime ? selectedTime.toLocaleTimeString() : 'N/A'}</Text>
                    <View style={style.border} ></View>

                    <Text style={style.reasn}>Reason</Text>
                    <Text style={style.reasonText}>{doctor.reason}</Text>
                    <View style={style.border} ></View>

                    <Text style={style.pay}>Payment Details</Text>
                    <Text style={style.payIn}>Consultation</Text>
                    <Text style={style.consultationText}> {doctor.consultation}</Text>
                    <Text style={style.payIn}>Admin Fee</Text>
                    <Text style={style.adminText}> {doctor.adminFee}</Text>
                    <Text style={style.payIn}>Total</Text>
                    <Text style={style.total}>{total}</Text>
                    <View style={style.border} ></View>
                </View>
            )}
            
            <Text style={style.payMethod}>Payment Method</Text>
            <Text style={style.visa}>VISA</Text>
            <Text style={style.Total}>Total</Text>
            <Text style={style.totl}>{total}</Text>

            <TouchableOpacity onPress={handleBooking}>
                <View style={style.booking}>
                    <Text style={style.buttonText}>Booking</Text>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <Text style={style.modalText}>Booking Successful!</Text>
                        <Text style={style.modaldownText}>Your payment has been successful, you can have a consultation session with your trusted doctor</Text>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={style.modalButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const style = StyleSheet.create(DoctorDetailStyle)
export default Appointment;