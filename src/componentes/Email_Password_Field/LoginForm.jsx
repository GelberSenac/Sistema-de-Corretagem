import EmailField from './EmailField.jsx';
import PasswordField from './PasswordField.jsx';
import CPFField from './CPFField.jsx';
import LoginButton from '../Email_Password_Input/LoginButton.jsx';

 
function LoginForm() {
  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <EmailField />
      <PasswordField />
      <CPFField />
      <LoginButton />
    </div>
  );
}
export default LoginForm;
