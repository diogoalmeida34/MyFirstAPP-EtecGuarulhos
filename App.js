import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [nome, setNome] = useState(''); 
  function enviaInfo(){
    alert('Olá!, '+(nome)+', bem-vindo(a) a escola!!!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Meu primeiro aplicativo!!!
      </Text>
      <TextInput style = {styles.campo} value = {nome} placeholder = "Digite seu nome" onChangeText = {(nome) => setNome(nome)}/>
      <TouchableOpacity style = {styles.botao} onPress = {enviaInfo}>
        <Text style = {styles.textobotao}> Mostrar </Text>
      </ TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  titulo: {
    fontSize: 30,
    marginTop: 25,
    textAlign: 'center',
  },
  campo: {
    backgroundColor: '#121212',
    borderRadius: 10,
    fontSize: 23,
    color: '#fff',
    margin: 10,
    padding: 10
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41AEF4',
    padding: 10
  },
  textobotao: {
    fontSize:25,
    color: '#fff'
  }
});
