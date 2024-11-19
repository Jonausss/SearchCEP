import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './Styles.css'
import './services/api.jsx'
import api from './services/api.jsx';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');
  const [isWrongCep, setIsWrongCep] = useState(false);

  async function HandleSearch() {
    if (input === "")
    {
      alert("Preencha algum CEP.")
      return;
    }
    let isWrongCep;
    try
    {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
      setIsWrongCep(true);
    } 
    catch
    {
      alert("erro ao buscar");
      setIsWrongCep(false);
      setCep({});
    }
  }

  return(
    <div className="container">
      <h1 className="title">Buscar CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Coloque o CEP" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="button" className="buttonSearch" onClick={HandleSearch}><FiSearch size={25} color="black"/></button>
      </div>
      {Object.keys(cep).length > 0 && isWrongCep && (
        <main className="main">
          <h2>{cep.cep}</h2>

          <span>{"Logradouro: "+cep.logradouro} </span>
          <span>{"Complemento: "+cep.complemento} </span>
          <span>{"Bairro: "+cep.bairro} </span>
          <span>{cep.localidade+' - '+cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App
