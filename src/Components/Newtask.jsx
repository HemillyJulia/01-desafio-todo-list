import styles from './Newtask.module.css'

export function Newtask (){
    return (
        <div className={styles.newtask}>
        <input placeholder="Adicione uma nova tarefa"></input> <button>Criar <img src='https://cdn.icon-icons.com/icons2/1130/PNG/512/plussigninaddcircularinterfacebutton_80107.png' alt="Adicionar" /></button>
        
        </div>
    )
}


