import pesquisarProd from '../funçãoListar';
import { FaRegTrashAlt } from "react-icons/fa";

function TableCategoria(props) {

    function AbrirModalCadCategoria() {
        document.getElementById("divCadCategoria").style.display = "block";
    }

    let Categoria = (props.Categoria);
    console.log(Categoria)

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
                <tr>
                    <th className='idTable'>&nbsp;</th>
                    <th>Categoria</th>
                    <th className='apagarTable'>DEL</th>
                </tr>
                <tbody id='tbodyProd'>
                    {
                        Categoria?.map((Categoria, index) => {

                            return (
                                <tr key={index}>
                                    <td>{Categoria.id}</td>
                                    <td>{Categoria.nome}</td>
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

                    <td></td>
                    <td></td>
                    <td>
                        <button style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }}>
                            <FaRegTrashAlt style={{ color: 'white' }}></FaRegTrashAlt>
                        </button>
                    </td>

                </tbody>
            </table>
        </div>
    )
}

export default TableCategoria;