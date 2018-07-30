import React, {Component} from 'react'
import {View, Text} from 'react-native'


//home
class Home extends Component {
  _renderScene(router, navigator) {
    switch (router.id) {
      case 'home':
        return <Home/>;
        break;
      case 'login':
        return <Login/>;
        break;
      case 'user':
        return <User/>;
        break;
    }
  }
  render() {
    return (
      <View>
        <Text>首页面</Text>
        <Text>登录</Text>
        <Navigator
          initialRoute={{
          id: 'home'
        }}
          renderScene={this._renderScene}></Navigator>
      </View>
    )
  }
}
//登录主页面组件

class Login extends Component {
  render() {
    return (
      <View>
        <Text>登录页面</Text>
        <Text>进入用户中心</Text>
        <Text>返回</Text>
      </View>
    )
  }
}
export default class User extends Component {
  constructor(props) {
    super(props)
    this.state ={
        data:''
    }
  }
    componentDidMount() {
  fetch('http://v.juhe.cn/toutiao/index?type=top&key=fdbe4736f44b03fd18310ae63d058e69')
  .then( res => res.json())
  .then( json => {
      this.setState({
        data:JSON.stringify(json.result.data)
      })
       console.info(json,'json')     })   
    }
  render() {
    return (
      <View>
        <Text>用户中心3323</Text>
        <Text>返回</Text>
        <Text>返回首页</Text>
        <Text>{this.state.data}</Text>
      </View>
    )
  }
}