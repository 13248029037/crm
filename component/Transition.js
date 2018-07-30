import React, { Component } from 'react';
import {FluidNavigator,Transition} from 'react-navigation-fluid-transitions'
import {
    View,
    Text,
    Button
} from 'react-native';

const Screen1 = (props) => (
    <Transition appear="scare">
    <View style={{height:500,width:300}}>
      <Text>Screen 1</Text>
      <View>
      {/* <Transition appear="scare"> */}
        <View style={{height:100,width:100,backgroundColor:'pink'}}/>
      {/* </Transition> */}
          
        
      </View>
      <Button
        title='Next'
        onPress={() => props.navigation.navigate('screen2')}
      />
    </View>
    </Transition>
  );

  const Screen2 = (props) => (
    <Transition appear="scare">
    <View style={{height:500,width:300}}>
      <Text>Screen 2</Text>
      <View >
       {/* <Transition appear="scare"> */}
            <View style={{height:100,width:100,backgroundColor:'green'}}/>
           
       {/* </Transition> */}
        
      </View>
      <Button
        title='Back'
        onPress={() => props.navigation.goBack()}
      />
    </View>
    </Transition>
  );


  export default FluidNavigator({
    screen1: { screen: Screen1 },
    screen2: { screen: Screen2 },
  },
{
  initialRouteName:'screen1'
})