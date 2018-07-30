import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/action'

import { addToast, addLoading, addSlide, removeSlide, addModule } from '../component/global'

import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'xiao',
            age: 23,
            temp: true
        }
    }

    componentDidMount() {
        console.info(this.props, 'props')
    }
    componentWillReceiveProps(props) {
        console.info(props, 'newprops')
    }
    gotoPage() {
        this.props.navigation.navigate('screen4')
    }
    doubleClickModule() {
        if (this.temp) {
            return;
        }
        addModule();
        this.temp = true;
        setTimeout(() => {
            this.temp = undefined;
        }, 400)
    }
    doubleClickSlide() {
        if (this.temp) {
            return;
        }
        addSlide();
        this.temp = true;
        setTimeout(() => {
            this.temp = undefined;
        }, 400)
    }
    render() {
        console.info(this.props.navigation, 'navigation')
        return (
            <Transition>

                <View style={styles.wrap}>
                    <ScrollView>
                        <View style={{ width: '100%' }}>
                            <TouchableOpacity onPress={this.doubleClickModule.bind(this)}>
                                <Text style={styles.btn}>弹出alert</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.doubleClickSlide.bind(this)}>
                                <Text style={styles.btn}>弹出底部模态框</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { addLoading() }}>
                                <Text style={styles.btn}>loading</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { addToast('hello world') }}>
                                <Text style={styles.btn} >toast</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.gotoPage.bind(this)}>
                                <Text style={styles.btn}>切换页面</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { addToast('现一个背景音乐每次跳路由音乐组件不渲染怎么') }}>
                                <Text style={styles.btn}>拖拽</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('screen5') }}>
                                <Text style={styles.btn}>测试动画效果</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('car') }}>
                                <Text style={styles.btn}>购物车</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('tab') }}>
                                <Text style={styles.btn}>切换tab</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('imageBox') }}>
                                <Text style={styles.btn}>图片动画</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('page') }}>
                                <Text style={styles.btn}>分页导航</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>

                </View>
            </Transition>

        )
    }

}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        zIndex: 3,
        width: '100%'
    },
    btn: {
        height: 50,
        backgroundColor: 'red',
        color: '#fff',
        lineHeight: 50,
        textAlign: 'center',
        // marginTop:5,
        marginBottom: 5,
        fontSize: 16,
        width: '100%'
    }

})

function mapDispatchToProps(dispatch) {
    const funs = bindActionCreators(actions, dispatch);
    return {
        ...funs
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)



