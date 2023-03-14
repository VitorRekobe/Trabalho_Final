import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClienteAtendimento.css';
import Header from "../../../componentes/Header/Header";

function pageClienteAtendimento() {
    
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

export default pageClienteAtendimento;