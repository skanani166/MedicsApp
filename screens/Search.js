import React from "react";
import { View, Image, Text, TextInput,StyleSheet } from "react-native";



const Search = () => {
    return(
    <View>
        <Image source={require('../assets/back (1).png')} style={{width:20,height:20,marginLeft:20,marginTop:70}}/>
        <View style={style.box}>
        <TextInput style={style.text}
        placeholder="Search doctor,drugs,articles..."
        />
        <Image source={require('../assets/search.png')} style={style.image}/>
        </View> 
    </View>
    )
}
export default Search;
const style = StyleSheet.create({
    box:{
        width:340,
        height:50,
        borderWidth:1,
        marginLeft:20,
        marginTop:20,
        borderRadius:50,
        borderColor:'#E8F3F1',
        backgroundColor:'#FBFBFB'
    },
    image:{
        height:20,
        width:20,
        marginLeft:20,
        marginTop:-25
    },
    text:{
        marginTop:10,
        marginLeft:60,
        color:'#ADADAD'
    }
})