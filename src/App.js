import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {

  const [data, setData] = useState('');
  
  return (
    <div className="App">
      <Navbar /> 
    </div>
  );
}

export default App;
