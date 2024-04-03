import DescriptionButton from "./DescriptionsButton"
import PizzaCounter from "./PizzaCounter"


function NinjaCard ({index, turtle, descriptions, handleClick, handleDescriptions}) {
    return (
        <section key={index} className="card">
          <img src={turtle.img} alt={turtle.name} />
          <h2>{turtle.name}</h2>

          {/* Si la description du ninja est affichée, affiche-la */}
          {descriptions === index ? (
            <p>{turtle.description}</p>
          ) : (

            /* Affiche le bouton PizzaCounter pour ajouter une pizza au ninja */
            <PizzaCounter index={index} turtle={turtle} handleClick={handleClick}/>
          )}

          {/* Affiche le bouton pour afficher/masquer la description du ninja */}
          <DescriptionButton index={index} descriptions={descriptions} handleDescriptions={handleDescriptions}/>
        </section >
    )
}

export default NinjaCard