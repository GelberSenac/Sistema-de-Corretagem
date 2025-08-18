import styles from './FormLogin.module.css';

import EmailField from '../Field/EmailField.jsx'
import PasswordField from '../Field/SenhaField.jsx';
import LembreMeField from '../Field/LembreMeField.jsx';
import LoginButton from '../Field/BotaoLoginField.jsx';

 
function LoginForm() {
  return (
    <form id={styles.logoform} action="./principal.html" method="get">
        <EmailField className="" />
        <PasswordField />
        <LembreMeField />
        <LoginButton />
    </form>
  );
}
export default LoginForm;