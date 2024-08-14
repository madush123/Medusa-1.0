import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeSection from './components/Home/HomeSection'
import AboutSection from './components/Home/AboutSection'
import TimelineSection from './components/Home/TimelineSection'

function App() {
   return (
    <>
      <div>
        <HomeSection/>
        <AboutSection/>
        <TimelineSection/>
      </div>
    </>
  );
};

export default App;
