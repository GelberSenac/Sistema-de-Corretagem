import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import SectionContent from './componentes/Projeto_Integrador/Login/Tela/sectionContet.jsx';

function App() {
  
    return (
    <div className={styles.body}>
      <main className={styles.container}>
          <SectionContent />
      </main>
    </div>
  );

}

export default App
