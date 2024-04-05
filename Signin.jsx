import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from 'yup';
import * as SecureStore from 'expo-secure-store'

const SignIn = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [error, setError] = useState()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            firstName: yup.string().required('Required'),
            lastName: yup.string().required('Required'),
            email: yup.string().email('Invalid email address').required('Required'),
            password: yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),
        onSubmit: async (values) => {
            await SecureStore.setItemAsync('email', values.email)
            await SecureStore.setItemAsync('password', values.password)
            navigation.navigate('Home')
        }
    })

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                keyboardShouldPersistTaps="handled">
                <Text style={styles.title}>Create your account</Text>
                <Text style={styles.subtitle}>Start your healthy journey</Text>

                <Text style={styles.label}>FirstName</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        name="firstName"
                        value={formik.values.firstName}
                        placeholder="Enter first name"
                        onChangeText={formik.handleChange('firstName')}
                        style={styles.input} />
                </View>
                {formik.errors.firstName &&
                    <Text style={styles.error}>{formik.errors.firstName}</Text>}

                <Text style={styles.label}>LastName</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        name="lastName"
                        value={formik.values.lastName}
                        placeholder="Enter last name"
                        onChangeText={formik.handleChange('lastName')}
                        style={styles.input} />
                </View>
                {formik.errors.lastName &&
                    <Text style={styles.error}>{formik.errors.lastName}</Text>}

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

                <Text style={styles.terms}>By creating an account, you agree to our <Text style={styles.termsLink}>Terms & Conditions</Text></Text>

                <TouchableOpacity style={[styles.buttonContainer, { marginTop: 30 }]} onPress={formik.handleSubmit}>
                    <Text style={styles.butttonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.terms}>Already Have an account ?<Text style={styles.signInLink}> Log In</Text></Text>
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
        marginBottom: 10,
    },
    fieldContainer: {
        marginTop: 15,
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
});
export default SignIn;