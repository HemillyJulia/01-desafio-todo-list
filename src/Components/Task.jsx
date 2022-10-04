import styles from "./Task.module.css";
import Clipboard from "../assets/Clipboard.png";
import { v4 as uuidv4 } from 'uuid';
import { TaskBox } from "../TaskBox";

//Passar para p TaskBosx usando props



export function Task(props) {
  const tasks = props.rolinho
  return (
    <div className={styles.container}>
        <div className={styles.taskheader}>
          <p className={styles.createdtasks}>Tarefas Criadas <p className={styles.count}>0</p></p>
          <p className={styles.completedtasks}>Tarefas Concluídas <p className={styles.count}>0</p></p>
        </div>
      <div className={styles.task}>
        
        {tasks.length > 0 ? <TaskBox tasks={tasks}/> : <><img src={Clipboard} att="ClipBoard" />
        <strong> Você ainda não tem tarefas cadastradas.</strong>
        <p>Crie tarefas e organize seus itens a fazer.</p></>}
    
        
      </div>
    </div>
  );
}






