import store from './Store';
import { Provider } from 'react-redux';
import Home from './Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Doctor from './Doctor';
import DoctorData from './DoctorData';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './SplashScreen';
import Slider from './Slider';
import Message from './Message';
import Profile from './Profile';
import { Ionicons } from '@expo/vector-icons';
import DoctorDetail from './DoctorDetail';
import DetailsScreen from './DetailsScreen';
import Appointment from './Appointment';
import DateAndTime from './DataAndTime';
import AllDetailsScreen from './AllDetailsScreen';
import SignIn from './Signin';
import LogIn from './Login';
import ForgotPassword from './ForgotPassword';
import OtpVerification from './OtpVerification';
import CreatePassword from './CreatePassword';
import HospitalData from './HospitalData';
import HospitalDetail from './HospitalDetail';
import BookAmbulance from './BookAmbulance';
import PharmacyData from './PharmacyData';
import PharmacyDetail from './PharmacyDetail';
import Chat from './Chat';
import Schedule from './Schedule';
import Search from './Search';
import MyCart from './MyCart';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Root = createStackNavigator();

const RootNavigator = () => {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }} >
      <Root.Screen name="Splash" component={SplashScreen} />
      <Root.Screen name="Slider" component={Slider} />
      <Stack.Screen name="Login" component={LogIn} options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name="Signin" component={SignIn} options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} options={{ headerTitleAlign: 'center' }} />
      <Root.Screen name="Home" component={TabNavigator} />
    </Root.Navigator>
  )
}

const MessageStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Message" component={MessageStack} />
      <Stack.Screen name="Schedule" component={Schedule} />  
    </Stack.Navigator>
  )
}

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }} >
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Doctors" component={Doctor} />
      <Stack.Screen name="DoctorData" component={DoctorData} />
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="DateAndTime" component={DateAndTime} />
      <Stack.Screen name="BookAmbulance" component={BookAmbulance} options={{ headerShown: false }} />
      <Stack.Screen name="DoctorDetail" component={DoctorDetail} options={{ title: 'Doctor Details' }} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="AllDetailsScreen" component={AllDetailsScreen} />
      <Stack.Screen name="Hospital" component={HospitalData} />
      <Stack.Screen name="HospitalDetail" component={HospitalDetail} options={{ title: 'Hospital Details' }} />
      <Stack.Screen name="Pharmacy" component={PharmacyData} />
      <Stack.Screen name="PharmacyDetail" component={PharmacyDetail} options={{ title: 'Pharmacy Details' }} />
      <Stack.Screen name="MyCart" component={MyCart} options={{ title: 'My Cart' }} />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
    
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#199f8a', tabBarInactiveTintColor: '#ADADAD' }} >
      <Tab.Screen name="Home" component={StackNavigator} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Message" component={MessageStack} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbox" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Schedule" component={Schedule} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
