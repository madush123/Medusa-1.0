import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar/NavBar'

function App() {
   return (
    <>
      <div>
        <Navbar/>
        <h1>Repairs in Progress</h1>
      </div>
    </>
  );
};

export default App;
