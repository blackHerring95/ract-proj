import { useState } from 'react'
import './App.css'
import Header2 from './components/header2'
import About from './components/about'
import Footer from './components/footer'
import ProjectsList from './components/projects'


function App() {
  
  return (
    <>
      <Header2 name='Damir D.' tagline='Solutions that speak for themselves.'></Header2>
      <About bio='Software developer. Likes to code.'></About>
      <ProjectsList></ProjectsList>
      <Footer phoneNumber='+38761123123' email='test@test.com'></Footer>
    </>
  )
}

export default App
