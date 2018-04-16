import url from '../config/baseurl'
import * as Constant from '../constant/actionType'
import {baseurl} from '../config/baseurl'
const axios=require('axios')
export const loginUser=(obj)=>{
    return ((dispatch)=>{
        return axios.post(baseurl+'/api/users/loginp',obj).then((success)=>{
            dispatch({
                type:Constant.LOGIN_USER,
                payload:success.data
            })
            localStorage.setItem('type',success.data.usertype);
            localStorage.setItem('email',success.data.email)
            localStorage.setItem('token',success.headers["x-auth"])
            return success.data
        })
    })
}
export const eventList=()=>{
    debugger;
    return ((dispatch)=>{
        return axios.get(baseurl+'/api/events/list').then((success)=>{
            dispatch({
                type:"EVENT_LIST",
                payload:success.data
            })
            localStorage.setItem('type',success.data.usertype);
            localStorage.setItem('email',success.data.email)
            localStorage.setItem('token',success.headers["x-auth"])
            return success.data
        })
    })
}
