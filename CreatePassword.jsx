import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreatePassword = () => {
    const navigation = useNavigation();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
        if (!newPassword || !confirmPassword) {
            Alert.alert('Error', 'Please enter your new password');
            return;
        }
        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        Alert.alert('Success', 'Password reset successful');
        navigation.navigate('Home');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create New Password</Text>
            <Text style={styles.subtitle}>Create your new password to login</Text>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter New password"
                    placeholderTextColor='#808080'
                    secureTextEntry
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
            </View>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm New password"
                    placeholderTextColor='#808080'
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>

            <TouchableOpacity style={[styles.buttonContainer, { marginTop: 30 }]} onPress={handleResetPassword}>
                <Text style={styles.butttonText}>Reset Password</Text>
            </TouchableOpacity>
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
    label: {
        fontSize: 15,
        color: '#000',
        marginBottom: 5,
        marginTop: 20,
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
        marginLeft: 10,
    },
    buttonContainer: {
        width: '70%',
        height: 50,
        marginTop: 15,
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
    buttonText: {
        color: '#122636',
        fontWeight: 'bold',
    },
});

export default CreatePassword;