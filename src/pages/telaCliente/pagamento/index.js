import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClientePagamentos.css';
import Header from "../../../componentes/Header/Header";

function pageClientePagamentos() {

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <OpcoesCliente></OpcoesCliente>
                <div className="telaO">

                </div>
            </div>
        </div>
    )
}

export default pageClientePagamentos;