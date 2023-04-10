import CardsProdutos from "../../componentes/Card/CardProd"
import Header from "../../componentes/Header/Header"
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa"

import "./TelaProd.css"

function TelaProd() {
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
                </div>
                <div className="cardsProdutosDiv">
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                    <CardsProdutos />
                </div>
            </div>
        </div>
    )
}

export default TelaProd;