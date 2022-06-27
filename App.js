import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import Display from './components/display'
import Btn from './components/botoes'

export default function App() {
  
  const [operacao,setOperacao]=useState(0)
  const [resultado,setResultado]=useState(0)

  const operar=()=>{
    // setResultado(parseInt(valor1) + parseInt(valor2))}
    setResultado(eval(operacao)) //A função eval() computa um código JavaScript representado como uma string.
 }

  return(
    <SafeAreaView style={styles.container}>
      <Text>Calculadora</Text>
      <Display valor={0} resultado={0}/>      
    

    <View style={styles.botoes}>
    <Btn label='7' aoClicar={()=>{}}></Btn>

    </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    padding:20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  botoes:{
    flexDirection:'row',
    flexWrap:'wrap',
  }
 
});
