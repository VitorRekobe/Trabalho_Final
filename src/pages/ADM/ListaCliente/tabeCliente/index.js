import { useEffect, useState } from 'react';
import pesquisarProd from '../funçãoListar';

function TableCliente() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8082/api/cliente/')
            .then((response) => response.json())
            .then((data) => {
                setClientes(data)
            })
    }, [])

    return (
        <div className="divListCliente">
            <div><label>
                Pesquisar produtos: &ensp;
                <input placeholder="  &#x1F50E;&#xFE0E;  Buscar" id='buscarProd' onChange={pesquisarProd}></input>
            </label>
            </div>
            <br></br>
            <table id='tabela'>
                <tr>
                    <th className='idTable'>&nbsp;</th>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
                <tbody id='tbodyProd'>
                    {
                        clientes.map((cliente, index) => {
                            return (
                                <tr key={index}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.email}</td>
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

export default TableCliente;