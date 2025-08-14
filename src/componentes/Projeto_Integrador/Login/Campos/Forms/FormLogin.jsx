import EmailField from '../Field/EmailField.jsx;'
import PasswordField from '../Field/PasswordField.jsx';
import LembreMeField from '../Field/LembreMeField.jsx';
import LoginButton from '../Field/BotaoLoginField.jsx';

 
function LoginForm() {
  return (
    <form id="login-form" action="./principal.html" method="get">
        <EmailField />
        <PasswordField />
        <LembreMeField />
        <LoginButton />
    </form>
  );
}
export default LoginForm;