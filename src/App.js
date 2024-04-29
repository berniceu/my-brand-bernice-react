
import Home from './components/Home';
import Signup from './components/Signup';
import Blogs from './components/Blogs';
import ReadBlog from './components/ReadBlog';

import './components/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/readblog' element={<ReadBlog/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
