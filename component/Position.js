import React, { Component } from 'react';
import {
    View,
    Text,

} from 'react-native'

export default class Position extends Component{
    constructor(){
        super()
    }

    render(){
        return <View>
            <Text style={{position:'absolute',width:100,height:200,backgroundColor:'red',top:130,left:130}}>22</Text>
        </View>
    }
}