import Header from '../../../componentes/Header/Header';
import './P_E_Style.css';
import { Link } from 'react-router-dom';

function Pagamento_Entrega() {


    return (
        <div className="background">
            <Header></Header>
            <div>
                <div id="carrinho">
                    <div className="itemPaiPagamento">
                        <div id='EtapaPagamento'>
                            <h5><Link to={'/carrinho'}> Carrinho </Link></h5>
                            <h5> > </h5>
                            <h5 className='EtapaCarrinhoName'> Pagamento e Entrega </h5>
                            <h5> > </h5>
                            <h5> Finalização </h5>
                        </div>
                        <div>
                            <div>

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

export default Pagamento_Entrega;