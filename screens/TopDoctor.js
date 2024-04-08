import React from "react";
import { View,Text,Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const TopDoctor = () => {
    return(
        <ScrollView>  
        <View>
         
        <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/back (1).png')} style={style.back}/>
        <Text style={style.name}>Top Doctor</Text>
        <TouchableOpacity>
        <Image source={require('../assets/dot1.png')} style={style.dot}/>
        </TouchableOpacity>
        </View>
        <View style={style.box}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/doctor3.png')} style={style.image} />
        <Text style={style.text}>Dr. Marcus Horizon</Text>
        <Text style={style.text1}>Chardiologist</Text>
        <Image source={require('../assets/navigation.png')} style={style.location}/>
            <Text style={style.away}>800m away</Text>
        </View>
        
        </View>

        <View style={style.box1}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/doctor4.png')} style={style.image} />
        <Text style={style.text}>Dr. Maria Elena</Text>
        <Text style={style.text2}>Psychologist</Text>
        <Image source={require('../assets/navigation.png')} style={style.location}/>
            <Text style={style.away}>800m away</Text>
        </View>
        </View>

        <View style={style.box1}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/doctor6.png')} style={style.image} />
        <Text style={style.text}>Dr. Stefi Jessi</Text>
        <Text style={style.text3}>Orthopedist</Text>
        <Image source={require('../assets/navigation.png')} style={style.location}/>
            <Text style={style.away}>800m away</Text>
        </View>
        </View>

        <View style={style.box1}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/doctor7.png.png')} style={style.image} />
        <Text style={style.text}>Dr. Gerty Cori</Text>
        <Text style={style.text4}>Psychologist</Text>
        <Image source={require('../assets/navigation.png')} style={style.location}/>
            <Text style={style.away}>800m away</Text>
        </View>
        </View>

        <View style={style.box1}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../assets/doctor1.png.png')} style={style.image} />
        <Text style={style.text}>Dr. Diandra</Text>
        <Text style={style.text5}>Psychologist</Text>
        <Image source={require('../assets/navigation.png')} style={style.location}/>
            <Text style={style.away}>800m away</Text>
        </View>
        </View>
       
        </View>
        </ScrollView>
    )
}
export default TopDoctor;

const style = StyleSheet.create({
    back:{
        width:20,
        height:20,
        marginLeft:20,
        marginTop:70
    },
    name:{
        marginTop:66,
        marginLeft:100,
        fontSize:20
    },
    dot:{
        width:20,
        height:20,
        marginLeft:115,
        marginTop:72
    },
    box:{
        width:350,
        height:130,
        borderWidth:1,
        marginLeft:20,
        marginTop:50,
        borderRadius:10,
        borderColor:'#ADADAD'
    },
    image:{
        width: 100,
         height: 110,
        borderRadius:10,
         marginTop:10,
         marginLeft:10
    },
    text:{
        marginLeft:20,
        marginTop:15,
        fontSize:18,
        fontWeight:'bold'
    },
    text1:{
        marginTop:45,
        marginLeft:-155,
        fontSize:12,
        color:'#ADADAD'
    },
    location:{
        width:15,
        height:15,
        marginLeft:-70,
        marginTop:95
    },
    away:{
        color:'#ADADAD',
        fontSize:12,
        marginLeft:10,
        marginTop:95
    },
    box1:{
        width:350,
        height:130,
        borderWidth:1,
        marginLeft:20,
        marginTop:20,
        borderRadius:10,
        borderColor:'#ADADAD'
    },
    text2:{
        marginTop:45,
        marginLeft:-125,
        fontSize:12,
        color:'#ADADAD'
    },
    text3:{
        marginTop:45,
        marginLeft:-115,
        fontSize:12,
        color:'#ADADAD'
    },
    text4:{
        marginTop:45,
        marginLeft:-110,
        fontSize:12,
        color:'#ADADAD'
    },
    text5:{
        marginTop:45,
        marginLeft:-90,
        fontSize:12,
        color:'#ADADAD'
    },
})

