import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Pages/Home'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
<Tab.Navigator screenOptions={{
    headerShown: false
}}>
  <Tab.Screen  
    name='Home'  
    component={Home}  
    options={{ 
      tabBarIcon: ({ color, size }) => ( 
        <Ionicons name="home" size={size} color={color} /> 
      ), 
      tabBarStyle: { display: 'none' }
    }} 
  /> 
</Tab.Navigator>

  );
}
