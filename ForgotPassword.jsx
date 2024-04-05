import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [identifierType, setIdentifierType] = useState('email');
    const [identifier, setIdentifier] = useState('');

    const handleSendOTP = () => {
        const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
        const phonePattern = /^[0-9]{10}$/;
        if (!identifier) {
            Alert.alert('Error', 'Please enter your email address or phone number.');
            return;
        }

        if (identifierType === 'email' && !emailPattern.test(identifier)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }

        if (identifierType === 'phone' && !phonePattern.test(identifier)) {
            Alert.alert('Error', 'Please enter a valid phone number.');
            return;
        }
        navigation.navigate('OtpVerification', { identifierType, identifier });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Your Password?</Text>
            <Text style={styles.subtitle}>Enter your email or your phone number, we will send you confirmation code</Text>
            <View style={styles.selectorContainer}>
                <TouchableOpacity
                    style={[styles.selectorButton, identifierType === 'email' && styles.selectedButton]}
                    onPress={() => setIdentifierType('email')}
                >
                    <Text style={styles.selectorButtonText}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.selectorButton, identifierType === 'phone' && styles.selectedButton]}
                    onPress={() => setIdentifierType('phone')}
                >
                    <Text style={styles.selectorButtonText}>Phone</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>{identifierType === 'email' ? 'Email' : 'Phone number'}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={identifierType === 'email' ? 'Enter your E-mail' : 'Enter your Phone number'}
                    placeholderTextColor="#878787"
                    value={identifier}
                    onChangeText={setIdentifier}
                    keyboardType={'email' ? 'default' : 'numeric'}
                />
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSendOTP}>
                <Text style={styles.butttonText}>Send OTP</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
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
    label: {
        fontSize: 15,
        color: '#000',
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E7EB',
        borderRadius: 5,
        borderLeftColor: '#199A8E',
        borderLeftWidth: 5,
        paddingLeft: 5,
        height: 40,
    },
    input: {
        flex: 1,
        color: '#000',
        fontSize: 12,
        marginLeft: 10,
    },
    selectorContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
        alignSelf: 'center',
    },
    selectorButton: {
        backgroundColor: '#199a8e99',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginRight: 10,
        color: '#000'
    },
    selectedButton: {
        backgroundColor: '#199A8E',
        alignItems: 'center',
    },
    selectorButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '70%',
        height: 50,
        marginTop: 25,
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
});

export default ForgotPassword;