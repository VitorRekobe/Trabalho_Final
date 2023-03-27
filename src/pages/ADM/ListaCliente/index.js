
import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import pesquisarProd from './funçãoListar';

function pageAdmClientes() {

    fetch('', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
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
                                <th>Nome</th>
                                <th>Email</th>
                            </tr>
                            <tbody id='tbodyProd'>
                                <tr>
                                    <td>#1</td>
                                    <td>Vitor Gabriel Sales Garcia</td>
                                    <td>vitor@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>#2</td>
                                    <td>Fabricio</td>
                                    <td>fabricinho453@gmail.com</td>
                                </tr>

                                <tr>
                                    <td>#3</td>
                                    <td>Gabriel Alves Santana</td>
                                    <td>alucar@gmail.com</td>
                                </tr>

                                <tr>
                                    <td>#4</td>
                                    <td>Rafael Guilherme</td>
                                    <td>Paçoquinha@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pageAdmClientes;