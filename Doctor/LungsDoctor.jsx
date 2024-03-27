import { FlatList, StyleSheet, Text, View } from "react-native"
import { LungsDoctorData } from "../JsonFile/LungsDoctorData"
import { DoctorStyle } from "../assets/CSS/DoctorStyle"



const LungsDoctor = () => {
    return (
        <View style={style.container}>
        <FlatList
            data={LungsDoctorData}
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

export default LungsDoctor