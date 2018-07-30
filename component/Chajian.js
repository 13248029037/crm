import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    AppRegistry
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

// import Toast from 'react-native-root-toast';

Component.prototype.ToastArr=[];
class Icon extends Component{  //图标字体
    render(){
        return <View>
                <TouchableOpacity>
                    <Text style={{fontFamily:'iconfont',color:'red',fontSize:30,fontWeight:'400'}}>&#xe609;  &#xe749;</Text>         
                </TouchableOpacity> 
            </View>
    }
}

class Toasts extends Component{  // Toast

    constructor(props){
        super(props)
        this.state ={
            show:true
        }
        setTimeout(()=>{
            this.setState({
                show:false
            })
        },2000)
    }


    render(){
        return <Animatable.View style={{position:'absolute',left:120,top:'50%',backgroundColor:'red',width:100,height:50}}  animation={this.state.show?'myfade':'myfadeout'} easing="linear" duration={1000} >
                <Text style={{backgroundColor:'blue',height:'100%',lineHeight:50,textAlign:'center',color:'#fff'}}>{this.props.name}</Text>
              </Animatable.View> 
              
    }
}

class Index extends Component{

    constructor(props){
        super(props)
        this.state ={
            toast:[]
        }
    }
    press(){
        // alert('xiao')
        // AppRegistry.registerComponent('AwesomeProject',<Toasts/>)
        console.info(this.ToastArr)
        let num =Math.floor(Math.random()*1000000);
        this.ToastArr.push(num )
        this.setState({
            toast:this.ToastArr
        })
        setTimeout(()=>{
            this.ToastArr = this.ToastArr.filter(item => item !=num)
            this.setState({
                toast:this.ToastArr
            })
        },5000)
    }
    render(){
        console.info('xiao')
        return <View style={{flex:1}}>    
                <Text onPress={this.press.bind(this)}>11</Text>
                {this.state.toast.map(item=>{
                    return <Toasts key={item} name={item}></Toasts>
                })}                
        </View>    
    }
}

export default Index