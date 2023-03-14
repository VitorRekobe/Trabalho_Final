import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClientePedidos.css';
import Header from "../../../componentes/Header/Header";

function pageClientePedido() {
    
    return (
        <>
            <Header></Header>
            <div className="principalCliente">
                <OpcoesCliente></OpcoesCliente>
                <div className="telaO">
 
                </div>
            </div>
        </>
    )
}

export default pageClientePedido;