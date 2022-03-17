import './App.css';
import {Route, Routes} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashnoard';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/dashboard' exact element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
