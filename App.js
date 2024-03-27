import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './SplashScreens/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from './SplashScreens/Slider';
import GeneralDoctor from './Doctor/GeneralDoctor';
import LungsDoctor from './Doctor/LungsDoctor';
import DentalDoctor from './Doctor/DentalDoctor';
import CardioDoctor from './Doctor/CardioDoctor';
import PsychoDoctor from './Doctor/PsychoDoctor';
import SurgeonDoctor from './Doctor/SurgeonDoctor';
import Covid19Doctor from './Doctor/Covid19Doctor';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
         <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Slider" component={Slider} />
      </Stack.Navigator>
    </NavigationContainer> 




  );
}

