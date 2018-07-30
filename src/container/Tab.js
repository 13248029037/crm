import React, { Component } from 'react';

import {
    View,
    Text,
    ScrollView,
    Button,
    TextInput,
    TouchableOpacity    
} from 'react-native'
var dismissKeyboard = require('dismissKeyboard');

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Input from '../component/Input'


export default class Tab extends Component{
    constructor(props) {
        super(props)
        this.state ={
            name:'xiao'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value){
        console.info(value,'value')
        this.setState({
            name:value
        })
    }
    dismissKeyboardClick(){
        dismissKeyboard();
    }
    render(){
        return <KeyboardAwareScrollView alwaysBounceVertical={true}  keyboardShouldPersistTaps={'always'} style={{backgroundColor:'red'}} >
                <TouchableOpacity activeOpacity={1.0} onPress={this.dismissKeyboardClick.bind(this)}  style={{backgroundColor:'pink'}}>
                    {/* <Text>234234</Text>
                    <TextInput selectionColor={'#111'}  underlineColorAndroid={'blue'} style={{color:'#333'}}></TextInput>
                    <TextInput ></TextInput>
                  
                    <TextInput ></TextInput>
                    <TextInput ></TextInput> */}
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                    <Input style={{padding:200}} value ={this.state.name} onChangeText ={this.handleChange}></Input>
                </TouchableOpacity>
                {/* <TouchableOpacity  style={{flex:1,backgroundColor:'green'}}> */}
                    <Text onPress={this.dismissKeyboardClick.bind(this)} style={{flex:1,backgroundColor:'green'}}>e</Text>
                {/* </TouchableOpacity> */}
        </KeyboardAwareScrollView>
    }
    
}