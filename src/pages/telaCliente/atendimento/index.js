import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClienteAtendimento.css';
import Header from "../../../componentes/Header/Header";

function pageClienteAtendimento() {
    
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

export default pageClienteAtendimento;