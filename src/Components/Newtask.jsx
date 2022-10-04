import styles from "./Newtask.module.css";
import plus from "../assets/plus.png";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export function Newtask(props) {
  const setTarefas = props.setTarefas
  const tarefas = props.coxinha

  const [inputTasks, setInputTasks] = useState("");



  function createNewTask() {

    const novaTarefa ={
        id:uuidv4(),
        title:inputTasks,
        isComplete:false
    }

    setTarefas( [...tarefas,novaTarefa])
    setInputTasks ('')

    //Se o novo valor do meu input for maior que 0 faz o console.log do que estiver escrito
    //Se não, dispara um alerta na tela.
console.log(inputTasks)

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
