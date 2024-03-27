import { FlatList, StyleSheet, Text, View } from "react-native"
import { DoctorStyle } from "../assets/CSS/DoctorStyle"
import { SurgeonDoctorData } from "../JsonFile/SurgeonDoctorData"



const SurgeonDoctor = () => {
    return (
        <View style={style.container}>
        <FlatList
            data={SurgeonDoctorData}
            renderItem={({ item }) => (
                <View style={style.list}>
                    <Text> {item.name} </Text>
                    <Text> {item.speciality} </Text>
                    <Text> {item.rate} </Text>
                    <Text> {item.distance} </Text>
                </View>
            )}
            keyExtractor={(item) => item.id} />
        </View>
    )
}

const style = StyleSheet.create(DoctorStyle)

export default SurgeonDoctor