import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native'
Component.prototype.Toastarr=[];
let ToastArr = Component.prototype.Toastarr;
function showToast(){    
    let num =Math.floor(Math.random()*1000000);
    ToastArr.push(num )
    setTimeout(()=>{
        that.ToastArr = that.ToastArr.filter(item => item !=num)
    },4000)
}