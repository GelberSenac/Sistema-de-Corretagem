import MeLembreInput from '../Inputs/LembreMeInpuy.jsx';
import styles from './LembreMeField.module.css';



function Lembreme() {
  return (

    <div className={styles['content-a']}>
        <label className={styles['remember-me']}>
            <MeLembreInput />
        <span>Lembre-me</span>
        </label>
        <a href="#" className={styles['forgot-password']}>Esqueci minha senha</a>
    </div>

  )
}
export default Lembreme;