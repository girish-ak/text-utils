import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Texttools from './components/Texttools';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#101820FF'

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#F2AA4Cff'

    }
  }
  return (
    <>
      <Router>
      <Navbar title="Text-Utilities" mode={mode} toggleMode={toggleMode}/>
      
      <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
          <Texttools heading="Input Text to Analyize" mode={mode} />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
