import { Tabs } from 'expo-router';
import React from 'react';
import HomeScreen from '.';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import LoginScreen from './login';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
      tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color="white" />,
      }}
      />
     
       <Tabs.Screen
      name="ai"
      options={{
        title: 'AI',
        tabBarIcon: ({ color }) => <Entypo name="star-outlined" size={24} color="white" />,
      }}
      />
      <Tabs.Screen
      name="profile"
      options={{
        title: 'Account',
        tabBarIcon: ({ color }) =><MaterialCommunityIcons name="face-woman-profile" size={24} color="white" />,
      }}
      />
      <Tabs.Screen
      name="login"
      //component ={LoginScreen}
      options={{
        href: null,
      }}
      />
      <Tabs.Screen
      name="createAccount"
      //component ={LoginScreen}
      options={{
        href: null,
      }}
      />
        <Tabs.Screen
      name="resetPassword1"
      //component ={LoginScreen}
      options={{
        href: null,
      }}
      />
       <Tabs.Screen
      name="resetPassword2"
      //component ={LoginScreen}
      options={{
        href: null,
      }}
      />
        <Tabs.Screen
      name="emailVerification"
      //component ={LoginScreen}
      options={{
        href: null,
      }}
      />
       <Tabs.Screen
      name="logout"
      //component ={LoginScreen}
      options={{
        href: null,
      }}
      />
    </Tabs>
    
  );
}
