import Header from "../../Header/Header"
import './carrinhoStyle.css'

function pageCarrinho() {

    
    return (
        <><Header></Header>
            <div>
                <div id="carrinho">
                    <div className="itemPai">

                    </div>

                    <div className="itemMãe">
                        <h3>Resumo do pedido</h3>
                        <div id="divpagamento">
                            <div>
                                <p color="black">Subtotal</p>
                                <hr></hr>
                                <h3>R$00,00</h3>
                            </div>
                            <div className="flexBotao">
                                <button className="BotaoPedido">Finalizar Pedido</button>
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
        </>
    )
}

export default pageCarrinho;