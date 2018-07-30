import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
}from 'react-native'
// import * as Animatable  from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';
import Test from './newtest'

import Toast from './newcomponent/Toast'
import Loading from './newcomponent/Loading'
import BottomSlide from './newcomponent/BottomSlide'
import Module from './newcomponent/Module'
import {Actions, Scene, Router} from 'react-native-router-flux';
import sceces from '../router/router'

Component.prototype.Toastarr=[];
Component.prototype.Loading=[];
Component.prototype.BottomSlide=false;
Component.prototype.ShowModule=false;
let that ='';
export default class Banner extends Component{
    constructor(props){
        super(props)
        this.state = {
            toast:[],
            loading:[],
            bottomSlide:false,
            showModule:false
        }
        that=this;
        Component.prototype.showToast=this.showToast;    
        Component.prototype.showLoading=this.showLoading;    
        Component.prototype.toggleBottomSlide=this.toggleBottomSlide;    
        Component.prototype.toggleBottomSlide=this.toggleBottomSlide;    
        Component.prototype.toggleModule=this.toggleModule;    
    }
    showToast(){    
        let num =Math.floor(Math.random()*1000000);
        that.ToastArr.push(num )
        console.info('xiao')
        that.setState({
            toast:that.ToastArr
        })
        setTimeout(()=>{
            that.ToastArr = that.ToastArr.filter(item => item !=num)
            that.setState({
                toast:that.ToastArr
            })
        },4000)
    }
    showLoading(){
        let num =Math.floor(Math.random()*1000000);
        that.Loading.push(num )
        console.info('xiao')
        that.setState({
            loading:that.Loading
        })

        setTimeout(()=>{
            that.Loading = that.Loading.filter(item => item !=num)
            that.setState({
                loading:that.Loading
            })
        },7000)
    }
     toggleModule(){
        that.ShowModule=!that.ShowModule;
        that.setState({
            showModule:that.ShowModule
        })
    }
    toggleBottomSlide(){
        that.BottomSlide=!that.BottomSlide;
        that.setState({
            bottomSlide:that.BottomSlide
        })
    }
    handle(){
        alert('xiao')
    }
    gotoRouter(){
        Actions.push('loading','hello','rrr')
    }
    render(){


        return (   
             <View style={styles.wrap}>
                        {this.state.toast.map(item=> <Toast key={item}  value={item}/>)}
                        {this.state.loading.map(item=> <Loading key={item}  value={item}/>)}
                         <BottomSlide show={this.state.bottomSlide} />
                        <Module show={this.state.showModule} />           
                        <Test></Test>
                        <View style={{width:'100%'}}>
                        <TouchableOpacity onPress={this.toggleModule.bind(this)}>
                        <Text style={styles.btn}>弹出alert</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleBottomSlide.bind(this)}>
                        <Text style={styles.btn}>弹出底部模态框</Text>
                        </TouchableOpacity>    
                        <TouchableOpacity onPress={this.showLoading.bind(this)}>
                        <Text style={styles.btn}>loading</Text>
                        </TouchableOpacity>   
                        <TouchableOpacity onPress={this.showToast.bind(this)}>
                        <Text style={styles.btn} >toast</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotoRouter.bind(this)}>
                        <Text style={styles.btn}>切换页面</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotoRouter.bind(this)}>
                        <Text style={styles.btn}>切换loading</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                        <Text style={styles.btn}>电子合同</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                        <Text style={styles.btn}>上传身份证</Text>     
                        </TouchableOpacity>
                        <TouchableOpacity >
                        <Text style={styles.btn}>资质认证</Text>
                        </TouchableOpacity>
                        </View>               
        </View> 
        )
    }
}

const styles = StyleSheet.create({
    wrap:{
        flex:1,
        position:'relative',
        zIndex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        height:50,
        backgroundColor:'red',
        color:'#fff',
        lineHeight:50,
        textAlign:'center',
        marginTop:5,
        marginBottom:5,
        fontSize:16,
        width:'100%'
    }

})
