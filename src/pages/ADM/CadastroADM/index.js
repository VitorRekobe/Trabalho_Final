import './pageADM.css';

import CadProd from './cadastrarPorduto/cadProd.js';

import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import SelectedMarca from './cadastrarPorduto/selectMarca';
import SelectedCategoria from './cadastrarPorduto/selectCategoria';
import SelectedSexo from './cadastrarPorduto/selectSexo';

import { useEffect, useState } from 'react';

function PageADMCad() {
    const [marcaId, setMarcaId] = useState('');
    const [value, setValue] = useState('');

    const [categoriaId, setCategoriaId] = useState('');
    const [value2, setValue2] = useState('');
    
    const [sexoId, setSexoId] = useState('');
    const [value3, setValue3] = useState('');

    const pegarMarca = (setSelectedMarca) => {
        setValue(setSelectedMarca);
    }

    const pegarSexo = (setSelectedSexo) => {
        setValue(setSelectedSexo);
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
            CadProd(marcaId, categoriaId, sexoId);
        } else {
            alert('Selecione uma marca antes de cadastrar o produto.');
        }
    };

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <div className="cadProdutos">
                        <div className='alinharCadProd'>
                            <div className='crudProduto'>
                                <input id='prodNome' className='StyleInputUser' placeholder='Nome'></input>
                                <input id='prodValor' className='StyleInputUser' placeholder='Valor'></input>
                                <input id='prodDescrição' className='StyleInputUser' placeholder='Descrição'></input>
                                <SelectedMarca onValueChange={pegarMarca}></SelectedMarca>
                                <SelectedSexo></SelectedSexo>
                                <SelectedCategoria onValueChange={pegarCategoria}></SelectedCategoria>
                            </div>
                            <div className='DivimgProdAdm'>
                                <div className='imgProdAdm'>
                                </div>
                                <label className='Botao botaoImage'> Enviar imagem
                                    <input id='imgFile' type="file"></input>
                                </label>
                            </div>
                        </div>
                        <button onClick={mandarId} className="Botao">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageADMCad;