// import React, { useState } from "react";
// import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
// import CheckBox from "react-native-check-box";
// import icon from '../assets/left-arrow.png';
// import plus from '../assets/Shape.png'
// import * as SecureStore from 'expo-secure-store';



// const ShippingAdd = ({ navigation, route }) => {
//     // console.log(route.params.paramKey)

//     const [ischecked, setischecked] = useState(false);
//     const [isselected, setisselected] = useState(false)

//     // const securestorage = () => {
//     //     const address = SecureStore.getItemAsync('add')
//     //     console.log(address);
//     // }


//     return (
//         <View style={{ backgroundColor: '#F9F9F9', height: 800 }}>
//             <View style={{ backgroundColor: '#ffffff' }}>
//                 <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
//                     <Image
//                         source={icon}
//                         style={{ width: 18, height: 18, marginLeft: 10, marginTop: 50 }}
//                     />
//                 </TouchableOpacity>
//                 <Text style={styles.add}>Shipping Addresses</Text>
//             </View>

//             <View style={styles.box}>

//                 <Text style={styles.text1}>Jane Doe</Text>
//                 <TouchableOpacity onPress={() => Delete()} >
//                     <Text style={styles.Edit1}>DELETE</Text>
//                 </TouchableOpacity>
//                 <Text style={styles.new}>3,NewBridge court Chinno Hills, CA 91709 United States.. </Text>
//                 <View style={{ flexDirection: 'row' }}>

//                     <CheckBox
//                         isChecked={ischecked}
//                         onClick={() => setischecked(!ischecked)}
//                         checkBoxColor="#285F71"
//                         style={{ marginTop: 15 }}

//                     />
//                     <Text style={styles.new1}>Use as the shipping address </Text>
//                 </View>
//             </View>


//             <View style={styles.box}>
//                 {/* <Text style={styles.text1}>{route?.params?.name}</Text> */}
//                 <Text style={styles.Edit1}>DELETE</Text>

//                 {/* <Text style={styles.new}>{route?.params?.add} </Text> */}

//                 <View style={{ flexDirection: 'row' }}>
//                     <CheckBox
//                         isselected={isselected}
//                         onClick={(isselected) => setisselected(!isselected)}
//                         checkBoxColor="#285F71"
//                         style={{ marginTop: 15 }}
//                     />
//                     <Text style={styles.new1}>Use as the shipping address </Text>
//                 </View>
//             </View>

//             <TouchableOpacity>
//                 <View>
//                     <Text style={styles.btn}></Text>
//                     <TouchableOpacity onPress={() => navigation.navigate('Addingshipping')}>
//                         <Image
//                             source={plus}
//                             style={{ width: 18, height: 18, marginLeft: 306, marginTop: -33 }}
//                         />
//                     </TouchableOpacity>
//                 </View>
//             </TouchableOpacity>

//             <View>
//                 <TouchableOpacity
//                     style={styles.btn1}
//                     onPress={() => {
//                         navigation.navigate('Checkout')
//                     }}>
//                     <Text style={styles.btn12}> ADD ADDRESS </Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )

// }
// export default ShippingAdd;

// const styles = StyleSheet.create({
//     btn1: {
//         height: 50,
//         width: 280,
//         backgroundColor: '#285F71',
//         marginLeft: 35,
//         marginTop: 150,
//         borderRadius: 50,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     btn12: {
//         fontSize: 18,
//         fontWeight: '700',
//         color: '#ffffff'
//     },
//     add: {
//         marginLeft: 80,
//         fontSize: 20,
//         fontWeight: '700',
//         color: '#285F71',
//         marginTop: -20,
//         paddingBottom: 20,
//     },
//     box: {
//         // borderWidth: 1,
//         backgroundColor: '#ffffff',
//         height: 150,
//         marginTop: 20,
//         width: 335,
//         marginLeft: 10,
//         borderRadius: 10,
//         paddingLeft: 20,
//         paddingTop: 15,

//     },
//     text1: {
//         fontWeight: '700',
//     },
//     Edit1: {
//         color: '#DB3022',
//         marginLeft: 240,
//         marginTop: -18,
//         fontWeight: '500'
//     },
//     new: {
//         marginRight: 80,
//         marginTop: 10,

//     },
//     new1: {
//         marginTop: 17,
//         marginLeft: 20

//     },
//     btn: {
//         // borderWidth:1,
//         height: 50,
//         width: 50,
//         marginLeft: 290,
//         marginTop: 20,
//         borderRadius: 50,
//         backgroundColor: '#285F71'

//     },
//     checkbox: {

//     }
// })