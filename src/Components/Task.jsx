import styles from "./Task.module.css";
import Clipboard from "../assets/Clipboard.png";

import { TaskBox } from "../TaskBox";

//Passar para p TaskBosx usando props

export function Task(props) {
  //Criei uma variável que recebe a propriedade tarefasNaCaixa
  const tasks = props.tarefasNaCaixa;

  console.log(tasks.length);

  const completedTasks = tasks.filter (function (task) {    
    //Se task.isComplete for true, retorna true, se false, retorna false
      if (task.isComplete === true) {
      return true;
    } else {
      return false;
    }
  });

  console.log("array filtrada",completedTasks.length)

  return (
    <div className={styles.container}>
      <div className={styles.taskheader}>
        <p className={styles.createdtasks}>
          Tarefas Criadas <span className={styles.count}>{tasks.length}</span>
        </p>
        <p className={styles.completedtasks}>
          Tarefas Concluídas <span className={styles.count}>{completedTasks.length}</span>
        </p>
      </div>
      <div className={styles.task}>
        {tasks.length > 0 ? (
          <TaskBox tasks={tasks} />
        ) : (
          <>
            <img src={Clipboard} att="ClipBoard" />
            <strong> Você ainda não tem tarefas cadastradas.</strong>
            <p>Crie tarefas e organize seus itens a fazer.</p>
          </>
        )}
      </div>
    </div>
  );
}



