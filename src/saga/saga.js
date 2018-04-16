import {put, takeEvery,takeLatest } from 'redux-saga/effects'
const axios=require('axios')

function* fetchEvents() {
    debugger
    try {
        let event = yield axios.get('http://localhost:5000/api/events/list')
        console.log(event)
        yield put({type: "EVENT_LIST", payload: event});
    } catch (e) {
        yield put({type: "EVENT_LIST_FAILED", message: e.message});
    }
}
function* login (action) {
    debugger
    try{
        debugger
        let user=yield axios.post('http://localhost:5000/api/users/loginp',action.payload)
        localStorage.setItem('email',user.data.email)
        localStorage.setItem('type',user.data.usertype)
        localStorage.setItem('token',user.headers["x-auth"])
        localStorage.setItem('userId',user.data._id)

        yield put({type:"LOGIN_USER",payload:user})
    }catch (e){
        yield put({type:"LOGIN_USER_FAILED",payload:e})
        console.log('Error',e)
    }

}
function* addEvent (action) {
    debugger
    try{
        debugger
        const api={
            method:"post",
            url:'http://localhost:5000/api/events/add',
            data:action.payload,
            headers:{
                'x-auth': localStorage.getItem('token')
            }
        }
        let event=yield axios(api)
        yield put({type:"ADD_EVENT",payload:event})
    }catch (e){
        debugger
        yield put({type:"ADD_EVENT_FAILED",payload:e})
    }
}
function* addLikes (action) {
    debugger
    try{
        debugger
        const api={
            method:"post",
            url:'http://localhost:5000/api/like/add',
            data:action.payload,
            headers:{
                'x-auth': localStorage.getItem('token')
            }
        };
        let event=yield axios(api)
        debugger;
        yield put({type:"UPDATE_EVENT",payload:event})
    }catch (e){
        debugger
        yield put({type:"ADD_EVENT_FAILED",payload:e})
    }
}
function* mySaga() {
    debugger
    yield takeEvery("EVENTLIST", fetchEvents);
    yield takeEvery("LOGINUSER",login)
    yield takeEvery("ADDEVENT",addEvent)
    yield takeEvery("UPDATEEVENT",addLikes)

}
export default mySaga;
