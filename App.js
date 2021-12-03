import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavDemo1 from './components/NavDemo1'
import Budget from "./components/Budget";
import Popular from "./components/Popular";
import CounterDemoWithContext from "./components/CounterDemoWithContext";
import ScreenDemo from "./components/ScreenDemo";
import NavContext from "./components/NavContext"

export default function App() {
  return (
   <NavContext/>
  );
}


