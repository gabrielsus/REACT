import { useState, useEffect } from 'react';
import axios from 'axios'; //
function App() {
  const variable = "Nunca hola mundo porque trae mala suerte";
  const variable2 = new Date().getFullYear();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/listado')
      .then(response => {
        setData(response.data); 
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);


  return (
    <div>
    <div>
      <h1>{variable}</h1>
      <p style={{ color: "blue", fontSize: "20px" }} >
        Este es un párrafo con estilo en línea.
      </p>
      <p>
        El año actual es: {variable2}
      </p>
    </div>
    <div style={{color: "green", fontSize: "18px"}}>
      <h2>Listado de Tareas</h2>
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.titulo}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
    </div>
  );
}

export default App;