
import styles from './BotaoLoginInput.module.css';

function Botao() {
  return (
    <button type="submit" className={styles.button}>
        {<i className="fas fa-sign-in-alt"></i>}
        Entrar
    </button> 
  )
}
export default Botao;