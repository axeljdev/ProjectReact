import { useState } from 'react'
import './App.css'
import NinjaCard from './components/NinjaCard'

const ninjasTurtles = [
  {
    name: "Leonardo",
    img: "img/Leonardo2.png",
    pizza: 0,
    description: "Leader des Tortues Ninja, Leonardo est le plus sérieux et le plus dévoué au code d'honneur des ninjas."
  },
  {
    name: "Michelangelo",
    img: "img/Michelangelo2.png",
    pizza: 0,
    description: "Michelangelo est l'artiste de la bande, toujours joyeux et prêt à faire des blagues."
  },
  {
    name: "Raphaelo",
    img: "img/Raphaello2.png",
    pizza: 0,
    description: "Le rebelle de l'équipe, Raphaelo est impulsif mais également courageux et loyal envers ses amis."
  },
  {
    name: "Donatello",
    img: "img/Donatello2.png",
    pizza: 0,
    description: "Le cerveau de la bande, Donatello est un génie de la technologie et des sciences."
  },
]

function App() {

  // État pour stocker la liste des ninjas et leur nombre de pizzas
  const [ninjas, setNinjas] = useState(ninjasTurtles)

  // Fonction pour gérer l'ajout d'une pizza à un ninja spécifique
  const handleClick = (index) => {

    // Crée une copie de la liste des ninjas
    const newNinjas = [...ninjas]

    // Incrémente le nombre de pizzas du ninja spécifique dans la copie
    newNinjas[index].pizza +=1

    // Met à jour l'état avec la nouvelle liste des ninjas
    setNinjas(newNinjas)
  }

  // État pour gérer l'affichage des descriptions des ninjas
  const [descriptions, setDescriptions] = useState(null)

  // Fonction pour gérer l'affichage des descriptions des ninjas
  const handleDescriptions =(index) => {
    // Si la description est déjà affichée, la masquer. Sinon, l'afficher.
    setDescriptions(index === descriptions ? null : index)
  }

  return (
    <>
    {/* Parcourt la liste des ninjas et affiche leurs informations */}
      {ninjas.map((turtle, index) => (
        <NinjaCard 
        key={index} 
        turtle={turtle} 
        index={index} 
        descriptions={descriptions} 
        handleClick={handleClick} 
        handleDescriptions={handleDescriptions}/>
      ))}
    </>
  )
}

export default App;