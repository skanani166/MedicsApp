import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { AllTopDoctorData, TopDoctorData } from "../Data";
import { CategoryStyle } from "../assets/CSS/Style";

const Doctor = ({ navigation }) => {
    const handleTopDoctorPress = (topDoctorId) => {
        navigation.navigate('TopDoctorDetails', { topDoctorId });
    };

    const handleAllTopDoctorPress = (allTopDoctorId) => {
        navigation.navigate('AllTopDoctorDetails', { allTopDoctorId });
    };

    return (
        <ScrollView>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <View style={style.searchInput}></View>
                </TouchableOpacity>

                <Text style={style.category}>Category</Text>
                <View style={[style.container, { marginBottom: -20 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Category', { category1: 'Category' })}>
                        <Image source={require('../assets/Category/General.png')} />
                        <Text style={[style.text, { marginTop: -70, marginLeft: 30 }]}>General</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Category', { category2: 'Category' })}>
                        <Image source={require('../assets/Category/Lungs.png')} style={style.img} />
                        <Text style={[style.text, { marginTop: -70, marginLeft: -18 }]}>Lungs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Category', { category3: 'Category' })}>
                        <Image source={require('../assets/Category/Dental.png')} style={style.img} />
                        <Text style={[style.text, { marginTop: -70, marginLeft: -20 }]}>Dental</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Category', { category4: 'Category' })}>
                        <Image source={require('../assets/Category/Psycho.png')} style={style.img} />
                        <Text style={[style.text, { marginTop: -70, marginLeft: -20 }]}>Psycho</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('Category', { category5: 'Category' })}>
                        <Image source={require('../assets/Category/Covid.png')} />
                        <Text style={[style.text, { marginTop: -70, marginLeft: 38 }]}>Covid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Category', { category6: 'Category' })}>
                        <Image source={require('../assets/Category/Surgeon.png')} style={style.img} />
                        <Text style={[style.text, { marginTop: -70, marginLeft: -25 }]}>Surgeon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Category', { category7: 'Category' })}>
                        <Image source={require('../assets/Category/Cardio.png')} style={style.img} />
                        <Text style={[style.text, { marginTop: -70, marginLeft: -20 }]}>Cardio</Text>
                    </TouchableOpacity>
                </View>

                <Text style={style.recommand}>Recommanded Doctors</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={TopDoctorData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleTopDoctorPress(item.id)}>
                            <View style={style.list}>
                                <Image source={item.image} style={style.image} />
                                <View>
                                    <Text style={style.recommandName}>{item.name}</Text>
                                    <Text style={style.speciality}>{item.specialist}</Text>
                                    <Text style={style.rate}>★ {item.rate} </Text>
                                    <Text style={style.distance}>📍{item.distance}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />

                <Text style={style.recommand}>Your Recent Doctors</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={AllTopDoctorData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleAllTopDoctorPress(item.id)}>
                            <View style={style.recentList}>
                                <Image source={item.image} style={style.recentImage} />
                                <View>
                                    <Text style={style.recommandName}>{item.name}</Text>
                                    <Text style={style.speciality}>{item.specialist}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </ScrollView>
    );
}
const style = StyleSheet.create(CategoryStyle)
export default Doctor