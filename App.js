import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import firebase from './services/firebaseConnection';
import AuthProvider from './src/contexts/auth';

console.disableYellowBox=true;

import Routes from './src/routes/index';

export default function App() {
 return (
  <NavigationContainer>
   <AuthProvider>
     <StatusBar backgroundColor="#2f424f" barStyle="light-content"/>
     <Routes/>
     </AuthProvider>
  </NavigationContainer>
  );
  
}