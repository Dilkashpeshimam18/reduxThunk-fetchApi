import axios from 'axios'
import React,{useEffect,useState} from 'react'
import './PostDetail.css'

const PostDetail = () => {
  let post=[]
  const[postData,setPostData]=useState(null)

  const fetchSinglePost =async()=>{
    try{
      const path = window.location.pathname
    const id = path.split('/')[2]
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>{
      const data= response.data
       setPostData(data)
    })
    console.log(id)

    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
 
    fetchSinglePost()

  },[])
  return (
    <div className='postDetail__Container'>
      <div className='post__Card'>
      <h5>{postData?.body}</h5>
        
      </div>
      
      </div>
  )
}

export default PostDetail