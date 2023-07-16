import React ,{useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {  Route, Routes} from "react-router-dom";
import About from "./components/About";



function App() {


  const [mode, setMode] = useState('light')
    
    
    const toggleMode =()=>{
    if(mode === 'light'){

      setMode('dark');
      document.body.style.backgroundColor = "grey";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    
    }
    
    
  }
  return (
   
<>

  
   <Navbar title="TEXTUTILS" about="About Textiles" mode={mode} toggleMode ={toggleMode}/>


 


   <Routes>
    <Route exact path="/" element={<TextForm heading ="Enter the text to Analyze" mode={mode}/>} />
    <Route exact  path="/about" element ={<About/>}/>

      </Routes>
    
     
 
     </>
    
  
 
     







    
  
    );
  }
export default App;
