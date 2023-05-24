import { useEffect, useState } from 'react';
import pesquisarProd from '../funçãoListar';
import { FiEdit, FiEdit3 } from "react-icons/fi";

function TableCategoria(props) {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8082/api/categoria/')
            .then((response) => response.json())
            .then((data) => {
                setCategorias(data);
            });
    }, []);

    function AbrirModalCadCategoria() {
        document.getElementById("divCadCategoria").style.display = "block";
    }

    function AbrirModalALTCategoria(categoriaID) {
        document.getElementById("divCadCategoriaALT").style.display = "block";
        props.onpegarIDCategoria(categoriaID);

        const categoria = categorias.find((categoria) => categoria.id === categoriaID);

        document.getElementById("prodCategoriaALT").value = categoria.nome;
    }

    return (
        <div className="divListCliente">
            <div className='AlinharPesquisaEnovo'>
                <label>
                    Pesquisar Categoria: &ensp;
                    <input placeholder="  &#x1F50E;&#xFE0E;  Buscar" id='buscarProd' onChange={pesquisarProd}></input>
                </label>
                <div>
                    <button className='Botao NovoTableCategoria' onClick={AbrirModalCadCategoria}>Novo</button>
                </div>
            </div>
            <br></br>
            <table id='tabela'>
                <thead>
                    <tr>
                        <th className='idTable'>&nbsp;</th>
                        <th>Categoria</th>
                        <th className='apagarTable'><FiEdit style={{ color: 'white' }}></FiEdit>
                        </th>
                    </tr>
                </thead>
                <tbody id='tbodyProd'>
                    {categorias.length > 0 ? (
                        categorias.map((categoria, index) => (
                            <tr key={index}>
                                <td>{categoria.id}</td>
                                <td>{categoria.nome}</td>
                                <td>
                                    <button
                                        style={{ backgroundColor: 'transparent', border: 'none' }}
                                        onClick={() => AbrirModalALTCategoria(categoria.id)}
                                    >
                                        <FiEdit3 style={{ color: 'white' }} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Nenhuma categoria encontrada.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TableCategoria;
