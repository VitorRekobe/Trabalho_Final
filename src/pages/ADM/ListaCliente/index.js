
import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';

function pageADMLista() {
    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                        <div className="ListaCliente">

                        </div>
                </div>
            </div>
        </div>
    )
}

export default pageADMLista;