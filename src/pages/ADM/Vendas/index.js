
import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';

function pageADMVendas() {
    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                        <div className="divVendas">

                        </div>
                </div>
            </div>
        </div>
    )
}

export default pageADMVendas;