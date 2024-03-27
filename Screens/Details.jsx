import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { ArticleData, AllArticleData, TopDoctorData, AllTopDoctorData, HospitalData, PharmacyData } from "../Data";
import { ArticleDetailStyle, HospitalDetailStyle, PharmacyDetailStyle, TopDoctorDetailStyle } from "../assets/CSS/DetailStyle";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ArticleDetail = ({ route }) => {ArticleStyle
    const { articleId } = route.params;

    const findArticalById = (articleId) => {
        const article = ArticleData.find(article => article.id === articleId);
        return article;
    };

    const article = findArticalById(articleId);
    if (!article) {
        return (
            <View>
                <Text>Error: artical not found.</Text>
            </View>
        );
    }
    return (
        <ScrollView>
            <View style={ArticleStyle.container}>
                <View style={ArticleStyle.list}>
                    <Image source={article.image} style={ArticleStyle.img} />
                    <View>
                        <Text style={ArticleStyle.title}>{article.title}</Text>
                        <Text style={ArticleStyle.more}>{article.more}</Text>
                        <Text style={ArticleStyle.date}>{article.date}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const AllArticleDetail = ({ route }) => {
    const { allArticalId } = route.params;

    const findAllArticleById = (allArticalId) => {
        const allArticle = AllArticleData.find(allArticle => allArticle.id === allArticalId);
        return allArticle;
    };

    const allArticle = findAllArticleById(allArticalId);
    if (!allArticle) {
        return (
            <View>
                <Text>Error: allarticle not found.</Text>
            </View>
        );
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}> 
            <View style={ArticleStyle.container}>
                <View style={ArticleStyle.list}>
                    <Image source={allArticle.image} style={ArticleStyle.img} />
                    <View>
                        <Text style={ArticleStyle.title}>{allArticle.title}</Text>
                        <Text style={ArticleStyle.more}>{allArticle.more}</Text>
                        <Text style={ArticleStyle.date}>{allArticle.date}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const TopDoctorDetail = ({ route }) => {
    const { topDoctorId } = route.params;

    const findTopDoctorById = (topDoctorId) => {
        const topDoctor = TopDoctorData.find(topDoctor => topDoctor.id === topDoctorId);
        return topDoctor;
    };

    const topDoctor = findTopDoctorById(topDoctorId);
    if (!topDoctor) {
        return (
            <View>
                <Text>Error: topDoctor not found.</Text>
            </View>
        );
    }

    const navigation = useNavigation();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleDateConfirm = (date) => {
        setSelectedDate(date)
        hideDatePicker()
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true)
    }

    const hideTimePicker = () => {
        setTimePickerVisibility(false)
    }

    const handleTimeConfirm = (date) => {
        setSelectedTime(date)
        hideTimePicker()
    }

    const handleAppointment = () => {
        navigation.navigate('Appointment', { topDoctor, selectedDate, selectedTime, consultationFee: topDoctor.consultation, adminFee: topDoctor.adminFee });
    };

    return (
        <View style={TopDoctorStyle.container}>
            <View style={TopDoctorStyle.list}>
                <Image source={topDoctor.image} style={TopDoctorStyle.img} />
                <View>
                    <Text style={TopDoctorStyle.name}>{topDoctor.name}</Text>
                    <Text style={TopDoctorStyle.speciality}>{topDoctor.specialist}</Text>
                    <Text style={TopDoctorStyle.rate}>★ {topDoctor.rate}</Text>
                    <Text style={TopDoctorStyle.distance}>📍 {topDoctor.distance}</Text>
                </View>
            </View>
            <Text style={TopDoctorStyle.about}>About</Text>
            <Text style={TopDoctorStyle.aboutText}>{topDoctor.about}</Text>
            <Text style={TopDoctorStyle.reason}>Reason</Text>
            <Text style={TopDoctorStyle.reasonText}>{topDoctor.reason}</Text>
            <Text style={TopDoctorStyle.consultation}>Consultation</Text>
            <Text style={TopDoctorStyle.consultationText}> {topDoctor.consultation}</Text>
            <Text style={TopDoctorStyle.admin}>Admin Fee</Text>
            <Text style={TopDoctorStyle.adminText}> {topDoctor.adminFee}</Text>
            
            <View>
                <TouchableOpacity onPress={showDatePicker} style={TopDoctorStyle.selectbutton1}>
                    <Text style={TopDoctorStyle.selectText}>Select Date</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={showTimePicker} style={TopDoctorStyle.selectbutton2}>
                    <Text style={TopDoctorStyle.selectText}>Select Time</Text>
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleTimeConfirm}
                    onCancel={hideTimePicker}
                />
                <TouchableOpacity onPress={handleAppointment} disabled={!selectedDate || !selectedTime}>
                    <View style={TopDoctorStyle.button}>
                        <Text style={TopDoctorStyle.buttonText}>Book Appointment</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const AllTopDoctorDetail = ({ route }) => {
    const { allTopDoctorId } = route.params;

    const findTopDoctorById = (allTopDoctorId) => {
        const allTopDoctor = AllTopDoctorData.find(allTopDoctor => allTopDoctor.id === allTopDoctorId);
        return allTopDoctor;
    };

    const allTopDoctor = findTopDoctorById(allTopDoctorId);
    if (!allTopDoctor) {
        return (
            <View>
                <Text>Error: alltopDoctor not found.</Text>
            </View>
        );
    }

    const navigation = useNavigation();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleDateConfirm = (date) => {
        setSelectedDate(date)
        hideDatePicker()
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true)
    }

    const hideTimePicker = () => {
        setTimePickerVisibility(false)
    }

    const handleTimeConfirm = (date) => {
        setSelectedTime(date)
        hideTimePicker()
    }

    const handleAppointment = () => {
        navigation.navigate('Appointment', { allTopDoctor, selectedDate, selectedTime, consultationFee: allTopDoctor.consultation, adminFee: allTopDoctor.adminFee });
    };

    return (
        <View style={TopDoctorStyle.container}>
            <View style={TopDoctorStyle.list}>
                <Image source={allTopDoctor.image} style={TopDoctorStyle.img} />
                <View>
                    <Text style={TopDoctorStyle.name}>{allTopDoctor.name}</Text>
                    <Text style={TopDoctorStyle.speciality}>{allTopDoctor.specialist}</Text>
                    <Text style={TopDoctorStyle.rate}>★ {allTopDoctor.rate}</Text>
                    <Text style={TopDoctorStyle.distance}>📍 {allTopDoctor.distance}</Text>
                </View>
            </View>
            <Text style={TopDoctorStyle.about}>About</Text>
            <Text style={TopDoctorStyle.aboutText}>{allTopDoctor.about}</Text>
            <Text style={TopDoctorStyle.reason}>Reason</Text>
            <Text style={TopDoctorStyle.reasonText}>{allTopDoctor.reason}</Text>
            <Text style={TopDoctorStyle.consultation}>Consultation</Text>
            <Text style={TopDoctorStyle.consultationText}> {allTopDoctor.consultation}</Text>
            <Text style={TopDoctorStyle.admin}>Admin Fee</Text>
            <Text style={TopDoctorStyle.adminText}> {allTopDoctor.adminFee}</Text>
            <View>
                <TouchableOpacity onPress={showDatePicker} style={style.selectbutton1}>
                    <Text style={style.selectText}>Select Date</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={showTimePicker} style={style.selectbutton2}>
                    <Text style={style.selectText}>Select Time</Text>
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleTimeConfirm}
                    onCancel={hideTimePicker}
                />
                <TouchableOpacity onPress={handleAppointment} disabled={!selectedDate || !selectedTime}>
                    <View style={style.button}>
                        <Text style={style.buttonText}>Book Appointment</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const HospitalDetail = ({ route }) => {
    const navigation = useNavigation();
    const { hospitalId } = route.params;

    const handleBookAmbulance = () => {
        navigation.navigate('BookAmbulance', { address: hospital.address, name: hospital.name });
    };

    const findHospitalById = (hospitalId) => {
        const hospital = HospitalData.find(hospital => hospital.id === hospitalId);
        return hospital;
    };

    const hospital = findHospitalById(hospitalId);
    if (!hospital) {
        return (
            <View>
                <Text>Error: Hospital not found.</Text>
            </View>
        );
    }

    return (
        <View style={HospitalStyle.container}>
            <View style={HospitalStyle.list}>
                <Image source={hospital.image} style={HospitalStyle.img} />
                <Text style={HospitalStyle.name}>{hospital.name}</Text>
                <Text style={HospitalStyle.address}>{hospital.address}</Text>
                <Text style={HospitalStyle.rate}>★ {hospital.rate}</Text>
                <Text style={HospitalStyle.distance}>📍 {hospital.distance}</Text>
            </View>
            <Text style={HospitalStyle.about}>About</Text>
            <Text style={HospitalStyle.aboutText}>{hospital.about}</Text>
            <TouchableOpacity style={HospitalStyle.btn} onPress={handleBookAmbulance}>
                <Text style={HospitalStyle.text}>Book Ambulance</Text>
            </TouchableOpacity>
        </View>
    );
}

const PharmacyDetail = ({ route }) => {
    const { pharmacyId } = route.params;

    const findHospitalById = (pharmacyId) => {
        const hospital = PharmacyData.find(pharmacy => pharmacy.id === pharmacyId);
        return hospital;
    };

    const pharmacy = findHospitalById(pharmacyId);
    if (!pharmacy) {
        return (
            <View>
                <Text>Error: pharmacy not found.</Text>
            </View>
        );
    }

    return (
        <View style={PharmacyStyle.container}>
            <View style={PharmacyStyle.list}>
                <Image source={pharmacy.image} style={PharmacyStyle.img} />
                <View>
                    <Text style={PharmacyStyle.name}>{pharmacy.name}</Text>
                    <Text style={PharmacyStyle.brand}>{pharmacy.brand}</Text>
                    <Text style={PharmacyStyle.stock}>{pharmacy.stock}</Text>
                    <Text style={PharmacyStyle.price}>₹{pharmacy.price}</Text>
                </View>
            </View>

        </View>
    );
}

const TopDoctorStyle = StyleSheet.create(TopDoctorDetailStyle)
const ArticleStyle = StyleSheet.create(ArticleDetailStyle)
const HospitalStyle = StyleSheet.create(HospitalDetailStyle)
const PharmacyStyle = StyleSheet.create(PharmacyDetailStyle);

const Details = { ArticleDetail, AllArticleDetail, TopDoctorDetail, AllTopDoctorDetail, HospitalDetail, PharmacyDetail }
export default Details