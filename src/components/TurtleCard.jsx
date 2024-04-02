


function TurtleCard({ img, name }) {
    return (
        <>
            <section className="turtleCard">
                <img src={img} alt={name} />
                <h2>{name}</h2>
                <button type="button">🍕</button>
            </section>
        </>
    )
}

export default TurtleCard
