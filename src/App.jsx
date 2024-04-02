import { useState } from 'react'
import RaphaeloCard from './components/Raphaelo'
import './App.css'

const ninjaTurtles =[{
  name : "Leonardo",
  img : "img/Leonardo2.png",
},
{
  name : "Michelangelo",
  img : "img/Michelangelo2.png",
},
{
  name : "Raphaelo",
  img : "img/Raphaello2.png",
},
{
  name : "Donatello",
  img : "img/Donatello2.png",
},
] 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RaphaeloCard/>
    </>
  )
}

export default App
