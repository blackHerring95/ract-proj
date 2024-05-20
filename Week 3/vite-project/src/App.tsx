import './App.css'
import Header2 from './components/header2'
import About from './components/about'
import Footer from './components/footer'
import ProjectList from './components/project-list'
import {useState, useEffect} from "react" //import useState to use it, this is a hook
import Input from './components/input'

//you can only use hook in functional components
function App() {
  //whenever the value "name" is updated it will rerender the page
  //const [name, setName] = useState<string>();

  //takes two parameters, a method and a array
  //method will fire whenever there is a change on a parameter in the array
  //if the array is empty it will fire only once
  useEffect(() =>{
    console.log("test use effect once"); //rendered onece at begining
  }, [])

  // useEffect(() =>{
  //   console.log(`test use effect once ${name}`); //rendered onece at beginging, rendered whenever there is chagne to name
  // }, [name])

  return (
    <>
      <Header2 name='Damir D.' tagline='Solutions that speak for themselves.'></Header2>
      <About bio='Software developer. Likes to code.'></About>
      
      {/* <Input onUpdate={(value)=> setName(value)}></Input> */}
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
