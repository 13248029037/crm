import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableHighlight 
} from 'react-native'
import { StackNavigator} from 'react-navigation'

// const App = StackNavigator({
//     Main:{screen:MainScreen},
//     Profile:{screen:ProfileScreen}
// })

export default class MainScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            long:'1',
            short:''
        }
    }
    _onPressButton(){
        this.setState({
            long:Math.floor(Math.random()*10)
        })
    }
    _onLongPress(){
        this.setState({
            short:Math.floor(Math.random()*10)
        })
    }
    render(){
        return (
            <View>
                <Text>{this.state.long}</Text>
                <Text>{this.state.long}</Text>
                <Text>{this.state.short}</Text>
                <TouchableHighlight onPress={this._onPressButton.bind(this)} onLongPress={this._onLongPress.bind(this)}>
                    <Text>Button</Text>
                </TouchableHighlight>
            </View>

        )
    }
}