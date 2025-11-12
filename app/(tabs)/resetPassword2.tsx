import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import React from 'react';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { useRouter ,useLocalSearchParams } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ResetPassword1() {
  const [code, onChangeCode] = React.useState('');
  const [pass, onChangePassword] = React.useState('');
  const [pass1, onChangePassword1] = React.useState('');
  const router = useRouter();
  const params = useLocalSearchParams();


  const resetPasswordPressed = () => {
    const response = fetch("https://Codescan.pythonanywhere.com/api/users/resetPassword/", {
      method: "POST",
      body: JSON.stringify({
        email: params.email,
        
        code: code,
        pass: pass,

        
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    router.navigate('/login');
    alert('Back to login!');
  }
  return (
    <View style = {{flex: 1, justifyContent: "space-between", alignItems: "center" }}>
      <View style = {{backgroundColor: "#824582", padding: 20,  width: "100%", height: "10%",  justifyContent: "center", alignItems: "center", borderRadius: 12,}}>
        <Text style = {{color : "white", fontWeight: "600", fontSize: 28}}>Reset Screen</Text>
      </View>

       <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{color : "white", fontWeight: "500", fontSize: 18, marginBottom: 10}}>Code:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10, width: "300%", borderRadius: 8, color: "white"}}
          onChangeText={onChangeCode}
          placeholder='Enter code: (XXXXXX)'
          value={code}
      
        />
      </View>
           <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{color : "white", fontWeight: "500", fontSize: 18, marginBottom: 10}}>Password:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10, width: "300%", borderRadius: 8, color: "white"}}
          onChangeText={onChangePassword}
          placeholder='Enter password:'
          value={pass}
      
        />
      </View>
         <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{color : "white", fontWeight: "500", fontSize: 18, marginBottom: 10}}>Confirm Password:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10, width: "300%", borderRadius: 8, color: "white"}}
          onChangeText={onChangePassword1}
          placeholder='Confirm password:'
          value={pass1}
      
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
