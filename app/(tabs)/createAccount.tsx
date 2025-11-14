import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

// --- INSECURE KEY DEFINITION ---
const AUTH_TOKEN_KEY = 'current_auth_username'; 
// ---

const API_URL = "https://codescan.pythonanywhere.com/api/users/register/";

export default function CreateAccount() {
  const [userName, onChangeUserName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [passWord1, onChangePassword1] = React.useState("");
  const [password2, onChangePassword2] = React.useState("");
  const router = useRouter();

  const signUpPressed = async () => {
    if (!userName || !email || !passWord1 || !password2) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (passWord1 !== password2) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          username: userName,
          email: email,
          pass: passWord1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        credentials: 'include',
      });

      if (response.ok) {
    
        await AsyncStorage.setItem(AUTH_TOKEN_KEY, userName);
        console.log("SUCCESS: Username saved locally:", userName);

        Alert.alert('Success', 'Account Created! Logging you in.');
        router.navigate('/emailVerification');
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || `Server Error: ${response.status}`;
        Alert.alert('Registration Failed', errorMessage);
        console.error("Registration Error:", response.status, errorData);
      }
    } catch (error) {
      console.error("Network or connection error:", error);
      Alert.alert("Connection Error", "Could not connect to the server.");
    }
  };

  const loginPressed = () => {
    router.navigate("/login");
  };

  return (
    <View style = {{flex: 1, justifyContent: "space-between", alignItems: "center" }}>
      <View style = {{backgroundColor: "#824582", padding: 20,  width: "100%", height: "10%",  justifyContent: "center", alignItems: "center", borderRadius: 12,}}>
        <Text style = {{color : "white", fontWeight: "600", fontSize: 28}}>Sign Up</Text>
      </View>

      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{color : "white", fontWeight: "500", fontSize: 18, marginBottom: 10}}>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUserName}
          placeholder='Enter Username:'
          placeholderTextColor={'gray'}
          value={userName}
        />
      </View>
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{color : "white", fontWeight: "500", fontSize: 18, marginBottom: 10}}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder='Enter Email:(ex) .....@gmail.com'
          placeholderTextColor={'gray'}
          value={email}
          keyboardType='email-address'
        />
      </View>
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{color : "white", fontWeight: "500", fontSize: 18, marginBottom: 10}}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Password:'
          placeholderTextColor={'gray'}
          secureTextEntry={true}
          onChangeText={onChangePassword1}
          value={passWord1}
        />
      </View>
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{color : "white", fontWeight: "500", fontSize: 18, marginBottom: 10}}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Password:'
          placeholderTextColor={'gray'}
          secureTextEntry={true}
          onChangeText={onChangePassword2}
          value={password2}
        />
      </View>

      <TouchableHighlight style={{ width: "80%", alignItems: 'center' }} onPress={signUpPressed}>
        <View style={{ backgroundColor: '#824582', padding: 15, borderRadius: 20,  alignItems: 'center', width: "100%" }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Sign Up!</Text>
        </View>
      </TouchableHighlight>

      <View style={{ marginBottom: 50 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 20, 
    paddingLeft: 10, 
    width: 300, 
    borderRadius: 8, 
    color: "white"
  },
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