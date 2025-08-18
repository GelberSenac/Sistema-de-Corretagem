import SenhaInput from '../Inputs/SenhaInput.jsx';
import styles from './SenhaField.module.css';

function Password() {
  return (
    <div className={styles['input-group'] + ' ' + styles['with-icon']}>
      <i className={styles['input-icon'] + ' fas fa-lock'}></i>
      <SenhaInput />
    </div>
  )
}

export default Password;