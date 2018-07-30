// import React, { Component } from 'react'
// import { View,Text,Image,StyleSheet} from 'react-native'
// import Dimensions from 'Dimensions'
// import Viewpager from 'react-native-swiper'

// const imgs =[
//     require('../timg.jpg'),
//     require('../timg.jpg'),
//     require('../timg.jpg'),
//     require('../timg.jpg'),
//     require('../timg.jpg'),
//     require('../timg.jpg')
// ] 

// let {width , height} = Dimensions.get('window')

// export default class Swiper extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             data:[1,2,3,4,5,6,7,8,10]
//         }
//     }
//     render(){
//         return <View>
//             <Text style={styles.slider}>{width}</Text>
//             <Text style={styles.slider}>{height}</Text>
//             <Viewpager style={styles.swiper}>
//                 <Text style={styles.slider}>{height}</Text>
//             </Viewpager>
//         </View>
//     }
// }

// const styles = StyleSheet.create({
//     slider:{
//         color:'red',
//         // flex:1,
//         backgroundColor:'blue'
//     },
//     swiper:{
//         height:300,
//         backgroundColor:'green',
//         width:'100%'
//     }
// })
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions'
const image =  require('../timg.jpg');
let {width , height} = Dimensions.get('window')
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class Lunbo extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[1,2,3,4,5]
    }
  }
  render(){
    return (
      <View style={{backgroundColor:'red'}} height={200}>
                <Swiper horizontal={false} autoplay>
                    {this.state.data.map(item=>{
                      return <View key={item}>
                            <Image style={{width,height:200}} key={item} source={image}></Image>
                      </View>
                      
                    })}
                </Swiper>
       </View>

    );
  }
}


