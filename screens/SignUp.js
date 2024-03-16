import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import backImg from './assets/back (1).png';

import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';


const SignUp = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>

      <Image source={backImg} style={{ width: 20, height: 20, marginRight: 300, marginTop: -20 }} />
      
      <View style={{marginTop:50}}>
      <View style={style.inputContainer} >
        <Icon name="user" size={20} color="#555" style={style.icon} />
        <TextInput
          style={style.input}
          placeholder="Enter your name"
          onChangeText={setname}
          value={name}
        />
      </View>
      </View>

      <View style={style.inputContainer}>
        <Icon name="envelope" size={20} color="#555" style={style.icon} />
        <TextInput
          style={style.input}
          placeholder="Enter your email "
          onChangeText={setemail}
          value={email}
        />
      </View>

      <View style={style.inputContainer}>
        <Icon name="lock" size={20} color="#555" style={style.icon} />
        <TextInput
          style={style.input}
          placeholder="Enter your password"
         onChangeText={setpassword}
         value={password}
         secureTextEntry
        />
      </View>

      <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        <Text style={style.label}>l agree to the medidoc  
        <Text style={{color:'#199A8E'}}> Terms of Service</Text>
        <Text> and</Text>
        <Text style={{color:'#199A8E'}}> Privacy Policy</Text>
        </Text>
        
      </View>


      <View style={{ width: 300 }}>
        <Button title="Sign Up"
          color={'#199A8E'}
        />
      </View>
      <Text style={{marginTop:20}}>Already have an account?
    <Text style={{color:'#199A8E'}}> Log in</Text>
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
    marginTop: -5,
    marginLeft: 40,
    marginRight: -30
  },
  label: {
    marginTop: -10,
    marginLeft: 50,
    marginRight: 50,

  },
  inputContainer: {
    height: 40,
    width: 327,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },

})

