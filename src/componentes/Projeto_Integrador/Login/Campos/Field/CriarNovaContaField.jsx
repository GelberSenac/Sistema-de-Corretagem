import styles from './CriarNovaContaField.module.css';

function CriarNovaContaField() {
  return (
    <div className={styles['signup-container']}>
        <span>Não tem uma conta?</span>
        <a href="#" className={styles['criar-nova-conta']}>
          <i className="fas fa-user-plus"></i> Criar nova conta
        </a>
    </div>
  );
}

export default CriarNovaContaField;