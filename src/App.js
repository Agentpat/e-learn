
import {  Route, Routes } from 'react-router-dom';

import './App.css'
import Home from './Home';
import PopularCourses from './popularcourses/PopularCourses';
import Login from './login/Login';
import Dashboard from './Dashboard';
import Register from './login/Register';

function App() {
  return (
    <div className="app">

      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/PopularCourses' element={<PopularCourses/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
     
      
    </div>
  );
}

export default App;
