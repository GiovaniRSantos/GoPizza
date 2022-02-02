import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components';

import { SignIn } from '@screens/SignIn';

import theme from './src/theme';

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
    //translucent define a status bar no topo, considerando o inicio da tela do dispositivo
    <ThemeProvider theme={theme} >
      <StatusBar style="light" translucent backgroundColor='transparent' />
      <SignIn />
    </ThemeProvider>
  );
}