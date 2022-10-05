import styles from "./Newtask.module.css";
import plus from "../assets/plus.png";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export function Newtask(props) {

    //criei duas variáveis que recebe as propriedades do meu componente App
  const setTarefas = props.setTarefas;
  const tarefas = props.tarefasDoInput;

  const [inputTasks, setInputTasks] = useState("");

  //criei uma função que recebe uma variável no qual será as novas informalões inseridas na minha lista de tarefas.
  function createNewTask() {
    const novaTarefa = {
      id: uuidv4(),
      title: inputTasks,
      isComplete: false,
    };

    //Dentro da função eu chamei as minhas duas funções sets, uma vai pegar as tarefas antigas mais as que irei inserir
    //A outra irá limpar meu input após inserir uma tarefa nova.
    setTarefas([...tarefas, novaTarefa]);
    setInputTasks("");

    //Se o novo valor do meu input for maior que 0 faz o console.log do que estiver escrito
    //Se não, dispara um alerta na tela.
    console.log(inputTasks);

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

