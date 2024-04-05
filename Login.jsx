import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as SecureStore from 'expo-secure-store'

const LogIn = () => {
    const navigation = useNavigation();
    
    useEffect(() => {
        getStoreData()
    }, [])

    const getStoreData = async () => {
        let email = await SecureStore.getItemAsync('email')
        let password = await SecureStore.getItemAsync('password')
        formik.setFieldValue('email', email)
        formik.setFieldValue('password', password)
    }

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    const handleSignin = () => {
        navigation.navigate('Signin');
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string().email('Invalid email address').required('Required'),
            password: yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),

        onSubmit: (values) => {  
            navigation.navigate('Home')
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Login to continue</Text>

                <Text style={styles.label}>Email Id</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        name="email"
                        value={formik.values.email}
                        placeholder="Enter email"
                        onChangeText={formik.handleChange('email')}
                        style={styles.input} />
                </View>
                {formik.errors.email &&
                    <Text style={styles.error}>{formik.errors.email}</Text>}

                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        name="password"
                        value={formik.values.password}
                        placeholder="Enter password"
                        onChangeText={formik.handleChange('password')}
                        style={styles.input}
                        secureTextEntry />
                </View>
                {formik.errors.password &&
                    <Text style={styles.error}>{formik.errors.password}</Text>}

                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, { marginTop: 30 }]} onPress={formik.handleSubmit}>
                    <Text style={styles.butttonText}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignin}>
                    <Text style={styles.terms}>Don't Have an account ?<Text style={styles.signInLink}> Sign In</Text></Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
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
    error: {
        color: 'red',
        marginTop: 5,
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
    forgotPasswordText: {
        color: 'red',
        textAlign: 'right',
        marginTop: 5
    },
    terms: {
        alignSelf: 'center',
        color: '#000',
        marginTop: 10,
    },
    termsLink: {
        color: '#199f8a',
        textDecorationLine: 'underline',
    },
    signInLink: {
        color: '#199f8a',
        fontSize: 18,
        fontWeight: '500'
    },
});

export default LogIn;