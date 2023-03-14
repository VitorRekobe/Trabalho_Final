import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClientePagamentos.css';
import Header from "../../../componentes/Header/Header";

function pageClientePagamentos() {
    
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

export default pageClientePagamentos;