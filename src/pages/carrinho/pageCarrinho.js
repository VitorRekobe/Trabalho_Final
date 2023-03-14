import Header from '../../componentes/Header/Header';
import './carrinhoStyle.css'
import CardCarrinho from '../../componentes/cardCarrinho/index.js';
import { Link } from 'react-router-dom'

function pageCarrinho() {


    return (
        <div className="background">
        <Header></Header>
            <div>
                <div id="carrinho">
                    <div className="itemPaiCarinho">
                        <div id='Etapa'>
                            <h5 className='EtapaCarrinhoName'> Carrinho </h5>
                            <h5> > </h5>
                            <h5> Pagamento e Entrega </h5>
                            <h5> > </h5>
                            <h5> Finalização </h5>
                        </div>
                        <div>
                            <div>
                                <h2 id='qtdProduto'>RESUMO DE ITENS ( )</h2>
                            </div>
                            <div>
                                <CardCarrinho></CardCarrinho>
                                <CardCarrinho></CardCarrinho>
                                <CardCarrinho></CardCarrinho>
                                <CardCarrinho></CardCarrinho>
                            </div>
                        </div>
                    </div>

                    <div className="itemMãeCarinho">
                        <h3>Resumo do pedido</h3>
                        <div id="divpagamentoCarrinho">
                            <div>
                                <p color="black">Subtotal</p>
                                <hr></hr>
                                <h3>R$0,00</h3>
                            </div>
                            <div className="flexBotao">
                                <button className="BotaoPedido" ><Link to={'/pagamento-e-entrega'}>Finalizar Pedido</Link></button>
                            </div>
                        </div>

                        <div id="divFormasPagamento">
                            <p>Formas de pagamento</p>
                            <hr></hr>
                            <p>Cartão de debito</p>
                            <p>Cartão de credito</p>
                            <p>PIX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pageCarrinho;