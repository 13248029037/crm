import React, {Component} from 'react'
import {TextInput, View, Text, StyleSheet,Switch,Slider,Picker,Image,
    ScrollView,
    TouchableOpacity,TouchableHighlight} from 'react-native';
var Carousel = require('react-native-carousel');
const img = require('../timg.jpg')


export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'xiaoshulin',
      checked:true,
      unchecked:false,
      num:0.5,
      select:'2',
      arr:[1,2,3,4,5,6,7,8]
    }
  }
  render() {
    console.info('xiao')
    return <View>
      <TextInput secureTextEntry>21313</TextInput>
      <Text style={styles.btn}>提交</Text>
      <Text style={styles.btn}>测试</Text>
      <Switch  onValueChange={(value)=>this.setState({checked:value})} value={this.state.checked}></Switch>
      <Switch value={this.state.unchecked}></Switch>
      <Slider value={this.state.num} step={0.1} onValueChange={(value)=>{this.setState({num:value})}}></Slider>
      <Text style={{color:'blue'}}>{Math.floor(this.state.num*100)}</Text>
      <Picker selectedValue={this.state.select} onValueChange={(value)=>{this.setState({...this.state,select:value})}}>
            {/* <Picker.item></Picker.item> */}
            <Picker.Item label="css" value='1' />
            <Picker.Item label="html" value='2' />
            <Picker.Item label="js" value='3' />
      </Picker>
      <Carousel style={{height:400}} indicatorColor="red" inactiveIndicatorColor="pink">
            <Image source={img} style={{width:'100%',height:300}}></Image>
            <Image source={img} style={{width:'100%',height:300}}></Image>
            <Image source={img} style={{width:'100%',height:300}}></Image>
            <Image source={img} style={{width:'100%',height:300}}></Image>
            
        </Carousel>
        <TouchableOpacity>
            <Text style={styles.btn}>点击</Text>
        </TouchableOpacity>
        <TouchableHighlight>
            <Text style={styles.btn}>高亮点击</Text>
        </TouchableHighlight>
        <ScrollView width={600}>
            {this.state.arr.map(item=><Text key={item}>{item}</Text>)}    
        </ScrollView>
    </View>
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    height: 50,
    lineHeight: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop:10,
    borderRadius: 5
  },
  switch:{
      backgroundColor:'red'
      
  }
})
