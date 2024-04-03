
// Composant pour le bouton "Description" qui affiche ou masque la description d'un ninja
function DescriptionButton ({index, handleDescriptions}) {
    return (
        
         // Bouton pour afficher/masquer la description du ninja spécifique
        <button type="button" onClick={() => handleDescriptions(index)}>Description</button>
    )
}

export default DescriptionButton