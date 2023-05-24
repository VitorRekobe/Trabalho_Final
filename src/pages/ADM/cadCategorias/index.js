import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import CadCategoria from './funcaoCategoria/CadCategoriaApi';
import TableCategoria from './tableCategoria';
import { useEffect, useState } from 'react';

function PageADMcadCategorias() {

    const [idcategoria, setIdCategoria] = useState([]);
    const [categoriaNome, setCategoriaNome] = useState('');

    function fecharModalCategoria() {
        document.getElementById("divCadCategoria").style.display = "none";
    }

    function fecharModalCategoriaALT() {
        document.getElementById("divCadCategoriaALT").style.display = "none";
        document.getElementById("prodCategoriaALT").value = null;
    }

    function pegarIDCategoria(CategoriaID) {
        setIdCategoria(CategoriaID);
    }

    function buscarCategoriaPorID(id) {
        fetch(`http://localhost:8082/api/categoria/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.nome) {
                    setCategoriaNome(data.nome);
                } else {
                    setCategoriaNome('');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar categoria por ID:', error);
            });
    }

    useEffect(() => {
        if (idcategoria) {
            buscarCategoriaPorID(idcategoria);
        }
    }, [idcategoria]);

    function ALTCategoria() {
        let nome = document.getElementById("prodCategoriaALT").value;
        console.log(idcategoria);
        fetch(`http://localhost:8082/api/categoria/${idcategoria}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: nome 
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log('Categoria atualizada:', data);
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
                    <TableCategoria onpegarIDCategoria={pegarIDCategoria}></TableCategoria>
                    <div className="divCadCategoria" id='divCadCategoria'>

                        {/* CADASTRAR */}
                        <div className="alinhaModalCategoria">
                            <div className="fecharCategoria" onClick={fecharModalCategoria}></div>
                            <h1>Cadastrar uma Categoria</h1>
                            <br></br>
                            <input id='prodCategoria' className='StyleInputUser' placeholder='Categoria'></input>
                            <br></br>
                            <button onClick={CadCategoria} className="Botao">Cadastrar</button>
                        </div>
                    </div>

                    {/* ALTERAR */}
                    <div className="divCadCategoriaALT" id='divCadCategoriaALT'>
                        <div className="alinhaModalCategoria">
                            <div className="fecharCategoria" onClick={fecharModalCategoriaALT}></div>
                            <h1>Alterar uma Categoria</h1>
                            <br></br>
                            <input id='prodCategoriaALT' className='StyleInputUser' placeholder='Categoria'></input>
                            <br></br>
                            <button onClick={ALTCategoria} className="Botao">Alterar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageADMcadCategorias;