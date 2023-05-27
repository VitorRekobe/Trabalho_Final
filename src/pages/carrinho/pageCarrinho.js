import React, { useState } from 'react';
import Header from '../../componentes/Header/Header';
import './carrinhoStyle.css';
import "./cardCarrinhoStyle.css";
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';

function PageCarrinho() {
    const [produtosExibicao, setProdutosExibicao] = useState(true);

    const produtosJSON = localStorage.getItem('carrinho');
    const produtos = JSON.parse(produtosJSON);

    var listaProdutos;
    var Valores;

    if (produtos) {
        var qtdTotal = produtos.length;

        const valorTotal = produtos.reduce((acumulador, produto) => {
            return acumulador + parseFloat(produto.valor) * produto.quantidade;
        }, 0);

        var valorTotalFormatado = valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        listaProdutos = produtos.map((produto) => {
            return (
                <div className='CardCarrinho' key={produto.id}>
                    <div className="imgCardCarrinho">
                        <img src={produto?.imagem} />
                    </div>
                    <div className='arrumarNomeParteCrrinho'>
                        <p>{produto.nome}</p>
                    </div>
                    <div className='arrumarNomeParteCrrinho'>
                        <p>{(parseFloat(produto.valor) * produto.quantidade).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                    <div className='arrumarNomeParteCrrinho'>
                        <p>{produto.quantidade}</p>
                    </div>
                    <div>
                        <div className='arrumarNomeParteCrrinho'>
                            <button style={{ backgroundColor: 'transparent', border: 'none' }}>
                                <FaRegTrashAlt style={{ color: 'white' }}></FaRegTrashAlt>
                            </button>
                        </div>
                    </div>
                </div >
            );
        });

        Valores = produtos.map((produto) => {
            return (
                <p>{(parseFloat(produto.valor) * produto.quantidade).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            );
        });
    } else {
        listaProdutos = null;
        Valores = null;
    }

    const apagarCarrinho = () => {
        localStorage.clear();
        setProdutosExibicao(false);
    };

    return (
        <div className="background">
            <Header></Header>
            <div>
                <div id="carrinho">
                    <div className="itemPaiCarinho">
                        <div id='Etapa'>
                            <h5 className='EtapaCarrinhoName'> Carrinho </h5>
                            <h5> {">"} </h5>
                            <h5> Entrega </h5>
                            <h5> {">"} </h5>
                            <h5> Finalização </h5>
                        </div>
                        <div>
                            <br></br>
                            <div className='headerQTDprod'>
                                <h4 id='qtdProduto'>PRODUTOS ( {qtdTotal} )</h4>
                            </div>
                            <div id='nomePartedoCarrinho'>
                                <div></div>
                                <div className='arrumarNomeParteCarrinho'>Nome</div>
                                <div className='arrumarNomeParteCarrinho'>Preço</div>
                                <div className='arrumarNomeParteCarrinho'>Quantidade</div>
                                <div className='arrumarNomeParteCarrinho'>
                                    <FaRegTrashAlt style={{ color: 'white' }}></FaRegTrashAlt>
                                </div>
                            </div>
                            <div id='listaCarrinhoItens'>
                                {produtosExibicao ? listaProdutos : null}
                            </div>
                            <button className='Botao limparCarrinho' onClick={apagarCarrinho}>Limpar Carrinho</button>
                        </div>
                    </div>
                    <div className="itemMãeCarinho">
                        <h3>Resumo do pedido</h3>
                        <div id="divpagamentoCarrinho">
                            <div>
                                <p color="black">Subtotal</p>
                                <hr></hr>
                                <div className='subvalores tamanhoSubValor'>
                                    {Valores}
                                </div>
                                <hr></hr>
                                <h2 className='subvalores'>Valor Total</h2>
                                <h3>{valorTotalFormatado}</h3>
                            </div>
                            <div className="flexBotao">
                                <button className="BotaoPedido" ><Link to={'/pagamento-e-entrega'}>Próximo</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageCarrinho;