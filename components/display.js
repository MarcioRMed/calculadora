import React from 'react'
import {StyleSheet, View, Text, } from 'react-native'
// ColorPropType
export default props=> {
  return(
  <View>
    <Text
      style={styles.textoDisplayOperacao}
      numberOfline={1}
      >{props.valor}
    </Text>
 
    <Text
      style={styles.textoDisplayResposta}
      numberOfline={1}
      >{props.resultado}
    </Text>
 
  
  </View>
)}

const styles = StyleSheet.create({
  display:{
    flex: 1,
    padding:20,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems:'center',
    width:'100%',
  },

textoDisplayResposta:{
  fontSize:50,
  color:'#fff',
},
textoDisplayOperacao:{
  fontSize:25,
  color:'#fff',

}
})