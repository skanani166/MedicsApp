import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";


export default function Schedule({navigation}){
    const [Upcoming, useUpcoming] = useState(true)
    const [Completed, useCompleted] = useState(false)
    const [Canceled, useCanceled] = useState(false)
    return(
        <View>
            <View style={{flexDirection:'row'}}>
            <Text style={style.message}>Schedule</Text>
            <Image source={require('../assets/bell.png')} style={style.searchIcon}/>
        </View>
        <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {
                        useUpcoming(true)
                        useCompleted(false)
                        useCanceled(false)
                    }}>

                        <View style={Upcoming ? style.box : style.box1}>
                            <Text style={Upcoming ? style.btntext : style.btntext1}>Upcoming</Text>
                        </View>
                    </TouchableOpacity>
                  
                    
                    <TouchableOpacity onPress={() => {
                        useUpcoming(false)
                        useCompleted(true)
                        useCanceled(false)
                    }}>

                        <View style={Completed ? style.box : style.box1}>
                            <Text style={Completed ? style.btntext : style.btntext1}>Completed</Text>
                        </View>
                    </TouchableOpacity>
                 
                   
                    <TouchableOpacity onPress={() => {
                        useUpcoming(false)
                        useCompleted(false)
                        useCanceled(true)
                    }}>

                        <View style={Canceled ? style.box : style.box1}>
                            <Text style={Canceled ? style.btntext : style.btntext1}>Canceled</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    {
                    Upcoming ?
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text>hello</Text>
                        </View> : null
                    }
                    {
                    Completed ?
                        <View style={{alignItems:"center",justifyContent:'center'}}>
                            <Text>hello1</Text>
                        </View> : null
                    }
                    {
                    Canceled ?
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text>hello2</Text>
                        </View> : null
                    }
       </View>
    ) 
}
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
    box: {
        height: 40,
        width: 110,
        backgroundColor: '#199A8E',
        marginLeft: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },

    box1: {
        height: 40,
        width: 110,
        backgroundColor: '#ffffff',
        marginLeft: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    btntext: {
        color: '#ffffff',
    },
    btntext1: {
        color: '#000000',
    },
    
 })