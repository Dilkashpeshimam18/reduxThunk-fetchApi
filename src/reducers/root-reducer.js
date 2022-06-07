import { combineReducers } from "redux";
import postReducer from "./postReducer";
import createPostReducer from "./createPostReducer";

const rootReducer=combineReducers({
    create:createPostReducer,
    data:postReducer
})



export default rootReducer
