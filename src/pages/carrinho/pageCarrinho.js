import Header from '../../componentes/Header/Header';
import './carrinhoStyle.css'
import "./cardCarrinhoStyle.css"
import { Link } from 'react-router-dom'

function pageCarrinho() {
    const produtosJSON = localStorage.getItem('carrinho');
    const produtos = JSON.parse(produtosJSON);

    var listaProdutos;
    var Valores;
    
    if (produtos) {
        var qtdTotal = produtos.length

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
                </div >
            );
        });

        Valores = produtos.map((produto) => {
            return (
                <p>{(parseFloat(produto.valor) * produto.quantidade).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            )
        });
    } else {
        listaProdutos = null;
        Valores = null;
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
                            <h5> {">"} </h5>
                            <h5> Finalização </h5>
                        </div>
                        <div>
                            <br></br>
                            <div>
                                <h4 id='qtdProduto'>PRODUTOS ( {qtdTotal} )</h4>
                            </div>
                            <div id='nomePartedoCarrinho'>
                                <div></div>
                                <div className='arrumarNomeParteCrrinho'>Nome</div>
                                <div className='arrumarNomeParteCrrinho'>Preço</div>
                                <div rclassName='arrumarNomeParteCrinho'>Quantidade</div>
                            </div >
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
                                <div className='subvalores tamanhoSubValor'>
                                    {Valores}
                                </div>
                                <hr></hr>
                                <h2 className='subvalores'>Valor Total</h2>
                                <h3>{valorTotalFormatado}</h3>
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