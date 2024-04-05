import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OtpVerification = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState('');
    const [userInput, setUserInput] = useState(['', '', '', '']);
    const [isValid, setIsValid] = useState(null);
    const [showOtpBox, setShowOtpBox] = useState(false);
    const refs = useRef([...Array(4)].map(() => React.createRef()));

    useEffect(() => {
        generateOtp();
    }, []);

    const generateOtp = () => {
        let generatedOtp = '';
        const characters = '0123456789';
        for (let i = 0; i < 4; i++) {
            generatedOtp += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setOtp(generatedOtp);
        setIsValid(null);
        setShowOtpBox(true);
        refs.current[0].current.focus();
    };

    const handleInputChange = (index, value) => {
        const updatedUserInput = [...userInput];
        updatedUserInput[index] = value;
        setUserInput(updatedUserInput);
        if (value !== '' && index < 3) {
            refs.current[index + 1].current.focus();
        }
    };

    const validateOtp = () => {
        const enteredOtp = userInput.join('');
        if (enteredOtp === otp) {
            Alert.alert('Valid OTP', 'Create Your New Password');
            setIsValid(true);
            navigation.navigate('CreatePassword');
        } else {
            setIsValid(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Verification Code</Text>
            <Text style={styles.subtitle}>Enter code that we have sent to your mobile</Text>
            {showOtpBox && (
                <View style={styles.otpBox}>
                    <Text style={styles.otp}>Your OTP is here :- </Text>
                    <Text style={styles.OTP}>{otp}</Text>
                </View>
            )}
            <View style={styles.otpContainer}>
                {userInput.map((value, index) => (
                    <TextInput
                        key={index}
                        style={styles.TextInput}
                        value={value}
                        onChangeText={(text) => handleInputChange(index, text)}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={refs.current[index]}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={validateOtp}>
                <Text style={styles.butttonText}>Verify</Text>
            </TouchableOpacity>
            {isValid === true && <Text style={[styles.otpText, {color: '#199f8a'}]}>Valid OTP</Text>}
            {isValid === false && <Text style={[styles.otpText, {color: 'red'}]}>Invalid OTP</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        color: '#000',
        marginTop: 70,
    },
    subtitle: {
        fontSize: 15,
        color: '#000',
        marginTop: 5,
        marginBottom: 5,
    },
    Text: {
        fontSize: 24,
        color: '#F5FCFF',
        marginTop: 200,
        fontWeight: 'bold',
        marginLeft: -190,
    },
    otpContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    TextInput: {
        height: 70,
        width: 80,
        backgroundColor: '#E5E7EB',
        borderRadius: 5,
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
        fontWeight: '500',
        alignSelf: 'center',
        marginRight: 8
    },
    buttonContainer: {
        width: '70%',
        height: 50,
        marginTop: 20,
        backgroundColor: '#199A8E',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    butttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    },
    otp: {
        color: '#000',
        fontSize: 14,
        marginTop: 20
    },
    OTP: {
        color: '#000',
        fontSize: 16,
        marginTop: 5,
        fontWeight: '500'
    },
    otpText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 5
    },
});

export default OtpVerification;