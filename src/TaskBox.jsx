import styles from "./TaskBox.module.css";


export function TaskBox(props){
    console.log(props)
    return (
        <div>{props.tasks.map(task => {
            return(
                <p>
                    {task.title} {''}
                    {task.isComplete}
                
                </p>
                             
            )
        }) }</div>
    )
}