import { useEffect, useRef, useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, Button, Modal, Animated  } from 'react-native';



const ModalPoup = ({visible, children}) => {
   
    const [showModal, setshowModal] = useState(visible)
    const scaleValue = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        toggleModal()
    }, [visible])
    const toggleModal = () => {
        if(visible){
            setshowModal(true)
            Animated.spring(scaleValue,{
                toValue:1,
                duration:300,
                useNativeDriver: true,
            }).start()
        }else{
            setshowModal(false)
            Animated.timing(scaleValue,{
                toValue:0,
                duration:300,
                useNativeDriver:true
            }).start()
        }
    }
    return <Modal transparent visible={showModal}>
        <View style={style.modal}>
            <Animated.View style={[style.modalContainer, {transform:[{scale:scaleValue}]}]}>
                {children}</Animated.View>
        </View>
    </Modal>
};
const Appointment = ({navigation , route}) => {
    const { selectedDate, selectedTime } = route.params;
   
    const [visible, setvisible] = useState(false)
    return(
        <View>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>navigation.goBack() }>
        <Image source={require('../assets/back (1).png')} style={style.back}/>
        </TouchableOpacity>
        <Text style={style.name}>Appointment</Text>
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
            <Text style={style.date}>Date</Text>
            <TouchableOpacity>
            <Text style={style.text2}>Change</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection:"row" }}>
            <Image source={require('../assets/calendar1.png.png')} style={style.icon}/>
            <Text style={style.time}>{selectedDate ? selectedDate.toLocaleDateString() : 'N/A'}</Text>
            <Text style={style.time}> |  {selectedTime ? selectedTime.toLocaleTimeString() : 'N/A'}</Text>
        </View>
        </View>

        <View style={style.box1}>
        <View style={{flexDirection:'row'}}>
            <Text style={style.date}>Reason</Text>
            <TouchableOpacity>
            <Text style={style.text3}>Change</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/pen.png')} style={style.icon}/>
            <Text style={style.time}>Chest pain</Text>
        </View>
        </View>

        <View style={style.box2}>
        <View style={{flexDirection:'row'}}>
            <Text style={style.date}>Payment Detail</Text>
           
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={style.time1}>Consultation</Text>
            <Text style={style.rate}>$60.00</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={style.name1}>Admin Fee</Text>
            <Text style={style.rate1}>$01.00</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={style.name1}>Aditional Discount</Text>
            <Text style={style.rate2}>-</Text>

        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={style.total}>Total</Text>
            <Text style={style.rate3}>$61.00</Text>

        </View>
        </View>

        <View>
            <Text style={style.text4}>Payment Method</Text>
        </View>
        <View style={style.box3}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/visa.png')} style={style.image1}/>
            <TouchableOpacity>
            <Text style={style.change}>Change</Text>
            </TouchableOpacity>
            </View>
        </View>

        <View style={{flexDirection:'row'}}>
            <Text style={style.total1}>Total</Text>
            <Text style={style.Rs}>$ 61.00</Text>
            <ModalPoup visible={visible}>
                <View style={{alignItems:'center'}}>
                
                    
                    
                   
                
                    <View >
                        <Image source={require('../assets/check.png')} style={{height:40,width:40,marginTop:10}}/>
                    </View>
                </View>
                <View>
                    <Text style={style.success}>Payment Success</Text>
                    <Text style={style.text5}>Your payment has been successful, you can have a consultation session with your trusted doctor</Text>
                </View>
                <View>
                <TouchableOpacity style={style.button1} onPress={()=>setvisible(false)}>
                    <Text style={style.textbutton}>Continue</Text>
                </TouchableOpacity>
                </View>
            </ModalPoup>
            <View style={style.book}>
               
                <TouchableOpacity  onPress={() => setvisible(true)}>
                    <View style={style.button}>
                     <Text style={style.book}>Booking</Text>
                     </View>
                </TouchableOpacity>
          
           </View>
        </View>
        
        </View>
    )
}

export default Appointment;

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
        marginTop:30,
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
        width:345,
        height:80,
        borderWidth:1,
        marginTop:25,
        marginLeft:20,
        borderColor:'#E8F3F1'
    },
    date:{
        fontSize:18,
        fontWeight:'bold'
    },
    text2:{
        marginTop:2,
        marginLeft:265,
        color:'#ADADAD',
        fontSize:12
    },
    icon:{
        width:20,
        height:20,
        // borderRadius: 20/ 2,
        marginTop:15,
        marginLeft:10,
    },
    time:{
        fontSize:16,
        color:'#555555',
        marginTop:15,
        marginLeft:10
    },
    text3:{
        marginTop:2,
        marginLeft:240,
        color:'#ADADAD',
        fontSize:12
    },
    box2:{
        width:345,
        height:155,
        borderWidth:1,
        marginTop:25,
        marginLeft:20,
        borderColor:'#E8F3F1'
    },
    name1:{
        fontSize:16,
        color:'#A1A8B0',
        marginTop:5,
        marginLeft:10
    },
    time1:{
        fontSize:16,
        color:'#A1A8B0',
        marginTop:10,
        marginLeft:10
    },
    total:{
        fontSize:16,
        color:'#101623',
        fontWeight:'bold',
        marginTop:5,
        marginLeft:10
    },
    rate:{
        marginTop:12,
        marginLeft:200
    },
    rate1:{
        marginTop:8,
        marginLeft:215,
    },
    rate2:{
        marginTop:8,
        marginLeft:185,
    },
    rate3:{
        marginTop:6,
        marginLeft:255,
        color:'#199A8E'
    },
    text4:{
        marginTop:20,
        marginLeft:20,
        fontSize:16,
        fontWeight:'bold'
    },
    box3:{
        width:345,
        height:50,
        borderWidth:1,
        marginTop:20,
        marginLeft:20,
        borderRadius:10,
        borderColor:'#E8F3F1'
    },
    image1:{
        width:50,
        height:50,
        marginLeft:20
    },
    change:{
        marginTop:15,
        marginLeft:210,
        color:'#ADADAD',
        fontSize:12,
    },
    total1:{
        marginTop:20,
        marginLeft:20,
        fontSize:14,
        color:'#A1A8B0'
    },
    Rs:{
        marginTop:40,
        marginLeft:-30,
        fontSize:18,
        fontWeight:'bold'
    },
    button:{
        width:190,
        height:50,
        marginTop:20,
        marginLeft:95,
        borderRadius:50,
        backgroundColor:'#199A8E',
        alignItems:'center',
        justifyContent:'center'
    },
    book:{
       
        fontSize:16,
      
      
    },
    modal:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
    },
    modalContainer:{
        width:'80%',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:20,
        elevation:20,
    },
    success:{
        marginLeft:55,
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
    },
    text5:{
        marginLeft:10,
        marginTop:10,
        fontSize:16,
        color:'#A1A8B0'
    },
    button1:{
        backgroundColor: '#199A8E', 
        borderRadius: 50, 
        width: 180,
        height:50, 
        marginLeft:50, 
        marginTop: 15
    },
    textbutton:{
        color: '#fff', 
        marginLeft: 60,
        marginTop:15, 
        fontWeight: 'bold' 
    }
})