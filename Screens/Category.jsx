import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardioDoctorData, CovidDoctorData, DentalDoctorData, GeneralDoctorData, LungsDoctorData, PsychoDoctorData, SurgeonDoctorData } from "../Data";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Home4ImageStyle } from "../assets/CSS/Style";

const Category = ({ route }) => {
    const { category1, category2, category3, category4, category5, category6, category7 } = route.params;
    const combinedData = [...(category1 ? GeneralDoctorData.General : []), ...(category2 ? LungsDoctorData.Lungs : []), ...(category3 ? DentalDoctorData.Dental : []), ...(category4 ? PsychoDoctorData.Psycho : []), ...(category5 ? CovidDoctorData.Covid : []), ...(category6 ? SurgeonDoctorData.Surgeon : []), ...(category7 ? CardioDoctorData.Cardio : [])]
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        let headerTitle = "";
        if (category1) headerTitle = "General Doctor";
        else if (category2) headerTitle = "Lungs Specialist";
        else if (category3) headerTitle = "Dentist";
        else if (category4) headerTitle = "psychiatrist";
        else if (category5) headerTitle = "Covid-19 Specialist";
        else if (category6) headerTitle = "Surgeon";
        else if (category7) headerTitle = "cardiologist";
        
        navigation.setOptions({ headerTitle });
    }, [category1, category2, category3, category4, category5, category6, category7, navigation]);

    const handleDoctorPress = (doctorId) => {
        navigation.navigate('DoctorDetails', { doctorId });
    };

    return (
        <View style={style.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#878787" style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }} />
            ) : (
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={combinedData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleDoctorPress(item.id)}>
                            <View style={style.list}>
                                <Image source={item.image} style={style.img} />
                                <View>
                                    <Text style={style.name}>{item.name}</Text>
                                    <Text style={style.speciality}> {item.speciality}</Text>
                                    <Text style={style.rate}>★ {item.rate}</Text>
                                    <Text style={style.distance}>📍{item.distance} </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
}
const style = StyleSheet.create(Home4ImageStyle)
export default Category