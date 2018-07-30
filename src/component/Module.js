import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {removeModule} from './global'
export default class BottomSlide extends Component{
    constructor(props){
        super(props)
        this.state = {
            show:true
        }
    }

    hideModule(){
        this.setState({
            show:false
        })
    }
    animationEnd(){  
        if(!this.state.show) {
            removeModule();
        }
       
    }
    render(){
        return (                           
                                    <Animatable.View animation={this.state.show?"fadeInUp":"fadeOutDown"} onAnimationEnd={this.animationEnd.bind(this)} duration={300}  style={styles.wrap}>
                                        <TouchableOpacity  style={styles.wrap}>
                                            <Animatable.Text  style={{color:'#fff'}}>33333</Animatable.Text>
                                        </TouchableOpacity>    
                                        <View style={styles.box}>
                                            <Text style={{color:'#000',padding:5}}>显示2017年2月28日 - 个人主页:欢迎一起分享 链接:http://cherylgood.cn/20170228/44   1、react-native-router-flux 是一个路由包 特性: 在一个中心区域定义可切换scene...</Text>
                                            <View style={styles.operation}>
                                                <TouchableOpacity style={styles.btn} onPress={this.hideModule.bind(this)}>
                                                    <Text style={{textAlign:'center',lineHeight:40,flex:1,borderRightWidth:1,borderColor:'#ccc',color:'#000'}}>取消</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.btn} onPress={this.hideModule.bind(this)}>
                                                    <Text style={{textAlign:'center',lineHeight:40,flex:1,color:'red'}}>确定</Text>
                                                </TouchableOpacity>
                                            </View>                                                                                     
                                        </View>
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
        zIndex:100,
        backgroundColor:"pink",
       justifyContent: 'center',
       alignItems: 'center',
    },
    box:{
        backgroundColor:"#fff",
        borderRadius: 6,
        // padding:5,
        width:200,
        

        // minHeight:100,
        zIndex:100,
        // top:200
    },
    operation:{
        
        flexDirection: 'row',
        height:40,
        zIndex:101,
        width:'100%',
        
    },
    btn:{
        flex:1,
        borderTopWidth:1,
        borderColor:'#ccc'
        // borderTopWidth:1,borderColor:'blue'
        // margin:2,
        // backgroundColor:'green',
    }
})