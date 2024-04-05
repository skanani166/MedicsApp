import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHospitalData } from './Slice';
import { HospitalStyle } from "./Css/HospitalStyle";
import { useNavigation } from '@react-navigation/native';

const HospitalData = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const loading = useSelector((state) => state.counter.loading);
    const hospitalData = useSelector(state => state.counter.hospital);

    useEffect(() => {
        dispatch(fetchHospitalData());
    }, [dispatch]);

    const handleHospitalPress = (hospital) => {
        navigation.navigate('HospitalDetail', { hospital });
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#878787" style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }} />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={hospitalData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleHospitalPress(item)}>               
                                <Image source={item.image} style={styles.img} />
                                <View>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.address}>{item.address}</Text>
                                    <Text style={styles.rate}>★ {item.rate}</Text>
                                    <Text style={styles.distance}>📍{item.distance} </Text>
                                </View>                            
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create(HospitalStyle);
export default HospitalData;