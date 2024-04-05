import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { PharmacyStyle } from "./Css/PharmacyStyle";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MyCart = ({ route }) => {
    const navigation = useNavigation();
    const { pharmacy, totalPrice } = route.params;
    const [quantity, setQuantity] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleBooking = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#ddd', borderRadius: 10 }}>
                <Image source={pharmacy.image} style={styles.cartImg} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={[styles.name, { marginTop: 10 }]}>{pharmacy.name}</Text>
                    <Text style={styles.dosage}>{pharmacy.dosage}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 42, marginLeft: -114 }}>
                    <TouchableOpacity onPress={decrementQuantity}>
                        <Ionicons name="remove-circle-sharp" style={[styles.minus]} />
                    </TouchableOpacity>
                    <Text style={[styles.number]}>{quantity}</Text>
                    <TouchableOpacity onPress={incrementQuantity}>
                        <Ionicons name="add-circle-sharp" style={[styles.plus]} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.price, { marginTop: 62, marginLeft: 110 }]}>{(quantity * pharmacy.price).toFixed(2)}</Text>
            </View>
            <Text style={styles.about}>Payment Details</Text>
            <Text style={styles.payIn}>SubTotal</Text>
            <Text style={styles.fee}> {totalPrice}</Text>
            <Text style={styles.payIn}>Total</Text>
            <Text style={styles.total}>{totalPrice}</Text>
            <View style={styles.border}></View>

            <Text style={styles.about}>Payment Method</Text>
            <Text style={styles.visa}>VISA</Text>
            <Text style={styles.Total}>Total</Text>
            <Text style={styles.pay}>{totalPrice}</Text>

            <TouchableOpacity onPress={handleBooking}>
                <View style={[styles.booking, {marginTop: -50}]}>
                    <Text style={styles.bookingText}>Checkout</Text>
                </View>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Payment Successful!</Text>
                        <Text style={styles.modaldownText}>Your payment has been successful, you can have a consultation session with your trusted doctor</Text>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={styles.modalButton}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create(PharmacyStyle);
export default MyCart