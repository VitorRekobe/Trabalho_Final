import './pageADM.css';
import CadProd from './cadastrarProduto/cadProd.js';
import SelectedMarca from '../../../componentes/selectMarca/selectMarca';
import SelectedCategoria from '../../../componentes/selectCategoria/selectCategoria';
import SelectedSexo from '../../../componentes/selectSexo/selectSexo';
import { useEffect, useState } from 'react';
import AltProd from './AlterarProduto/altProd';

function PageADMCad() {
    
    const [marcaId, setMarcaId] = useState('');
    const [value, setValue] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [value2, setValue2] = useState('');
    const [sexoId] = useState('');
    const [imagem, setimagem] = useState('');

    const [imagemALT, setimagemALT] = useState('');

    function fecharModal() {
        document.getElementById("cadModal").style.display = "none";
        document.getElementById("prodNome").value = '';
        document.getElementById("prodValor").value = '';
        document.getElementById("prodDescrição").value = '';
        document.getElementById("urlImagenproduto").value = '';
    }

    const imagemChange = (event) => {
        setimagem(event.target.value);
    };

    const imagemChangeALT = (event) => {
        setimagemALT(event.target.value);
    };

    const pegarMarca = (setSelectedMarca) => {
        setValue(setSelectedMarca);
    }

    const pegarCategoria = (setSelectedCategoria) => {
        setValue2(setSelectedCategoria);
    }

    useEffect(() => {
        if (value) {
            fetch(`http://localhost:8082/api/marca/marca?nome=${value}`)
                .then(response => response.json())
                .then(data => {
                    setMarcaId(data);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao consultar o banco de dados', error);
                });
        }
    }, [value]);

    useEffect(() => {
        if (value2) {
            fetch(`http://localhost:8082/api/categoria/categoria?nome=${value2}`)
                .then(response => response.json())
                .then(data => {
                    setCategoriaId(data);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao consultar o banco de dados', error);
                });
        }
    }, [value2]);

    const mandarId = () => {
        if (marcaId, categoriaId) {
            CadProd(marcaId, categoriaId, sexoId, imagemALT);
        } else {
            alert('Algum campo vazio');
        }
    };

    const mandarIdAlt = () => {
        if (marcaId, categoriaId) {
            AltProd(marcaId, categoriaId, sexoId, imagemALT);
        } else {
            alert('Algum campo vazio');
        }
    };

    return (
        <div>
            <div className="cadModal" id='cadModal'>
                <div className="fechar" onClick={fecharModal}></div>
                <div className="divModal">
                    <div className="cadProdutos">
                        <div className='alinharCadProd'>
                            <div className='crudProduto'>
                                <input id='prodNome' className='StyleInputUser' placeholder='Nome'></input>
                                <input id='prodValor' className='StyleInputUser' placeholder='Valor'></input>
                                <input id='prodDescrição' className='StyleInputUser' placeholder='Descrição'></input>
                                <input id='urlImagenproduto' className='StyleInputUser' placeholder='URL do imagem' type="text" value={imagem} onChange={imagemChange} />
                                <SelectedMarca onValueChange={pegarMarca}></SelectedMarca>
                                <SelectedSexo></SelectedSexo>
                                <SelectedCategoria onValueChange={pegarCategoria}></SelectedCategoria>
                            </div>
                            <div className='DivimgProdAdm'>
                                <div className='imgProdAdm'>
                                    {imagem && <img src={imagem} alt="Imagem" />}
                                </div>
                            </div>
                        </div>
                        <div className='alinharButtonModalAdm'>
                            <button onClick={mandarId} className="Botao">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* /////////////////////// ALTERAR //////////////////////*/}
            <div className="cadModal AltProdutos" id='AltProdutos'>
                <div className="fechar" onClick={fecharModal}></div>
                <div className="divModal">
                    <div className="cadProdutos">
                        <div className='alinharCadProd'>
                            <div className='crudProduto'>
                                <input id='prodNomeALT' className='StyleInputUser' placeholder='Nome'></input>
                                <input id='prodValorALT' className='StyleInputUser' placeholder='Valor'></input>
                                <input id='prodDescriçãoALT' className='StyleInputUser' placeholder='Descrição'></input>
                                <input id='urlImagenprodutoALT' className='StyleInputUser' placeholder='URL do imagem' type="text" value={imagem} onChange={imagemChangeALT} />
                                <SelectedMarca onValueChange={pegarMarca}></SelectedMarca>
                                <SelectedSexo></SelectedSexo>
                                <SelectedCategoria onValueChange={pegarCategoria}></SelectedCategoria>
                            </div>
                            <div className='DivimgProdAdmALT'>
                                <div className='imgProdAdm'>
                                    {imagem && <img src={imagem} alt="Imagem" />}
                                </div>
                            </div>
                        </div>
                        <div className='alinharButtonModalAdm'>
                            <button onClick={mandarIdAlt} className="Botao">Alterar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageADMCad;