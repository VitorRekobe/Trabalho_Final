
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
                    <div className="cadProdutos">
                        <div className='alinharCadProd'>
                            <div className='crudProduto'>
                                <input className='StyleInputUser' placeholder='Marca'></input>
                                <input className='StyleInputUser' placeholder='Nome'></input>
                                <input className='StyleInputUser' placeholder='Categoria'></input>
                                <input className='StyleInputUser' placeholder='Valor'></input>
                            </div>
                            <div className='imgProdAdm'></div>
                        </div>
                        <button className="Botao">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pageADMCad;