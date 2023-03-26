
import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
// import $ from 'jquery'; 
import pesquisarProd from './funçãoListar';

function pageADMLista() {

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <div className="ListaProd">
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
                                    <th>Categoria</th>
                                    <th>Nome</th>
                                    <th>Valor</th>
                                </tr>
                            <tbody id='tbodyProd'>
                                <tr>
                                    <td>id_1</td>
                                    <td>Nike</td>
                                    <td>Tênis</td>
                                    <td>Tênis Nike Air Force 1 "07</td>
                                    <td>799,00</td>
                                </tr>
                                <tr>
                                    <td>id_2</td>
                                    <td>Nike</td>
                                    <td>Tênis</td>
                                    <td>Tênis Nike Air Force 1 "07</td>
                                    <td>799,00</td>
                                </tr>

                                <tr>
                                    <td>id_3</td>
                                    <td>Nike</td>
                                    <td>Tênis</td>
                                    <td>Tênis Nike Air Force 1 "07</td>
                                    <td>799,00</td>
                                </tr>

                                <tr>
                                    <td>id_4</td>
                                    <td>Nike</td>
                                    <td>Tênis</td>
                                    <td>Tênis Nike Air Force 1 "07</td>
                                    <td>799,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pageADMLista;