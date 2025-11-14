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

const AUTH_TOKEN_KEY = 'current_auth_username'; 


const LOGIN_URL = "https://Codescan.pythonanywhere.com/api/users/login/";

export default function LoginScreen() {
  const [userName, onChangeUserName] = React.useState("");
  const [passWord, onChangePassword] = React.useState("");
  const router = useRouter();

  const loginPressed = async() => {
    if (!userName || !passWord) {
        Alert.alert("Error", "Please enter both username and password.");
        return;
    }

    try {
        const response = await fetch(LOGIN_URL, {
            method: "POST",
            body: JSON.stringify({
                username: userName,
                pass: passWord,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            credentials: 'include',
        });

        if (response.ok) {
            await AsyncStorage.setItem(AUTH_TOKEN_KEY, userName);
            console.log("SUCCESS: Username saved locally:", userName);
            
            Alert.alert("Success", "Logged in successfully.");
            router.navigate("/emailVerification");

        } else {
            const errorData = await response.json().catch(() => ({}));
            const errorMessage = errorData.error || `Server Error: ${response.status}`;
            
            if (response.status === 401) {
                Alert.alert("Login Failed", "Invalid username or password.");
            } else {
                Alert.alert("Login Error", errorMessage);
                console.error("Server Login Error:", response.status, errorData);
            }
        }
    } catch (error) {
        console.error("Network or connection error:", error);
        Alert.alert("Connection Error", "Could not connect to the server.");
    }
  };

  const signUpPressed = () => {
    router.navigate("/createAccount");
  };
  const resetPasswordPressed = () => {
    router.navigate("/resetPassword1");
  };


  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <View
        style={{
          backgroundColor: "#824582",
          padding: 20,
          width: "100%",
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 28 }}>
          Login Screen
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Username:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUserName}
          placeholder="Enter Username:"
          placeholderTextColor={"gray"}
          value={userName}
        />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Password:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password:"
          placeholderTextColor={"gray"}
          secureTextEntry={true}
          onChangeText={onChangePassword}
          value={passWord}
        />
      </View>

      <TouchableHighlight
        style={{ width: "80%", alignItems: "center" }}
        onPress={loginPressed}
      >
        <View
          style={{
            backgroundColor: "#824582",
            padding: 15,
            borderRadius: 20,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
            Login!
          </Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.smallButtonWrapper}
        onPress={signUpPressed}
      >
        <View style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Create An Account!</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.smallButtonWrapper}
        onPress={resetPasswordPressed}
      >
        <View style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Forgot Password!</Text>
        </View>
      </TouchableHighlight>

      <View style={{ marginBottom: 50 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: 300, 
    borderRadius: 8,
    color: "white",
  },
  smallButtonWrapper: {
    width: "60%",
    alignItems: "center",
  },
  smallButton: {
    backgroundColor: "#824582",
    padding: 5,
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
  },
  smallButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    position: "absolute",
  },
});
