import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
   return (
    <>
      <div>
        <Home/>
        <About/>

      </div>
    </>
  );
};

export default App;
