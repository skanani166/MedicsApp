
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import icon from '../assets/left-arrow.png';
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';

const Addingshipping = () => {
    const navigation = useNavigation()

    const [name, setName] = useState('');
    const [add, setadd] = useState('');
    const [all, setall] = useState('');

    useEffect(() => {
        newdata()
    },[])


  
    const newdata = async () => {
        await SecureStore.setItemAsync("add", add);
        await SecureStore.setItemAsync("name", name);
        console.log("Address and name saved successfully");
    }

    return (

        <View style={{ backgroundColor: '#F9F9F9', height: 900 }}>
            <View style={{ backgroundColor: '#ffffff', }}>
                <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                    <Image
                        source={icon}
                        style={{ width: 18, height: 18, marginLeft: 10, marginTop: 50 }}
                    />
                </TouchableOpacity>
                <Text style={styles.header}>Adding Shipping Address</Text>
            </View>
            <View>
                <Text style={styles.add}>Add your proper Address</Text>
                <TextInput
                    value={name}
                    onChangeText={(username) => setName(username)}
                    placeholder="Full Name"
                    style={styles.textinput}

                />
                <TextInput
                    value={add}
                    onChangeText={(address) => setadd(address)}
                    placeholder="Add your address"
                    style={[styles.textinput, styles.multilinetext]}
                    multiline

                />

            </View>
            <View >

                <TouchableOpacity
                    style={styles.btn}
                    // mode = "contained"
                    onPress={() => {
                        // shippingadd()
                        // newdata(name,add)
                        // setName('')
                        // setadd('')
                        navigation.navigate('Checkout',{ add: add})
                        // navigation.navigate({routename : 'Checkout', add:add})
                        // navigation.navigate('shippingadd',{name:name ,add:add})
                    }}>

                    <Text style={styles.btn1}> SAVE ADDRESS </Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default Addingshipping;

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: 280,
        backgroundColor: '#285F71',
        marginLeft: 35,
        marginTop: 380,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn1: {
        fontSize: 18,
        fontWeight: '700',
        color: '#ffffff'
    },
    header: {
        marginLeft: 70,
        fontSize: 20,
        fontWeight: '700',
        color: '#285F71',
        marginTop: -20,
        paddingBottom: 20,
    },
    textinput: {
        // borderWidth: 1,
        padding: 0,
        height: 60,
        width: 335,
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 20,
        paddingLeft: 10,
        backgroundColor: '#ffffff',
    },
    add: {
        fontSize: 16,
        marginTop: 20,
        marginLeft: 30,
        fontWeight: '500',
        color: '#285F71'


    },
    multilinetext: {
        minHeight: 100
    }
})