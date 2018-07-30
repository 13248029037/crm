import Sblings from 'react-native-root-siblings';
import React, { Component } from 'react'
import Toast from './Toast'
import Loading from './Loading'
import BottomSlide from './BottomSlide'
import ModuleSlide from './Module'

var Slide =null;
var Module = null;
export const addToast = (params) =>{
  let Dom = new Sblings( <Toast value={params} />)
    setTimeout(()=>{
        Dom.destroy();
    },3100)
}
export const  addLoading = () =>{
    let Dom =new Sblings( <Loading />)
    setTimeout(()=>{
        Dom.destroy();
    },3100)

}
export const addSlide = () =>{
     Slide = new Sblings( <BottomSlide />)
}
export const removeSlide = () =>{
    Slide && Slide.destroy()
}
export const addModule = () =>{
    Module = new Sblings( <ModuleSlide />)
}
export const removeModule  = () =>{
    Module && Module.destroy()
}
