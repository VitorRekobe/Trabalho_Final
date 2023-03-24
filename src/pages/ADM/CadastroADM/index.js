import cadProd from './cadastrarPorduto/cadProd';
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
                                <input id='prodMarca' className='StyleInputUser' placeholder='Marca'></input>
                                <input id='prodNome' className='StyleInputUser' placeholder='Nome'></input>
                                <input id='prodCategoria' className='StyleInputUser' placeholder='Categoria'></input>
                                <input id='prodValor' className='StyleInputUser' placeholder='Valor'></input>
                                <input id='prodDescrição' className='StyleInputUser' placeholder='Descrição'></input>
                            </div>
                            <div className='DivimgProdAdm'>
                                <div className='imgProdAdm'>
                                </div>
                                <label className='Botao botaoImage'> Enviar imagem
                                    <input type="file"></input>
                                </label>
                            </div>
                        </div>
                        <button onClick={cadProd} className="Botao">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pageADMCad;