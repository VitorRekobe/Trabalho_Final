import TableCliente from './tabeCliente';
import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';

function PageAdmClientes() {

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <TableCliente></TableCliente>
                </div>
            </div>
        </div>
    )
}

export default PageAdmClientes;