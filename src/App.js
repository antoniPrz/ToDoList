import "./App.css";
import React, { useState, useEffect } from "react";
import ListaTareas from "./components/ListaTareas";
import Tarea from "./components/Tarea";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/yoka")
      .then((r) => r.json())
      .then((data) => setTareas(data))
      .catch((error) => console.log(error));
  }, []);

  // const updateTareas = () => {
  //   fetch("https://assets.breatheco.de/apis/fake/todos/user/yoka",{
  //   method: "PUT",
  //   headers: {
  //     "content-type": "aplication/json"
  //   },
  //   body: JSON.stringify(tareas)

  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error))
  // }

  return (
    <div>
      <h1>TO DO LIST </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          setTareas(tareas.concat({label:tarea , done: false}));
          console.log(tareas);
          // updateTareas();
          setTarea("");
          
        }}
      >
        <input
          type="text"
          placeholder="ingresa una tarea"
          onChange={(event) => setTarea(event.target.value)}
          value={tarea}
        />
      </form>
      <p>{tarea}</p>
      <ul>
        {tareas.map((item, index) => {
          return (
            <li key={index}>
              {item.label}{""}
              <span
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  setTareas(
                    tareas.filter((elemento, i) => {
                      if (index !== i) {
                        return elemento;
                      }
                    })
                  );
                  // updateTareas();
                }}
              >
              "  X"
              </span>
            </li>
          );
        })}
      </ul>
      <ListaTareas />
      <Tarea />
      {console.log(JSON.stringify(tareas))}
      {console.log(typeof(tareas))}
    </div>
  );
}

export default App;
