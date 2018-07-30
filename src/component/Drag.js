import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    PanResponder,
    Dimensions
} from 'react-native'

 let {width,height} =Dimensions.get('window');
//  let height =Dimensions.get('window').;

export default class Drag extends Component{
    constructor(props){
        super(props)
        this.state ={
         active:1,
         num:1,
        }
        this._panResponder ={}
        this._previousLeft =100
        this._previousTop =100
       this._circleStyles={
           style:{
            left:this._previousLeft,
            top:this._previousTop
           }
         
        }
        // this.change =this.change
    }

  

    change(value){
        this.setState({
            ...this.state,
            active:value
        })
    }
    _updateNativeStyles() {
       this.move.setNativeProps(this._circleStyles);
      }

      componentWillMount(){
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            // onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            // onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      
            onPanResponderGrant: (evt, gestureState) => {
              // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
              this._updateNativeStyles();
      
              // gestureState.{x,y}0 现在会被设置为0
            },
            onPanResponderMove: (evt, gestureState) => {

                       if(gestureState.moveX>width-30){
                this._circleStyles.style.left = width-30
              }
              else if( gestureState.moveX<0){
                this._circleStyles.style.left = 0
              }else {
                this._circleStyles.style.left = gestureState.moveX;
              }
              if(gestureState.moveY>height-50){
                this._circleStyles.style.top = height-60
              }
              else if( gestureState.moveY<50){
                this._circleStyles.style.top = 0
              }else{         
                this._circleStyles.style.top = gestureState.moveY;
              }
            //    setTimeout(()=>{
                this._updateNativeStyles();
            //    },)
             
                
              // 最近一次的移动距离为gestureState.move{X,Y}
            
      
              // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
            },
            // onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
              this._updateNativeStyles();
                
            //   console.info(gestureState,'gestureStategestureState----release')
            //   if(this._previousLeft + gestureState.dx>width){
            //     this._circleStyles.style.left = width-30
            //   }
            //   else if(this._previousLeft + gestureState.dx<0){
            //     this._circleStyles.style.left = 0
            //   }
            //   else if(this._previousTop + gestureState.dy>height){
            //     this._circleStyles.style.top = height-30
            //   }
            //   else if(this._previousTop + gestureState.dy<0){
            //     this._circleStyles.style.top = 0
            //   }
            //   else {
                // console.info(gestureState.x0)
                // console.info(gestureState.y0)
                // this._circleStyles.style.left = gestureState.moveX;
                // this._circleStyles.style.top = gestureState.moveY;
            //   }
       

              // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
              // 一般来说这意味着一个手势操作已经成功完成。
            },
            onPanResponderTerminate: (evt, gestureState) => {
              // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
              // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
              // 默认返回true。目前暂时只支持android。
              return true;
            },
          });
      }
    componentDidMount(){
        this._updateNativeStyles();
    }
    render(){
        // {...this._panResponder.panHandlers}
        return <View style={styles.container} {...this._panResponder.panHandlers}  ref={(move) =>{this.move = move}}>
            <Text onPress={()=>{this.change(1)}} style ={[styles.item,this.state.active==1?styles.active:'']}>开发</Text>
            <Text onPress={()=>{this.change(2)}} style ={[styles.item,this.state.active==2?styles.active:'']}>测试</Text>
            <Text onPress={()=>{this.change(3)}} style ={[styles.item,this.state.active==3?styles.active:'']}>线上</Text>
        </View>
    }
    
}

const styles = StyleSheet.create({
    container : {
        position:'absolute',
        backgroundColor:'grey',
        borderRadius: 15,
     
    },
    item: {
        color:'#fff',
        fontSize:16,
        margin:0,
        padding:0,
        backgroundColor:'blue',
        textAlign:'center',
        paddingRight:10,
        paddingLeft:10,
        
    },
    active:{
        backgroundColor:'green',
    }
})