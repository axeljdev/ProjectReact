import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MichelAngelo from "./components/MichelAngelo";
import './App.css'
import LeonardoCard from './Components/Leonardo'

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

  return (
    <>
     <MichelAngelo name= {ninjaTurtles[1].name}
     img= {ninjaTurtles[1].img}
     />
    </>
  )
}

export default App
