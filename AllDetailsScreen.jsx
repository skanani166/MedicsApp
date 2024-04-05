import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AllArticleData, AllTopDoctorData } from './Data';
import DateAndTime from './DataAndTime';
import { DoctorStyle } from './Css/DoctorStyle';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const AllDetailsScreen = ({ route }) => {
    const { itemId, type } = route.params;
    const navigation = useNavigation();

    useEffect(() => {
        let headerTitle = "";
        if (type === 'doctor') headerTitle = "Top Doctor";
        else if (type === 'article') headerTitle = "Article";
        navigation.setOptions({ headerTitle });
    }, [type, navigation]);

    const renderDetails = () => {
        if (type === 'doctor') {
            const doctor = AllTopDoctorData.find(item => item.id === itemId);
            if (!doctor) {
                return <Text>Error: Doctor not found</Text>;
            }
            return (
                <View>
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
            const article = AllArticleData.find(item => item.id === itemId);
            if (!article) {
                return <Text>Error: Article not found</Text>;
            }
            return (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Image source={article.image} style={styles.image} />
                        <View>
                            <Text style={styles.title}>{article.title}</Text>
                            <Text style={styles.more}>{article.more}</Text>
                            <Text style={styles.date}>{article.date}</Text>
                        </View>
                    </View>
                </ScrollView>
            );
        }
    };

    return (
        <View style={styles.container}>
            {renderDetails()}
        </View>
    );
}

const styles = StyleSheet.create(DoctorStyle)
export default AllDetailsScreen;