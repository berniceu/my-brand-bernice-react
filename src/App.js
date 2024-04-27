
import Home from './components/Home';
import Signup from './components/Signup';
import { BlogList } from './components/Blogs';

import './components/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<BlogList/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
