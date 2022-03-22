import './App.css';
import {Route, Routes} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home';
import Signin from './components/Signin'
import Signup from './components/Signup'
import Navbar from './components/Navbar';
import Dashboard from './Routers/Dashnoard';
import { PrivateRoute } from './Routers/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout } from './Redux/Action';

function App() {
  const dispatch = useDispatch()
  const thereistoken = useSelector((state) => state.token)
  const tok = localStorage.getItem('token')
  useEffect(() => {
    if(!thereistoken && tok){dispatch(logout())}
  },[thereistoken])

  return (
    <div className="App">
      <div>
        <Router>

          <Routes>

            <Route path='/*' element={<Dashboard/>}/>

            <Route exact path="/" element={<Home/>}/>

            <Route exact path="/signin" element={
            <PrivateRoute>
              <Navbar/>
              <Signin/>
            </PrivateRoute>}/>
            
            <Route exact path="/signup" element={
            <PrivateRoute>
              <Navbar/>
              <Signup/>
            </PrivateRoute>}/>
          </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;
