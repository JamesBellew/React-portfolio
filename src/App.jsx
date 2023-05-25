

import './App.css'
import LandingPage from './pages/Home/Index/LandingPage'
import '../src/pages/Home/css/landingPage.css'
import NavBar from './pages/NavBar'
import { Fragment } from 'react'
import Projects from './pages/Home/Index/Projects'
import Linked from './pages/Home/Index/Linked'

function App() {


  return (
    <div>
     
    <div className="App h-screen landing-page w-full bg-slate-900 flex justify-left items-center text-left h-screen">
      {NavBar}
    {LandingPage}
  
    </div>
<div className='website-section'>
    <Projects/>
    </div>
    <div>
      <Linked/>
    </div>
    </div>
  )
}

export default App
