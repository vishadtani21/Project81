import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Feed extends React.Component{
render(){
  return(
  <View 
  style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text> 
      Feed
    </Text>
  </View>
  );
  }
  
}