import EmailInput from '../Inputs/EmailInput.jsx';
import styles from './EmailField.module.css';

function EmailField() {
  return (
    <div className={styles['input-group'] + ' ' + styles['with-icon']}>
      <i className={styles['input-icon'] + ' fas fa-envelope'}></i>
      <EmailInput />
    </div>
  );
}

export default EmailField;