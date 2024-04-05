import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { HospitalStyle } from "./Css/HospitalStyle";
import { useNavigation } from "@react-navigation/native";

const HospitalDetail = ({ route }) => {
    const { hospital } = route.params;
    const navigation = useNavigation()
    const handleBookAmbulance = () => {
        navigation.navigate('BookAmbulance', {address: hospital.address, name: hospital.name})
    }

    return (
        <View style={styles.container}>
            <Image source={hospital.image} style={styles.img} />
            <Text style={styles.name}>{hospital.name}</Text>
            <Text style={styles.address}>{hospital.address}</Text>
            <Text style={styles.rate}>★ {hospital.rate}</Text>
            <Text style={styles.distance}>📍{hospital.distance} </Text>
            <Text style={styles.about}>About</Text>
            <Text style={styles.aboutText}>{hospital.about}</Text>

            <TouchableOpacity onPress={handleBookAmbulance}>
                <View style={styles.booking}>
                    <Text style={styles.bookingText}>Book Ambulance</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(HospitalStyle);
export default HospitalDetail