import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import logo from './assets/Image/ColorLogo.png'


const Slider = ({ navigation }) => {
    const [showRealApp, setShowRealApp] = useState(false);

    const slides = [
        {
            key: '1',
            text: 'Consult only with a doctor you trust',
            image: require('./assets/Image/1.png'),
            backgroundColor: 'rgba(25,154,142, 0.6)'
        },
        {
            key: '2',
            text: 'Find a lot of specialist doctors',
            image: require('./assets/Image/2.png'),
            backgroundColor: 'rgba(25,154,142, 0.6)'
        },
        {
            key: '3',
            text: 'Get connect our Online Consultation',
            image: require('./assets/Image/3.png'),
            backgroundColor: 'rgba(25,154,142, 0.6)'
        },

    ];

    const onDone = () => {
        setShowRealApp(true);
    };
    const onSkip = () => {
        setShowRealApp(true);
    };

    const handleLogin = () => {
        navigation.navigate('Login')
    }
    const handleSignin = () => [
        navigation.navigate('Signin')
    ]

    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <Image source={item.image} />
                <View style={styles.bg}></View>
                <Text style={styles.text}> {item.text} </Text>
            </View>
        );
    };

    return (
        <>
            {showRealApp ? (
                <View style={styles.container}>
                    <Image source={logo} />
                    <Text style={styles.title}>Let's get started! </Text>
                    <Text style={styles.paragraph}>Login to enjoy the features we have provided, and stay healthy! </Text>

                    <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
                        <Text style={styles.butttonText}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleSignin}>
                        <Text style={styles.butttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <AppIntroSlider
                    data={slides}
                    renderItem={RenderItem}
                    onDone={onDone}
                    showSkipButton={true}
                    onSkip={onSkip}
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    },
    paragraph: {
        marginTop: 10,
        marginBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    text: {
        padding: 20,
        fontSize: 34,
        fontWeight: '700',
        textAlign: 'center',
        color: '#fff',
        marginTop: -400,
    },
    image: {
        marginTop: 200
    },
    buttonContainer: {
        width: '50%',
        height: 50,
        marginTop: 10,
        backgroundColor: '#199A8E',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    butttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },
});

export default Slider;