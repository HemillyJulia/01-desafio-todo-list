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

  console.log(props);
  return (
    <div className={styles.paidastarefas}>
      {props.tasks.map((task) => {
        return (
          <div className={styles.cadatarefa} key={task.id}>
            
            <p><input type="radio" />
  
              {task.title} {""}
              {/* Na arroy function abaixo eu quero pegar o id que está mapeando e passar pra dentro da função  */}
              <button title="Deletar Comentário" onClick={ () => deletarComentario(task.id)}><Trash size={18}/></button>
              
            </p>
          </div>
        );
      })}
    </div>
  );
}









