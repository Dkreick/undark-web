import React from 'react'
import Header from './components/Header'
import Intro from './pages/Intro'
import Playable from './pages/Playable'
import Project from './pages/Project'
import Team from './pages/Team'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Team />
      <Project />
      <Playable />
      <ContactUs />
    </div>
  )
}

export default App
