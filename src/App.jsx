import './App.css';

import { Manager } from './Components/Manager/Manager';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
     
      <NavBar />
      <Manager />
  
    
    </Router>
  );
}

export default App;
