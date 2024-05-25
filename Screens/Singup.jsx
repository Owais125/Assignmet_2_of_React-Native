import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Singup = () => {
  const navigation = useNavigation()
  const signip = () => {
    navigation.navigate('Login')

  }
  const home = () => {
    navigation.navigate('Bottom_Tab')

  }

  return (
    
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingBottom: 20 }}>
      <ScrollView>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <Image resizeMode='cover' height={350} source={{ uri: "https://img.freepik.com/free-vector/ice-fishing-abstract-concept-vector-illustration_335657-6342.jpg?t=st=1716556883~exp=1716557483~hmac=717acc5a64041ccc75180ed183eaea4c5048fb254f1835bc79827f34ae80d989" }} />
          <View style={{ gap: 20 }}>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>
                Create Account
              </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <TextInput keyboardType='email-address' style={{ borderColor: "black", borderWidth: 2, width: 350 }} placeholder='Enter The Email' />
            </View>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <TextInput style={{ borderColor: "black", borderWidth: 2, width: 350 }} placeholder='Enter The Password' />
            </View>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <TextInput style={{ borderColor: "black", borderWidth: 2, width: 350 }} placeholder='Enter The Confirm Password' />
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
              <TouchableOpacity onPress={home}>
                <Text style={{ textAlign: "center", backgroundColor: "#D552F0", color: "#FFFFFF", fontSize: 20, fontWeight: "bold", borderColor: "#D552F0", borderWidth: 2, padding: 10, width: 350 }}>
                  Create Account
                </Text>
              </TouchableOpacity>

            </View>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
              <Text style={{ fontSize: 15 }}>
                Already Have An Account?
                <TouchableOpacity onPress={signip}>
                  <Text style={{ color: "#D552F0", fontSize: 15 }} >
                    Login
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Singup

const styles = StyleSheet.create({})