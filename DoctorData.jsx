import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorData } from "./Slice";
import { useNavigation } from "@react-navigation/native";
import { DoctorStyle } from "./Css/DoctorStyle";

const DoctorData = ({ route }) => {
    const { General, Lungs, Dental, Psycho, Covid, Surgeon, Cardio } = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const loading = useSelector((state) => state.counter.loading);
    const doctorData = useSelector((state) => state.counter.doctorData);

    useEffect(() => {
        dispatch(fetchDoctorData({ General, Lungs, Dental, Psycho, Covid, Surgeon, Cardio }));
    }, [dispatch, General, Lungs, Dental, Psycho, Covid, Surgeon, Cardio]);

    useEffect(() => {
        let headerTitle = "";
        if (General) headerTitle = "General Doctor";
        else if (Lungs) headerTitle = "Lungs Specialist";
        else if (Dental) headerTitle = "Dentist";
        else if (Psycho) headerTitle = "psychiatrist";
        else if (Covid) headerTitle = "Covid-19 Specialist";
        else if (Surgeon) headerTitle = "Surgeon";
        else if (Cardio) headerTitle = "cardiologist";

        navigation.setOptions({ headerTitle });
    }, [General, Lungs, Dental, Psycho, Covid, Surgeon, Cardio, navigation]);


    const handleDoctorPress = (doctor) => {
        navigation.navigate('DoctorDetail', { doctor });
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#878787" style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }} />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={doctorData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleDoctorPress(item)}>
                            <View style={styles.list}>
                                <Image source={item.image} style={styles.img} />
                                <View>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.speciality}>{item.speciality}</Text>
                                    <Text style={styles.rate}>★ {item.rate}</Text>
                                    <Text style={styles.distance}>📍{item.distance} </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create(DoctorStyle);
export default DoctorData;