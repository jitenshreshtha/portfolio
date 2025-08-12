import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Adminhome from './pages/Admin/Adminhome';
import Homepage from './pages/Homepage';
import AdminEducation from './pages/Admin/AdminEducation';

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/me' element={<Adminhome />} />
          <Route path='/me/education' element={<AdminEducation />}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App;