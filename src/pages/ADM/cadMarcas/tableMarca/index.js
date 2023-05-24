import { FiEdit, FiEdit3 } from "react-icons/fi";
import pesquisarProd from '../funçãoListar';
import { useEffect, useState } from 'react';

function TableMarca(props) {
    const [Marca, setMarca] = useState([]);


    function AbrirModalCadMarca() {
        document.getElementById("divCadMarcas").style.display = "block";
    }

    function AbrirModalALTMarca(MarcaID) {
        document.getElementById("divCadMarcasALT").style.display = "block";
        props.onpegarMarca(MarcaID);

        const marca = Marca.find((Marca) => Marca.id === MarcaID);

        document.getElementById("prodMarcaALT").value = marca.nome;
    }

    useEffect(() => {
        fetch('http://localhost:8082/api/marca/')
            .then((response) => response.json())
            .then((data) => {
                setMarca(data)
            })
    }, [])

    return (
        <div className="divListCliente">
            <div className='AlinharPesquisaEnovo'>
                <label>
                    Pesquisar Marcas: &ensp;
                    <input placeholder="  &#x1F50E;&#xFE0E;  Buscar" id='buscarProd' onChange={pesquisarProd}></input>
                </label>
                <div>
                    <button className='Botao NovoTableMarca' onClick={AbrirModalCadMarca}>Novo</button>
                </div>
            </div>
            <br></br>
            <table id='tabela'>
                <tr>
                    <th className='idTable'>&nbsp;</th>
                    <th>Marca</th>
                    <th className='apagarTable'><FiEdit style={{ color: 'white' }}></FiEdit>
                    </th>
                </tr>
                <tbody id='tbodyProd'>
                    {
                        Marca?.map((Marca, index) => {
                            return (
                                <tr key={index}>
                                    <td>{Marca.id}</td>
                                    <td>{Marca.nome}</td>
                                    <td>
                                        <button style={{ backgroundColor: 'transparent', border: 'none'  }}
                                        onClick={() => AbrirModalALTMarca(Marca.id)}
                                        >
                                            <FiEdit3 style={{ color: 'white'}}></FiEdit3>
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

export default TableMarca;