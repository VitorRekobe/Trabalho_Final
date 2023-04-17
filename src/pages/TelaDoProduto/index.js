import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../componentes/Header/Header";
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa";

import "./TelaProduto.css";

function TelaProduto() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idProd = searchParams.get('id');

    const [produto, setProduto] = useState('')

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
                    <div id="infoPageProduto">
                        <h1>Nome do Produto</h1>
                        <h3>Valor</h3>
                        <div>
                            <p>Descrição</p>
                        </div>
                        <button className="Botao">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TelaProduto;