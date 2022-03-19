import './App.css';
import {Route, Routes} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" exact element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
