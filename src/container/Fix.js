import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    AsyncStorage
} from 'react-native'

export default class Scroll extends Component{
    constructor(props){
        super(props)
        this.state ={
            data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }
 
  
   
    }

    render(){
        return <ScrollView>
            <View>
                {this.state.data.map(item=>  <Text key={item} style ={styles.container}>333</Text>)}
               

            </View>
        </ScrollView>
    }
}

const styles =StyleSheet.create({
    container : {
        height:50,
        margin:10,
        backgroundColor:'pink'
    }
})