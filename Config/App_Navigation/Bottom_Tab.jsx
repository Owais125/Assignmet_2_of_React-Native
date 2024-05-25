import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../Screens/Home'

const Bottom_Tab = () => {
  // const Tab = createBottomTabNavigator()
return(
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
  <Text style={{fontSize:55,fontWeight:"bold"}}>Home Page</Text>
</View>
)
 
}

export default Bottom_Tab

const styles = StyleSheet.create({})