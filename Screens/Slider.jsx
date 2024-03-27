import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import logo from '../assets/Slider/ColorLogo.png'


const Slider = ({ navigation }) => {
    const [showRealApp, setShowRealApp] = useState(false);

    const slides = [
        {
            key: '1',
            text: 'Consult only with a doctor you trust',
            image: require('../assets/Slider/1.png'),
            backgroundColor: 'rgba(25,154,142, 0.6)'
        },
        {
            key: '2',
            text: 'Find a lot of specialist doctors',
            image: require('../assets/Slider/2.png'),
            backgroundColor: 'rgba(25,154,142, 0.6)'
        },
        {
            key: '3',
            text: 'Get connect our Online Consultation',
            image: require('../assets/Slider/3.png'),
            backgroundColor: 'rgba(25,154,142, 0.6)'
        },

    ];

    const onDone = () => {
        setShowRealApp(true);
    };
    const onSkip = () => {
        setShowRealApp(true);
    };

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

                    <TouchableOpacity>
                        <Button style={styles.btn} title='Started' color={'#199A8E'} onPress={() => navigation.navigate('Home')}/>
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
    btn: {
        width: '80%',
    },
});

export default Slider;