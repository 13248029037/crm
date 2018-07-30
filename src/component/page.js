import React, { Component } from 'react'

import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'

import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

class TopTableView extends Component{
    render(){
        return <ScrollableTabView
        style={styles.container}
        renderTabBar ={ ()=> <DefaultTabBar/>}
        tabBarUnderlineStyle={styles.lineStyle}
        scrollWithoutAnimation = {false}
        tabBarActiveTextColor = 'blue'
                >
            <Text tabLabel='娱乐'>娱乐</Text>
            <Text tabLabel='科技'>科技</Text>
            <Text tabLabel='军事'>军事</Text>
            <Text tabLabel='体育'>体育</Text>
        </ScrollableTabView>
    }
}
 

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10
    },
    lineStyle :{
        width:ScreenWidth/4,
        height: 2,
        backgroundColor: '#FF0000',
    },
    textStyle:{
        flex: 1,
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    }
})

export default TopTableView;