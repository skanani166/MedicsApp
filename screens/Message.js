import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Message = () => {
    return(
        <View>
        <View style={{flexDirection:'row'}}>
            <Text style={style.message}>Message</Text>
            <Image source={require('../assets/search1.png.png')} style={style.searchIcon}/>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={style.box}>
                <Text style={style.text}>All</Text>
            </View>
            <View style={style.box1}>
                <Text style={style.text1}>Group</Text>
            </View>
            <View style={style.box1}>
                <Text style={style.text2}>Private</Text>
            </View>
          
        </View>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/doctor3.png')} style={style.image} />
            <Text style={style.name}>Dr. Marcus Horizon</Text>
            <Text style={style.mess}>I don,t have any fever, but headchace...</Text>
            <Text style={style.time}>10.24</Text>
            <Image source={require('../assets/Group 139.png')} style={style.icon1} />
            
            </View>

            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/doctor4.png')} style={style.image} />
            <Text style={style.name}>Dr. Alysa Hana</Text>
            <Text  style={style.mess1}>Hello, How can i help you?</Text>
            <Text style={style.time1}>09:04</Text>
            <Image source={require('../assets/check-mark.png')} style={style.icon}/>
            </View>

            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/doctor6.png')} style={style.image} />
            <Text style={style.name}>Dr. Maria Elena</Text>
            <Text style={style.mess1}>Do you have fever?</Text>
            <Text style={style.time2}>08:57</Text>
            <Image source={require('../assets/check-mark.png')} style={style.icon}/>
            </View>
            <View>
           
            </View>
            
        </View>
    )
}

export default Message;
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
     
        marginLeft:20,
        marginTop:50,
        borderRadius:10,  
        backgroundColor:'#199A8E'
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        color:'#FFFFFF',
        marginTop:15,
        marginLeft:50
    },
    box1:{
        width:116,
        height:50,
      
        backgroundColor:'#E8F3F1',
        marginTop:50,
        borderRadius:10
    },
    text1:{
        fontSize:16,
        fontWeight:'Regular',
        color:'#101623',
        marginTop:15,
        marginLeft:35
    },
    text2:{
        fontSize:16,
        fontWeight:'Regular',
        color:'#101623',
        marginTop:15,
        marginLeft:32
    },
    image:{
        width: 80,
         height: 80,
         borderRadius: 80/ 2,
         marginTop:30,
         marginLeft:20
    },
    name:{
        marginTop:45,
        marginLeft:20,
        fontSize:16,
        fontWeight:'bold',
    },
    mess:{
        marginTop:70,
        marginLeft:-140,
        color:'#ADADAD',
        fontSize:12,
    },
    mess1:{
        marginTop:70,
        marginLeft:-108,
        color:'#ADADAD',
        fontSize:12,
    },
    time:{
        marginTop:47,
        marginLeft:15,
        color:'#555555',
        fontSize:12
    },
    time1:{
        marginTop:47,
        marginLeft:80,
        color:'#555555',
        fontSize:12
    },
    time2:{
        marginTop:47,
        marginLeft:115,
        color:'#555555',
        fontSize:12
    },
    icon:{
        width:20,
        height:20,
        marginTop:67,
        marginLeft:-20
    },
    icon1:{
        marginTop:67,
        marginLeft:-20
    }
})