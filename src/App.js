import React,{lazy, Suspense} from 'react'
import AllPost from './components/AllPost/AllPost';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  return (
    <Router>
     
       <div className="App">
       <Routes>
           <Route exact path='/' element={<AllPost />} />
           <Route exact path='/post-detail/:id' element={<PostDetail />} />

       </Routes>
    </div>

    </Router>
  );
   
}

export default App;
