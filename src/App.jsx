import { useState } from 'react'
<<<<<<< HEAD
=======
import RaphaeloCard from './components/Raphaelo'
>>>>>>> 32fd931e5c3af60cb16dfd1b0593ed920a1740b9
import './App.css'
import TurtleCard from './components/donatello'

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
