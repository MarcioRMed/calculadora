import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

export default function App() {
  
  const [valor1,setValor1]=useState(0)
  const [valor2,setValor2]=useState(0)
  const [resultado,setResultado]=useState(0)

  const soma=()=>{
    setResultado(parseInt(valor1) + parseInt(valor2))}

  return(
    <SafeAreaView style={styles.container}>
      <Text>Calculadora</Text>
      
      <TextInput
      style={styles.display}
      value={String(valor1)}
      onChangeText={(texto)=> {setValor1(texto)}}
      // keyboardType='numeric'
      />
      
      <TextInput
      style={styles.display}
      value={String(valor2)}
      onChangeText={(texto)=> {setValor2(texto)}}
      // keyboardType='numeric'
      />
     
      <TextInput
      style={styles.display}
      value={String(resultado)}
      onChangeText={(texto)=> {setResultado(texto)}}
      // keyboardType='numeric'
      />

      <TouchableHighlight
        style={styles.btn}
        onPress={()=>soma()}
      >

        <Text style={styles.txtBtn}>Somar</Text>
      </TouchableHighlight>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    padding:10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  display:{
    borderWidth:1,
    borderRadius:10,
    padding:10,
  },
  btn:{
    backgroundColor:'#555',
    padding:20,

  },
  txtBtn:{
    Color:'#fff'

  }
});
