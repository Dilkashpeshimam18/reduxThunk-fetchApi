import React,{useEffect,useState} from 'react'
import './AllPost.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPost,CreatePost } from '../../actions/action'
import {useNavigate} from 'react-router-dom'


let postData=[]
const AllPost = () => {
  const navigate = useNavigate()
  const {posts,loading}= useSelector((state)=>({...state.data}))
  const {data}= useSelector((state)=>({...state.create}))


  const [value,setValue]=useState(null)

  const submitPost =()=>{
    setValue(prompt('Enter post data'))
    


  }


 

  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(fetchPost())
    console.log(value)
    postData.push(value)
        dispatch(CreatePost(postData))

    



  },[value])
  return (
    <div className='allPost'>
      <div className='button__Container'>
      <button className='create__Button' onClick={submitPost}>Create Post</button>

      </div>
      <div className='post__Container'> 
      <div className='post__Cards'>{data.map((data,idx)=>(
        (data !== null &&  <div className='post__Card' key={idx}>
        <h6>{data}</h6>
       </div>  )
         
       
     ))}</div>

     <div className='post__Cards'>{loading?(posts?.map((post)=>(
       <div onClick={()=>navigate(`/post-detail/${post.id}`)} className='post__Card'><h6>{post.body}</h6></div>
     )
     )):(<h3>Loading...</h3>)}</div>

      </div>
      
    </div>
    
  );
}

export default AllPost