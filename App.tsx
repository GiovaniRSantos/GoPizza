import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

import { SignIn } from '@src/screens/SignIn';

export default function App() {

  const [fontsLoaded] = useFonts({
    //chama as fontes que foram importadas
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if (!fontsLoaded) {
    //tratamento para caso as fontes nao sejam carregadas
    return <AppLoading />
  }

  return (
    //usando o tema criado na pasta theme
    <ThemeProvider theme={theme} >
      <SignIn />
    </ThemeProvider>
  );
}