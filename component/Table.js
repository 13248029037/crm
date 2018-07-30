import React, { Component } from 'react'

import {Text,View,StyleSheet} from 'react-native'


export default class Table extends Component{
    render(){
        return <View style={styles.container}>
            <Text style={styles.header}>Header</Text>
            <View style={styles.body}>
                <Text>11</Text>
            </View>
            <Text style={styles.footer}>footer</Text>
        </View>
    }
}

const styles = StyleSheet.create({
   container :{
       backgroundColor:'red',
       flex:1
   },
   header:{
       height:50,
        backgroundColor:'blue'
   },
   body:{
        flex:1,
        backgroundColor:'pink'
   },
   footer:{
       height:50,
       backgroundColor:'green'
   }
})