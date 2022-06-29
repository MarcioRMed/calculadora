import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Display from './components/display'
import Btn from './components/botoes'

let estados={
  valorTela:'',
  resultado:0,
  operado:false,
  ponto:false,
}

export default function App() {
  
  const [vtela,setVtela]=useState(estados.valorTela)//valor tela
  const [vres,setVres]=useState(estados.resultado) //valor resposta

  const addDigito=(digito)=>{

    estados.valorTela=estados.valorTela + digito
    setVtela(estados.valorTela)
    setVres(estados.resultado)
    estados.operado= false

    
    if((digito=='+' || digito=='-') || digito=='/' || digito=='*' && estados.operado){
      estados.valorTela=estados.resultado
      estados.resultado=0
    }

  }

  const limparTela=()=>{
    estados={
      valorTela:'',
      resultado:0,
      operado:false,
      ponto:false,
    }

    setVtela(estados.valorTela)
    setVres(estados.resultado)
  }


  const opera=(digito)=>{
    if(digito=='AC'){
      limparTela()
      return
    }
    if(digito=='backspace'){
      estados.valorTela=vtela.substring(0,(vtela.length-1)) //retorna a parte da string entre os índices inicial e final
      setVtela(estados.valorTela)
      return
    }
    try{
      estados.resultado=eval(estados.valorTela)
      estados.operado=true
      setVres(estados.resultado)

    }catch{
      estados.resultado='Erro'
      estados.operado=true
      setVres(estados.resultado)
    }

  }


  return(
    <SafeAreaView style={styles.container}>
      <Text>Calculadora</Text>
      <Display valor={vtela} resultado={vres}/>      
    
    <View style={styles.botoes}>
    <Btn label='AC' ac aoClicar={()=>{opera('AC')}}></Btn> 
    <Btn label='(' aoClicar={()=>{addDigito('(')}}></Btn>
    <Btn label=')' aoClicar={()=>{addDigito(')')}}></Btn>
    <Btn label='/' operacao aoClicar={()=>{addDigito('/')}}></Btn> 
    <Btn label='7' aoClicar={()=>{addDigito('7')}}></Btn>
    <Btn label='8' aoClicar={()=>{addDigito('8')}}></Btn>
    <Btn label='9' aoClicar={()=>{addDigito('9')}}></Btn>
    <Btn label='*' operacao aoClicar={()=>{addDigito('*')}}></Btn>
    <Btn label='4' aoClicar={()=>{addDigito('4')}}></Btn>
    <Btn label='5' aoClicar={()=>{addDigito('5')}}></Btn>
    <Btn label='6' aoClicar={()=>{addDigito('6')}}></Btn>
    <Btn label='-' operacao aoClicar={()=>{addDigito('-')}}></Btn>
    <Btn label='1' aoClicar={()=>{addDigito('1')}}></Btn>
    <Btn label='2' aoClicar={()=>{addDigito('2')}}></Btn>
    <Btn label='3' aoClicar={()=>{addDigito('3')}}></Btn>
    <Btn label='+' operacao aoClicar={()=>{addDigito('+')}}></Btn>
    <Btn label='0' aoClicar={()=>{addDigito('0')}}></Btn>
    <Btn label='.' aoClicar={()=>{addDigito('.')}}></Btn>
    <Btn label='<-' backspace aoClicar={()=>{opera('backspace')}}></Btn>
    <Btn label='=' igual aoClicar={()=>{opera('=')}}></Btn>

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

