import Header from "../../componentes/Header/Header"
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa"

import { useEffect, useState } from 'react';
import "./TelaProd.css"
import { useLocation } from "react-router-dom";
import SelectedMarca from "../../componentes/selectMarca/selectMarca";
import SelectCategoria from "../../componentes/selectCategoria/selectCategoria";

function TelaProd() {
    const [infoProd, setInfoProd] = useState('');

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const valorDaPesquisa = searchParams.get('Lupa');

    const [dadoMarca, setDadoMarca] = useState('');
    const [dadoCategoria, setDadoCategoria] = useState('');

    const pegarMarca = (setSelectedMarca) => {
        setDadoMarca(setSelectedMarca)
    }

    const pegarCategoria = (setSelectedCategoria) => {
        setDadoCategoria(setSelectedCategoria)
    }

    if (dadoMarca || dadoCategoria) {
        fetch(`http://localhost:8082/api/produto/Lupa?marca=${dadoMarca}
        &categoria=${dadoCategoria}&nome=${valorDaPesquisa}`)
            .then(response => response.json())
            .then(data => {
                setInfoProd(data);
            })
            .catch(error => {
                console.error('Ocorreu um erro', error);
            });
    } else {
        fetch(`http://localhost:8082/api/produto/Lupa?marca=${valorDaPesquisa}
        &categoria=${valorDaPesquisa}&nome=${valorDaPesquisa}`)
            .then(response => response.json())
            .then(data => {
                setInfoProd(data);
            })
            .catch(error => {
                console.error('Ocorreu um erro', error);
            });
    }

    let produtos = null;
    if (infoProd) {
        produtos = infoProd.map((produto, index) => {
            return (
                <div className="cardsProdutos" key={index}>
                    <div className='ImagemProd'></div>
                    <div>
                        <hr></hr>
                        <h2 className='nomeProd'>{produto.nome}</h2>
                        <h2>{produto.valor}</h2>
                        <h4>{produto.descricaoProduto}</h4>
                    </div>
                </div>
            )
        });
    }

    return (
        <div>
            <Header />
            <HeaderPesquisa />
            <div>
            </div>
            <div className="PrincipalProd">
                <div className="filtros">
                    <SelectedMarca onValueChange={pegarMarca}></SelectedMarca>
                    <SelectCategoria onValueChange={pegarCategoria}></SelectCategoria>
                    <select className='StyleInputUser selectFiltros'>
                        <option >Selecione o Sexo</option>
                        <option >Masculino</option>
                        <option >Feminino</option>
                        <option >Unisex</option>
                    </select>
                </div>
                <div className="cardsProdutosDiv">
                    {produtos}
                </div>
            </div>
        </div>
    )
}

export default TelaProd;
