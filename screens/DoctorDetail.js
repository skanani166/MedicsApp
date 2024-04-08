import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const DoctorDetail = ({ navigation }) => {
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

    const handleDateConfirm =  (date) => {
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
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/back (1).png')} style={style.back} />
                <Text style={style.name}>Doctor Detail</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/dot1.png')} style={style.dot} />
                </TouchableOpacity>
            </View>

            <View style={style.box}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/doctor3.png')} style={style.image} />
                    <Text style={style.text}>Dr. Marcus Horizon</Text>
                    <Text style={style.text1}>Chardiologist</Text>
                    <Image source={require('../assets/navigation.png')} style={style.location} />
                    <Text style={style.away}>800m away</Text>
                </View>
            </View>
            <View>
                <Text style={style.about}>About</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={style.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... </Text>
                <TouchableOpacity>
                    <Text style={style.read}>Read more</Text>
                </TouchableOpacity>
            </View>

         <View>


            <TouchableOpacity onPress={showDatePicker} style={style.button1}>
                <Text style={style.buttonText1}>Select Date</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={showTimePicker} style={style.button1}>
                <Text style={style.buttonText1}>Select Time</Text>
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

<TouchableOpacity onPress={() => navigation.navigate('Appointment', { selectedDate, selectedTime })} disabled={!selectedDate || !selectedTime}>

                <View style={style.button}>
                    <Text style={style.buttonText}>Book Appointment</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default DoctorDetail;

const style = StyleSheet.create({
    back: {
        width: 20,
        height: 20,
        marginLeft: 20,
        marginTop: 70
    },
    name: {
        marginTop: 66,
        marginLeft: 100,
        fontSize: 20
    },
    dot: {
        width: 20,
        height: 20,
        marginLeft: 115,
        marginTop: 72
    },
    box: {
        width: 350,
        height: 130,
        borderWidth: 1,
        marginLeft: 20,
        marginTop: 50,
        borderRadius: 10,
        borderColor: '#ADADAD'
    },
    image: {
        width: 100,
        height: 110,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10
    },
    text: {
        marginLeft: 20,
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    text1: {
        marginTop: 45,
        marginLeft: -155,
        fontSize: 12,
        color: '#ADADAD'
    },
    location: {
        width: 15,
        height: 15,
        marginLeft: -70,
        marginTop: 95
    },
    away: {
        color: '#ADADAD',
        fontSize: 12,
        marginLeft: 10,
        marginTop: 95
    },
    about: {
        marginTop: 30,
        fontSize: 18,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    text2: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 14,
        color: '#717784'
    },
    read: {
        marginLeft: -85,
        marginTop: 44,
        color: '#199A8E'
    },
    box1: {
        width: 50,
        height: 70,
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 10,
        borderColor: '#E8F3F1'
    },
    text3: {
        marginTop: 10,
        marginLeft: 15,
        fontSize: 10,
        color: '#A1A8B0'
    },
    date: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
    box2: {
        width: 100,
        height: 40,
        borderWidth: 1,
        marginTop: 50,
        marginLeft: 20,
        borderRadius: 15,
        borderColor: '#B3D3CE'
    },
    box3: {
        width: 100,
        height: 40,
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 15,
        borderColor: '#B3D3CE'
    },
    box4: {
        width: 100,
        height: 40,
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 15,
        borderColor: '#B3D3CE'
    },
    text4: {
        marginTop: 10,
        marginLeft: 18,
    },
    // button: {
    //     width: 270,
    //     height: 50,

    //     marginTop: 80,
    //     marginLeft: 60,
    //     borderRadius: 50,
    //     backgroundColor: '#199A8E'
    // },
    // buttonText: {
    //     marginTop: 15,
    //     marginLeft: 80,
    //     fontSize: 14,
    //     fontWeight: 'bold',
    //     color: '#FFFFFF'
    // },
    selected: {
        backgroundColor: '#199A8E', 
    },
    selectedText: {
        color: '#FFFFFF', 
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    time: {
        fontSize: 16,
    },
    button: {
        width: '80%',
        height: 50,
        marginTop: 50,
        marginLeft:40,
        backgroundColor: '#199A8E',
        // borderWidth:1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    button1:{
        width:'50%',
        height:50,
        borderWidth:1,
        marginTop: 50,
        marginLeft: 100,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText1:{

    }

})