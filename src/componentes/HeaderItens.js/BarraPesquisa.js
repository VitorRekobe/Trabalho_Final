import { useState } from "react";
import "./HeaderPesquisa.css"
import { Link } from 'react-router-dom'

function HeaderPesquisa() {
    const [valor, setValor] = useState();

    function mandarValueProd() {
      window.location.replace(`/Produtos?Lupa=${valor}`);
    }
  
    function pegarValueInput(event) {
      if (event.key === 'Enter' || event.code === 'Enter') {
        event.preventDefault();
        console.log(valor)
        mandarValueProd();
      }
    }
    return (     
            <div id="HeaderPesquisa">
                <Link to={'/lançamento'}><ol className="ol" id='Novidades'>Novidades</ol></Link>
                <Link to={'/Femininas'}><ol className="ol">Femininas</ol></Link>
                <Link to={'/Masculinas'}><ol className="ol">Masculinas</ol></Link>
                <Link to={'/kids'}><ol className="ol">Infantil</ol></Link>
                <ol><input onChange={(event) => setValor(event.target.value)} onKeyDown={pegarValueInput} placeholder="  &#x1F50E;&#xFE0E; Buscar"></input></ol>
            </div>
    );
}

export default HeaderPesquisa;