import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import React from 'react';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ResetPassword() {
  const [email, onChangeEmail] = React.useState('');
  const router = useRouter();
  const resetPasswordPressed = () => {
      const response = fetch("https://Codescan.pythonanywhere.com/api/users/checkEmail/", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        
        
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    router.navigate({
  pathname: "/resetPassword2", 
  params: { email: email }, 
});
    alert('Reset Link Sent!');
  }
  return (
    <View style = {{flex: 1, justifyContent: "space-between", alignItems: "center" }}>
      <View style = {{backgroundColor: "#824582", padding: 20,  width: "100%", height: "10%",  justifyContent: "center", alignItems: "center", borderRadius: 12,}}>
        <Text style = {{color : "white", fontWeight: "600", fontSize: 28}}>Reset Screen</Text>
      </View>

       <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{color : "white", fontWeight: "500", fontSize: 18, marginBottom: 10}}>Email:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10, width: "300%", borderRadius: 8, color: "white"}}
          onChangeText={onChangeEmail}
          placeholder='Enter email:'
          value={email}
      
        />
      </View>


      <TouchableHighlight style={{ width: "30%", alignItems: 'center' }} onPress={ resetPasswordPressed}>
        <View style={{ backgroundColor: '#824582', padding: 15, borderRadius: 20,  alignItems: 'center', width: "100%" }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Continue!</Text>
        </View>
      </TouchableHighlight>

           <View style={{ marginBottom: 50 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
