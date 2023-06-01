import React, { useState } from 'react';
import Header from '../../../componentes/Header/Header';
import { Link } from 'react-router-dom';
import './Finalização.css';
import QRCode from 'qrcode.react';

function FinalizaCompra() {
    const produtosJSON = localStorage.getItem('carrinho');
    const produtostotalJSON = localStorage.getItem('totalPedido');
    const produtos = JSON.parse(produtosJSON);
    const produtosTotal = JSON.parse(produtostotalJSON);
    

    const [formaPagamento, setFormaPagamento] = useState('');
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

    const OpçãoDebitoCredito = (event) => {
        setOpcaoSelecionada(event.target.value);
    };

    var valorTotal = produtosTotal;
    var valorTotalFormatado = valorTotal.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });

    async function finalizarCompra() {
        try {
            if (!Array.isArray(produtos)) {
                throw new Error('Nenhum produto no carrinho');
            }

            const itens = produtos.map((produto) => ({
                preco: produto.valor,
                qtdVendas: produto.quantidade,
                id_produto: produto.id,
            }));

            const dadosCompra = {
                id_usuario: 9,
                itensVenda: itens,
            };

            const response = await fetch('http://localhost:8082/vendas/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosCompra),
            });

            if (!response.ok) {
                throw new Error('Erro ao finalizar a compra');
            }

            const data = await response.json();
            console.log(data);

            alert('Compra finalizada com sucesso');
        } catch (error) {
            console.error(error);
            alert('Erro ao finalizar a compra');
        }
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
                        <div id="divpagamentoTaxa" className='divpagamentoTaxa'>
                            {formaPagamento === 'cartao' && (
                                <div>
                                    <div className='alinhaInput' style={{ display: 'flex' }}>
                                        <label className='labelFont'>
                                            Crédito
                                            <input
                                                className='labelPa'
                                                type='radio'
                                                value='credito'
                                                checked={opcaoSelecionada === 'credito'}
                                                onChange={OpçãoDebitoCredito}
                                            />
                                        </label>
                                        <label className='labelFont'>
                                            Débito
                                            <input
                                                className='labelPa'
                                                type='radio'
                                                value='debito'
                                                checked={opcaoSelecionada === 'debito'}
                                                onChange={OpçãoDebitoCredito}
                                            />
                                        </label>
                                    </div>
                                    <input placeholder='n° Cartão' className='StyleInputUser'></input>
                                    <input placeholder='nome no Cartão' className='StyleInputUser MarginDivCartaoItens'></input>
                                    <input placeholder='data expedição' className='StyleInputUser MarginDivCartaoItens'></input>
                                    <input placeholder='CVV' className='StyleInputUser MarginDivCartaoItens'></input>
                                </div>
                            )}

                            {formaPagamento === 'pix' && (
                                <div className="divCartao divPix" >
                                    <QRCode style={{ width: "100%", height: "100%", border: "6px solid #E8D1C5" }} value="https://www.example.com" />
                                </div>
                            )}

                        </div>
                        <div className='alinhaInput' style={{ display: 'flex' }}>

                            <div style={{ display: 'flex' }}>
                                <label className='labelFont'>
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
                                <label className='labelFont'>
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
                            </div>
                        </div>
                        <button className='Botao' style={{ width: '80%' }} onClick={finalizarCompra}>Finalizar pedido</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinalizaCompra;
