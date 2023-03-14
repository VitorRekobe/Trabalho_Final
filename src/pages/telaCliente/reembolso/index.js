import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClienteReebolso.css';
import Header from "../../../componentes/Header/Header";

function pageClienteReebolso() {
    
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

export default pageClienteReebolso;