import pesquisarProd from '../funçãoListar';
import PageADMLista from '..';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function TableProd() {
    const [produtos, setProdutos] = useState([])

    function AbrirModalCad() {
        document.getElementById("cadModal").style.display = "block";
    }

    useEffect(() => {
        fetch('http://localhost:8082/api/produto/')
            .then((response) => response.json())
            .then((data) => {
                setProdutos(data)
            })
    }, [])

    

    return (
        <div className="divListCliente">
            <div className='AlinharPesquisaEnovo'>
                <label>
                    Pesquisar produtos: &ensp;
                    <input placeholder="  &#x1F50E;&#xFE0E;  Buscar" id='buscarProd' onChange={pesquisarProd}></input>
                </label>
                <div>
                    <button className='Botao NovoTable' onClick={AbrirModalCad}>Novo</button>
                </div>
            </div>
            <br></br>
            <table id='tabela'>
                <tr>
                    <th className='idTable'>&nbsp;</th>
                    <th>Marca</th>
                    <th>Nome</th>
                    <th className='valorTable'>Valor</th>
                    {/* <th>Descricao</th> */}
                    <th className='apagarTable'></th>
                </tr>
                <tbody id='tbodyProd'>
                    {   
                        produtos.map((produtos, index) => {

                            return (
                                <tr key={index}>
                                    <td>{produtos.id}</td>
                                    <td>{produtos.marca.nome}</td>
                                    <td>{produtos.nome}</td>
                                    <td>{produtos.valor}</td>
                                    {/* <td>{produtos.descricaoProduto}</td> */}
                                    <td>
                                        <button style={{ backgroundColor: 'transparent' }}>
                                            <FaRegTrashAlt style={{ color: 'white' }}></FaRegTrashAlt>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableProd;