
import React from 'react'
import {StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native'

export default props=> {

  const stylesBotoes=[styles.btn]

  if(props.duplo){
   stylesBotoes.push(styles.btnDuplo)
  }
  
  if(props.igual){
    stylesBotoes.push(styles.btnIgual)
  }
  
  if(props.operacao){
    stylesBotoes.push(styles.btnOper)
  }

  if(props.ac){
    stylesBotoes.push(styles.btnAC)
  }

  if(props.backspace){
    stylesBotoes.push(styles.btnBackspace)
  }
  
  return(
    <TouchableHighlight>
      onPress={props.aoClicar}

      <Text style={stylesBotoes}>{props.label}</Text>
    </TouchableHighlight>
  )
}




const styles = StyleSheet.create({
  btn:{
    fontSize:30,
    height:Dimensions.get('window').width/4,    
    width:Dimensions.get('window').width/4 ,   
    padding:20,
    backgroundColor:'#000',
    color:'#fff',
    borderWidth:1,
    borderColor:'#777',
    textAlign:'center',
  },
  btnOper:{
    color:'#0f0',
  },
  btnAC:{
    color:'#ff0',
  },
  btnBackspace:{
    color:'#0ff',
  },
  btnIgual:{
    color:'#f00',
  },
  btnDuplo:{
    width:(Dimensions.get('window').width/4)*2 ,
  }


})