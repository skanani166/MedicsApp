import react, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, SafeAreaView ,ScrollView} from 'react-native';
import icon from '../assets/left-arrow.png'
import card from '../assets/Card.png';
import card1 from '../assets/Card 2.png'
import CheckBox from "react-native-check-box";
import plus from '../assets/Shape.png'
import helpoutline from '../assets/help_outline.png'

// import { SafeAreaView } from "react-native-safe-area-context";


const Paymentcard = ({ navigation }) => {
    const transparent = "rgba(0,0,0,0.5)"
    const [openmodal, setopenmodal] = useState(false)
    const [isSelected, setSelection] = useState(false);
    const [ischecked, setischecked] = useState(false)
    const [ischeck, setischeck] = useState(false)
    const [tranform, settransform] = useState(false)



    function rendermodal() {
        return (
            
            <Modal visible={openmodal} animationType="slide" transparent={true}>
                <ScrollView style={{height:800}}>
                <View style={{ flex: 1, backgroundColor: transparent }}>

                    <View style={{ backgroundColor: '#F9F9F9', padding: 15, width: '99%', borderTopLeftRadius:30,borderTopRightRadius:30, marginTop: 250, height: 500 }}>

                        <TouchableOpacity onPress={() => setopenmodal(false)}>
                            <View style={{ height: 8, width: 60, backgroundColor: '#9B9B9B', marginLeft: 130, marginBottom: 18, borderRadius: 50 }}></View>
                        </TouchableOpacity>
                        <Text style={styles.header1}>Add new card</Text>
                        <TextInput
                            placeholder="Name on card"
                            style={{ height: 50, width: 325, backgroundColor: 'white', marginTop: 20, paddingLeft: 20 }}
                        />
                        <TextInput

                            value={tranform}
                            onChangeText={(addnewpage) => settransform(addnewpage)}
                            placeholder="card number"
                            style={{ height: 50, width: 325, backgroundColor: 'white', marginTop: 20, paddingLeft: 20 }}
                        />
                        <TextInput
                            placeholder="Expire Date"
                            style={{ height: 50, width: 325, backgroundColor: 'white', marginTop: 20, paddingLeft: 20 }}
                        />
                        <View>
                            {/* <Image source={helpoutline}/> */}
                            <TextInput
                                placeholder="CVV"
                                style={{ height: 50, width: 325, backgroundColor: 'white', marginTop: 20, paddingLeft: 20 }}

                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                style={{ marginLeft: 15, marginTop: 18 }}
                                isSelected={isSelected}
                                checkBoxColor="#285F71"
                                onPress={() => setSelection(!isSelected)}
                            />

                            <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 10 }}>Set as default payment method</Text>
                        </View>
                        <TouchableOpacity style={styles.btnadd} onPress={() => navigation.navigate('Checkout',{tranform:tranform})}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#ffffff' }}>ADD CARD</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                </ScrollView>
            </Modal>
           
        )
    }


    return (
        <View style={{ backgroundColor: '#F9F9F9', height: 800 }}>
            <View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                        <Image
                            source={icon}
                            style={styles.icons}
                        />
                    </TouchableOpacity>
                    <Text style={styles.header}>Payment Methods</Text>
                </View>
            </View>
            <Text style={{ color: '#285F71', fontSize: 17, fontWeight: '700', marginLeft: 15, marginTop: 15 }}>Your Payment Cards</Text>
            <Image source={card}
                style={{ width: 330, height: 220, marginLeft: 13 }}
            />
            <View style={{ flexDirection: 'row' }}>

                <CheckBox
                    ischecked={ischecked}
                    onPress={() => setischecked(!ischecked)}
                    checkBoxColor="#285F71"
                    style={{ marginLeft: 25, marginTop: 10 }}
                />

                <Text style={{ marginTop: 12, marginLeft: 10 }}>Use as default payment method</Text>
            </View>
            <Image source={card1}
                style={{ width: 330, height: 220, marginLeft: 13 }}
            />
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    ischeck={ischeck}
                    onPress={() => setischeck(!ischeck)}
                    checkBoxColor="#285F71"
                    style={{ marginLeft: 25, marginTop: 10 }}
                />
                <Text style={{ marginTop: 12, marginLeft: 10 }}>Use as default payment method</Text>
            </View>


            <TouchableOpacity>
                <View>
                    <Text style={styles.btn}></Text>
                    <TouchableOpacity onPress={() => setopenmodal(true)} >
                        <Image
                            source={plus}
                            style={{ width: 18, height: 18, marginLeft: 306, marginTop: -34 }}
                        />
                    </TouchableOpacity>
                    {rendermodal()}
                </View>
            </TouchableOpacity>

        </View>
    )

}
export default Paymentcard


const styles = StyleSheet.create({
    box: {
        backgroundColor: '#ffffff',
        height: 100,
        width: 350,
        flexDirection: 'row'
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        color: '#285F71',
        marginLeft: 50,
        marginTop: 55,
        // flexDirection:'row'
    },
    icons: {
        marginTop: 60,
        marginLeft: 15,
        height: 15,
        width: 15
        // flexDirection:'row'
    },
    btn: {
        // borderWidth:1,
        height: 50,
        width: 50,
        marginLeft: 290,
        marginTop: 20,
        borderRadius: 50,
        backgroundColor: '#285F71'

    },
    header1: {
        fontSize: 20,
        fontWeight: '700',
        color: '#285F71',
        marginLeft: 85,
    },
    btnadd: {
        height: 50,
        width: 300,
        backgroundColor: '#285F71',
        borderRadius: 50,
        marginLeft: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }

})