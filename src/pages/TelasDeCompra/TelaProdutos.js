import Header from "../../componentes/Header/Header"
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa"

import { useEffect, useState } from 'react';
import "./TelaProd.css"
import { useLocation } from "react-router-dom";

function TelaProd() {
    const [infoProd, setInfoProd] = useState('');

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const valorDaPesquisa = searchParams.get('Lupa');

    console.log(valorDaPesquisa)
    useEffect(() => {
        if (valorDaPesquisa) {
            fetch(`http://localhost:8082/api/produto/Lupa?marca=${valorDaPesquisa}
            &categoria=${valorDaPesquisa}&nome=${valorDaPesquisa}`)
                .then(response => response.json())
                .then(data => {
                    setInfoProd(data);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao consultar o banco de dados', error);
                });
        }
    }, []);

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
                    <select className='StyleInputUser selectFiltros'>
                        <option >Selecione uma Categoria</option>
                        <option >Selecione uma Categoria</option>
                    </select>
                    <select className='StyleInputUser selectFiltros'>
                        <option >Selecione uma Marca</option>
                        <option >Selecione uma Marca</option>
                    </select>
                    <select className='StyleInputUser selectFiltros'>
                        <option >Selecione o Valor</option>
                        <option >0 a 100,00</option>
                    </select>
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
