import TableProd from './tabe/index'
import './pageAdmProd.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import PageADMCad from '../CadastroADM';

function PageADMLista() {

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
            <PageADMCad></PageADMCad> 
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <TableProd>

                    </TableProd>
                </div>
            </div>
        </div>
    )
}

export default PageADMLista;