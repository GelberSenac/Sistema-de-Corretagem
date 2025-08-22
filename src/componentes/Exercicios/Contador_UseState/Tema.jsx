import styles from './Tema.module.css'; // Importando o CSS para os estilos do tema


import { useState } from 'react';


function ModoNoturno() {
  const [modoNoturno, setModoNoturno] = useState(false);
 
  return (
    <div className={modoNoturno ? styles.dark : styles.light}> 
      <h1>Título</h1>
      <p>Conteúdo...</p>
      <button onClick={() => setModoNoturno(!modoNoturno)}>Alternar Modo</button>
    </div>
  );
}
export default ModoNoturno;