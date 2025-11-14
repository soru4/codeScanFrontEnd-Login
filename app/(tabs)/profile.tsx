import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from 'react-native'; 
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

// --- INSECURE KEY DEFINITION ---
const AUTH_TOKEN_KEY = 'current_auth_username'; 
// ---

type Props = {};

export default function AccountPage({}: Props) {
  const router = useRouter();
  
  const [username, setUsername] = useState("Loading..."); 

  useEffect(() => {
    loadLocalUser(); 
  }, []); 
  
  const loadLocalUser = async () => {
    
    const savedUsername = await AsyncStorage.getItem(AUTH_TOKEN_KEY);

    if (savedUsername) {
        setUsername(savedUsername); 
    } else {
        setUsername("Anonymous");
    }
  };

  const handleRefresh = () => {
    loadLocalUser();
  }

  const handleLogout = async () => {
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    Alert.alert("Logged Out", "You have been successfully logged out.");
    router.replace('/login');
  }


  return (
    <View style={styles.container}> 
      <Text style={styles.header}>Profile</Text>
      <Text style={styles.text}>Status: {status}</Text>
      <Text style={styles.text}>
        Currently logged in user is: *{username}*
      </Text>
      
      <View style={styles.buttonContainer}>
          <Button title="Refresh Data" onPress={handleRefresh} />
          <Button title="Logout" onPress={handleLogout} color="red" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#000000', 
        paddingTop: 50, 
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white', 
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        color: 'white',
        marginVertical: 5,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});