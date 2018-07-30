import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.timeout = 6000;

import React, { Component } from 'react'
import {
    AsyncStorage
} from 'react-native'

import { addToast } from './component/global'

let cookie = 'pgv_pvi=3651266560; NTKF_T2D_CLIENTID=guest2E129847-62EF-C58C-1712-3DBBDEA02993; gr_user_id=905d0435-fac8-487d-becf-1c48025201ed; _ga=GA1.2.1704053112.1527478014; __sonar=6462795044339771560; m_us=%5B%7B%22Name%22%3A%22%25E8%258B%25B9%25E6%259E%259C%2B15%25E5%25B9%25B4%2B11%25E5%25AF%25B8%2BMacBook%2BAir%22%2C%22Id%22%3A17719%2C%22SearchDateTime%22%3A%222018-05-28T11%3A27%3A27.080757%2B08%3A00%22%7D%5D; Hm_lvt_6206c0fb3ed4e6feb904c97664c91527=1527478022,1529206300; .AspNetCore.Cookie.aihuishou-test-erp=CfDJ8B8MhN_iyRxDucLyWmdrQiCqrYRRBlfXf1dCRkcCQvmNNIGNVyosiWNNLa5KoINNxi1DnpXtPqvo-a87cclDlE8lnbfwBplI8XpiV-iS-zRpQMrEaiyTYeXSADnXAtea39vl7srqD1HZ1Cgab2iAEC7AY3Gfp8n6BeA7xt9yP9iSutjrKqwbsmGV4rbNVvfwZiiHcP5gbaURGR-r6QzQMsGRxzFYrbReeNldxSJdbnUvvyRPqS2lB7ykpQFLDjAWwR3HxdyeOpWoibO2XUM1MJTPTFUUVpEC7_PDKMk7fz1FW9GWSSMz7EScED-2ehoq87YRn_8um0Gk4YpCwRqS3Og; .AspNetCore.Cookie.aihuishou-erp=CfDJ8LXNa5U4lL5InETgzawBKrwjHNqDPvI4haJJQUfPs6p9XhX65ohos6WM5GwKOMV5y57cxY5DSBbb01XXogHeDDLpO5QBRYQh_YZUWo799zOPoQ4KEXavJe75g3yeQoNKL-8kLmpUB87XxM-k3ixuA7tk2XAsyhajP3fqttRv3Yj9QzeiY4Vk4cGfcyiWolJ2wN0owM47cqqzS9lF3WqCZXxYBL7SCPmO-08mZjWC8iVtFG-Y4Ka-BYcyKIV_eiCJLyq5bqgVpx7IuBN5PLJZBVbxb6FIYd_5aZPmSGzUOCC99cmvq_P6m3IoTKtr42no-WezCgqixjbODEAQCkAfCr4; .AspNetCore.Cookies=CfDJ8B8MhN_iyRxDucLyWmdrQiDwh61LiWvW-7gJ6rzk8hw6hE0MvT7yKxYVI6RLchVh_OU-tkPlNrFj3o9kpEWIna1-29TqJPCsw0uzwff-VXfcYAja06q1hS1b1ESCLd22jiiyi_Ku3R_E4gd8mDQL5B5ANmIOoOz743I7xJpkkwcqh8A50tO22HXwWw4ynhO2GvjWtm8KZFx3a7URJ3gZRlHA2UIl30-7tdWJtgnj8CWQzy2M0O0IQzPIcRUCYe9syK2zQ_EyXneQgfmzjVvULwH4GnUjelbvcKTPUUWnGKR9Y-S6oQXBK_kVBDlXH-3lUSiSwIRt8lCXYaEkHfFnJFs';




const API = {

}

const API_URL = {
    baseDomain: 'http://m.pai.aihuishou.com',
    sendMessage: "/entry/entry-captcha/send", //获取省市
}
const http = axios.create({
    baseURL: API_URL.baseDomain,
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
        'X-Request-With': 'XMLHttpRequest'
    }
})
//发起请求拦截
http.interceptors.request.use(
    config => {
        config.headers.Cookie = cookie;
        return config
    },
    err => {
        addToast('请求出错')
        // throw err;
        return null;
    }
)


//接收请求拦截

http.interceptors.response.use(
    res => {
        let body = res.data || res;
        cookie = res.config.headers.Cookie;
        if (!body) {
            addToast('数据出错')
            // throw body;    
            return null;
        } else if (body.error === 401) {
            addToast('重新登录')
            // return [];                    
            throw body;
        } else if (body.error === 403) {
            addToast('没有权限')
            // return [];         
            throw body;
        } else if (body.error === 500) {
            // addToast('服务出错')
            // return [];     
            throw body;
        } else if (body.error) {
            // addToast('出现出错')
            // return [];    
            throw body;
        }
        return body.data;

    },
    err => {
        addToast('请求出错')
        throw err;
        Promise.reject(err)

    }
)

//请求数据格式化
const getData = (data = {}) => { // 转化成formdata
    let ret = {};

    for (let key in data) {
        let value = data[key];
        if (value === undefined || value === null) {
            data[key] = '';
            continue;
        }
        travel(value, key);
        function travel(value, path) { // 如果为数组或者对象继续递归，到简单值为止，再把最终path和value添加进form
            if (value instanceof Array) {
                value.forEach((v, i) => {
                    travel(v, v === undefined || v === null ? '' : `${path}[${i}]`);
                });
            } else if (value instanceof Object) {
                for (let prop in value) {
                    travel(value[prop], value[prop] === undefined || value[prop] === null ? '' : `${path}.${prop}`);
                }
            } else {
                ret[path] = value;
            }
        }
    }
    return ret;
};
const postData = (data = {}) => { // 转化成formdata
    let ret;

    if (typeof FormData === 'undefined') return {};
    ret = new FormData();

    for (let key in data) {
        let value = data[key];
        if (value === undefined || value === null) {
            data[key] = '';
            continue;
        }
        function travel(value, path) { // 如果为数组或者对象继续递归，到简单值为止，再把最终path和value添加进form
            if (value instanceof Array) {
                value.forEach((v, i) => {
                    travel(v, v === undefined || v === null ? '' : `${path}[${i}]`);
                });
            } else if (value instanceof Object) {
                for (let prop in value) {
                    travel(value[prop], value[prop] === undefined || value[prop] === null ? '' : `${path}.${prop}`);
                }
            } else {
                ret.append(path, value);
            }
        }
        travel(value, key);
    }
    return ret;
};


// 定义请求通用方法

const ajax = {
    get(args) {
        let { url, data, options, params } = args;
        return http.request({
            url,
            method: 'get',
            params: getData(params)
        })
    },
    post(args) {
        let { url, data, options, params } = args;
        return http.request({
            url,
            method: 'post',
            data: postData(data),
            params: getData(params)
        })
    },
    postFile(args) {
        let { url, data, callback, options, params } = args;
        return http.request({
            url,
            method: 'post',
            data,
            params: getData(params)
        })
    }
}

API.sendMessage = (args) => {
    let _args = {
        url: API_URL.sendMessage
    }
    return ajax.post(Object.assign(_args, args))
}


export default API;