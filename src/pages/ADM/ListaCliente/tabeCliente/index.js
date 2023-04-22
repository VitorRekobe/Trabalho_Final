import pesquisarProd from '../funçãoListar';

function TableCliente(props) {
    let clientes = (props.clientes);
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
                        clientes.map((clientes, index) => {
                            return (
                                <tr key={index}>
                                    <td>{clientes.id}</td>
                                    <td>{clientes.nome}</td>
                                    <td>{clientes.email}</td>
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