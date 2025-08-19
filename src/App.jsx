import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Saudacao from './componentes/Saudacao/Saudacao.jsx';
import Alerta from './componentes/Alerta/Alerta.jsx';
import LoginForm from './componentes/Email_Password_Field/LoginForm.jsx';
import Contador from './componentes/Contador_UseState/Contador.jsx';
import Rodape from './componentes/Rodape/Rodape.jsx';

function App() {
  
    return (
      <div>
            <Saudacao />
            <Alerta />
            <LoginForm />
            <Contador />
            <Rodape />
      </div>
        
  );

}
export default App