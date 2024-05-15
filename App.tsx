import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  ButtomProximo  from './src/components/buttons/buttonProximo';
import ButtomCausasDiagnostico from './src/components/buttons/buttonCausasDiagnostico';
import Home from './src/pages/TelaInicial';

export default function App() {
  return (
      <Home numero={0.0} botao='Vai'/>
  );
}

