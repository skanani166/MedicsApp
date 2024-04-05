import { useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux";

const Message = ({ navigation }) => {
    const [selectedMessageType, setSelectedMessageType] = useState(null);
    const PrivateData = useSelector(state => state.counter.topDoctors);
    const allData = useSelector(state => state.counter.allTopDoctors);
    const groupData = ['General', 'Lungs', 'Dental', 'Psycho', 'Covid', 'Surgeon', 'Cardio'];
    const groupImage = {
        General: require('./assets/Icon/Doctor.png'),
        Lungs: require('./assets/Icon/Lungs.png'),
        Dental: require('./assets/Icon/Dentist.png'),
        Psycho: require('./assets/Icon/Psychiatrist.png'),
        Covid: require('./assets/Icon/Covid.png'),
        Surgeon: require('./assets/Icon/Syringe.png'),
        Cardio: require('./assets/Icon/Cardiologist.png')
    };

    const handleDoctorPress = (doctor) => {
        navigation.navigate('Chat', { doctor })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Message</Text>
            <View style={styles.btn}>
                <TouchableOpacity onPress={() => setSelectedMessageType('All')}>
                    <View style={selectedMessageType === 'All' ? styles.selectBtn : styles.unselectBtn}>
                        <Text style={selectedMessageType === 'All' ? styles.selectText : styles.unselectText}>All</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedMessageType('Group')}>
                    <View style={selectedMessageType === 'Group' ? styles.selectBtn : styles.unselectBtn}>
                        <Text style={selectedMessageType === 'Group' ? styles.selectText : styles.unselectText}>Group</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedMessageType('Private')}>
                    <View style={selectedMessageType === 'Private' ? styles.selectBtn : styles.unselectBtn}>
                        <Text style={selectedMessageType === 'Private' ? styles.selectText : styles.unselectText}>Private</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {selectedMessageType === 'All' && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {allData.map((doctor, index) => (
                            <TouchableOpacity key={index} onPress={() => handleDoctorPress(doctor)}>
                                <View style={{ flexDirection: 'row', padding: 10 }}>
                                    <Image source={doctor.image} style={{ height: 80, width: 80, borderRadius: 50 }} />
                                    <View style={{ padding: 10 }}>
                                        <Text>{doctor.name}</Text>
                                        <Text style={styles.specialist}>{doctor.specialist}</Text>
                                        <Text style={styles.msg}>Hello, How can i help you?</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            )}

            {selectedMessageType === 'Group' && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.groupContainer}>
                        {groupData.map((category, index) => (
                            <TouchableOpacity key={index} onPress={() => handleDoctorPress(category)}>
                                <View style={styles.categoryItem}>
                                    <Image source={groupImage[category]} style={styles.categoryImage} />
                                    <Text style={styles.categoryText}>{category}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            )}


            {selectedMessageType === 'Private' && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {PrivateData.map((doctor, index) => (
                            <TouchableOpacity key={index} onPress={() => handleDoctorPress(doctor)}>
                                <View style={{ flexDirection: 'row', padding: 10 }}>
                                    <Image source={doctor.image} style={{ height: 80, width: 80, borderRadius: 50 }} />
                                    <View style={{ padding: 10 }}>
                                        <Text>{doctor.name}</Text>
                                        <Text style={styles.specialist}>{doctor.specialist}</Text>
                                        <Text style={styles.msg}>Hello, How can i help you?</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    message: {
        fontSize: 25,
        marginTop: 80,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    btn: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10,
    },
    selectBtn: {
        height: 45,
        width: 120,
        backgroundColor: '#199A8E',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unselectBtn: {
        height: 45,
        width: 120,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectText: {
        color: '#ffffff',
        fontWeight: '700'
    },
    unselectText: {
        color: '#000000',
        fontSize: 16
    },
    specialist: {
        color: '#696969'
    },
    msg: {
        color: '#878787'
    },
    groupContainer: {
        marginLeft: 10,
        marginTop: 10,
    },
    categoryItem: {
        flexDirection: 'row',
    },
    categoryImage: {
        width: 50,
        height: 50,
        marginBottom: 20,
    },
    categoryText: {
        marginTop: 12,
        fontSize: 16,
        marginLeft: 30,
        fontSize: 16,
    },
})
export default Message