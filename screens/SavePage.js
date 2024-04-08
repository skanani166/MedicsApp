import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const SavePage = ({route, navigation}) => {
  const { cartItems } = route.params;
  console.log(route.params.cartItems);
  return(
    <View>
        <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>navigation.goBack() }>
                    <Image source={require('../assets/back (1).png')} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.message}>My Save</Text>
            </View>
       <View>
            {/* <Text>Cart Items:</Text> */}
            {cartItems.map((item, index) => (
              <View key={index} style={styles.itemContainer}  >
              <Image source={require('../assets/image1.png.png')} style={styles.image} />
             
                <Text key={index}>{item.name} - Quantity: {item.quantity} - Price: ${item.price}</Text>
              </View>
            ))}
        </View>
    </View>
  )
}
export default SavePage;
const styles = StyleSheet.create({
  message: {
    fontSize: 25,
    marginTop: 70,
    marginLeft: 100,
    fontWeight: 'bold',

},
back: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginTop: 80,
},
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});