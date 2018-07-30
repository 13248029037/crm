import React, { Component } from 'react';
import {View,Text} from 'react-native';
export default class Index extends Component{
    constructor(props){
        super(props)
    }
    render(){

        return <View>
            <Text onPress={this.press.bind(this)}>dianji</Text>
        </View>
    }
    press(){
    //  this.showToast();
    Component.prototype.showToast();
    }
}