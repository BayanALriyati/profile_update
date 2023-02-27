// import axios from "axios";
import {React} from "react";
import Header from './Header';
import Profile from './Profile';
import Add from './Add';
import Update from './Update';
import Edit from './Edit';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes ,Route} from 'react-router-dom';

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Profile />} />
      <Route path='/add' element={<Add />} />
      <Route path='/update' element={<Update />} />
      <Route path='/edit' element={<Edit />} />
     </Routes>
      </>
  )
 }

export default App;
