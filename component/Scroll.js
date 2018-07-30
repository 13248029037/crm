import React, { Component } from 'react'
import {View,Text,ScrollView,StyleSheet,Image} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
const img = require('../timg.jpg')


export default class MyScroll extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
            // icon:['home','car','shop','center'],
            icon:[
                {
                    value:'home',
                    selected:false
                },
                {
                    value:'car',
                    selected:false
                },
                {
                    value:'shop',
                    selected:true
                },   
                {
                    value:'center',
                    selected:false
                }
            ],
            selected:'home',
        }
    }
    componentDidMount(){
        // alert(this.props.data)
        // console.info(this.props,'props')
    }

    render(){
        return <View style={{margin:5}}>
                <ScrollView  showsHorizontalScrollIndicator={false}>
                    {this.state.arr.map(item=><View key={item}>
                    <Image style={{width:'100%'}} source={img}></Image>
                    </View>)}
                </ScrollView>
                <TabNavigator tabBarStyle={{backgroundColor:'#444'}}>
                    {/* {this.state.icon.map(item=>{
                       return  <TabNavigator.Item 	selected={item.selected}  renderIcon ={()=>{
                           return <Text style={styles.item}>{item.value}</Text>
                       }}  key={item.value}></TabNavigator.Item>
                    })} */}

                        {this.state.icon.map(item=>{
                            return <TabNavigator.Item key={item.value} badgeText={10}
                        renderIcon = { () => <Text>{item.value}</Text>
                        
                     }
                            >{item.value}</TabNavigator.Item>
                        })}
                </TabNavigator>
                {/* <TabNavigator> */}
                {/* {this.state.icon.map(item=>{
                        return  <TabNavigator.Item key={item} renderIcon = {()=>{
                            return <Text>11</Text>
                        }}>
               
                        </TabNavigator.Item>
                    })} */}

                {/* </TabNavigator> */}
        </View>
        
    }
}
const styles = StyleSheet.create({
    btn:{
        color:'white',
        textAlign:'center',
        height:50,
        lineHeight:50,
        fontSize:20,
        backgroundColor:'red',
        margin:10,
       
    },
    item:{
        color:'#fff',
        // backgroundColor:'blue',
        
        margin:5
    }
})