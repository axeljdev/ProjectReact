import { useState } from "react"


function RaphaeloCard ({img, name}) {
  const [pizza, setPizza] = useState(0)
  const handLeClick =() => {
    setPizza(pizza +1)
  }

    return (
        <>
        <section className="card">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <button type="button"> Voir plus</button>
            <button type="button"
            onClick={handLeClick}>{pizza} 🍕</button>
        </section>

        </>
    )
}

export default RaphaeloCard