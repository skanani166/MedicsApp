import { useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux";

const Schedule = ({ navigation }) => {
    const [selectedMessageType, setSelectedMessageType] = useState(null);
    const doctorData = useSelector(state => state.counter.topDoctors);

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Schedule</Text>
            <View style={styles.btn}>
                <TouchableOpacity onPress={() => setSelectedMessageType('Upcoming')}>
                    <View style={selectedMessageType === 'Upcoming' ? styles.selectBtn : styles.unselectBtn}>
                        <Text style={selectedMessageType === 'Upcoming' ? styles.selectText : styles.unselectText}>Upcoming</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedMessageType('Completed')}>
                    <View style={selectedMessageType === 'Completed' ? styles.selectBtn : styles.unselectBtn}>
                        <Text style={selectedMessageType === 'Completed' ? styles.selectText : styles.unselectText}>Completed</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedMessageType('Canceled')}>
                    <View style={selectedMessageType === 'Canceled' ? styles.selectBtn : styles.unselectBtn}>
                        <Text style={selectedMessageType === 'Canceled' ? styles.selectText : styles.unselectText}>Canceled</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {selectedMessageType === 'Upcoming' && selectedMessageType === 'Completed' && selectedMessageType === 'Canceled' || (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {doctorData.map((doctor, index) => (
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
export default Schedule