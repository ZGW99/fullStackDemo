import axios from 'axios';
import {message} from 'antd';
 
//axios响应头，直接copy官方文档
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//axios接口地址 本地就是localhost,使用时替换成后端的地址就行了
axios.defaults.baseURL = '//localhost:3007' 
// axios.defaults.baseURL = '//localhost:3006' 
 
//声明一个function request 用于封装axios，他接受一个url，type和data
export default function request(url: string, type: string = 'GET', data: any = {}) {
  return new Promise((resolve, reject) => {
    let option:any  = {
      url,
      method: type,
    }
    //tolowercase转换成小写===get的话
    if(type.toLowerCase() === 'get') {
        //`params` 是即将与请求一起发送的 URL 参数
      option.params = data
      //否则的话就等于自己输入的data
    }else {
      option.data = data
    }
    //如果有token
    if(localStorage.token) {
      axios.defaults.headers.common['Authorization']  = localStorage.token
    }

    axios(option).then(res => {
      //如果res.data.status的状态为200且本地的token和res.data.token一样那么就resolve
      if(res.data.data.id) {
        if(res.data.data.token) {
          localStorage.token = res.data.data.token
        }
        resolve(res.data)
        //否则的话就message错误然后reject
      }else{
        message.error(res.data.msg)
        reject(res.data)
      }
      //捕获异常，如果什么都不是那就网络异常
    }).catch(err => {
      message.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
}