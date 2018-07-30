import React, {Component} from 'react'

import {FluidNavigator, Transition} from 'react-navigation-fluid-transitions'
import Home from './container/Home'
import Shop from './container/Shop'
import Animation from './container/Animation'
import Car from './container/Car'
import Tab from './container/Tab'
import Input from './component/Input'
import Index from './index'
import Page from './component/page'
import Fix from './container/Fix'
import Drag from './component/Drag'
import ImageBox from './component/imageBox'


import {View, Text, Button} from 'react-native'

const MyHome = () =>(
    <Transition appear="horizontal">
        <Home />
    </Transition>  
)

const Screen1 = (props) => (
     <Transition appear="horizontal">
            <View style={{
    //    width:400,
        // height:300,
        flex:1,
        backgroundColor:'orange'
    }}>
        <Text>Screen 1</Text>
        <View >
            {/* <Transition shared='circle'> */}
                <View
                    style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red'
                }}/>
            {/* </Transition> */}
        </View>
        <Button title='Next' onPress={() => props.navigation.navigate('screen2')}/>
    </View>
    </Transition>  

);

//   class Screen2 extends Component{       constructor(props){
// super(props)       }   }
const Screen2 = (props) => (
    <Transition appear="horizontal">
                <View style={{
        // width:400,
        // height:300,
        backgroundColor:'orange',
        flex: 1
    }}>
        <Text>Screen 2</Text>
        <View >
            {/* <Transition shared='circle'> */}
                <View
                    style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'blue'
                }}/>
            {/* </Transition> */}
        </View>
        <Button title='loading' onPress={() =>  Component.prototype.showLoading()}/>
        <Button title='Back' onPress={() =>  props.navigation.goBack()}/>
        <Button title='下一页' onPress={() =>  props.navigation.navigate('screen3')}/>
    </View>
    </Transition> 

);

const Router = FluidNavigator({
    screen1: {
        screen: Screen1
    },
    screen2: {
        screen: Screen2
    },
    screen3:{
        screen:Home
    },
    screen4:{
        screen:Shop
    },
    screen5:{
        screen:Animation
    },
    car :{
        screen:Car
    },
    tab:{
        screen:Tab
    },
    page:{
        screen:Page
    },
    fix:{
        screen:Fix
    },
    drag:{
        screen:Drag
    },
    imageBox:{
        screen:ImageBox
    }
}, {
    initialRouteName: 'screen3',
    navigationOptions: {
        title: 'xiao',
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTintColor: 'blue',
        headerTitleStyle: {
            fontSize: 40,
            color: 'green'
        }
    },
    mode: 'modal',
    headerMode: 'none'
})


export default Router;