import React, { Component } from 'react'
import {View,Text,Image,ListView,StyleSheet} from 'react-native'
const img = require('../timg.jpg')
export default class Test extends Component{

    constructor(props){
        super(props)

        let ds = new ListView.DataSource({
            rowHasChanged :(oldRow,newRow)=>{
                return oldRow  != newRow
            }
        })
        this.state ={
            tableDate:ds.cloneWithRows([1,2,3,4,5,6,7,8,9,10])
        }
        
    }

    _renderRow(row){
        return <Text style={styles.paragrams}>--{row}--</Text>
    }
    render(){
        return <View style={styles.container}>
            <Text style={{backgroundColor:'blue'}}>
                <Text style={{color:'red',backgroundColor:'green',paddingRight:40}}>nihao</Text>
                <Text style={{color:'red',backgroundColor:'green'}}>你好</Text>
            </Text>
            <Image source={img} style={{width:'100%'}}></Image>
            <ListView dataSource={this.state.tableDate} renderRow={this._renderRow}>

            </ListView>
        </View>
    }
}


const styles = StyleSheet.create({
    paragrams:{
        backgroundColor:'skyblue',
        fontSize:40,
        color:'pink'
    },
    container :{
        overflow: 'scroll',
    }
})