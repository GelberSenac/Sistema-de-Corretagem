import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './componentes/Saudacao.jsx'
import Rodape from './componentes/Rodape.jsx'
import Alerta from './componentes/Alerta/Alerta.jsx'
import Botao from './componentes/Email_Password_Input/LoginButton.jsx'

function App() {
  
  const nome = "Gelber";
  const anoNascimento = 1977;

	function calcularIdade() {
    		return 2025 - anoNascimento;
  }

  const imagemUrl = "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg";  
  const linkUrl = "https://react.dev"; 
  
  const nomeCartao = "Gelber Rodolfo";
  const profissaoCartao = "Desenvolvedor Frontend";

  
  return (
		<div>
      <div>
        <h1>Olá, {nome}!</h1>
        <p>Você tem {calcularIdade()} anos.</p>
      </div>
      <div>
        <a href={linkUrl}>Site Oficial do React</a>
        <br></br>
        <img src={imagemUrl} alt="Logo do React" width="100" />
      </div>
      <div className='cartao'>
        <h2>{nomeCartao}</h2>
        <p>{profissaoCartao}</p>
      </div>
      <Saudacao />
      <Alerta />
      <Botao />
      <Rodape />
		</div>  
	)
}

export default App
