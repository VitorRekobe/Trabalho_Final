import Header from "../../componentes/Header/Header"
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa"

import { useEffect, useState } from 'react';
import "./TelaProd.css"
import { useLocation } from "react-router-dom";
import SelectedMarca from "../../componentes/selectMarca/selectMarca";
import SelectCategoria from "../../componentes/selectCategoria/selectCategoria";

function TelaBusca() {
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

    function Filtrar() {
        fetch(`http://localhost:8082/api/produto/Filtro?marca=${dadoMarca}&categoria=${dadoCategoria}&nome=${valorDaPesquisa}`)
            .then(response => response.json())
            .then(data => {
                setInfoProd(data);
            })
            .catch(error => {
                console.error('Ocorreu um erro', error);
            });
    }

    useEffect(() => {
        if (valorDaPesquisa) {
            fetch(`http://localhost:8082/api/produto/Lupa?marca=${valorDaPesquisa}&categoria=${valorDaPesquisa}&nome=${valorDaPesquisa}`)
                .then(response => response.json())
                .then(data => {
                    setInfoProd(data);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao consultar o banco de dados', error);
                });
        }
    }, []);

    console.log(dadoCategoria, dadoMarca)

    let produtos = null;
    if (infoProd) {
        produtos = infoProd.map((produto, index) => {
            let id = produto.id
            return (
                <div className="cardsProdutos" key={index} onClick={mandarInfoProd(id)}>
                    <div className='ImagemProd'>
                        <img src={produto?.imagem} />
                        <hr></hr>
                    </div>
                    <div className="conteudoCardProd">
                        <h2 className='nomeProd'>{produto.nome}</h2>
                        <h2>{produto.valor}</h2>
                        <h4>{produto.descricaoProduto}</h4>
                    </div>
                </div>
            )
        });
    }

    function mandarInfoProd(id) {
        return () => {
            window.location.replace(`/Produto?id=${id}`);
        }
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
                    <button className="Botao" onClick={Filtrar}>Filtrar</button>
                </div>
                <div className="cardsProdutosDiv">
                    {produtos}
                </div>
            </div>
        </div>
    )
}

export default TelaBusca;
