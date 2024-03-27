import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import AppLogo from "../assets/Slider/WhiteLogo.png"
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
    const navigation = useNavigation() 

    useEffect(() => {
        const timeout = setTimeout(navigateToHome, 3000)
        return () => clearTimeout(timeout)
    }, [])

    const navigateToHome = () => {
        navigation.navigate('Slider')
    }

    return(
        <View style={style.container}>
            <Image source={AppLogo}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#199A8E',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SplashScreen;