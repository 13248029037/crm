import React, { Component } from 'react';
import {TabNavigator} from 'react-navigation'
// import Home from './container/Home'
import Shop from '../container/Shop'
import Animation from '../container/Animation'
import Car from '../container/Car'
const image =  require('../../timg.jpg');
// import Tab from './container/Tab'
// import Input from './component/Input'
// import Index from './index'
// import Page from './component/page'
// import Fix from './container/Fix'
// import Drag from './component/Drag'
// import Icon from 'react-native-vector-icons/Feather';//图标库
import Icon from 'react-native-vector-icons/Ionicons';

console.info(Icon,'IconIconIcon')
import {
    View,
    Text,
    Image
} from 'react-native'



const BottomTab = TabNavigator({
    screen4:{
            screen:Shop,
            navigationOptions:{
                // title:'消息',//页面标题
                // tabBarLabel: <Image source={image} style={{color:'red',fontSize:16,width:100,height:150}} />    ,
            //     tabBarIcon:({ tintColor, focused }) => (  //tintColor -- 这个是  状态切换的时候给图标不同的颜色
            //                 <Icon name="ios-settings" size={35} color="black" />
            //         // <Image source={image} style={{color:'red',fontSize:16,width:100,height:150}} />       
            //   ) 
            tabBarLabel :<Icon name="ios-settings" size={35} color="black" />,

            
            
            }
        },
        screen5:{
            screen:Animation,
            navigationOptions:{
                tabBarLabel:'购物车',

            }
        },
        '购物车':{
            screen:Car,
            navigationOptions:{
                tabBarLabel:'购物车'
            }
        },
        // screen5:{
        //     screen:Animation,
        //     navigationOptions:{
        //         tabBarLabel:'购物车'
        //     }
        // },
        // screen5:{
        //     screen:Animation,
        //     navigationOptions:{
        //         tabBarLabel:'购物车'
        //     }
        // },
    },
    {  
        // tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',  
        swipeEnabled:true,  
        animationEnabled:true,  
        lazy:false,  
        tabBarOptions:{  
          activeTintColor:'red', 
          activeBackgroundColor:'red', 
          showLabel:true,
          allowFontScaling:false,
          upperCaseLabel:true,
          inactiveTintColor:'blue',  
          upperCaseLabel:false,
          tabStyle:{backgroundColor:'yellow'},
        //   indicatorStyle:{backgroundColor:'pink',position:'relative',zIndex:1000000},
          style:{backgroundColor:'pink',zIndex:1000000000,position:'absolute',width:'100%',bottom:0},  
          labelStyle: {  
                fontSize: 16, // 文字大小  
            },  

            // activeTintColor?: string;
            // allowFontScaling?: boolean;
            // activeBackgroundColor?: string;
            // inactiveTintColor?: string;
            // inactiveBackgroundColor?: string;
            // showLabel?: boolean;
            // style?: StyleProp<ViewStyle>;
            // labelStyle?: StyleProp<TextStyle>;
            // iconStyle?: StyleProp<ViewStyle>;
            // // Top
            // showIcon?: boolean;
            // upperCaseLabel?: boolean;
            // pressColor?: string;
            // pressOpacity?: number;
            // scrollEnabled?: boolean;
            // tabStyle?: StyleProp<ViewStyle>;
            // indicatorStyle?: StyleProp<ViewStyle>;
        }  
          
      }  

)

function TabBarBottom(){
    return <View style={{height:50,backgroundColor:'red'}}>
    <Text>324324</Text>
    </View> 
}

export default BottomTab;