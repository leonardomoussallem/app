import { Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen';
import Details from './src/screen/Details';
import List from './src/screen/List';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FireBaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Meus a fazeres" component={List} />
      <InsideStack.Screen name="Detalhes" component={Details} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('User: ', user);
      setUser(user);
      setLoading(false);
    });

    // Clean up the listener on unmount
    return unsubscribe;
  }, []);

  // Show a loading indicator until we know the auth state
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} />
        ) : (
          <>
            <Stack.Screen name="HOME" component={HomeScreen} />
            <Stack.Screen name="LOGIN" component={LoginScreen} />
          </>
        )}
        <Stack.Screen name="SIGNUP" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
