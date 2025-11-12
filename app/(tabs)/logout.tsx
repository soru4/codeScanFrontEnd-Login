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

export default function LoginScreen() {
  const [userName, onChangeUserName] = React.useState('');
  const [passWord, onChangePassword] = React.useState('');

  const router = useRouter();
  
  const loginPressed = () => {
    router.navigate('/emailVerification');
    console.log('TouchableHighlight pressed!');
  };
    const signUpPressed = () => {
        router.navigate('/createAccount');
    console.log('TouchableHighlight pressed!');
  };
    const resetPasswordPressed = () => {
        router.navigate('/resetPassword1');
    console.log('TouchableHighlight pressed!');
  };
  return (
    <View style = {{flex: 1, justifyContent: "space-between", alignItems: "center" }}>
      <View style = {{backgroundColor: "#824582", padding: 20,  width: "100%", height: "10%",  justifyContent: "center", alignItems: "center", borderRadius: 12,}}>
        <Text style = {{color : "white", fontWeight: "600", fontSize: 28}}>Logout Screen</Text>
      </View>
        <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{color : "white", fontWeight: "500", fontSize: 18, marginBottom: 10}}>You have been logged out. Click the button below to go home!</Text>
        </View>
        <TouchableHighlight style={{backgroundColor: "#585858ff", padding: 10, borderRadius: 8}}onPress={() => router.navigate('/')}>
        <Text style={{color:"white", fontSize: 16}}>Go to Home</Text>
      </TouchableHighlight>
      
      

           <View style={{ marginBottom: "30%" }}></View>
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
