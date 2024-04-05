import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DoctorStyle } from './Css/DoctorStyle';
import DateAndTime from './DataAndTime';

const DoctorDetail = ({ route }) => {
    const { doctor } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <Image source={doctor.image} style={styles.img} />
                <View>
                    <Text style={styles.name}>{doctor.name}</Text>
                    <Text style={styles.speciality}>{doctor.speciality}</Text>
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
};


const styles = StyleSheet.create(DoctorStyle)
export default DoctorDetail;