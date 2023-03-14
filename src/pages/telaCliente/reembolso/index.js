import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClienteReebolso.css';
import Header from "../../../componentes/Header/Header";

function pageClienteReebolso() {
    
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

export default pageClienteReebolso;