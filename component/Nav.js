import React, { Component } from 'react'

import { StackNavigator,TabNavigator,createStackNavigator} from 'react-navigation';
import {
    View,
    Text,
    Button
} from 'react-native'

class Home extends Component{
    // static navigationOptions = {
    //     title:'home'
    // }
    // static navigationOptions ={

    // }
    static navigationOptions = {
        title:'xiao',
        headerStyle:{
            backgroundColor:'red'
        },
        headerTintColor:'blue',
        headerTitleStyle:{
            fontSize:40,
            color:'pink'
        }
    }
    // static navigationOptions = ({navigation}) => {
    //     return {
    //         title:navigation.getParam('name'),
            
    //     }
    // }
    constructor(props){
        super(props)
    }
    componentDidMount(){
       this.props.navigation.setParams({name:'zhou'})
    }
    render(){
        return <View>
            <Text>hoewwrwme</Text>
        </View>
    }
}

class Login extends Component{
    static navigationOptions = {
        title:'login',
        headerTitle:<Text style={{flex:1,textAlign:'center'}}>nihao</Text>,
        headerRight:<Button style={{margin:4}} onPress={()=>alert('this is a button')} title="nihao" color='orange'>点击right</Button>  ,
        headerLeft:<Button style={{left:20}} onPress={()=>alert('this is a button')} title="nihao" color='orange'>点击</Button>  ,
        headerMiddle:<Button style={{margin:4}} onPress={()=>alert('this is a button')} title="nihao" color='orange'>点击left</Button>  
    }
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.info(this.props,'props')
    }
    press(){
        this.props.navigation.push('Home',{
            name:'xiao',
            age:26
        })
    }
    render(){
        return <View>
            <Text onPress={this.press.bind(this)}>Login</Text>
        </View>
    }
}
class Index extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <View>
            <Text>Index</Text>
        </View>
    }
}

const tab =TabNavigator(
    {
        Home:{
            screen:Home,
            navagationOptions:({navigation}) => ({
                tabBarLabel:'Home'
            })
        },
        Login:{
            screen:Login,
            navagationOptions:({navigation}) => ({
                tabBarLabel:'Login'
            })
        },
        Index:{
            screen:Index,
            navagationOptions:({navigation}) => ({
                tabBarLabel:'Index'
            })
        },

    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
    }
)

const Navigator = StackNavigator(
    {
    Home:{screen:Home},
    Login:{screen:Login},
    Tab: { screen: tab },
    },
    {
        navigationOptions: {
            headerBackTitle: '444',
            headerTintColor: '#333333',
        },
    },
)

export default createStackNavigator(
    {
    Home,
    Login
    },
    {
        initialRouteName:'Login',
         navigationOptions :{
            title:'xiao',
            headerStyle:{
                backgroundColor:'red'
            },
            headerTintColor:'blue',
            headerTitleStyle:{
                fontSize:40,
                color:'green'
            }
        },
        mode: 'modal',
        headerMode: 'none',
    }
)

// export default Navigator;
