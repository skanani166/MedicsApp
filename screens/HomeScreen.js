import React from "react";
import { View, Text, StyleSheet, Image,TextInput, TouchableOpacity, ScrollView } from "react-native";



export default function HomeScreen({navigation}){
    return(
        <ScrollView>
       <View>
      
    <View style={{backgroundColor:'#F9F9F9'}}>

        <View style={{flexDirection:'row'}}>
        <Text style={style.text}>Find your desire health solution </Text>
        {/* <Text style={style.text1}>health solution</Text> */}
        <Image source={require('../assets/bell.png')} style={style.bell}/>
        

        </View>
        
        <View style={style.search}>
        <TextInput style={{marginTop:10,marginLeft:60,color:'#ADADAD'}}
        placeholder="Search doctor,drugs,articles..."
        />
        <Image source={require('../assets/search.png')} style={style.searchIcon}/>
        </View> 

        <View style={{flexDirection:'row'}}>
           <View style={style.box}>
                <Image source={require('../assets/Doctor.jpg')} style={{marginTop:10,marginLeft:13}}/>
                <Text style={style.doctor}>Doctor</Text>
           </View>

           <View style={style.box1}>
                <Image source={require('../assets/Pharmacy.jpg')} style={{marginTop:10,marginLeft:15}}/>
                <Text style={style.Pharmacy}>Pharmacy</Text>

           </View>
           <View style={style.box2}>
                <Image source={require('../assets/Hospital.jpg')} style={{marginTop:10,marginLeft:15}}/>
                <Text style={style.Hospital}>Hospital</Text>

           </View>

           <View style={style.box3}>
                <Image source={require('../assets/Ambulance.jpg')} style={{marginTop:10,marginLeft:15}}/>
                <Text style={style.Ambulance}>Ambulance</Text>

           </View>

        </View>

        <View style={style.box4}>
            <Text style={style.text2}>Early protection for </Text>
            <Text style={style.text3}>your family health </Text>
            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>Learn more</Text>
            </TouchableOpacity>
            <Image source={require('../assets/doctor1.png.png')} style={{width:120,height:120,marginTop:-100,marginLeft:220}}/>
            
        </View>

        <View style={{flexDirection:'row'}}>
            <Text style={style.topDoctor}>Top Doctor</Text>
            <Text style={style.SeeAll}>See all</Text>
        </View>

        <ScrollView horizontal={true}>
        <View style={{flexDirection:'row'}}>
        <View style={style.box5}>
            <Image source={require('../assets/doctor3.png')} style={style.image} />
            <Text style={style.name}>Dr.Marcus Horiza</Text>
            <Text style={style.boxText}>Chardiologist</Text>
            <Image source={require('../assets/Group 14 (1).png')} style={style.groupImage}/>
            <Image source={require('../assets/navigation.png')} style={style.location}/>
            <Text style={style.away}>800m away</Text>
        </View>

        <View style={style.box5}>
            <Image source={require('../assets/doctor4.png')} style={style.image} />
            <Text style={style.name}>Dr. Maria Elena</Text>
            <Text style={style.boxText}>Psychologist</Text>
            <Image source={require('../assets/Group 14 (2).png')} style={style.groupImage}/>
            <Image source={require('../assets/navigation.png')} style={style.location}/>
            <Text style={style.away}>1,5km away</Text>
        </View>

        <View style={style.box5}>
            <Image source={require('../assets/doctor6.png')} style={style.image} />
            <Text style={style.name}>Dr. Stevi Jessi</Text>
            <Text style={style.boxText}>Orthopedist</Text>
            <Image source={require('../assets/Group 14.png')} style={style.groupImage}/>
            <Image source={require('../assets/navigation.png')} style={style.location}/>
            <Text style={style.away}>2km away</Text>
        </View>

        </View>
        </ScrollView>

        <View style={{flexDirection:'row'}}>
            <Text style={style.text4}>Health article</Text>
            <Text style={style.see}>See all</Text>
        </View>
        
        <View style={style.box6}>
            <Image source={require('../assets/medicine.png')} style={style.medicine}/>
            <Text style={style.box6Text}>The 25 Healthiest Fruits You Can Eat, According to a Nutritionist</Text>
            <Text style={style.data}>Jun 10, 2021      5min read</Text>
        </View>
        
    </View>
    
    </View>
    </ScrollView>
    )
}

 const style = StyleSheet.create({
    text:{
        marginTop:80,
        marginLeft:20,
        marginRight:150,
        fontSize:26,
        fontWeight:'bold',
    },
    text1:{
        marginTop:5,
        marginLeft:20,
        fontSize:26,
        fontWeight:'bold',
    },
    bell:{
        width:25,
        height:25,
        marginTop:95,
        marginLeft:-25
    },
    search:{
        width:340,
        height:50,
        borderWidth:1,
        marginLeft:20,
        marginTop:20,
        borderRadius:50,
        borderColor:'#E8F3F1',
        backgroundColor:'#FBFBFB'
    },
    searchIcon:{
        height:20,
        width:20,
        marginLeft:20,
        marginTop:-25
    },
    box:{
        width:64,
        height:56,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        marginLeft:20,
        marginTop:20
    },
    doctor:{
        marginTop:25,
        fontSize:12,
        marginLeft:10,
        color:'#A1A8B0'
    },
    box1:{
        width:64,
        height:56,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        marginLeft:30,
        marginTop:20
    },
    Pharmacy:{
        marginTop:25,
        fontSize:12,
        marginLeft:5,
        color:'#A1A8B0'
    },
    box2:{
        width:64,
        height:56,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        marginLeft:30,
        marginTop:20
    },
    Hospital:{
        marginTop:25,
        fontSize:12,
        marginLeft:8,
        color:'#A1A8B0'
    },
    box3:{
        width:64,
        height:56,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        marginLeft:30,
        marginTop:20
    },
    Ambulance:{
        marginTop:25,
        fontSize:12,
        color:'#A1A8B0'
    },
    box4:{
        width:350,
        height:135,
        marginTop:50,
        marginLeft:20,
        backgroundColor:'#E8F3F1',
        borderRadius:10
    },
    text2:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:20,
        marginTop:20
    },
    text3:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:20,
        marginTop:0
    },
    button:{
        backgroundColor: '#199A8E', 
        borderRadius: 50, 
        width: 100,
        height:30, 
        marginLeft:20, 
        marginTop: 15
    },
    textButton:{
        color: '#fff', 
        marginLeft: 13,
        marginTop:4, 
        fontWeight: 'Semi bold' 
    },
    topDoctor:{
        marginTop:20,
        marginLeft:20,
        fontSize:16,
        fontWeight:'bold'
    },
    SeeAll:{
        marginTop:20,
        marginLeft:230,
        fontSize:14,
        color:'#199A8E',
        fontWeight:'Regular'
    },
    box5:{
        width:121,
        height:173,
        borderWidth:1,
        marginLeft:20,
        marginTop:20,
        borderRadius:10,
        borderColor:'#E8F3F1'
    },
    image:{
        width: 80,
         height: 80,
         borderRadius: 80/ 2,
         marginTop:15,
         marginLeft:20
    },
    name:{
        color:'#555555',
        marginLeft:4,
        marginTop:5,
        fontSize:14,
        fontWeight:'bold'
    },
    boxText:{
        color:'#ADADAD',
        fontSize:9,
        marginLeft:4
    },
    groupImage:{
        marginLeft:4,
        marginTop:10
    },
    location:{
        width:10,
        height:10,
        marginLeft:50,
        marginTop:-11
    },
    away:{
        color:'#ADADAD',
        fontSize:9,
        marginLeft:65,
        marginTop:-11
    },
    text4:{
        marginTop:20,
        marginLeft:20,
        fontSize:16,
        fontWeight:'bold'
    },
    see:{
        marginTop:20,
        marginLeft:210,
        fontSize:14,
        color:'#199A8E',
        fontWeight:'Regular'
    },
    box6:{
        width:350,
        height:67,
        borderWidth:1,
        marginTop:20,
        marginLeft:20,
        borderRadius:10,
        borderColor:'#E8F3F1'
    },
    medicine:{
        width:50,
        height:50,
        borderRadius:10,
        marginTop:8,
        marginLeft:10
    },
    box6Text:{
        marginTop:-50,
        fontSize:12,
        fontWeight:'bold',
        marginLeft:80
    },
    data:{
        color:'#ADADAD',
        fontSize:10,
        marginLeft:80,
        marginTop:5
    }
 })