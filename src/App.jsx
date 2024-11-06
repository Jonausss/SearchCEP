import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './Styles.css'

function App() {

  const [input, setInput] = useState('');

  function HandleSearch() {
    alert("Valor do input: " + input);
  }

  return(
    <div className="container">
      <h1 className="title">Search CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Type the CEP" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="button" className="buttonSearch" onClick={HandleSearch}><FiSearch size={25} color="black"/></button>
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
