import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {removeSlide} from './global'
export default class BottomSlide extends Component{
    constructor(props){
        super(props)
        this.state = {
            show:true
        }
    }
    // componentWillReceiveProps(props){
    //     if(props.show){
    //         this.setState({
    //             show:props.show
    //         })
    //     }
    // }
    hildeSlide(){
        this.setState({
            show:false
        })
    }
    remove(){
        if(!this.state.show){
            removeSlide()
        }
    }

    render(){
        return (
                                
                                    <Animatable.View animation={this.state.show?"fadeInUp":"fadeOutDown"} onAnimationEnd={this.remove.bind(this)}  duration={300}  style={styles.wrap}>
                                        <TouchableOpacity onPress={this.hildeSlide.bind(this)} style={styles.wrap}>
                                            <Animatable.Text  style={{color:'#fff'}}>33333</Animatable.Text>
                                        </TouchableOpacity>    
                                    </Animatable.View>
                                 

        )
    }
}


const styles = StyleSheet.create({
    wrap:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex:10000,
        backgroundColor:"rgba(0,0,0,0.7)"
    }
})