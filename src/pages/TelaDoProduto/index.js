import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../componentes/Header/Header";
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa";
import Footer from '../../componentes/Footer/index'

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
    apiGetProd();
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
          imagem: produto[0].imagem
        };

        carrinho.push(novoProduto);
        console.log("nao tem no carrinho");
      }
      console.log(carrinho);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  }

  function aumentarQuantidade() {
    setQtd(qtd + 1);
  }

  function diminuirQuantidade() {
    if (qtd > 1) {
      setQtd(qtd - 1);
    }
  }

  return (
    <div>
      <Header></Header>
      <HeaderPesquisa></HeaderPesquisa>
      <div>
        {produto ? (
          produto.map((produ, index) => (
            <div id="ProdutoDivPrincipal">
              <div id="efeitoZoom" key={index}>
                <div id="imagemPrincipalProd">
                  <img src={produ?.imagem}></img>
                </div>
              </div><div id="infoPageProduto" key={index}>
                <div>
                  <h1>{produ.nome}</h1>
                  <h3>{parseFloat((produ.valor)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
                </div>
                <div style={{ height: '20%', border: 'solid', padding: '2%' }}>
                  <p>{produ.descricaoProduto}</p>
                </div>
                <div className="qtdcontainer">
                  <button className="qtdbutton" onClick={diminuirQuantidade}>-</button>
                  <input className="qtdvalue" type="number" readOnly value={qtd} min="1" max="100" id="qtd" onChange={(e) => setQtd(parseInt(e.target.value))}></input>
                  <button className="qtdbutton" onClick={aumentarQuantidade}>+</button>
                </div>
                <button className="Botao" onClick={mandarProCarrinho}>Comprar</button>
              </div>
            </div>
          ))
        ) : null}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default TelaProduto;
