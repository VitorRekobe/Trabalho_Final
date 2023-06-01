import React, { useState } from 'react';
import Header from '../../../componentes/Header/Header';
import './P_E_Style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Pagamento_Entrega() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [taxaEntrega, setTaxaEntrega] = useState(0); // Estado para armazenar a taxa de entrega selecionada

    const produtosJSON = localStorage.getItem('carrinho');
    const produtos = JSON.parse(produtosJSON);
    var valorTotal;

    if (produtos) {
        valorTotal = produtos.reduce((acumulador, produto) => {
            return acumulador + parseFloat(produto.valor) * produto.quantidade;
        }, 0);
        var valorTotalFormatado = valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    const buscarEndereco = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const data = response.data;
            setEndereco(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setEstado(data.uf);
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
        }
    };

    const FormaEntregaTaxa = (event) => {
        const taxaSelecionada = parseFloat(event.target.value);
        setTaxaEntrega(taxaSelecionada);
    };

    var totalPedido = valorTotal + taxaEntrega; // Calcula o total do pedido


    const IrFinalizar = (event) => {
        localStorage.setItem('totalPedido', totalPedido);
        console.log(totalPedido)
        window.location.href = '/Finalizar_Compra';
    };

    return (
        <div className="background">
            <Header></Header>
            <div>
                <div id="carrinho">
                    <div className="itemPaiPagamento">
                        <div id='EtapaPagamento'>
                            <h5><Link to={'/carrinho'}>Carrinho</Link></h5>
                            <h5> > </h5>
                            <h5 className='EtapaCarrinhoName'>Entrega</h5>
                            <h5> > </h5>
                            <h5>Finalização</h5>
                        </div>
                        <div id='divP_E'>
                            <div>
                                <div className='AlinhaCrudEn'>
                                    <input
                                        placeholder="CEP"
                                        value={cep}
                                        style={{ width: '60%' }}
                                        className='StyleInputUser'
                                        onChange={(e) => setCep(e.target.value)}
                                    />
                                    <button className='Botao'
                                        style={{ width: '30%', height: '50%' }}
                                        onClick={buscarEndereco}>Buscar
                                    </button>
                                </div>
                                <div className='AlinhaCrudEn'>
                                    <input
                                        placeholder="Rua"
                                        value={endereco}
                                        className='StyleInputUser'
                                        style={{ width: '80%' }}
                                        onChange={(e) => setEndereco(e.target.value)}
                                    />
                                    <input
                                        placeholder="N°"
                                        value={numero}
                                        style={{ width: '10%' }}
                                        className='StyleInputUser'
                                        onChange={(e) => setNumero(e
                                            .target.value)}
                                    />
                                </div>
                                <div className='AlinhaCrudEn'>
                                    <input
                                        placeholder="Bairro"
                                        value={bairro}
                                        className='StyleInputUser'
                                        style={{ width: '100%' }}
                                        onChange={(e) => setBairro(e.target.value)}
                                    />
                                </div>
                                <div className='AlinhaCrudEn'>
                                    <input
                                        placeholder="Cidade"
                                        value={cidade}
                                        style={{ width: '80%' }}
                                        className='StyleInputUser'
                                        onChange={(e) => setCidade(e.target.value)}
                                    />
                                    <input
                                        placeholder="UF"
                                        value={estado}
                                        className='StyleInputUser'
                                        style={{ width: '8%' }}
                                        onChange={(e) => setEstado(e.target.value)}
                                    />
                                </div>
                                <div className='AlinhaCrudEn'>
                                    <input
                                        placeholder="Complemento"
                                        className='StyleInputUser'
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div className='AlinhaCrudEn'>
                                    <button className='Botao'
                                        style={{ width: '30%', height: '50%' }}
                                        onClick={IrFinalizar}>Próximo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="itemMãePgamaneto">
                        <h3>Resumo do pedido</h3>
                        <div id="divpagamentoTaxa" style={{ height: "50%" }}>
                            <div id="preçoDivPagamentoTaxa" >
                                <p color="black">Subtotal</p>
                                <hr></hr>
                                <h3>Produtos - {valorTotalFormatado}</h3>
                                <h5>Taxa de Entrega - {taxaEntrega.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h5>
                                <hr></hr>
                            </div>
                            <h3>Total - {totalPedido.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
                        </div>

                        <div id="divFormasPagamento">
                            <h4>Formas de Entrega</h4>
                            <hr></hr>
                            <label>
                                PAC - R$ 30,00
                                <input
                                    className='labelPa'
                                    type="radio"
                                    name="formaEntrega"
                                    value={30.00}
                                    onChange={FormaEntregaTaxa}
                                />
                            </label>
                            <br />
                            <label>
                                SEDEX  - R$ 20,00
                                <input
                                    className='labelPa'
                                    type="radio"
                                    name="formaEntrega"
                                    value={20.00}
                                    onChange={FormaEntregaTaxa}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagamento_Entrega;