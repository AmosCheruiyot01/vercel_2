import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './body'
import Header from './head'
import Footer from './foot'


const Child = () =>{
  return(
    <div><h2>register</h2></div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <child/>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}

export default App
