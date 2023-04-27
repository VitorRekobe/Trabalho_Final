import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import CadCategoria from './funcaoCategoria/CadCategoriaApi';
import TableCategoria from './tableCategoria';
import { useEffect, useState } from 'react';

function PageADMcadCategorias() {

    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8082/api/Categoria/')
            .then((response) => response.json())
            .then((data) => {
                setCategoria(data)
            })
    }, [])

    function fecharModalCategoria() {
        document.getElementById("divCadCategoria").style.display = "none";
    }

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <TableCategoria categoria={categoria}></TableCategoria>
                    <div className="divCadCategoria" id='divCadCategoria'>
                        <div className="alinhaModalCategoria">
                            <div className="fecharCategoria" onClick={fecharModalCategoria}></div>
                            <h1>Cadastrar uma Categoria</h1>
                            <br></br>
                            <input id='prodCategoria' className='StyleInputUser' placeholder='Categoria'></input>
                            <br></br>
                            <button onClick={CadCategoria} className="Botao">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageADMcadCategorias;