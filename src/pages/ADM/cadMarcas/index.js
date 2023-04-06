import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import CadMarca from './funcaoMarcas/CadMarcaApi';

function PageADMcadMarcas() {
    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                        <div className="divCadMarcas">
                            <input id='prodMarca' className='StyleInputUser' placeholder='Marca'></input>
                            <button onClick={CadMarca} className="Botao">Cadastrar</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default PageADMcadMarcas;