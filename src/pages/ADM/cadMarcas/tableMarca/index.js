import { FaRegTrashAlt } from 'react-icons/fa';
import pesquisarProd from '../funçãoListar';

function TableMarca(props) {

    function AbrirModalCadMarca() {
        document.getElementById("divCadMarcas").style.display = "block";
    }

    let Marcas = (props.Marcas);
    console.log(Marcas)

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
                    <th className='apagarTable'>DEL</th>
                </tr>
                <tbody id='tbodyProd'>
                    {
                        Marcas?.map((Marcas, index) => {

                            return (
                                <tr key={index}>
                                    <td>{Marcas.id}</td>
                                    <td>{Marcas.nome}</td>
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

export default TableMarca;