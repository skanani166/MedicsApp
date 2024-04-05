import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { AllArticleData, AllTopDoctorData, ArticleData, TopDoctorData } from './Data';
import { DoctorStyle } from './Css/DoctorStyle';
import DateAndTime from './DataAndTime';

const DetailsScreen = ({ route, navigation }) => {
    const { itemId, type, topDoctorId } = route.params;
    const handleDoctorPress = (item) => {
        navigation.navigate('AllDetailsScreen', { type: 'doctor', itemId: item.id });
    };
    const handleArticlePress = (item) => {
        navigation.navigate('AllDetailsScreen', { type: 'article', itemId: item.id });
    };

    useEffect(() => {
        let headerTitle = "";
        if (type === 'doctor') headerTitle = "Top Doctor";
        else if (type === 'article') headerTitle = "Article";
        else if (type === 'allDoctor') headerTitle = "Top Doctors";
        else if (type === 'allArticle') headerTitle = "Articles";
        else if (type === 'recommand') headerTitle = "Recommand Doctor";
        navigation.setOptions({ headerTitle });
    }, [type, navigation]);

    const renderDetails = () => {
        if (type === 'doctor') {
            const doctor = TopDoctorData.find(item => item.id === itemId);
            if (!doctor) {
                return <Text>Error: Doctor not found</Text>;
            }
            return (
                <View style={styles.container}>
                    <View style={styles.list}>
                        <Image source={doctor.image} style={styles.img} />
                        <View>
                            <Text style={styles.name}>{doctor.name}</Text>
                            <Text style={styles.speciality}>{doctor.specialist}</Text>
                            <Text style={styles.rate}>★ {doctor.rate}</Text>
                            <Text style={styles.distance}>📍{doctor.distance} </Text>
                        </View>
                    </View>
                    <Text style={styles.about}>About</Text>
                    <Text style={styles.aboutText}>{doctor.about}</Text>

                    <Text style={styles.about}>Reason</Text>
                    <Text style={styles.reason}>{doctor.reason}</Text>

                    <Text style={styles.about}>Consultation Fee</Text>
                    <Text style={styles.fee}>{doctor.consultation}</Text>

                    <Text style={styles.about}>Admin Fee</Text>
                    <Text style={styles.fee}>{doctor.adminFee}</Text>
                    <DateAndTime doctor={doctor} />
                </View>
            );
        } else if (type === 'article') {
            const article = ArticleData.find(item => item.id === itemId);
            if (!article) {
                return <Text>Error: Article not found</Text>;
            }
            return (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <View style={styles.lists}>
                            <Image source={article.image} style={styles.image} />
                            <View>
                                <Text style={styles.title}>{article.title}</Text>
                                <Text style={styles.body}>{article.more}</Text>
                                <Text style={styles.date}>{article.date}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            );
        } else if (type === 'allDoctor') {
            return (
                <View style={styles.container}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={AllTopDoctorData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleDoctorPress(item)}>
                                <View>
                                    <View style={styles.list}>
                                        <Image source={item.image} style={styles.img} />
                                        <View>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <Text style={styles.speciality}>{item.specialist}</Text>
                                            <Text style={styles.rate}>★ {item.rate}</Text>
                                            <Text style={styles.distance}>📍{item.distance} </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            )
        } else if (type === 'allArticle') {
            return (
                <View style={styles.container}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={AllArticleData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleArticlePress(item)}>
                                <View>
                                    <View style={{ marginBottom: 20 }}>
                                        <Image source={item.image} style={styles.image} />
                                        <View>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.body}>{item.body}</Text>
                                            <Text style={styles.date}>{item.date}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            );
        } else if (type === 'recommand') {
            const doctor = TopDoctorData.find(item => item.id === itemId);
            if (!doctor) {
                return <Text>Error: Doctor not found</Text>;
            }
            return (
                <View style={styles.container}>
                    <View style={styles.list}>
                        <Image source={doctor.image} style={styles.img} />
                        <View>
                            <Text style={styles.name}>{doctor.name}</Text>
                            <Text style={styles.speciality}>{doctor.specialist}</Text>
                            <Text style={styles.rate}>★ {doctor.rate}</Text>
                            <Text style={styles.distance}>📍{doctor.distance} </Text>
                        </View>
                    </View>
                    <Text style={styles.about}>About</Text>
                    <Text style={styles.aboutText}>{doctor.about}</Text>

                    <Text style={styles.about}>Reason</Text>
                    <Text style={styles.reason}>{doctor.reason}</Text>

                    <Text style={styles.about}>Consultation Fee</Text>
                    <Text style={styles.fee}>{doctor.consultation}</Text>

                    <Text style={styles.about}>Admin Fee</Text>
                    <Text style={styles.fee}>{doctor.adminFee}</Text>
                    <DateAndTime doctor={doctor} />
                </View>
            );
        }
    };

    return (
        <View>
            {renderDetails()}
        </View>
    );
}

const styles = StyleSheet.create(DoctorStyle)
export default DetailsScreen;