import React, { Component } from 'react'
import {
    View,
    Text,
    WebView
} from 'react-native'



export default class Web extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{flex:1}}>
                <WebView 
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri:"http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=18&spn=0&di=146340096870&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1193474556%2C1223904415&os=1673196656%2C827579382&simid=3350040159%2C465328934&adpicid=0&lpn=0&ln=1992&fr=&fmq=1528698431700_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic.pptbz.com%2F201506%2F2015070581208537.JPG&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Brrpkz_z%26e3Bv54AzdH3FrrpAzdH3F34rrpAzdH3Fda8camAzdH3F8andb_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist="}}
                >
                </WebView>
            </View>
            // <View>
            //     <Text>33</Text>
            // </View>
        )
    }
}