import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import url from '../../time.jpg';

import { StackRouter } from 'react-navigation'
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions'
import Icon from 'react-native-vector-icons/Ionicons';



class ImageBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: [1, 2, 3, 4, 5, 6, 7]
        }
        this.go = this.go.bind(this)
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.num.map(item => (
                    <View style={styles.item} >
                        <TouchableOpacity activeOpacity={0.9} onPress={() => { this.go(url, item) }}>
                            <Transition anchor shared={item}>
                                <Image source={url} style={styles.img} ></Image>
                            </Transition>
                        </TouchableOpacity>


                        {/* <Text style={styles.img}>nihao</Text> */}

                        <Text style={styles.content}>nihao</Text>
                        <Icon name="ios-settings" size={15} color="red" />
                        <Icon name="ios-settings" size={25} color="yellow" />
                        <Icon name="ios-settings" size={35} color="black" />
                    </View>
                ))}
            </View>
        )
    }
    go(url, item) {

        this.props.navigation.navigate('showimg', { url, shared: item })
    }

}

class ShowImg extends Component {
    constructor(props) {
        super(props)
        this.back = this.back.bind(this)
    }
    render() {
        console.info(this.props.navigation,'getCurrentRoutesgetCurrentRoutesgetCurrentRoutes')
        const uri = this.props.navigation.getParam('url');
        const shared = this.props.navigation.getParam('shared');
        return (
            <View style={styles.container}>
                {/* <View style={styles.showImage} ></View> */}
                <TouchableOpacity onPress={() => { this.back(uri) }} activeOpacity={0.98}>
                    <Transition shared={shared}>
                        <Image style={styles.showImage} source={uri} ></Image>
                    </Transition>
                </TouchableOpacity>

            </View>
        )
    }
    back(url) {

        this.props.navigation.navigate('imgitem', { url })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'

    },
    item: {
        // width:'100%',
        flexDirection: 'row',
        // justifyContent: 'center',
        // margin:1,
        padding: 0,
        margin: 1,
        height: 60,
        backgroundColor: 'skyblue',
        width: '100%'
    },
    img: {
        width: 70,
        height: 70,
        backgroundColor: 'green',
    },
    content: {
        flex: 1,
        backgroundColor: 'red'
    },
    showImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    }

})

export default FluidNavigator({
    imgitem: {
        screen: ImageBox
    },
    showimg: {
        screen: ShowImg
    }
},
    {
        initialRouteName: 'imgitem',
        // navigationOptions: {
        //     title: 'xiao',
        //     headerStyle: {
        //         backgroundColor: 'red'
        //     },
        //     headerTintColor: 'blue',
        //     headerTitleStyle: {
        //         fontSize: 40,
        //         color: 'green'
        //     }
        // },
        mode: 'modal',
        headerMode: 'none'
    }
)