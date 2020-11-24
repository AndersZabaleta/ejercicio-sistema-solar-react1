//importamos el array SistemaSolar

import sistemaSolar from "./sistemaSolar";

function App() {
  //Creamos la constante planetas y la igualamos a lo que nos devuelva la funcion .map()
  //A la función .map le pasamos por parametros la variable planeta (o cualquier otro nombre), que nos servirá como puerta de acceso a cada elemento del array
  const planetas = sistemaSolar.map((planeta) => {
    //Devolvemos el código JSX (muy parecido al HTML) que queremos mostrar
    return (
      <div>
        <h1>{planeta.nombre}</h1>
        <p>{planeta.temperatura}</p>
        <p>{planeta.color}</p>
        <img src={planeta.imagen} alt="" />
      </div>
    );
  });

  //La función App devuelve la variable donde hemos guardado el código JSX
  return planetas;
}

export default App;
