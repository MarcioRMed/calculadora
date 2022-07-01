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

//--- informações --
  console.log('vTela' ,estados.valorTela)
  console.log('vVres' ,estados.resultado)
  console.log('operado' ,estados.operado)
  console.log('ponto', estados.ponto)

  const addDigito=(digito)=>{ 

    // --- tratamento erro do ponto ---
    if(digito=='+' || digito=='-' || digito=='/' || digito=='*'){
      estados.ponto=false
    }
    
    if(digito=='.' && !estados.ponto){
      estados.ponto=true
      estados.operado=false
    
    }else if(digito=='.' && estados.ponto){
      return
    }
    
    // joga resultado para tela de cálculo
    if((digito=='+' || digito=='-' || digito=='/' || digito=='*' || digito=='%') && estados.operado){
      estados.valorTela=estados.resultado
      estados.resultado=0
    }

    estados.valorTela=estados.valorTela + digito
    setVtela(estados.valorTela)
    setVres(estados.resultado)
    estados.operado= false



   //tratamento do conversor rem px
   if(digito && estadoRemPx){
     alert('por favor, digite o valor antes de converter')
  
  }


  if(estadoRemPx){
    alert('clicou')
  }

  console.log('digito', digito)

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
    // cálculo
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

  //--- conversões ---
  
    let rem=16 //1rem =16
    let estadoRemPx = false

    const remPx=()=>{      
        let valorPx = (estados.valorTela)*rem
        setVres(valorPx + ' px')
        estadoRemPx = true          
        console.log('estadoRemPx', estadoRemPx)       
      
        setVtela(estados.valorTela + ' rem')
      }
     
    const pxRem=()=>{
    let valorRem = (estados.valorTela)/ rem
      setVres(valorRem +' rem')
      setVtela(estados.valorTela + ' px')
    }
  


    const calcPorcento =()=>{
      let valorPorcentoDesejado
      let deQuanto
      
      let calcPorcento = setVtela(estados.valorTela)/100 * estados.resultado

    }
  


  return(
    <SafeAreaView style={styles.container}>
      <Text>Calculadora</Text>
      <Display valor={vtela} resultado={vres}/>      
    
    
    <View style={styles.botoes}>
    
    <Btn label='%' aoClicar={()=>{calcPorcento()}}></Btn>
    
    <Btn label='AC' ac aoClicar={()=>{opera('AC')}}></Btn> 

    <Btn label='Px -> Rem' ac aoClicar={()=>{pxRem()}}></Btn> 
    <Btn label='Rem -> Px' ac aoClicar={()=>{remPx()}}></Btn> 
    

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

