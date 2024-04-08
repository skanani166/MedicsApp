import React,{useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Message({navigation}){
    const [All, useAll] = useState(true)
    const [Group, useGroup] = useState(false)
    const [Private, usePrivate] = useState(false)
    return(
        <View>
        <View style={{flexDirection:'row'}}>
            <Text style={style.message}>Message</Text>
            <Image source={require('../assets/search1.png.png')} style={style.searchIcon}/>
        </View>
        <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {
                        useAll(true)
                        useGroup(false)
                        usePrivate(false)
                    }}>

                        <View style={All ? style.box : style.box1}>
                            <Text style={All ? style.btntext : style.btntext1}>All</Text>
                        </View>
                    </TouchableOpacity>
                  
                    
                    <TouchableOpacity onPress={() => {
                        useAll(false)
                        useGroup(true)
                        usePrivate(false)
                    }}>

                        <View style={Group ? style.box : style.box1}>
                            <Text style={Group ? style.btntext : style.btntext1}>Group</Text>
                        </View>
                    </TouchableOpacity>
                 
                   
                    <TouchableOpacity onPress={() => {
                        useAll(false)
                        useGroup(false)
                        usePrivate(true)
                    }}>

                        <View style={Private ? style.box : style.box1}>
                            <Text style={Private ? style.btntext : style.btntext1}>Private</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    {
                    All ?
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text>hello</Text>
                        </View> : null
                    }
                    {
                    Group ?
                        <View style={{alignItems:"center",justifyContent:'center'}}>
                            <Text>hello1</Text>
                        </View> : null
                    }
                    {
                    Private ?
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
            marginLeft: 5,
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