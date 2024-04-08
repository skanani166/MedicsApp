import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, Modal, TouchableOpacity } from "react-native";
import backImg from '../assets/back (1).png';
import done from '../assets/Done.png';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';


const SuccessLogin = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
            <View style={style.container}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>

                <Image source={backImg} style={{ width: 20, height: 20, marginRight: 300, marginTop: -20 }} />

                <View style={{ marginTop: 50 }}>
                    <View style={style.inputContainer} >
                        <Icon name="user" size={20} color="#474646" style={style.icon} />
                        <TextInput
                            style={style.input}
                            placeholder="Enter your name"
                            onChangeText={setname}
                            value={name}
                        />
                    </View>
                </View>

                <View style={style.inputContainer}>
                    <Icon name="envelope" size={20} color="#474646" style={style.icon} />
                    <TextInput
                        style={style.input}
                        placeholder="Enter your email Success"
                        onChangeText={setemail}
                        value={email}
                    />
                </View>

                <View style={style.inputContainer}>
                    <Icon name="lock" size={20} color="#474646" style={style.icon} />
                    <TextInput
                        style={style.input}
                        placeholder="Enter your password"
                        onChangeText={setpassword}
                        value={password}
                        secureTextEntry
                    />
                </View>

                <View style={style.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={style.checkbox}
                    />
                    <Text style={style.label}>l agree to the medidoc
                        <Text style={{ color: '#199A8E' }}> Terms of Service</Text>
                        <Text> and</Text>
                        <Text style={{ color: '#199A8E' }}> Privacy Policy</Text>
                    </Text>

                </View>


                <View style={{ width: 300 }}>
                    <Button title="Sign Up"
                        color={'#199A8E'}
                    />
                </View>
                <Text style={{ marginTop: 20 }}>Already have an account?
                    <Text style={{ color: '#199A8E' }}> Log in</Text>
                </Text>

            </View>
            <Modal
                transparent={true}
                visible={true}
            >
                <View>
                    <View style={style.box}>

                        <View>
                            <Image source={done} style={{marginLeft:100,marginTop:80,marginBottom:30}}  />
                            {/* <Text style={style.round}></Text> */}

                        </View>
                        <Text style={style.Success}>Success </Text>
                        <Text style={style.text}>Your account has been successfull</Text>
                        <Text style={{ marginLeft: 120, color: '#000000aa' }}>registered</Text>
                        <View style={{ width: 150, marginLeft: 80, marginTop: 20 }}>
                            <TouchableOpacity style={{ backgroundColor: '#199A8E', padding: 10, borderRadius: 50 }}>
                                <Text style={{ color: '#fff', marginLeft: 50, fontWeight: 'bold' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SuccessLogin

const style = StyleSheet.create({
    container: {
        marginTop: 60,
        alignItems: 'center',
        marginBottom: 50,

    },

    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        // alignSelf: 'center',
        marginTop: -5,
        marginLeft: 40,
        marginRight: -30
    },
    label: {
        marginTop: -10,
        marginLeft: 50,
        marginRight: 50,

    },
    inputContainer: {
        height: 40,
        width: 327,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#474646',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
    box: {
        backgroundColor: '#ffffff',
        marginTop: 200,
        marginLeft: 50,
        width: 300,
        height: 400,
        borderRadius: 20
    },
    // round: {
    //     width: 100,
    //     height: 100,
    //     marginTop:-100,
    //     marginLeft: 100,
    //     marginBottom: -480,
    //     borderRadius: 50,
    //     backgroundColor: "#F5F8FF"
    // },
    Success: {
        marginTop: 10,
        marginLeft: 120,
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        marginLeft: 40,
        color: '#000000aa'
    }
})
