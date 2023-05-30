import React, { useState } from 'react';
import Header from '../../../componentes/Header/Header';
import { Link } from 'react-router-dom';
import './Finalização.css';

function FinalizaCompra() {
    const produtosJSON = localStorage.getItem('carrinho');
    const produtos = JSON.parse(produtosJSON);

    const [formaPagamento, setFormaPagamento] = useState('');


    var valorTotal;
    if (produtos) {
        valorTotal = produtos.reduce((acumulador, produto) => {
            return acumulador + parseFloat(produto.valor) * produto.quantidade;
        }, 0);
        var valorTotalFormatado = valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    function finalizarCompra() {
        const itens = produtos.map(produto => {
            return {
                idProduto: produto.id,
                valor: produto.valor,
                qtd: produto.quantidade
            };
        });

        const dadosCompra = {
            idUsuario: 9,
            itens: itens
        };

        fetch('http://localhost:8082/vendas/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosCompra)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao finalizar a compra');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                alert('Compra finalizada com sucesso');
            })
            .catch(error => {
                console.error(error);
                alert('Erro ao finalizar a compra');
            });
    }

    return (
        <div className="background">
            <Header></Header>
            <div>
                <div id="carrinho">
                    <div className="itemPaiPagamento">
                        <div id='EtapaPagamento'>
                            <h5><Link to={'/carrinho'}>Carrinho</Link></h5>
                            <h5> > </h5>
                            <h5><Link to={'/pagamento-e-entrega'}>Entrega</Link></h5>
                            <h5> > </h5>
                            <h5 className='EtapaCarrinhoName'>Finalização</h5>
                        </div>
                        <div id='Pagamento'>
                            <h3>Total - {valorTotalFormatado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
                        </div>
                    </div>
                    <div className='itemMãePgamaneto'>
                        <h3>Resumo do pedido</h3>
                        <div id="divpagamentoTaxa">
                            {formaPagamento === 'cartao' && (
                                <div>
                                    <div className="divCartao">
                                        <input placeholder='n° Cartão' className='StyleInputUser'></input>
                                        <select className='StyleInputUser select'>
                                            <option>Débito</option>
                                            <option>Crédito</option>
                                        </select>
                                    </div>
                                        <input placeholder='nome no Cartão' className='StyleInputUser MarginDivCartaoItens'></input>
                                        <input placeholder='data expedição' className='StyleInputUser MarginDivCartaoItens'></input>
                                        <input placeholder='CVV' className='StyleInputUser MarginDivCartaoItens'></input>

                                </div>
                            )}

                            {formaPagamento === 'pix' && (
                                <div className="divCartao">

                                </div>
                            )}

                        </div>
                        <label>
                            Cartão
                            <input
                                className='labelPa'
                                type="radio"
                                name="formaPagamento"
                                value="cartao"
                                checked={formaPagamento === 'cartao'}
                                onChange={() => setFormaPagamento('cartao')}
                            />
                        </label>
                        <br />
                        <label>
                            PIX
                            <input
                                className='labelPa'
                                type="radio"
                                name="formaPagamento"
                                value="pix"
                                checked={formaPagamento === 'pix'}
                                onChange={() => setFormaPagamento('pix')}
                            />
                        </label>
                        <br></br>
                        <button className='Botao' style={{ width: '80%' }} onClick={finalizarCompra}>Finalizar pedido</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinalizaCompra;
