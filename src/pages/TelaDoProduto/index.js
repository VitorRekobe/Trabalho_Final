import Header from "../../componentes/Header/Header";
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa";
import "./TelaProduto.css";

function TelaProduto() {
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