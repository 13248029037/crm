
import React, { Component } from 'react'

import {Text,View,ListView,StyleSheet} from 'react-native'


export default class Table extends Component{

    constructor(props){
        super(props)
        
        let ds = new ListView.DataSource({
            rowHasChanged :(oldRow,newRow)=>{
                return oldRow  != newRow
            }
        })
        this.state={
            data:ds.cloneWithRows([1,2,3,4,5,6,7,8,9,10])
        }
    }
    renderRow(row){
        return <Text style={styles.row}>{row}</Text>
    }
    render(){
         return <View >
             {/* <Text style={styles.row}>1</Text>
            
            <Text>3</Text>  */}
            <Text style={styles.color}>2</Text>
                <ListView style={styles.container} dataSource={this.state.data} renderRow={this.renderRow}></ListView>
         </View>
    }
}

const styles = StyleSheet.create({
        container:{
          
            // display:'inline',
            flexDirection: 'column',
            flexDirection: 'row',
            marginTop:50,     
        },
        row:{  
        
            borderRightColor:'blue',
            fontSize:20,
            color:'blue',
            margin:10,
            backgroundColor:'red',
        },
        xiao:{
            color:'pink'
        }

        
})