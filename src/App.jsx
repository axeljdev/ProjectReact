import { useEffect, useState } from 'react'
import './App.css'
import RaphaeloCard from './components/Raphaelo';
import CardDetails from './components/CardDetails';

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
  const [isClicked, setIsClicked] = useState(true)
  const handleIsClicked = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      {ninjaTurtles.map((turtle) =>
     {
          isClicked?<CardDetails
      key = {turtle.name
        }
      img = { turtle.img }
      name = { turtle.name }
      handleIsClicked = { handleIsClicked }
        /> : <RaphaeloCard
        key={turtle.name}
        img={turtle.img}
        name={turtle.name}
        handleIsClicked={handleIsClicked}
      /> })
   }
    </>
  )
}

export default App;
