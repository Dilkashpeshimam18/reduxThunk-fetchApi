import * as types from '../actions/actionType'

const initialState={
    data:[]
}

const createPostReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.CREATE_POST:
            return{
                ...state,
                data:action.payload
            }
            default:
                return state;
    }
}

export default createPostReducer;