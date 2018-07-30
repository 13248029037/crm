import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import * as Animatable from 'react-native-animatable'
export default class BottomSlide extends Component{
    constructor(props){
        super(props)
        this.state = {
            show:false
        }
    }
    componentWillReceiveProps(props){
        if(props.show){
            this.setState({
                show:props.show
            })
        }
    }
    hildeSlide(){
        this.toggleBottomSlide();
    }
    animationEnd(){   
        this.setState({
            show:this.props.show
        })
    }
    render(){
        return (
            this.state.show?(
                                
                                    <Animatable.View animation={this.props.show?"fadeInUp":"fadeOutDown"} onAnimationEnd={this.animationEnd.bind(this)} duration={200}  style={styles.wrap}>
                                        <TouchableOpacity onPress={this.hildeSlide.bind(this)} style={styles.wrap}>
                                            <Animatable.Text  style={{color:'#fff'}}>33333</Animatable.Text>
                                        </TouchableOpacity>    
                                    </Animatable.View>
                                 
                            ):null

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
        zIndex:100,
        backgroundColor:"rgba(0,0,0,0.7)"
    }
})