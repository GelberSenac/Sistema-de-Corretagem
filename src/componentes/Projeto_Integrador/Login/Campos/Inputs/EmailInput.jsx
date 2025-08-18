
import styles from './EmailInput.module.css';

function Email() {
  return (
    <input 
      type="email" 
      id="email" 
      name="email" 
      placeholder="Email" 
      className={styles['email-input']}
      required 
    /> 
  )
}

export default Email;