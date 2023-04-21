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
    const [qtd, setQtd] = useState(1);


    useEffect(() => {
        fetch(`http://localhost:8082/api/produto/${idProd}`)
            .then((response) => response.json())
            .then((data) => {
                setProduto(data)
            })
            .catch(error => {
                console.error('Ocorreu um erro ao consultar o banco de dados', error);
            });
    }, [])

    function mandarProCarrinho() {
        const carrinhoJSON = localStorage.getItem('carrinho');
        let carrinho;
      
        if (carrinhoJSON) {
          carrinho = JSON.parse(carrinhoJSON);
        } else {
          carrinho = [];
        }

        const produtoExistente = carrinho.find((p) => p.id === produto.id);

        if (produtoExistente) {
          // Se o produto já existe no carrinho, incrementa a quantidade
          produtoExistente.quantidade++;
        } else {
          // Se o produto não existe no carrinho, adiciona ao carrinho com quantidade 1
          produto.quantidade = qtd;
          carrinho.push(produto);
          console.log(produto.quantidade)
        }
      
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
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
                        produto ? produto.map((produto, index) => (
                            <div id="infoPageProduto" key={index}>
                                <h1>{produto.nome}</h1>
                                <h3>{produto.valor}</h3>
                                <div>
                                    <p>{produto.descricaoProduto}</p>
                                </div>
                                <input type="number" defaultValue ="1" min="1" max="100" id="qtd" onChange={(e) => setQtd(parseInt(e.target.value))}></input>
                                <button className="Botao" onClick={mandarProCarrinho}>Comprar</button>
                            </div>
                        )) :  null
                    }
                </div>
            </div>
        </div>
    )
}

export default TelaProduto;