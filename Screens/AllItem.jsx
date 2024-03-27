import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ArticleData, AllArticleData, TopDoctorData, AllTopDoctorData, HospitalData, PharmacyData } from "../Data";
import { ArticleStyle, DoctorStyle, Home4ImageStyle } from "../assets/CSS/Style";
import { ArticleDetailStyle, TopDoctorDetailStyle } from "../assets/CSS/DetailStyle";

const Artical = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleArticlePress = (articleId) => {
        navigation.navigate('ArticleDetails', { articleId });
    };

    return (
        <View style={Article.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#878787" style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }} />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={ArticleData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleArticlePress(item.id)}>
                            <View style={Article.list}>
                                <Image source={item.image} style={Article.img} />
                                <View>
                                    <Text style={Article.title}>{item.title}</Text>
                                    <Text style={Article.body}>{item.body}</Text>
                                    <Text style={Article.date}>{item.date}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

const AllArticle = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleAllArticlePress = (allArticalId) => {
        navigation.navigate('AllArticleDetails', { allArticalId });
    };

    return (
        <View style={ArticleDetail.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#878787" style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }} />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={AllArticleData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleAllArticlePress(item.id)}>
                            <View style={ArticleDetail.list}>
                                <Image source={item.image} style={ArticleDetail.img} />
                                <Text style={ArticleDetail.title}>{item.title}</Text>
                                <Text style={ArticleDetail.body}>{item.body}</Text>
                                <Text style={ArticleDetail.date}>{item.date}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

const TopDoctor = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleTopDoctorPress = (topDoctorId) => {
        navigation.navigate('TopDoctorDetails', { topDoctorId });
    };

    return (
        <View style={TopDoctorStyle.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#878787" style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }} />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={TopDoctorData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleTopDoctorPress(item.id)}>
                            <View style={TopDoctorStyle.list}>
                                <Image source={item.image} style={TopDoctorStyle.img} />
                                <View>
                                    <Text style={TopDoctorStyle.name}>{item.name}</Text>
                                    <Text style={TopDoctorStyle.speciality}>{item.specialist}</Text>
                                    <Text style={TopDoctorStyle.rate}>★ {item.rate}</Text>
                                    <Text style={TopDoctorStyle.distance}>📍{item.distance}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

const AllTopDoctor = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleAllTopDoctorPress = (allTopDoctorId) => {
        navigation.navigate('AllTopDoctorDetails', { allTopDoctorId });
    };

    return (
        <View style={Doctor.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#878787" style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }} />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={AllTopDoctorData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleAllTopDoctorPress(item.id)}>
                            <View style={Doctor.list}>
                                <Image source={item.image} style={Doctor.img} />
                                <View>
                                    <Text style={Doctor.name}>{item.name}</Text>
                                    <Text style={Doctor.specialist}>{item.specialist}</Text>
                                    <Text style={Doctor.rate}>★ {item.rate}</Text>
                                    <Text style={Doctor.distance}>📍{item.distance}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

const Hospital = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleHospitalPress = (hospitalId) => {
        navigation.navigate('HospitalDetails', { hospitalId });
    };

    return (
        <View style={style.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#878787" style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }} />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={HospitalData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleHospitalPress(item.id)}>
                            <View style={style.list}>
                                <Image source={item.image} style={style.img} />
                                <View>
                                    <Text style={style.name}>{item.name}</Text>
                                    <Text style={style.address}>{item.address}</Text>
                                    <Text style={style.rate}>★ {item.rate}</Text>
                                    <Text style={style.distance}>📍{item.distance}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

const Pharmacy = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handlePharmacyPress = (pharmacyId) => {
        navigation.navigate('PharmacyDetails', { pharmacyId });
    };

    return (
        <View style={style.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#878787" style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }} />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={PharmacyData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePharmacyPress(item.id)}>
                            <View style={style.list}>
                                <Image source={item.image} style={style.img} />
                                <View>
                                    <Text style={style.name}>{item.name}</Text>
                                    <Text style={style.brand}>{item.brand}</Text>
                                    <Text style={style.stock}>{item.stock}</Text>
                                    <Text style={style.price}>₹ {item.price}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    )
}

const ArticleDetail = StyleSheet.create(ArticleDetailStyle)
const Doctor = StyleSheet.create(DoctorStyle)
const Article = StyleSheet.create(ArticleStyle)
const style = StyleSheet.create(Home4ImageStyle)
const TopDoctorStyle = StyleSheet.create(TopDoctorDetailStyle)
const AllItem = { AllArticle, TopDoctor, AllTopDoctor, Artical, Hospital, Pharmacy }
export default AllItem