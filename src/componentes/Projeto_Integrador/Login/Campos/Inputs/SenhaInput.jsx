
import styles from './SenhaInput.module.css';

function Password() {
  return (
    <input 
      type="password" 
      id="password" 
      name="password" 
      placeholder="Senha" 
      className={styles['password-input']}
      required 
    /> 
  )
}

export default Password;