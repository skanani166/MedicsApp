import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Animated, ScrollView,AsyncStorage } from "react-native";


const ModalPoup = ({ visible, children }) => {

    const [showModal, setshowModal] = useState(visible)
    const scaleValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        toggleModal()
    }, [visible])
    const toggleModal = () => {
        if (visible) {
            setshowModal(true)
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start()
        } else {
            setshowModal(false)
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start()
        }
    }
    return <Modal transparent visible={showModal}>
        <View style={styles.modal}>
            <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                {children}</Animated.View>
        </View>
    </Modal>
};
const MyCart = ({ navigation, route }) => {
   
  
    const [visible, setvisible] = useState(false)
    const [items, setItems] = useState([
        { id: 1, name: "OBH Combi", quantity: 1, price: 9.99 },
        { id: 2, name: "Betadine", quantity: 1, price: 7.99 }
    ]);

    const decrementQuantity = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const incrementQuantity = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const deleteItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxes = 1;
    const total = subtotal + taxes;

    return (
        <View>
           
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>navigation.goBack() }>
                    <Image source={require('../assets/back (1).png')} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.message}>My Cart</Text>
            </View>
             
            <ScrollView>
            {items.map(item => (
                <View key={item.id} style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/image1.png.png')} style={styles.image} />
                        <Text style={styles.tittle}>{item.name}</Text>
                        <View >
                            <TouchableOpacity onPress={() => deleteItem(item.id)}>
                                <Image source={require('../assets/delete.png.png')} style={styles.delete} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.ml}>{item.quantity}pcs</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
                            <Image source={require('../assets/minus.png.png')} style={styles.minus} />
                        </TouchableOpacity>
                        <Text style={styles.number}>{item.quantity}</Text>
                        <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
                            <Image source={require('../assets/plus.png.png')} style={styles.plus} />
                        </TouchableOpacity>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>
                </View>
            ))}
            </ScrollView>
            <View>
                <Text style={styles.text1}>Payment Detail</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.Subtotal}>Subtotal</Text>
                    <Text style={styles.price1}>${subtotal.toFixed(2)}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.Subtotal, { marginTop: 10 }]}>Taxes</Text>
                    <Text style={[styles.price1, { marginLeft: 270, marginTop: 10 }]}>${taxes.toFixed(2)}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.Subtotal, { marginTop: 10, fontWeight: 'bold' }]}>Total</Text>
                    <Text style={[styles.price1, { marginLeft: 270, marginTop: 10, fontWeight: 'bold' }]}>${total.toFixed(2)}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.text1}>Payment Method</Text>
                <View style={styles.box1}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/visa.png')} style={styles.visa} />
                        <TouchableOpacity>
                            <Text style={styles.text2}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            <View>
                <Text style={styles.total1}>Total</Text>
                <Text style={styles.priceTotal}>${total.toFixed(2)}</Text>
                <ModalPoup visible={visible}>
                    <View style={{ alignItems: 'center' }}>
                        <View >
                            <Image source={require('../assets/check.png')} style={{ height: 40, width: 40, marginTop: 10 }} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.success}>Payment Success</Text>
                        <Text style={styles.text5}>Your payment has been successful, you can have a consultation session with your trusted doctor</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button1} onPress={() => setvisible(false)}>
                            <Text style={styles.textbutton}>Back to Home</Text>
                        </TouchableOpacity>
                    </View>
                </ModalPoup>
                <TouchableOpacity onPress={() => setvisible(true)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Checkout</Text>
                    </View>
                </TouchableOpacity>
            </View>
          
        </View>
    )
}
export default MyCart;

const styles = StyleSheet.create({
    message: {
        fontSize: 25,
        marginTop: 70,
        marginLeft: 100,
        fontWeight: 'bold',

    },
    back: {
        width: 20,
        height: 20,
        marginLeft: 20,
        marginTop: 80,
    },
    box: {
        width: 350,
        height: 120,
        borderWidth: 1,
        borderColor: '#ADADAD',
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 40
    },
    image: {
        width: 150,
        height: 150,
        marginTop: -15,
        marginLeft: -15
    },
    tittle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 10
    },
    delete: {
        width: 20,
        height: 20,
        marginTop: 22,
        marginLeft: 80,



    },
    ml: {
        fontSize: 12,
        color: '#ADADAD',
        marginTop: -90,
        marginLeft: 148
    },
    minus: {
        width: 20,
        height: 20,
        marginLeft: 150,
        marginTop: 15
    },
    number: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    },
    plus: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginTop: 15
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
        marginLeft: 65
    },
    image1: {
        width: 80,
        height: 80,
        marginLeft: 20,
        marginTop: 20
    },
    text1: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    Subtotal: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 14,
        color: '#555555'
    },
    price1: {
        marginTop: 20,
        marginLeft: 250
    },
    box1: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderColor: "#ADADAD",
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 20
    },
    visa: {
        width: 50,
        height: 50,
        marginLeft: 20
    },
    text2: {
        fontSize: 12,
        color: '#ADADAD',
        marginTop: 15,
        marginLeft: 230
    },
    total1: {
        marginLeft: 20,
        marginTop: 110,
        fontSize: 14,
        color: '#ADADAD'
    },
    priceTotal: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    button: {
        width: 195,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#199A8E',
        marginTop: -50,
        marginLeft: 180,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    success: {
        marginLeft: 55,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    text5: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 16,
        color: '#A1A8B0'
    },
    button1: {
        backgroundColor: '#199A8E',
        borderRadius: 50,
        width: 180,
        height: 50,
        marginLeft: 50,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textbutton: {
        color: '#fff',
        fontWeight: 'bold'
    }
})