import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Bottom_Tab from './Bottom_Tab';
import Get_Started from '../../Screens/Get_Started';
import Login from '../../Screens/Login';
import Singup from '../../Screens/Singup';

const Stack_Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
 <NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false}} >
  <Stack.Screen name="Get_Started" component={Get_Started} />
  <Stack.Screen name="Singup" component={Singup} />
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Bottom_Tab" component={Bottom_Tab} />

  </Stack.Navigator>

 </NavigationContainer>
  )
}

export  {Stack_Navigation}

const styles = StyleSheet.create({})