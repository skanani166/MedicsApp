import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Signup = () => {
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View>
      <Text>Signup</Text>
      <TouchableOpacity onPress={handleSignupPress}>
        <Button title="Sign up" color="#199A8E" />
      </TouchableOpacity>
    </View>
  );
};

export default Signup;