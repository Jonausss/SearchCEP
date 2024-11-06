import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './Styles.css'

function App() {

  const [input, setInput] = useState("");

  return(
    <div className="container">
      <h1 className="title">Search CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Type the CEP"/>
        <button type="button" className="buttonSearch"><FiSearch size={25} color="black"/></button>
      </div>
      <main className="main">
        <h2>091284098</h2>

        <span>Logradouro: </span>
        <span>Complemento: </span>
        <span>Bairro: </span>
        <span>São Paulo - SP</span>
      </main>
    </div>
  );
}

export default App
