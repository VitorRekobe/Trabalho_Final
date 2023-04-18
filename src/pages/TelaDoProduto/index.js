import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../componentes/Header/Header";
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa";

import "./TelaProduto.css";

function TelaProduto() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idProd = searchParams.get('id');

    const [produto, setProduto] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8082/api/produto/id=${idProd}`)
            .then((response) => response.json())
            .then((data) => {
                setProduto(data)
            })
            .catch(error => {
                console.error('Ocorreu um erro ao consultar o banco de dados', error);
            });
    }, [])

    function mandarProCarrinho() {
        const produtoJSON = JSON.stringify(produto);
        localStorage.setItem('produto', produtoJSON);
    }

    return (
        <div>
            <Header></Header>
            <HeaderPesquisa></HeaderPesquisa>
            <div>
                <div id="ProdutoDivPrincipal">
                    <div id="opçõesImage">
                        <div className="desImage"><div id="OpImage"></div></div>
                        <div className="desImage"><div id="OpImage"></div></div>
                        <div className="desImage"><div id="OpImage"></div></div>
                    </div>
                    <div id="efeitoZoom">
                        <div id="imagemPrincipalProd"></div>
                    </div>
                    {
                        produto.map((produto, index) => {
                            return (
                                <div id="infoPageProduto" key={index}>
                                    <h1>{produto.nome}</h1>
                                    <h3>{produto.valor}</h3>
                                    <div>
                                        <p>{produto.descricaoProduto}</p>
                                    </div>
                                    <input type="number" value="1" min="1" max="100" id="qtd"></input>
                                    <button className="Botao" onClick={mandarProCarrinho}>Comprar</button>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TelaProduto;