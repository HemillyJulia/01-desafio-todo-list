import styles from './Newtask.module.css'
import plus from "../assets/plus.png";

export function Newtask (){
    return (
        <div className={styles.newtask}>
        <input placeholder="Adicione uma nova tarefa"></input> <button>Criar <img src={plus} alt="Adicionar" /></button>
        
        </div>
    )
}


