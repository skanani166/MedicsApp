import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DoctorStyle } from "./Css/DoctorStyle";
import { useNavigation } from "@react-navigation/native";

const DateAndTime = ({ doctor }) => {
    const navigation = useNavigation();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (date) => {
        setSelectedTime(date);
        hideTimePicker();
    };

    const handleAppointment = () => {
        navigation.navigate('Appointment', { doctor, selectedDate, selectedTime, consultationFee: doctor.consultation, adminFee: doctor.adminFee });
    };

    return (
        <View>
            <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
                <Text style={styles.selectText}>Select Date</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={showTimePicker} style={styles.timeButton}>
                <Text style={styles.selectText}>Select Time</Text>
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
                <View style={styles.button}>
                    <Text style={styles.bookingText}>Book Appointment</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(DoctorStyle);

export default DateAndTime;