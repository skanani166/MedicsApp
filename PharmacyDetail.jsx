import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { PharmacyStyle } from "./Css/PharmacyStyle";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from 'expo-secure-store';

const PharmacyDetail = ({ route }) => {
    const navigation = useNavigation();
    const { pharmacy } = route.params
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        } 
    };
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };
    const handleBuyNow = () => {
        navigation.navigate('MyCart', {
            pharmacy: pharmacy, 
            totalPrice: (quantity * pharmacy.price).toFixed(2)
        });
    }

    useEffect(() => {
        const retrieveFavoriteStatus = async () => {
            try {
                const storedIsFavorite = await SecureStore.getItemAsync('isFavorite');
                if (storedIsFavorite !== null) {
                    setIsFavorite(JSON.parse(storedIsFavorite));
                }
            } catch (error) {
                console.error('Error retrieving favorite status:', error);
            }
        };
        retrieveFavoriteStatus();
    }, []);

    const toggleFavorite = async () => {
        setIsFavorite(!isFavorite);
        ('Save', { pharmacy })
        try {
            await SecureStore.setItemAsync('isFavorite', JSON.stringify(!isFavorite));
        } catch (error) {
            console.error('Error saving favorite status:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Image source={pharmacy.image} style={styles.imag} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={[styles.name, { marginTop: 10 }]}>{pharmacy.name}</Text>
                    <Text style={styles.dosage}>{pharmacy.dosage}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={toggleFavorite}>
                <Ionicons name={isFavorite ? "heart" : "heart-outline"} style={[styles.favorite, isFavorite ? styles.active : null]} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={decrementQuantity}>
                    <Ionicons name="remove-circle-sharp" style={styles.minus} />
                </TouchableOpacity>
                <Text style={styles.number}>{quantity}</Text>
                <TouchableOpacity onPress={incrementQuantity}>
                    <Ionicons name="add-circle-sharp" style={styles.plus} />
                </TouchableOpacity>
                <Text style={styles.pric}>{(quantity * pharmacy.price).toFixed(2)}</Text>
            </View>

            <Text style={styles.discri}>Description</Text>
            <Text style={styles.dis}>{pharmacy.description}</Text>

            <TouchableOpacity onPress={handleBuyNow} >
                <View style={styles.booking}>
                    <Text style={styles.bookingText}>Buy now</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(PharmacyStyle)
export default PharmacyDetail