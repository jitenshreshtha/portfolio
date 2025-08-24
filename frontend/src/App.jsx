import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Adminhome from './pages/Admin/Adminhome';
import Homepage from './pages/Homepage';
import AdminEducation from './pages/Admin/AdminEducation';
import AdminExperience from './pages/Admin/AdminExperience';
import AdminProject from './pages/Admin/AdminProject';
import Ratingpage from './pages/Ratingpage';

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/me' element={<Adminhome />} />
          <Route path='/me/education' element={<AdminEducation />}/>
          <Route path='/me/experience' element={<AdminExperience />} />
          <Route path='/me/project' element={<AdminProject />} />
          <Route path='/rate' element={<Ratingpage />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App;