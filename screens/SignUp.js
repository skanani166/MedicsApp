import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, Modal, Animated } from "react-native";
import backImg from '../assets/back (1).png';
import { useFormik } from "formik";
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';
// const ModalPoup = ({ visible, children }) => {
//   const [showModal, setshowModal] = useState(visible)
//   const scaleValue = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     toggleModal()
//   }, [visible])
//   const toggleModal = () => {
//     if (visible) {
//       setshowModal(true)
//       Animated.spring(scaleValue, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start()
//     } else {
//       setshowModal(false)
//       Animated.timing(scaleValue, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true
//       }).start()
//     }
//   }
//   return <Modal transparent visible={showModal}>
//     <View style={style.modal}>
//       <Animated.View style={[style.modalContainer, { transform: [{ scale: scaleValue }] }]}>
//         {children}</Animated.View>
//     </View>
//   </Modal>
// };

const SignUp = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [isSelected, setSelection] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [visible, setvisible] = useState(false)

  const validateForm = () => {
    let valid = true;
    if (name === '') {
      setNameError('Please enter your name');
      valid = false;
    } else {
      setNameError('');
    }
    if (email === '') {
      setEmailError('Please enter your email');
      valid = false;
    } else {
      setEmailError('');
    }
    if (password === '') {
      setPasswordError('Please enter your password');
      valid = false;
    } else {
      setPasswordError('');
    }
    return valid;
  };
  const handleSignUp = () => {
    if (validateForm()) {

    }
  };


  return (
    <View style={style.container}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>

      <Image source={backImg} style={{ width: 20, height: 20, marginRight: 300, marginTop: -20 }} />

      <View style={{ marginTop: 50 }}>
        <View style={style.inputContainer} >
          <Icon name="user" size={20} color="#555" style={style.icon} />
          <TextInput
            style={style.input}
            placeholder="Enter your name"
            onChangeText={setname}
            value={name}
          />
        </View>
        {nameError ? <Text style={{ marginTop: 5, color: 'red' }}>{nameError}</Text> : null}
      </View>


      <View style={[style.inputContainer, { marginTop: 20 }]}>
        <Icon name="envelope" size={20} color="#555" style={style.icon} />
        <TextInput
          style={style.input}
          placeholder="Enter your email "
          onChangeText={setemail}
          value={email}
        />
      </View>
      {emailError ? <Text style={{ marginTop: 5, marginLeft: -175, color: 'red' }}>{emailError}</Text> : null}
      <View style={[style.inputContainer, { marginTop: 20 }]}>
        <Icon name="lock" size={20} color="#555" style={style.icon} />
        <TextInput
          style={style.input}
          placeholder="Enter your password"
          onChangeText={setpassword}
          value={password}
          secureTextEntry
        />
      </View>
      {passwordError ? <Text style={{ marginTop: 5, marginLeft: -150, color: 'red' }}>{passwordError}</Text> : null}

      <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        <Text style={style.label}>l agree to the medidoc
          <Text style={{ color: '#199A8E' }}> Terms of Service</Text>
          <Text> and</Text>
          <Text style={{ color: '#199A8E' }}> Privacy Policy</Text>
        </Text>

      </View>



      {/* <ModalPoup visible={visible}>
        <View style={{ alignItems: 'center' }}>
          <View >
            <Image source={require('../assets/check.png')} style={{ height: 40, width: 40, marginTop: 10 }} />
          </View>
        </View>
        <View>
          <Text style={style.success}>Success</Text>
          <Text style={style.text5}>Your account has been successfully registered</Text>
        </View>
        <View>
          <TouchableOpacity style={style.button1} onPress={() => setvisible(false)}>
            <Text style={style.textbutton}>Login</Text>
          </TouchableOpacity>
        </View>
      </ModalPoup> */}
      {/* <TouchableOpacity onPress={() => setvisible(true)}>
        <View style={style.button}>
          <Text style={style.book}>SignUp</Text>
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={(handleSignUp)}>
        <View style={style.button}>
            <Text style={style.book}>SignUp</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ marginTop: 20 }}>Already have an account?
        <Text style={{ color: '#199A8E' }}> Log in</Text>
      </Text>

    </View>



  )
}

export default SignUp

const style = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 50,

  },

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    // alignSelf: 'center',
    marginTop: 25,
    marginLeft: 40,
    marginRight: -30
  },
  label: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,

  },
  inputContainer: {
    height: 40,
    width: 327,
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 30,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  errorBorder: {
    borderColor: 'red'
  },
  errorText: {
    color: 'red',
    marginLeft: 10,

  },
  // modal: {
  //   flex: 1,
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // modalContainer: {
  //   width: '80%',
  //   backgroundColor: 'white',
  //   paddingHorizontal: 20,
  //   paddingVertical: 30,
  //   borderRadius: 20,
  //   elevation: 20,
    
  // },
  // success: {
  //   marginLeft: 100,
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginTop: 20,
  // },
  // text5: {
  //   marginLeft: 10,
  //   marginTop: 10,
  //   fontSize: 16,
  //   color: '#A1A8B0'
  // },
  // button1: {
  //   backgroundColor: '#199A8E',
  //   borderRadius: 50,
  //   width: 180,
  //   height: 50,
  //   marginLeft: 50,
  //   marginTop: 15,
  //   alignItems:'center',
  //   justifyContent:'center'
  // },
  // textbutton: {
  //   color: '#fff',
  //   fontWeight: 'bold'
  // },
  button:{
    width:300,
    height:50,
    marginTop:20,
    // marginLeft:95,
    borderRadius:50,
    backgroundColor:'#199A8E',
    alignItems:'center',
    justifyContent:'center'
},
book:{
   color:'#fff',
    fontSize:16,
  
  
},

})

