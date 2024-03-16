import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


const Schedule = () => {
    return(
        <View>
            <View style={{flexDirection:'row'}}>
            <Text style={style.message}>Schedule</Text>
            <Image source={require('../assets/bell.png')} style={style.searchIcon}/>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={style.box}>
                <Text style={style.text}>Upcoming</Text>
            </View>
            <View style={style.box1}>
                <Text style={style.text1}>Completed</Text>
            </View>
            <View style={style.box1}>
                <Text style={style.text2}>Canceled</Text>
            </View>
          
        </View>
        <View style={style.box2}>
            <Image source={require('../assets/doctor3.png')} style={style.image} />
            <Text style={style.name}>Dr. Marcus Horizon</Text>
            <Text style={style.text3}>Chardiologist</Text>
            <Image source={require('../assets/calendar.png ')}/> 
        </View>
        </View>
    ) 
}
 export default Schedule;
 const style = StyleSheet.create({
    message:{
        fontSize:25,
        marginTop:80,
        marginLeft:20,
        fontWeight:'bold',
      
    },
    searchIcon:{
        width:20,
        height:20,
        marginLeft:230,
        marginTop:90,
        
    },
    box:{
        width:116,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        marginTop:50,
        borderRadius:10,  
        backgroundColor:'#199A8E'
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        color:'#FFFFFF',
        
       
    },
    box1:{
        width:116,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E8F3F1',
        marginTop:50,
        borderRadius:10
    },
    text1:{
        fontSize:16,
        fontWeight:'Regular',
        color:'#101623',
        
    },
    text2:{
        fontSize:16,
        fontWeight:'Regular',
        color:'#101623',
        
    },
    box2:{
        width:345,
        height:179,
        borderWidth:1,
        marginLeft:20,
        marginTop:40,
        borderRadius:10,
        borderColor:'#E8F3F1',
    },
    image:{
        width: 80,
         height: 80,
         borderRadius: 80/ 2,
         marginTop:20,
         marginLeft:250
    },
    name:{
        marginTop:-80,
        marginLeft:20,
        fontSize:18,
        fontWeight:'bold',
    },
    text3:{
        marginLeft:20,
        fontSize:12,
        color:'#ADADAD'
    }
 })