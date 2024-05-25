import { Image, StyleSheet, Text, TextBase, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Get_Started = () => {
  const navigation = useNavigation()
  const signip = ()=>{
    navigation.navigate('Singup')
  }
  const Login = ()=>{
    navigation.navigate('Login')
  }
  return (
    <View style={{backgroundColor: '#FCFCFC', flex:1}}>
       <Image resizeMode='cover' height={450}   source={{uri:"https://img.freepik.com/free-vector/ice-fishing-abstract-concept-vector-illustration_335657-6342.jpg?t=st=1716556883~exp=1716557483~hmac=717acc5a64041ccc75180ed183eaea4c5048fb254f1835bc79827f34ae80d989"}}/>
      
<View style={{gap:30}}>

<View  style={{justifyContent:"center",alignItems:'center'}}>

<Text style={{fontWeight:"bold",fontSize:20}}>
  Discover Amazing things !
</Text>
</View>
<View  style={{justifyContent:"center",alignItems:'center'}}>
  <TouchableOpacity onPress={signip}>
    <Text style={{textAlign:"center",backgroundColor:"#D552F0",color:"#FFFFFF",fontSize:20,fontWeight:"bold",borderColor:"#D552F0",borderWidth:2,padding:10,width:300}}>
      Create Account
    </Text>
  </TouchableOpacity>
</View>
<View  style={{justifyContent:"center",alignItems:'center'}}>
  <TouchableOpacity onPress={Login}>
    <Text style={{textAlign:"center",color:"black",fontSize:20,fontWeight:"400",borderColor:"black",borderWidth:2,padding:10,width:300}}>
     Signin
    </Text>
  </TouchableOpacity>
</View>

</View>

    </View>
  )
}

export default Get_Started

const styles = StyleSheet.create({})