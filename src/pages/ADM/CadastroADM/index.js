import './pageADM.css';
import CadProd from './cadastrarPorduto/cadProd.js';
import SelectedMarca from '../../../componentes/selectMarca/selectMarca';
import SelectedCategoria from '../../../componentes/selectCategoria/selectCategoria';
import SelectedSexo from '../../../componentes/selectSexo/selectSexo';
import { useEffect, useState } from 'react';

function PageADMCad() {
    const [marcaId, setMarcaId] = useState('');
    const [value, setValue] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [value2, setValue2] = useState('');
    const [sexoId] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    function fecharModal() {
        document.getElementById("cadModal").style.display = "none";
        document.getElementById("prodNome").value = '';
        document.getElementById("prodValor").value = '';
        document.getElementById("prodDescrição").value = '';
    }

    const imagemChange = (event) => {
        setImageUrl(event.target.value);
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
            CadProd(marcaId, categoriaId, sexoId);
        } else {
            alert('Algum campo vazio');
        }
    };
    return (
        <div className="cadModal" id='cadModal'>
            <div className="fechar" onClick={fecharModal}></div>
            <div className="divModal">
                <div className="cadProdutos">
                    <div className='alinharCadProd'>
                        <div className='crudProduto'>
                            <input id='prodNome' className='StyleInputUser' placeholder='Nome'></input>
                            <input id='prodValor' className='StyleInputUser' placeholder='Valor'></input>
                            <input id='prodDescrição' className='StyleInputUser' placeholder='Descrição'></input>
                            <input id='urlImagenproduto' className='StyleInputUser' placeholder='URL do imagem' type="text" value={imageUrl} onChange={imagemChange} />
                            <SelectedMarca onValueChange={pegarMarca}></SelectedMarca>
                            <SelectedSexo></SelectedSexo>
                            <SelectedCategoria onValueChange={pegarCategoria}></SelectedCategoria>
                        </div>
                        <div className='DivimgProdAdm'>
                            <div className='imgProdAdm'>
                                {imageUrl && <img src={imageUrl} alt="Imagem" />}
                            </div>
                        </div>
                    </div>
                    <div className='alinharButtonModalAdm'>
                        <button onClick={mandarId} className="Botao">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageADMCad;