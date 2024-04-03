
// Composant pour le compteur de pizzas
function PizzaCounter ({index, turtle, handleClick}) {
    return (
        // Bouton pour ajouter une pizza au ninja spécifique
        <button type="button" onClick={() => handleClick(index)}>{turtle.pizza} 🍕</button>
    )
}

export default PizzaCounter