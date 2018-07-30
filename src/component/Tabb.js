import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

 import TabNavigator from 'react-native-tab-navigator'; 

 export default class Module extends Component{
     constructor(props){
         super(props)
     }
     render(){
         return <View style={styles.container}>
                    <TabNavigator>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === '电影'}
                            title="电影"
                            titleStyle={styles.tabText} 
                            selectedTitleStyle={styles.selectedTabText} 
                        ></TabNavigator.Item>
                    </TabNavigator>
         </View>
     }
 }


 const styles = StyleSheet.create({
     container:{
         flex:1
     }
 })

 function Movie(props){
     
 }