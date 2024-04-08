import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import DoctorDetail from "./DoctorDetail";
import Appointment from "./Appointment";
import { NavigationContainer } from '@react-navigation/native';
import DrugsDetail from "./DrugsDetail";


import MyCart from "./MyCart";
import SavePage from "./SavePage";


const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen options={{headerShown:false}} name="DoctorDetail" component={DoctorDetail}/>
        <Stack.Screen options={{headerShown:false}} name="Appointment" component={Appointment}/> */}
        <Stack.Screen options={{headerShown:false}} name="DrugsDetail" component={DrugsDetail}/>
        <Stack.Screen options={{headerShown:false}} name="SavePage" component={SavePage} />
        <Stack.Screen options={{headerShown:false}} name="MyCart" component={MyCart}/>
       
      </Stack.Navigator>
     </NavigationContainer>
  );
};

export default StackScreen;






