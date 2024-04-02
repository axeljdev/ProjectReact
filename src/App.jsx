import { useEffect, useState } from 'react'
import './App.css'
import TurtleCard from './components/TurtleCard'

const ninjaTurtles = [{
  name: "Leonardo",
  img: "img/Leonardo2.png",
},
{
  name: "Michelangelo",
  img: "img/Michelangelo2.png",
},
{
  name: "Raphaelo",
  img: "img/Raphaello2.png",
},
{
  name: "Donatello",
  img: "img/Donatello2.png",
},
]
function App() {
  return (
    <>
      {ninjaTurtles.map((turtle) =>
        <TurtleCard
          key={turtle.name}
          img={turtle.img}
          name={turtle.name}
        />)}
    </>
  )
}

export default App