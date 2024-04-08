import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Iconicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from '../screens/HomeScreen';
import Message from '../screens/Message';
import Schedule from '../screens/Schedule';

// Screens name

const homeName = 'Home';
const message = 'Message';
const schedule = 'Schedule';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
    

    return(
        <NavigationContainer>
            <Tab.Navigator  initialRouteName={homeName}
           
            screenOptions={({route}) => ({
                headerShown : false,
                tabBarIcon: ({focused, color, size}) =>{
                        let iconName;
                        let rn = route.name;

                        if(rn === homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        }
                        else if (rn === message){
                            iconName = focused ? 'list' : 'list-outline';
                        }
                        else if (rn === schedule){
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return<Iconicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions = {{
                activeTintColor: '#199A8E',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom:10,fontSize:10},
                style: { padding:10, height:70}
            }}
            >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={message} component={Message}/>
                <Tab.Screen name={schedule} component={Schedule}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}