import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function HomeScreen() {
  const [userName, onChangeUserName] = React.useState("");
  const [passWord, onChangePassword] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const AUTH_TOKEN_KEY = 'current_auth_username'; 
  const router = useRouter();
  
  const logoutPressed = async() => {
    const response = fetch(
      "https://Codescan.pythonanywhere.com/api/users/logout/",
      {
        method: "POST",
        body: JSON.stringify({
          success: true,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },});
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY);

    router.navigate("/logout");
    console.log("TouchableHighlight pressed!");
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ color: "white" }}>HOME</Text>
      <TouchableHighlight
        style={{ backgroundColor: "#585858ff", width: "50%" }}
        onPress={() => router.navigate("/login")}
      >
        <Text style={{ color: "white" }}>Go to Login</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          backgroundColor: "#585858ff",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
        onPress={() => logoutPressed()}
      >
        <Text style={{ color: "white" }}>Go to Logout</Text>
      </TouchableHighlight>
      <View style={{ marginBottom: "30%" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
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
