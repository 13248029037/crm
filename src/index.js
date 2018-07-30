import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

import { Provider } from 'react-redux'
import store from './store/store'

//全局组件

import Router from './router'



//底部导航

import BottomTab from './component/BottomTab'
import API from './api'
import { addToast } from './component/global'
export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <View style={styles.wrap}>
                    <View style={{ flex: 1, width: '100%', height: '100%' }}>
                        <BottomTab></BottomTab>
                    </View>
                </View>
            </Provider>

        )
    }

    componentDidMount() {
        API.sendMessage({
            data: {
                mobile: 15544442222
            }
        }).then(data => {
            addToast(data)
            console.info(data)
        }).catch(err => {

            console.info(err)
            addToast(err.msg)
        })
    }

}


const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        backgroundColor: 'orange',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }

})
