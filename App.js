import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

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
      
      <View style={styles.display}>
      <TextInput
      style={styles.txtDisplayOperacao}
      value={String(operacao)}
      onChangeText={(texto)=> {setOperacao(texto)}}
      // keyboardType='numeric'
      />
               
      <TextInput
      style={styles.txtDisplayResultado}
      value={String(resultado)}
      onChangeText={(texto)=> {setResultado(texto)}}
      // keyboardType='numeric'
      />
      </View>

      <View>
      <TouchableHighlight
        style={styles.btn}
        onPress={()=>operar()}
      >

        <Text style={styles.txtBtn}>Somar</Text>
      </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    padding:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  display:{
    backgroundColor:'#333',
    padding:20,

  },
  txtDisplayOperacao:{
    color:'#fff',   
    padding:10,

  },
  txtDisplayResultado:{
    color:'#fff',
    padding:10,
  },

  btn:{
    backgroundColor:'#555',
    padding:30,

  },
  txtBtn:{
    color:'#fff',
    

  }
});
