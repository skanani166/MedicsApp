import { FlatList, StyleSheet, Text, View } from "react-native"
import { DoctorStyle } from "../assets/CSS/DoctorStyle"
import { Covid19DoctorData } from "../JsonFile/Covid19DoctorData"



const Covid19Doctor = () => {
    return (
        <View style={style.container}>
        <FlatList
            data={Covid19DoctorData}
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

export default Covid19Doctor