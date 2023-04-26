import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../componentes/Header/Header";
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa";

import "./TelaProduto.css";

function TelaProduto() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idProd = searchParams.get("id");

  const [produto, setProduto] = useState();
  const [qtd, setQtd] = useState(1);

  const apiGetProd = () => {
    fetch(`http://localhost:8082/api/produto/${idProd}`)
      .then((response) => response.json())
      .then((data) => {
        setProduto(data);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao consultar o banco de dados", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8082/api/produto/${idProd}`)
      .then((response) => response.json())
      .then((data) => {
        setProduto(data);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao consultar o banco de dados", error);
      });
  }, []);

  function mandarProCarrinho() {
    if (produto) {
      let carrinhoJSON = localStorage.getItem("carrinho");
      let carrinho;

      if (carrinhoJSON) {
        carrinho = JSON.parse(carrinhoJSON);
      } else {
        carrinho = [];
      }

      let produtoExistente = carrinho.find((p) => p.id === idProd);

      if (produtoExistente) {
        // Se o produto já existe no carrinho, incrementa a quantidade
        produtoExistente.quantidade += qtd;
        console.log("Tem no carrinho", produtoExistente.quantidade);
      } else {
        // Se o produto não existe no carrinho, adiciona ao carrinho com quantidade 1
        apiGetProd();
        let novoProduto = {
          id: idProd,
          quantidade: qtd,
          nome: produto[0].nome,
          valor: produto[0].valor,
          descricaoProduto: produto[0].descricaoProduto,
        };
        
        carrinho.push(novoProduto);
        console.log("nao tem no carrinho");
      }
      console.log(carrinho);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
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
                        produto ? produto.map((produ, index) => (
                            <div id="infoPageProduto" key={index}>
                                <h1>{produ.nome}</h1>
                                <h3>{produ.valor}</h3>
                                <div>
                                    <p>{produ.descricaoProduto}</p>
                                </div>
                                <input type="number" defaultValue="1" min="1" max="100" id="qtd" onChange={(e) => setQtd(parseInt(e.target.value))}></input>
                                <button className="Botao" onClick={mandarProCarrinho}>Comprar</button>
                            </div>
                        )) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default TelaProduto;