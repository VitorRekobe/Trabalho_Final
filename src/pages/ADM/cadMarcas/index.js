import './pageAdmMarca.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import CadMarca from './funcaoMarcas/CadMarcaApi';
import TableMarca from './tableMarca';
import { useState } from 'react';

function PageADMcadMarcas() {

    const [idMarca, setIdMarca ] = useState();
    
    function fecharModalMarca() {
        document.getElementById("divCadMarcas").style.display = "none";
    }

    function fecharModalMarcaALT() {
        document.getElementById("divCadMarcasALT").style.display = "none";
    }

    function pegarIDMarca(MarcaID) {
        setIdMarca(MarcaID)
    }

    function ALTMarca() {
        let nome = document.getElementById("prodMarcaALT").value;
        console.log(idMarca)
        fetch(`http://localhost:8082/api/marca/${idMarca}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ "nome": nome })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log('Categoria atualizada:', data)
                console.log(nome);
            })
            .catch(error => {
                console.error('Erro ao atualizar categoria:', error);
            });
    }

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <TableMarca onpegarMarca={pegarIDMarca}></TableMarca>
                    <div className="divCadMarcas" id='divCadMarcas'>
                        <div className='alinhaModalMarca'>
                            <div className="fecharMarca" onClick={fecharModalMarca}></div>
                            <h1>Cadastrar uma marca</h1>
                            <br></br>
                            <input id='prodMarca' className='StyleInputUser' placeholder='Marca'></input>
                            <button onClick={CadMarca} className="Botao BotaoCadastrarMarca">Cadastrar</button>
                        </div>
                    </div>

                    <div className="divCadMarcas" id='divCadMarcasALT'>
                        <div className='alinhaModalMarca'>
                            <div className="fecharMarca" onClick={fecharModalMarcaALT}></div>
                            <h1>Cadastrar uma marca</h1>
                            <br></br>
                            <input id='prodMarcaALT' className='StyleInputUser' placeholder='Marca'></input>
                            <button onClick={ALTMarca} className="Botao BotaoCadastrarMarca">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageADMcadMarcas;