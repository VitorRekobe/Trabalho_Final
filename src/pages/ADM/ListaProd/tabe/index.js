import pesquisarProd from '../funçãoListar';
import PageADMLista from '..';

function TableProd(props) {
    let table = document.getElementById("tbodyProd");
    // let row = table.insertRow(props.names);
    let produtos = (props.produtos);
    console.log(produtos)

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
                    <th>&nbsp;</th>
                    <th>Marca</th>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Descricao</th>
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
                                    <td>{produtos.descricaoProduto}</td>
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