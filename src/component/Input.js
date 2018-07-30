import React, { Component } from 'react';

import {
    TextInput,
    View,
    Text,
    StyleSheet
} from 'react-native'

class Input extends Component{
    static defaultProps= {
        value:'222',
        keyboardType:'numeric',
        status:false,
        show:false,
        title:'name',
        onChangeText:function(){}
    }
    constructor(props){
        super(props)
        this.state ={
            input_focus:false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(text){
       
        this.props.onChangeText(text)
    }

    clearInfo(){
        console.info(this._input._lastNativeText='')
        this.props.value=''
        // console.info(this._input._lastNativeText='')
    }

    render(){
        return <View style={styles.box}>
                <Text>{this.props.title}:</Text>
                <View style={styles.wrap}>
                    <TextInput  
                    color='red'
                    selectionColor ="blue"
                    placeholder  ={'请输入'}
                    placeholderTextColor = {'blue'}
                    tintColor = {'red'}
                     keyboardType={'numeric'}  
                     underlineColorAndroid = {'transparent'}
                     onBlur ={() => this.setState({input_focus:false})}
                     style={styles.input} 
                     value={this.props.value}
                     onChangeText={this.handleChange}
                     onFocus ={() => this.setState({input_focus:true})}>
                    </TextInput>
                {this.state.input_focus && <Text style={styles.delete} onPress ={this.handleChange.bind(this,'')}>X</Text>}                            
                </View>
               {this.props.status && this.props.show && <Text  style={styles.right}>!</Text>} 
               {this.props.status && this.props.show && <Text style={styles.error}>~</Text>} 
        </View>
    }
}


const styles = StyleSheet.create({
    box :{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'blue',
        margin:3
    },
    wrap :{
        flex:1,
        height:50,
        position:'relative',
        alignItems: 'center',
        flexDirection: 'row',
    },
    input :{
        flex:1,
        width:'100%',
        // paddingRight:26,
        color:'red',
        // textAlign:'right'
 
        
    },
    right : {
        backgroundColor:'red',
        width:16,
        height:16,
        borderRadius:8,
        textAlign:'center',
        lineHeight:16,
        color:'#fff',
        margin:3
    },
    error:{
        backgroundColor:'green',
        width:16,
        height:16,
        borderRadius:8,
        textAlign:'center',
        lineHeight:16,
        color:'#fff',
        margin:3
    },
    delete:{
        backgroundColor:'green',
        width:16,
        height:16,
        borderRadius:8,
        textAlign:'center',
        lineHeight:16,
        color:'#fff',
        position:'absolute',
        right:5,  
        backgroundColor:'gray'      
    }
})

export default  Input;