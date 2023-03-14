
import './pageADM.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';

function pageADMCad() {
    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                        <div className="informaçõesCliente">

                        </div>
                </div>
            </div>
        </div>
    )
}

export default pageADMCad;