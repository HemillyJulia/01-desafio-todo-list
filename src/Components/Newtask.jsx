import styles from "./Newtask.module.css";
import plus from "../assets/plus.png";
import { useState } from "react";

export function Newtask() {
  const [inputTasks, setInputTasks] = useState("");

  function createNewTask() {
    //Se o novo valor do meu input for maior que 0 faz o console.log do que estiver escrito
    //Se não, dispara um alerta na tela.
    if (inputTasks.length > 0) {
      console.log("Você clicou em criar.");
    } else {
      window.alert("Crie uma tarefa válida!");
    }
  }

  return (
    <div className={styles.newtask}>
      <input
        onChange={(event) => {
          setInputTasks(event.target.value);
        }}
        value={inputTasks}
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button onClick={createNewTask}>
        Criar <img src={plus} alt="Adicionar" />
      </button>
    </div>
  );
}
