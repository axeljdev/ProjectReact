import { useState } from "react"
import CardDetails from "./CardDetails";


function RaphaeloCard({ img, name, handleIsClicked }) {
    const [pizza, setPizza] = useState(0)
    const handLeClick = () => {
        setPizza(pizza + 1);
    }

    return (
        <>
            <section className="card">
                <img src={img} alt={name} />
                <h2>{name}</h2>
                <button type="button" onClick = {handleIsClicked}> Voir plus</button>
            <button type="button"
                onClick={handLeClick}>{pizza} 🍕</button>
        </section >
        </>
    )
}

export default RaphaeloCard