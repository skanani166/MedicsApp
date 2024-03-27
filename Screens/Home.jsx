import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ArticleData, TopDoctorData } from "../Data";
import { HomeStyle } from "../assets/CSS/Style";

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={style.full}>
                <Text style={style.upText}>{`Find your desire \nhealth solution`}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <View style={style.searchInput}></View>
                </TouchableOpacity>

                <View style={style.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('Doctors', { Doctor: 'Doctor' })}>
                        <Image source={require('../assets/Category/Doctor.png')} style={{ marginTop: -20 }} />
                        <Text style={{ marginTop: -70, marginLeft: 35 }}>Doctor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Pharmacy', { Pharmacy: 'Pharmacy' })}>
                        <Image source={require('../assets/Category/Pharmacy.png')} style={style.img} />
                        <Text style={{ marginTop: -70, marginLeft: -30 }}>Pharmacy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Hospital', { Hospital: 'Hospital' })}>
                        <Image source={require('../assets/Category/Hospital.png')} style={style.img} />
                        <Text style={{ marginTop: -70, marginLeft: -25 }}>Hospital</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Ambulance', { Embulance: 'Embulance' })}>
                        <Image source={require('../assets/Category/Embulance.png')} style={style.img} />
                        <Text style={{ marginTop: -70, marginLeft: -35 }}>Ambulance</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.bg}>
                    <Text style={style.text}>{`Early protection for\nyour family health`}</Text>
                    <TouchableOpacity style={style.btn}>
                        <Text style={style.learnmore}>Learn more</Text>
                    </TouchableOpacity>
                    <Image style={style.image} source={require('../assets/Slider/Image.png')} />
                </View>

                <Text style={style.topDoc}>Top Doctor</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AllTopDoctor')}>
                    <Text style={style.seeAll}>See all</Text>
                </TouchableOpacity>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={TopDoctorData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleTopDoctorPress(item.id)}>
                            <View style={style.list}>
                                <Image source={item.image} style={style.docImg} />
                                <Text style={style.name}>{item.name}</Text>
                                <Text style={style.specialist}>{item.specialist}</Text>
                                <Text style={style.education}>{item.education}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()} />

                <Text style={style.Health}>Health article</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AllArticle')}>
                    <Text style={style.seeAll}>see all</Text>
                </TouchableOpacity>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={ArticleData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleArticlePress(item.id)}>
                            <View style={style.list}>
                                <Image source={item.image} style={style.articalImage} />
                                <Text style={style.title}>{item.title}</Text>
                                <Text style={style.body}>{item.body}</Text>
                                <Text style={style.date}>{item.date}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()} />
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create(HomeStyle)
export default Home