import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClienteEndereco.css';
import Header from "../../../componentes/Header/Header";

function pageClienteEndereco() {
    
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

export default pageClienteEndereco;