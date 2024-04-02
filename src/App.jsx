import { useState } from 'react'
import TurtleCard from "./components/TurtleCard";
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
  const [pizza, setPizza] = useState(0)
  const increment=(()=> setPizza(pizza+1))

  return (
    <>
     {ninjaTurtles.map((turtle) => <TurtleCard 
      name = {turtle.name}
      img = {turtle.img}
      key = {turtle.name}
      
     />)}

      
    </>
  )
}

export default App
