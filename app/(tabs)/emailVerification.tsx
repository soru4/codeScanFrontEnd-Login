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

export default function EmailVerification() {
  const [userName, onChangeUserName] = React.useState('');
  const [code, onChangeCode] = React.useState('');
  
  const router = useRouter();
  const verified = () => {
     const response = fetch("https://Codescan.pythonanywhere.com/api/users/emailCheck/", {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        code : code,
        
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
   
    router.navigate('/');
    console.log('TouchableHighlight pressed!');
  }
  return (
    <View style = {{flex: 1, justifyContent: "space-between", alignItems: "center" }}>
      <View style = {{backgroundColor: "#824582", padding: 20,  width: "100%", height: "10%",  justifyContent: "center", alignItems: "center", borderRadius: 12,}}>
        <Text style = {{color : "white", fontWeight: "600", fontSize: 28}}>Email Verification</Text>
      </View>
        <View style = {{backgroundColor: "#303030ff", padding: 20,  width: "100%", height: "10%",  justifyContent: "center", alignItems: "center", borderRadius: 12,}}>
        <Text style = {{color : "white", fontWeight: "600", fontSize: 28}}>An Email Was Sent to xxxx@gmail.com</Text>
      </View>

      <View style={{justifyContent: "center", alignItems: "center"}}>
        <View>
          <Text style = {{color : "white", fontWeight: "900", fontSize: 18, marginBottom: "10%"}}>Input the code that was sent to the email address:</Text>
        </View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10, width: "100%", borderRadius: 8, color: "white"}}
          placeholder='Enter Code: XXXXXX'
          onChangeText={onChangeCode}
          
          value={code}
          
        />
      </View>

      <TouchableHighlight style={{ width: "30%", alignItems: 'center' }} onPress={verified}>
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
