import *  as types from './actionType'
import axios from 'axios'

const fetchPostStart=()=>({
    type:types.FETCH_POST_START
})
const fetchPostSuccess=(posts)=>({
    type:types.FETCH_POST_SUCCESS,
    payload:posts
});

const fetchPostFail=(error)=>({
    type:types.FETCH_POST_FAIL,
    payload:error
});

export const createPost=(data)=>({
    type:types.CREATE_POST,
    payload:data
})

export const CreatePost=(data)=>{
    return function(dispatch){
        dispatch(createPost(data))

    }
}

export const fetchPost=()=>{
    return function(dispatch){
        dispatch(fetchPostStart())
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            const posts =res.data;
            dispatch(fetchPostSuccess(posts))
        }).catch((error)=>{
            dispatch(fetchPostFail(error.message))
        })
    }
}

