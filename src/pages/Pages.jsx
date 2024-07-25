import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ReviewInput from './ReviewInput';

function Pages() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/review' element={<ReviewInput/>}/>
      </Routes>
  )
}

export default Pages