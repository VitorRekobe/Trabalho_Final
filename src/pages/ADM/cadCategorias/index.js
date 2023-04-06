import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import CadCategoria from './funcaoMarcas/CadCategoriaApi';

function PageADMcadCategorias() {
    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                        <div className="divCadMarcas">
                            <input id='prodCategoria' className='StyleInputUser' placeholder='Categoria'></input>
                            <button onClick={CadCategoria} className="Botao">Cadastrar</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default PageADMcadCategorias;