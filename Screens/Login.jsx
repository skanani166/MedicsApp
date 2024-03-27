import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={handleLoginPress}>
        <Button title="Log in" color="#199A8E" />
      </TouchableOpacity>
    </View>
  );
};

export default Login;