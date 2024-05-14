import './App.css'
import Header2 from './components/header2'
import About from './components/about'
import Footer from './components/footer'
import ProjectList from './components/project-list'
import {useState} from "react" //import useState to use it, this is a hook
import Input from './components/input'

//you can only use hook in functional components
function App() {
  //whenever the value "name" is updated it will rerender the page
  const [name, setName] = useState<string>();


  return (
    <>
      <Header2 name='Damir D.' tagline='Solutions that speak for themselves.'></Header2>
      <About bio='Software developer. Likes to code.'></About>
      
      <Input onUpdate={(value)=> setName(value)}></Input>
      {/*
      you can send method like this to use previousli saved value...
      <Input onUpdate={(value)=> setName((previous) => previous + value)}></Input> 
      */}
      {name}
      <ProjectList></ProjectList>
      <Footer phoneNumber='+38761123123' email='test@test.com'></Footer>
    </>
  )
}

export default App
