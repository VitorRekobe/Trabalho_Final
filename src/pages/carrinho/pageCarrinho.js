import Header from '../../componentes/Header/Header';
import './carrinhoStyle.css'
import "./cardCarrinhoStyle.css"
import { Link } from 'react-router-dom'

function pageCarrinho() {
    const produtosJSON = localStorage.getItem('carrinho');
    const produtos = JSON.parse(produtosJSON);

    // localStorage.clear();
    if (produtos) {
        var listaProdutos = produtos.map((produto) => {
                console.log(listaProdutos)
                return (
                    <div className='CardCarrinho' key={produto.id}>
                        <div className="imgCardCarrinho">
                            IMAGEM PRODUTO
                        </div>
                        <br></br>
                        <div className='desImgCarrinho'>
                            <h2>{produto.nome}</h2>
                            <p>{produto.valor}</p>
                            <p>{produto.descricaoProduto}</p>
                            <p>{produto.quantidade}</p>
                        </div>
                    </div>
                );
            });

    }

    return (
        <div className="background">
            <Header></Header>
            <div>
                <div id="carrinho">
                    <div className="itemPaiCarinho">
                        <div id='Etapa'>
                            <h5 className='EtapaCarrinhoName'> Carrinho </h5>
                            <h5> {">"} </h5>
                            <h5> Pagamento e Entrega </h5>
                            <h5> {"<"} </h5>
                            <h5> Finalização </h5>
                        </div>
                        <div>
                            <div>
                                <h2 id='qtdProduto'>RESUMO DE ITENS ( )</h2>
                            </div>
                            <div id='listaCarrinhoItens'>
                                {listaProdutos}
                            </div>
                        </div>
                    </div>

                    <div className="itemMãeCarinho">
                        <h3>Resumo do pedido</h3>
                        <div id="divpagamentoCarrinho">
                            <div>
                                <p color="black">Subtotal</p>
                                <hr></hr>
                                <div>

                                </div>
                                <h3>R$0,00</h3>
                            </div>
                            <div className="flexBotao">
                                <button className="BotaoPedido" ><Link to={'/pagamento-e-entrega'}>Finalizar Pedido</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pageCarrinho;