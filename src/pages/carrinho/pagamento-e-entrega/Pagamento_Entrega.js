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
                                        onChange={(e) => setNumero(e.target.value)}
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
                                        onClick={buscarEndereco}>Calcular
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="itemMãePgamaneto">
                        <h3>Resumo do pedido</h3>
                        <div id="divpagamento">
                            <div id="preçoDivPagamento">
                                <p color="black">Subtotal</p>
                                <hr></hr>
                                <h3>R$0,00</h3>
                            </div>
                            <div className="flexBotao">
                                <button className="BotaoPedido"><Link to={'/pagamento-e-entrega'}>Próximo</Link></button>
                            </div>
                        </div>

                        <div id="divFormasPagamento">
                            <h4>Formas de Entrega</h4>
                            <hr></hr>
                            <label>
                                PAC - R$ 30,00
                                <input
                                    className='labelPa'
                                    type="radio"
                                    name="formaPagamento"
                                    value="cartao"
                                />
                            </label>
                            <br />
                            <label>
                                SEDEX  - R$ 20,00
                                <input
                                    className='labelPa'
                                    type="radio"
                                    name="formaPagamento"
                                    value="pix"
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