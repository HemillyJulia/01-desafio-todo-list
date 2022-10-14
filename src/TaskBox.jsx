import { Trash } from "phosphor-react";
import styles from "./TaskBox.module.css";

export function TaskBox(props) {


  function deletarComentario (id){
    // Vou usar o filter pra me retornar todos os outros itens menos o que tem o id que irei apagar
    //Cada task do filter e vou pegar a task.id que for diferente de id. Retornar todas as tasks que 
    //o id dela for diferente do id que vou receber 
    const filtrandoTarefas = props.tasks.filter(task => task.id !== id)

  //Depois tenho que salvar essa nova informação no meu estado    
    props.setTarefas(filtrandoTarefas)
    console.log (`Deletou comentário ${id}`)

    console.log(filtrandoTarefas)
    
  }

  function tarefasConcluidas (id){

    //Vou percorrer todo o meu array de tasks, pego cada task que foi mapeada e faço da seguinte forma:
    //Se a task.id for igual a id me retorna um objeto. Esse objeto vai ser os valores antigos
    //mais a negação de task.isComplete

    const tarefasOk = props.tasks.map (task => task.id === id ? {
      ...task,isComplete: !task.isComplete} : task)
      props.setTarefas(tarefasOk)
    console.log('Tarefa Concluída',tarefasOk)
  }

  console.log(props);
  return (
    <div className={styles.paidastarefas}>
      {props.tasks.map((task) => {
        return (
          <div className={styles.cadatarefa} key={task.id}>
            <div>
              
           {/* se o task.iscomplete for true eu passo a className, se n uma string vazia */}
            
            <p className={task.isComplete=== true ? styles.textodatarefa : ""}><input  type="radio" checked={task.isComplete} onChange={() => tarefasConcluidas(task.id)}/>
  
              {task.title} {""}
              {/* Na arroy function abaixo eu quero pegar o id que está mapeando e passar pra dentro da função  */}
              <button title="Deletar Comentário" onClick={ () => deletarComentario(task.id)}><Trash size={18}/></button>
              
            </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}












