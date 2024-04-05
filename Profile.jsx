import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ProfileStyle } from "./Css/ProfileStyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const handleLogOut = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
        navigation.navigate('Splash');
    };
    const handleAppointment = () => {
        navigation.navigate('Schedule')
    }
    const handleFAQs = () => {
        navigation.navigate('Message')
    }

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.image}></View>
                <Text style={styles.name}>Hello!  User name</Text>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Ionicons name="heart-half-outline" style={{ fontSize: 42, color: '#fff', margin: 30 }} />
                        <Text style={styles.up}>Heart Rate</Text>
                        <Text style={styles.down}>215bpm</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Ionicons name="flame-outline" style={{ fontSize: 42, color: '#fff', margin: 30 }} />
                        <Text style={styles.up}>Calories</Text>
                        <Text style={styles.down}>756cal</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Ionicons name="barbell-outline" style={{ fontSize: 42, color: '#fff', margin: 30 }} />
                        <Text style={styles.up}>Weight</Text>
                        <Text style={styles.down}>103lbs</Text>
                    </View>
                </View>
            </View>

            <View style={{marginTop: 40}}></View>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={handleAppointment}>
                    <Ionicons name="create-outline" style={styles.icon} />
                    <Text style={styles.option}>Appointment</Text>
                    <Ionicons name="chevron-forward-outline" style={styles.back} />
                </TouchableOpacity>
                <View style={styles.border}></View>

                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={handleFAQs}>
                    <Ionicons name="chatbubble-ellipses-outline" style={styles.icon} />
                    <Text style={styles.option}>FAQs</Text>
                    <Ionicons name="chevron-forward-outline" style={styles.back} />
                </TouchableOpacity>
                <View style={styles.border}></View>

                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={handleLogOut} >
                    <Ionicons name="log-out-outline" style={styles.icon} />
                    <Text style={styles.option}>Log Out</Text>
                    <Ionicons name="chevron-forward-outline" style={styles.back} />
                </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Log Out</Text>
                        <Text style={styles.modaldownText}>Are you sure to log out of your account?</Text>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={styles.modalButton}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create(ProfileStyle)
export default Profile