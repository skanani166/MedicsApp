import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from "./Screens/SplashScreen";
import Slider from "./Screens/Slider";

import Message from "./Screens/Message";
import Profile from "./Screens/Profile";
import Calender from "./Screens/Calender";
import Home from "./Screens/Home";

import Doctor from "./Screens/Doctor";
import DoctorDetail from "./Screens/DoctorDetails";
import Category from "./Screens/Category";
import Ambulance from "./Screens/Ambulance";
import BookAmbulance from "./Screens/BookAmbulance";

import AllItem from "./Screens/AllItem";
import Details from "./Screens/Details";
import Appoint from "./Screens/Appointment"
import Search from "./Screens/Search";
const { Appointment, TopDoctorAppointment, AllTopDoctorAppointment } = Appoint;
const { AllArticle, TopDoctor, AllTopDoctor, Artical, Hospital, Pharmacy } = AllItem;
const { ArticleDetail, AllArticleDetail, TopDoctorDetail, AllTopDoctorDetail, HospitalDetail, PharmacyDetail } = Details

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Root = createStackNavigator();

const RootNavigator = () => {
  return (
    <Root.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Root.Screen name="Splash" component={SplashScreen} />
      <Root.Screen name="Slider" component={Slider} />
      <Root.Screen name="Home" component={TabNavigator} />
    </Root.Navigator>
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
      <Tab.Screen name="Message" component={Message} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbox" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Schedule" component={Calender} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Doctors" component={Doctor} options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name="DoctorDetails" component={DoctorDetail} options={{ title: 'Doctor Detail' }} />
      <Stack.Screen name="Ambulance" component={Ambulance} options={{ title: 'Ambulance' }} />
      <Stack.Screen name="BookAmbulance" component={BookAmbulance} options={{ title: 'Ambulance' }} />
      <Stack.Screen name="Hospital" component={Hospital} />
      <Stack.Screen name="HospitalDetails" component={HospitalDetail} options={{ title: 'Hospital Detail' }} />
      <Stack.Screen name="Pharmacy" component={Pharmacy} />
      <Stack.Screen name="PharmacyDetails" component={PharmacyDetail} options={{ title: 'Pharmacy Detail' }} />
      <Stack.Screen name="Appointment" component={Appointment} options={{ title: 'Appointment' }} />
      <Stack.Screen name="TopDoctorAppointment" component={TopDoctorAppointment} options={{ title: 'TopDoctor Appointment' }} />
      <Stack.Screen name="AllTopDoctorAppointment" component={AllTopDoctorAppointment} options={{ title: 'TopDoctor Appointment' }} />

      <Stack.Screen name="TopDoctor" component={TopDoctor} options={{ title: 'Top Doctor Detail' }} />
      <Stack.Screen name="TopDoctorDetails" component={TopDoctorDetail} options={{ title: 'Top Doctor Detail' }} />
      <Stack.Screen name="AllTopDoctor" component={AllTopDoctor} options={{ title: 'Top Doctor' }} />
      <Stack.Screen name="AllTopDoctorDetails" component={AllTopDoctorDetail} options={{ title: 'Top Doctor Detail' }} />

      <Stack.Screen name="Article" component={Artical} options={{ title: 'Article' }} />
      <Stack.Screen name="ArticleDetails" component={ArticleDetail} options={{ title: 'Article Detail' }} />
      <Stack.Screen name="AllArticle" component={AllArticle} options={{ title: 'Article' }} />
      <Stack.Screen name="AllArticleDetails" component={AllArticleDetail} options={{ title: 'Article Detail' }} />
    </Stack.Navigator>

  );
}

const AppNavigator = () => {
  return (
    <RootNavigator />
  );
}

export default AppNavigator;