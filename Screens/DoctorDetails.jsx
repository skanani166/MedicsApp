import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native';
import { DoctorDetailStyle } from '../assets/CSS/DetailStyle';
import { CardioDoctorData, CovidDoctorData, DentalDoctorData, GeneralDoctorData, LungsDoctorData, PsychoDoctorData, SurgeonDoctorData } from '../Data';


const DoctorDetail = ({ route }) => {
    const { doctorId } = route.params;

    const findDoctorById = (doctorId) => {
        let doctor = null;
        const doctorData = {
            General: GeneralDoctorData.General,
            Lungs: LungsDoctorData.Lungs,
            Dental: DentalDoctorData.Dental,
            Covid: CovidDoctorData.Covid,
            Psycho: PsychoDoctorData.Psycho,
            Surgeon: SurgeonDoctorData.Surgeon,
            Cardio: CardioDoctorData.Cardio
        };

        Object.values(doctorData).forEach(category => {
            const foundDoctor = category.find(doctor => doctor.id === doctorId);
            if (foundDoctor) {
                doctor = foundDoctor;
            }
        });
        return doctor;
    };

    const doctor = findDoctorById(doctorId);
    if (!doctor) {
        return (
            <View>
                <Text>Error: Doctor not found.</Text>
            </View>
        );
    }

    const navigation = useNavigation();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleDateConfirm = (date) => {
        setSelectedDate(date)
        hideDatePicker()
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true)
    }

    const hideTimePicker = () => {
        setTimePickerVisibility(false)
    }

    const handleTimeConfirm = (date) => {
        setSelectedTime(date)
        hideTimePicker()
    }

    const handleAppointment = () => {
        navigation.navigate('Appointment', { doctor, selectedDate, selectedTime, consultationFee: doctor.consultation, adminFee: doctor.adminFee });
    };

    return (
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
            <Text style={style.about}>About</Text>
            <Text style={style.aboutText}>{doctor.about}</Text>
            <Text style={style.reason}>Reason</Text>
            <Text style={style.reasonText}>{doctor.reason}</Text>
            <Text style={style.consultation}>Consultation</Text>
            <Text style={style.consultationText}> {doctor.consultation}</Text>
            <Text style={style.admin}>Admin Fee</Text>
            <Text style={style.adminText}> {doctor.adminFee}</Text>

            <View>
                <TouchableOpacity onPress={showDatePicker} style={style.selectbutton1}>
                    <Text style={style.selectText}>Select Date</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={showTimePicker} style={style.selectbutton2}>
                    <Text style={style.selectText}>Select Time</Text>
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleTimeConfirm}
                    onCancel={hideTimePicker}
                />
                <TouchableOpacity onPress={handleAppointment} disabled={!selectedDate || !selectedTime}>
                    <View style={style.button}>
                        <Text style={style.buttonText}>Book Appointment</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create(DoctorDetailStyle)
export default DoctorDetail;