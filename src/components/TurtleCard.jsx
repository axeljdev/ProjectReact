


function TurtleCard ({img, name, increment}) {
    return (
        <>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <button type="button" onClick={increment}>bouton</button>
        
        </>
    )
}

export default TurtleCard
