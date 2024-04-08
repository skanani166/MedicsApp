// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import SignUp from './screens/SignUp';
// import SuccessLogin from './screens/SuccessLogin';
// import HomeScreen from './screens/HomeScreen';
// import Search from './screens/Search';
// import Message from './screens/Message';
// import Schedule from './screens/Schedule';


// const App = () =>{
//   return(
//     // <SignUp />
//     // <SuccessLogin />
//     // <HomeScreen />
//     // <Search />
//     // <Message />
//     // <Search />
//     // <Schedule />
   
//   )
// }

// export default App;


import   { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



import MyCart from './screens/MyCart';
import DrugsDetail from './screens/DrugsDetail';
import HomeScreen from './screens/HomeScreen';
import Schedule from './screens/Schedule';
import SavePage from './screens/SavePage';
import StackScreen from './screens/StackScreen';

import MainContainer from './navigation/MainContainer';

const Stack = createStackNavigator();

function App(){
  return(
  //  <DrugsDetail/>
    // <MyCart/>
    // <HomeScreen/>
    // <Schedule/>
    // <SavePage/>
    // <FavoriteProvider/>
    // <MainContainer/>
    <StackScreen/>
    
 
  )
  
}
export default App;

