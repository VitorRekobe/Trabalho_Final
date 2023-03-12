import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageCliente.css';
import Header from "../../../componentes/Header/Header";

function pageCliente() {
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

export default pageCliente;