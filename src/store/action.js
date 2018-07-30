import API from '../api.js';
export function getName (){
    return API.getCitys({
        options:{}
    }).then(data => {
        return { 
            type:'getCitys',
            payload:{
                citys:data
            }
        }
    })
}

export function sendMessage(){
    return API.sendMessage({
        data:{
            mobile:'13755458967'
        }
    }).then(data => {
        return {
            type:'getCitys',
            payload:{
                citys:data
            }
        }
    }).catch(err => {
         console.info(err,'errerre')
    })
}

