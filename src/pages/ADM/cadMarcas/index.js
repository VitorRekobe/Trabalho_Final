import './pageAdmMarca.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import CadMarca from './funcaoMarcas/CadMarcaApi';
import TableMarca from './tableMarca';
import { useEffect, useState } from 'react';

function PageADMcadMarcas() {

    function fecharModalMarca() {
        document.getElementById("divCadMarcas").style.display = "none";
    }

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <TableMarca></TableMarca>
                    <div className="divCadMarcas" id='divCadMarcas'>
                        <div className='alinhaModalMarca'>
                            <div className="fecharMarca" onClick={fecharModalMarca}></div>
                            <h1>Cadastrar uma marca</h1>
                            <br></br>
                            <input id='prodMarca' className='StyleInputUser' placeholder='Marca'></input>
                            <button onClick={CadMarca} className="Botao BotaoCadastrarMarca">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageADMcadMarcas;