import React, { Component } from 'react'
import {
    View,
    Text,
    RefreshControl,
    ScrollView
} from 'react-native'

export default class Fresh extends Component{
    constructor(props){
        super(props)
        this.state ={
            show:'buzhidao',
            // data:[1,2,3,4,5,6,7,8,9,10]
        }
    }

    render(){
        return <View>
            <Text>{this.state.show}</Text>
            <ScrollView 
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh ={
                            ()=>{this.setState({
                                show:Math.floor(Math.random()*10)>5?'dayu':'xiaoyu'
                            })}
                        }
                    >
                        
                    </RefreshControl>
                }
            >
                {/* {this.state.data.map(item=>{
                    // return <Text style={{height:300}}>{item}</Text>
                })} */}
            </ScrollView>
        </View>
    }
}