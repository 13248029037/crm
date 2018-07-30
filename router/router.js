import React, { Component } from 'react'
import { FluidNavigator,Transition} from 'react-navigation-fluid-transitions'
import {
    View,
    Text
} from 'react-native'



const Home = (props) =>(
    <View style={{flex:1,backgroundColor:'blue'}}>
        <Text>home</Text>
    </View>
)
const Index = (props) =>(
    <View style={{flex:1,backgroundColor:'pink'}}>
        <Text>Index</Text>
    </View>
)
const Shop = (props) =>(
    <View style={{flex:1,backgroundColor:'red'}}>
        <Text>Shop</Text>
    </View>
)


// export default routes;

