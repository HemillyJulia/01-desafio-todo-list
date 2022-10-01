import styles from "./Newtask.module.css";
import plus from "../assets/plus.png";
import { useState } from "react";

export function Newtask() {
  const [inputTasks, setInputTasks] = useState("");

  function createNewTask(e) {
    e.preventDefault();
    console.log("Você clicou em criar.");

    console.log(inputTasks)
  }

  return (
    <div className={styles.newtask}>
      <input onChange={ (event) => {setInputTasks(event.target.value) }} value={inputTasks} placeholder="Adicione uma nova tarefa"></input>
      <button onClick={createNewTask} >
        Criar <img src={plus} alt="Adicionar" />
      </button>
    </div>
  );
}
