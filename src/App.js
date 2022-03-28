import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import UserList from './Components/UserList';
import Admin from './Pages/Admin';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route  exact path='/' element={<Home/>} />
        <Route   path='/users' element={<UserList/>} />
        <Route  path='/user/:id' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin ' element={<PrivateRoute isAuth={isAuth}/>}>
        <Route  path='/admin' element={<Admin/>} />
        </Route>
        <Route path='/*' element={<Error/>}/>


      </Routes>

    </div>
  );
}

export default App;