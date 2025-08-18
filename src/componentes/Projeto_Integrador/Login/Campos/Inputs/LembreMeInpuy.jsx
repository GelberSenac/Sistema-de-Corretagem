
import styles from './LembreMeInput.module.css';

function LembreMe() {
  return (
    <input type="checkbox" id="remember" name="remember" className={styles.checkbox} /> 
  )
}
export default LembreMe;