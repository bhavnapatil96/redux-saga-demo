import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import fetchEvents from './saga'
function* mySaga() {
    debugger
    yield takeEvery("EVENT_LIST", fetchEvents);
}

export default mySaga;