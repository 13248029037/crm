/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});








export default class App extends Component {
  render() {
    return (
      // <View style={{flex:1,backgroundColor:'blue'}}>
      //   <Transition></Transition>
      // </View>
     <View  style={{flex:1,backgroundColor:'green'}}>
         {/* <Router state={routes}></Router>   */}
     </View>
     
      // <Banner></Banner>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // border:'1 solid blue',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'skyblue',
    
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color:'green'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
