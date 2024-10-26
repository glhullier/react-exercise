
function descendant (props){
    const valeur = props.value
    return(
        <>
           <p>Deux * {valeur}</p> 
           <p>Cette phrase avec le {valeur} est obtenue grâce à la props du dossier Parent</p>
           </>        
    )
}
export default descendant;