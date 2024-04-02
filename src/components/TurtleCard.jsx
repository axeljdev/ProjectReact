import { useState } from "react"


function TurtleCard({ img, name }) {
  const [pizza, setPizza] = useState(0)
  const handleclick = () => {
    setPizza(pizza + 1)
  }

  return (
    <>
      <section className="card">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <button type="button"> Voir plus</button>
        <button type="button"
          onClick={handleclick}>{pizza} 🍕</button>
      </section>

    </>
  )
}

export default TurtleCard