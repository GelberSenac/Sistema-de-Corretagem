import logo from '../../../../../assets/Logotipo/logoPrincipal.png';

import styles from './LogoPrincipal.module.css';
function Email() {
  return (
    <img
            src={logo}
            alt="Logo da Corretora Fechou"
            className={styles.logologin}
    />
  )
}
export default Email;