import { Header } from "./Components/Header"
import { Newtask } from "./Components/Newtask"
import { Task } from "./Components/Task"
import './index.css'
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


const tasks  =[
  {
      id: uuidv4(),
      title:'Organizar as roupas de cama',
      isComplete:false
  },
  {
      id: uuidv4(),
      title:'Praticar alguma atividade física',
      isComplete:false
  },

  {
      id: uuidv4(),
      title:'Organizar as roupas de cama',
      isComplete:false
  }
]

function App() {
  const [tarefas, setTarefas] = useState (tasks)

  return (
    <div >
      <Header/>
      <Newtask setTarefas={setTarefas} coxinha={tarefas}/>
     <Task rolinho={tarefas}/>
      
    </div>
  )
}

export default App






