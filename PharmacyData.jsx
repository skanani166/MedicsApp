import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Image, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPharmacyData } from './Slice';
import { useNavigation } from '@react-navigation/native';
import { PharmacyStyle } from './Css/PharmacyStyle';

const PharmacyData = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const loading = useSelector((state) => state.counter.loading);
    const PharmacyData = useSelector(state => state.counter.pharmacy);

    useEffect(() => {
        dispatch(fetchPharmacyData());
    }, [dispatch]);

    const handlePharmacyPress = (pharmacy) => {
        navigation.navigate('PharmacyDetail', { pharmacy });
    };

    const handleSearch = () => {
        navigation.navigate('Search')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSearch}>
                    <View style={styles.searchInput}>
                        <Text>Search</Text>
                    </View>
                </TouchableOpacity>

            <View style={styles.bg}>
                <Text style={styles.text}>{`Order quickly with\nPrescription`}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.learnmore}>Upload Prescription</Text>
                </TouchableOpacity>
                <Image style={styles.image} source={require('./assets/Image/Image.png')} />
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#878787" style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }} />
            ) : (

                <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={PharmacyData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePharmacyPress(item)}>
                            <View style={styles.list}>
                                <Image source={item.image} style={styles.img} />
                                <View>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.brand}>{item.brand}</Text>
                                    <Text style={styles.dosage}>{item.dosage}</Text>
                                    <Text style={styles.price}>₹ {item.price}</Text>
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

const styles = StyleSheet.create(PharmacyStyle);
export default PharmacyData;