
import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import TableVendas from './tabe';


function pageADMVendas() {
    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                        <div className="divVendas">
                            <TableVendas></TableVendas>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default pageADMVendas;