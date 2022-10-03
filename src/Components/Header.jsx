import styles from'./Header.module.css'
import Logo from'../assets/Logo.png'

//Aqui eu tenho o cabeçalho da minha aplicação
export function Header () {
    return(
        <header className={styles.header}>
        <img src={Logo} att="Logotipo do todo"/>    
        </header>
      
    )
}
