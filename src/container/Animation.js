import React, { Component } from 'react';

import {View,Text,Image,TouchableOpacity} from 'react-native'
const image =  require('../../timg.jpg');
const image2 =  require('../../time.jpg');
import url from '../../timg.jpg'
import {FluidNavigator,Transition} from 'react-navigation-fluid-transitions'


const Top = (props) =>(
    <View style={{flex:1}}>
        {/* <Transition shared="show">
            <Text style={{height:100,width:100,backgroundColor:'red'}}>top</Text>   
        </Transition>
        <Transition shared="circle">
            <TouchableOpacity style={{width:'100%',height:60}} onPress = {() => props.navigation.navigate('screen2',{url:image,circle:'circle'})}>
            <Image source={image}   style={{borderRadius:50,width:50,height:50}} ></Image>    
                
            </TouchableOpacity>
        </Transition> */}
        {/* <Transition shared="circle2">
            <TouchableOpacity onPress = {() => props.navigation.navigate('screen2',{url:image2,circle:'circle2'})}>
            <Image source={image2}   style={{borderRadius:50,width:50,height:50}} ></Image>    
                
            </TouchableOpacity>
        </Transition> */}
{/*         
        <TouchableOpacity onPress = {() => props.navigation.navigate('screen2',{url:image})}>
               <Text style={{height:100,backgroundColor:'red',marginTop:20}} >点击</Text>                         
                </TouchableOpacity>      */}
    </View>
)

const Bottom = (props) => 
    {
        let url = props.navigation.getParam('url');
        // let circle = props.navigation.getParam('circle');
      return  <View style={{flex:1}}>
            <Transition shared = 'show'>
                <Text  style={{height:300,width:'100%',backgroundColor:'pink',position:'absolute',top:200,borderRadius:100}}>bottom</Text>  
            </Transition>
            {/* <Transition shared='circle2'>
                <Image  source={url}  style={{borderRadius:150,width:150,height:150,marginLeft:'50%'}}></Image>    
            </Transition> */}
            <Transition shared='circle'>
            <TouchableOpacity onPress = {() => props.navigation.navigate('screen1')} style={{width:'100%',height:200}}>
                <Image  source={url}  style={{borderRadius:150,width:150,height:150,marginLeft:'50%'}}></Image>         
            </TouchableOpacity>
            </Transition >
            <TouchableOpacity onPress = { () =>props.navigation.navigate('screen1')}>
                   <Text style={{height:100,backgroundColor:'red',marginTop:20}} >点击</Text>                         
             </TouchableOpacity>    
        </View>
    }




const Animation =FluidNavigator(
    {
        screen1:{
            screen:Top
        },
        screen2:{
            screen:Bottom
        }   
    },
    {
        navigationOptions:{
            gesturesEnabled:true,
            initialRouteName:'screen1',
            style:{backgroundColor:'pink',zIndex:1000000000,position:'absolute',width:'100%',bottom:0},  
        }
    }
)

export default Animation;