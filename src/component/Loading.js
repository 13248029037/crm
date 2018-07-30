import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import * as  Animatable from 'react-native-animatable'
Animatable.initializeRegistryWithDefinitions({
    myrotate:{
        0: {
            transform:[{rotateZ:"0deg"}],
          },
          1: {
            transform:[{rotateZ:"720deg"}],
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
export default class Loading extends Component{
    static defaultProps = {
        value:'hello world'
    }
    constructor(props){
        super(props)
        this.state = {
            show:true
        }

        setTimeout(()=>{
            this.setState({
                show:false
            })
        },3000)
    }
    render(){
        return <Animatable.View   style={styles.box}>
            <Animatable.Text animation={'myrotate'}  iterationCount={"infinite"} duration={3200} easing="linear" style={{color:'#aaa',fontSize:16,fontFamily:'iconfont',height:16,lineHeight:16,textAlign:'center'}}>&#xe643;</Animatable.Text>
            <Animatable.Text style={{color:'#aaa',textAlign:'center',marginTop:10}}>加载中...</Animatable.Text>
        </Animatable.View>
    }
}

const styles = StyleSheet.create({
    box:{
        position:'absolute',
        zIndex:1000000,
        maxWidth:140,
        padding:5,
        height:80,
        width:80,
        borderRadius: 6, 
        backgroundColor: 'rgba(0, 0, 0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
       
    }
})