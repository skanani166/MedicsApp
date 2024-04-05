import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AllTopDoctorData, TopDoctorData } from "./Data";
import { CategoryStyle } from "./Css/CategoryStyle";

const Doctor = ({ navigation }) => {
    const handleTopDoctorPress = (topDoctorId) => {
        navigation.navigate('DetailsScreen', { itemId: topDoctorId, type: 'recommand' });
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <TouchableOpacity onPress={navigation.navigate('Search')}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search..."
                    />
                </TouchableOpacity>

                <Text style={styles.category}>Category</Text>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorData', { General: 'General' })}>
                        <Image source={require('./assets/Category/General.png')} style={{ marginLeft: -15 }} />
                        <Text style={[styles.text, { marginTop: -70, marginLeft: 12 }]}>General</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorData', { Lungs: 'Lungs' })}>
                        <Image source={require('./assets/Category/Lungs.png')} style={styles.img} />
                        <Text style={[styles.text, { marginTop: -70, marginLeft: -20 }]}>Lungs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorData', { Dental: 'Dental' })}>
                        <Image source={require('./assets/Category/Dental.png')} style={styles.img} />
                        <Text style={[styles.text, { marginTop: -70, marginLeft: -20 }]}>Dental</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorData', { Psycho: 'Psycho' })}>
                        <Image source={require('./assets/Category/Psycho.png')} style={styles.img} />
                        <Text style={[styles.text, { marginTop: -70, marginLeft: -25 }]}>Psycho</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorData', { Covid: 'Covid' })}>
                        <Image source={require('./assets/Category/Covid.png')} style={{ marginLeft: -15, marginTop: -20 }} />
                        <Text style={[styles.text, { marginTop: -70, marginLeft: 20 }]}>Covid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorData', { Surgeon: 'Surgeon' })}>
                        <Image source={require('./assets/Category/Surgeon.png')} style={[styles.img, { marginTop: -20 }]} />
                        <Text style={[styles.text, { marginTop: -70, marginLeft: -25 }]}>Surgeon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorData', { Cardio: 'Cardio' })}>
                        <Image source={require('./assets/Category/Cardio.png')} style={[styles.img, { marginTop: -20 }]} />
                        <Text style={[styles.text, { marginTop: -70, marginLeft: -20 }]}>Cardio</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.recommand}>Recommanded Doctors</Text>
                <FlatList
                    data={TopDoctorData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleTopDoctorPress(item.id)}>
                            <View style={styles.list}>
                                <Image source={item.image} style={styles.image} />
                                <View>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.speciality}>{item.specialist}</Text>
                                    <Text style={styles.rate}>★ {item.rate} </Text>
                                    <Text style={styles.distance}>📍{item.distance}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />

                <Text style={styles.recommand}>Your Recent Doctors</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={AllTopDoctorData}
                    renderItem={({ item }) => (
                        <View style={styles.recentList}>
                            <Image source={item.image} style={styles.recentImage} />
                            <View>
                                <Text style={styles.recentName}>{item.name}</Text>
                                <Text style={styles.recentSpeciality}>{item.specialist}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create(CategoryStyle)
export default Doctor