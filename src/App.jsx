import { Header } from "./Components/Header";
import { Newtask } from "./Components/Newtask";
import { Task } from "./Components/Task";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

//Criei uma variável que recebe um array de tarefas.
const tasks = [
  {
    id: uuidv4(),
    title: "Organizar as roupas de cama",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Praticar alguma atividade física",
    isComplete: false,
  },

  {
    id: uuidv4(),
    title: "Organizar as roupas de cama",
    isComplete: false,
  },
];

function App() {
  //criei uma variável que recebe o valor inicial que é o meu array
  // mais uma função que altera e me dar um novo valor .
  const [tarefas, setTarefas] = useState(tasks);

  return (
    <div>
      <Header />
      {/* Dentro do meu componente Newtask eu passei a função que altera o valor como propriedade */}
      <Newtask setTarefas={setTarefas} tarefasDoInput={tarefas} />
      {/* Dentro do meu componente Task , rolinho recebe como propriedade o valor inicial do meu estado que é tarefas */}
      <Task tarefasNaCaixa={tarefas} setTarefas={setTarefas} />
    </div>
  );
}

export default App;


