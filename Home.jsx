import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ArticleData, TopDoctorData } from "./Data";
import { HomeStyle } from "./Css/HomeStyle";
import { fetchArticleData, fetchTopDoctorData } from "./Slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const handlePress = (id, type) => {
        if (type === 'doctor') {
            navigation.navigate('DetailsScreen', { type: 'doctor', itemId: id });
        } else if (type === 'article') {
            navigation.navigate('DetailsScreen', { type: 'article', itemId: id });
        } else if (type === 'allDoctor') {
            navigation.navigate('DetailsScreen', { type: 'allDoctor', itemId: id });
        } else if (type === 'allArticle') {
            navigation.navigate('DetailsScreen', { type: 'allArticle', itemId: id });
        }
    };

    const renderItem = ({ item, type }) => (
        <TouchableOpacity onPress={() => handlePress(item.id, type)}>
            <View style={type === 'doctor' ? styles.list : styles.List} >
                <Image source={item.image} style={type === 'doctor' ? styles.docImg : styles.articalImage} />
                <Text style={styles.title}>{item.name || item.title}</Text>
                {type === 'doctor' && <Text style={styles.specialist}>{item.specialist}</Text>}
                {type === 'article' && <Text style={styles.body}>{item.body}</Text>}
                {type === 'article' && <Text style={styles.date}>{item.date}</Text>}
            </View>
        </TouchableOpacity>
    );

    useEffect(() => {
        dispatch(fetchTopDoctorData());
        dispatch(fetchArticleData());
    }, [dispatch])

    const handleSearch = () => {
        navigation.navigate('Search')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.upText}>{`Find your desire \nhealth solution`}</Text>
                <TouchableOpacity onPress={handleSearch}>
                    <View style={styles.searchInput}>
                        <Text>Search</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.navigate('Doctors', { Doctor: 'Doctor' })}>
                        <Image source={require('./assets/Category/Doctor.png')} style={{ marginTop: -20, marginLeft: -10 }} />
                        <Text style={{ marginTop: -70, marginLeft: 25 }}>Doctor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Pharmacy', { Pharmacy: 'Pharmacy' })}>
                        <Image source={require('./assets/Category/Pharmacy.png')} style={styles.img} />
                        <Text style={{ marginTop: -70, marginLeft: -32 }}>Pharmacy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Hospital', { Hospital: 'Hospital' })}>
                        <Image source={require('./assets/Category/Hospital.png')} style={styles.img} />
                        <Text style={{ marginTop: -70, marginLeft: -25 }}>Hospital</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('BookAmbulance', { Embulance: 'Embulance' })}>
                        <Image source={require('./assets/Category/Embulance.png')} style={styles.img} />
                        <Text style={{ marginTop: -70, marginLeft: -35 }}>Ambulance</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bg}>
                    <Text style={styles.text}>{`Early protection for\nyour family health`}</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.learnmore}>Learn more</Text>
                    </TouchableOpacity>
                    <Image style={styles.image} source={require('./assets/Image/Image.png')} />
                </View>

                <Text style={styles.common}>Top Doctor</Text>
                <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { type: 'allDoctor' })}>
                    <Text style={styles.seeAll}>See all</Text>
                </TouchableOpacity>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={TopDoctorData}
                    renderItem={({ item }) => renderItem({ item, type: 'doctor' })}
                    keyExtractor={(item) => item.id.toString()}
                />

                <Text style={styles.common}>Health article</Text>
                <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { type: 'allArticle' })}>
                    <Text style={styles.seeAll}>See all</Text>
                </TouchableOpacity>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={ArticleData}
                    renderItem={({ item }) => renderItem({ item, type: 'article' })}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create(HomeStyle)
export default Home