import React, { Component } from 'react'
import {
    View,
    Text,

} from 'react-native'
import * as Animatable  from 'react-native-animatable';

Animatable.initializeRegistryWithDefinitions({
    myfade:{
        0: {
            opacity: 0,
            scale: 0,
          },
          0.5: {
            opacity: 0.5,
            scale: 0.3,
          },
          1: {
            opacity: 1,
            scale: 1,
          },
    },
    myfadeout:{
        0: {
            opacity: 1,
            scale: 1,
          },
          0.5: {
            opacity: 0.5,
            scale: 0.3,
          },
          1: {
            opacity: 0,
            scale: 0,
          },
    }
})
class Animation extends Component{
    constructor(props){
        super(props)
        this.state={
            in:true
        }
    }
    press(){
        this.setState({
            in:!this.state.in
        })
    }
    render(){
        return <Animatable.View  style={{backgroundColor:'blue',height:100}}>
            <Animatable.Text animation={this.state.in?"myfade":"myfadeout"} style={{backgroundColor:'red',height:50}}>11</Animatable.Text>
            <Text onPress={this.press.bind(this)}>333</Text>
        </Animatable.View>
    }
}


const Myapp =Animatable.createAnimatableComponent(Animation);


class Animations extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.info('xiaoshulin')
        console.info('xiaoshulin')
        console.info('xiaoshulin')
        console.info('xiaoshulin')
        console.info('xiaoshulin')
        console.info(new View(),'View')
        console.info(new Animation(),'Animation')
        alert('xiao')
        // return <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
                  return  <Myapp animation="pulse" easing="ease-out" iterationCount="infinite"  />          
                // </Animatable.View>
        
    }
}

export default Animations;