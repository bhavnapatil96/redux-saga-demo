import _ from 'lodash'
export const eventReducer=(state=[],action)=>{

    switch (action.type){
        case "EVENT_LIST":
            debugger
            console.log('reducer',action.payload.data)
            return {...state,eventList:_.cloneDeep(action.payload.data)}
        case "ADD_EVENT":
            console.log('reducer',action.payload.data)
            debugger
            return {...state,eventList:action.payload.data}
        case "UPDATE_EVENT":
            // console.log('reducer',action.payload.data)
            // debugger
            // return {...state,eventList:action.payload.data}

            let s = {...state};
            debugger;
            let index=s.eventList.findIndex((d)=>d._id===action.payload.data._id)
            s.eventList.splice(index,1)
            s.eventList.splice(index,0,action.payload.data);
            state = _.cloneDeep({...s});
            return{
                ...state,eventList:_.cloneDeep(state.eventList)
            }
        default:
            debugger;
            return [...state]
    }
}
export const userReducer=(state=[],action)=>{
    switch (action.type){
        case "LOGIN_USER":
            debugger
            return action.payload
        case "LOGIN_USER_FAILED":
            debugger
            return action.payload
        default:
            return [...state]
    }
}
