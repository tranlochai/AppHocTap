import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Login from './App/Pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './App/Navigations/MainStack';

export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_ZnJhbmstZmlyZWZseS0zMi5jbGVyay5hY2NvdW50cy5kZXYk"}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar hidden />
          <SignedIn>
            <MainStack />
          </SignedIn>
          <SignedOut>
            <Login />
          </SignedOut>
        </SafeAreaView>
      </NavigationContainer>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});