import "../../style/Home.scss"

const variable = "Bonjour à tous avec bienveillance!";

function Home() {
  return (   
      <p className="para">
        Je vous dis {variable}. Ce composant est écrit avec succès dans la page composant.Ce composant est introduit dans le dossier racine index.js

      </p>    
  );
}

export default Home;