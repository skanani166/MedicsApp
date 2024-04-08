import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import * as SecureStore from 'expo-secure-store';

const DrugsDetail = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {

        const retrieveFavoriteStatus = async () => {
            try {
                const storedQuantity = await SecureStore.getItemAsync('quantity');
                const storedIsFavorite = await SecureStore.getItemAsync('isFavorite');
                const storedCartItems = await SecureStore.getItemAsync('cartItems');
                console.log(favoriteStatus, "===============re")
                if (storedQuantity !== null) {
                    setQuantity(JSON.parse(storedQuantity));
                }
                if (storedIsFavorite !== null) {
                    setIsFavorite(JSON.parse(storedIsFavorite));
                }
                if (storedCartItems !== null) {
                    setCartItems(JSON.parse(storedCartItems));
                }
            } catch (error) {
                console.error('Error retrieving favorite status:', error);
            }
        };

        retrieveFavoriteStatus();
    }, []);

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };
    const toggleFavorite = async () => {
        setIsFavorite(!isFavorite);
    try {
        await SecureStore.setItemAsync('isFavorite', JSON.stringify(!isFavorite));
        // Navigate to SavePage and pass cartItems as a parameter
        // navigation.navigate('SavePage', { cartItems: cartItems });
    } catch (error) {
        console.error('Error saving favorite status:', error);
    }
    };


    const addToCart = () => {
        const newItem = {
            name: 'OBH Combi',
            quantity: quantity,
            price: quantity * 9.99
        };
        setCartItems([...cartItems, newItem]);
    };
    const navigateToCart = (cartItems) => {

        navigation.navigate('MyCart');
        navigation.navigate('SavePage', { cartItems: cartItems })
    };
    const handleBuyNow = () => {
        addToCart();
        navigateToCart(cartItems)
    };



    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image source={require('../assets/back (1).png')} style={style.back} />
                </TouchableOpacity>

                <Text style={style.message}>Drugs Detail</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/buy1.png.png')} style={style.buy1} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image source={require('../assets/image1.png.png')} style={style.image} />
            </View>
            <View>
                <Text style={style.obh}>OBH Combi</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={style.ml}>75ml</Text>
                    <TouchableOpacity onPress={()=>{toggleFavorite(navigation.navigate('SavePage', { cartItems: cartItems }))}}>
                        <Image source={require('../assets/favorite.png.png')}
                            style={[style.favorite, isFavorite ? style.active : null]}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/star.png.png')} style={style.star} />
                    <Image source={require('../assets/star.png.png')} style={[style.star, { marginLeft: 0 }]} />
                    <Image source={require('../assets/star.png.png')} style={[style.star, { marginLeft: 0 }]} />
                    <Image source={require('../assets/star.png.png')} style={[style.star, { marginLeft: 0 }]} />
                    <Text style={{ color: '#109450', fontSize: 14, marginTop: -2, marginLeft: 5 }}>4.0</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={decrementQuantity}>
                    <Image source={require('../assets/minus.png.png')} style={style.minus} />
                </TouchableOpacity>
                <Text style={style.number}>{quantity}</Text>
                <TouchableOpacity onPress={incrementQuantity}>
                    <Image source={require('../assets/plus.png.png')} style={style.plus} />
                </TouchableOpacity>
                <Text style={style.price}>${(quantity * 9.99).toFixed(2)}</Text>
            </View>
            <View>
                <Text style={style.tittle}>Description</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={style.text2}>OBH COMBI  is a cough medicine containing, Paracetamol, Ephedrine HCl, and Chlorphenamine maleate which is used to relieve coughs accompanied by flu symptoms such as fever, headache, and sneezing...</Text>
                    <TouchableOpacity>
                        <Text style={style.text1}>Read more</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={style.buy}>
                        <Image source={require('../assets/buy.png.png')} style={style.buyIcon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBuyNow}>
                    <View style={style.button}>
                        <Text style={style.buttonText}>Buy Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>


            </View>
        </View>
    )
}
export default DrugsDetail;
const style = StyleSheet.create({
    message: {
        fontSize: 25,
        marginTop: 70,
        marginLeft: 80,
        fontWeight: 'bold',

    },
    buy1: {
        width: 20,
        height: 20,
        marginTop: 80,
        marginLeft: 90
    },
    back: {
        width: 20,
        height: 20,
        marginLeft: 20,
        marginTop: 80,
    },
    image: {
        width: 250,
        height: 250,
        marginTop: 40,
    },
    obh: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20
    },
    ml: {
        marginLeft: 20,
        color: "#ADADAD"
    },
    favorite: {
        width: 20,
        height: 20,
        marginLeft: 300
    },
    active: {
        tintColor: 'red',
    },
    star: {
        width: 15,
        height: 15,
        marginLeft: 20,
    },
    minus: {
        width: 20,
        height: 20,
        marginLeft: 25,
        marginTop: 20
    },
    number: {
        marginTop: 18,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    },
    plus: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginTop: 20
    },
    price: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 12,
        marginLeft: 200
    },
    tittle: {
        marginTop: 30,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    text1: {
        marginLeft: -290,
        marginTop: 86,
        color: '#199A8E'
    },
    text2: {
        marginLeft: 20,
        marginRight: 16,
        marginTop: 20
    },
    buy: {
        width: 50,
        height: 50,
        backgroundColor: '#E8F3F1',
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buyIcon: {
        width: 30,
        height: 30
    },
    button: {
        width: 265,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#199A8E',
        marginTop: 120,
        marginLeft: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})    