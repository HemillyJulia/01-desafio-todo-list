import styles from "./TaskBox.module.css";

export function TaskBox(props) {
  console.log(props);
  return (
    <div className={styles.paidastarefas}>
      {props.tasks.map((task) => {
        return (
          <div className={styles.cadatarefa} key={task.id}>
            
            <p><input type="radio"/>
              {task.title} {""}
              
            </p>
          </div>
        );
      })}
    </div>
  );
}


