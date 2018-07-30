import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import * as  Animatable from 'react-native-animatable'

export default class Toast extends Component{
    static defaultProps = {
        value:'hello world 想实现一个背景音乐，每次跳路由音乐组件不渲染，怎么实现想实现一个背景音乐，每次跳路由音乐组件不渲染，怎么实现'
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
        return <Animatable.View animation={this.state.show?"fadeIn":"fadeOut"} duration={400} style={styles.box}>
            <Animatable.Text style={{color:'#fff'}}>{this.props.value}</Animatable.Text>
        </Animatable.View>
    }
}

const styles = StyleSheet.create({
    box:{
        position:'absolute',
        zIndex:1000000,
        maxWidth:140,
        // left:'50%',
        // top:'50%',
        // marginRight:100,
        // transform:[{
        //     translateX:'-50%'
        // }],
        padding:5,
        borderRadius: 6,
        // backgroundColor:'#15170a',   
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
       
    }
})