import React, { useEffect, useState } from 'react';
import './pageAdmCliente.css';
import Header from '../../../componentes/Header/Header';
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import TableCategoria from './tableCategoria';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PageADMcadCategorias() {
    const [idcategoria, setIdCategoria] = useState([]);
    const [categoriaNome, setCategoriaNome] = useState('');

    function fecharModalCategoria() {
        document.getElementById('divCadCategoria').style.display = 'none';
    }

    function fecharModalCategoriaALT() {
        document.getElementById('divCadCategoriaALT').style.display = 'none';
        document.getElementById('prodCategoriaALT').value = null;
    }

    function pegarIDCategoria(CategoriaID) {
        setIdCategoria(CategoriaID);
    }

    function buscarCategoriaPorID(id) {
        fetch(`http://localhost:8082/api/categoria/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.nome) {
                    setCategoriaNome(data.nome);
                } else {
                    setCategoriaNome('');
                }
            })
            .catch((error) => {
                console.error('Erro ao buscar categoria por ID:', error);
            });
    }

    useEffect(() => {
        if (idcategoria) {
            buscarCategoriaPorID(idcategoria);
        }
    }, [idcategoria]);

    function ALTCategoria() {
        let nome = document.getElementById('prodCategoriaALT').value;
        console.log(idcategoria);
        fetch(`http://localhost:8082/api/categoria/${idcategoria}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: nome,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((data) => {
                toast.success('Categoria atualizada com sucesso');
            })
            .catch((error) => {
                toast.error('Erro ao atualizar categoria');
            });
    }

    function CadCategoria() {
        let categoria = document.getElementById('prodCategoria').value;
    
        fetch('http://localhost:8082/api/categoria/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: categoria,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erro ao criar a categoria');
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            toast.success('Sucesso no Cadastro');
          })
          .catch((error) => {
            console.error(error);
            console.log(categoria);
            toast.error('Erro no Cadastro');
          });
      }

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <TableCategoria onpegarIDCategoria={pegarIDCategoria}></TableCategoria>
                    <div className="divCadCategoria" id="divCadCategoria">
                        {/* CADASTRAR */}
                        <div className="alinhaModalCategoria">
                            <div className="fecharCategoria" onClick={fecharModalCategoria}></div>
                            <h1>Cadastrar uma Categoria</h1>
                            <br></br>
                            <input id="prodCategoria" className="StyleInputUser" placeholder="Categoria"></input>
                            <br></br>
                            <button onClick={CadCategoria} className="Botao">
                                Cadastrar
                            </button>
                            <ToastContainer />
                        </div>
                    </div>

                    {/* ALTERAR */}
                    <div className="divCadCategoriaALT" id="divCadCategoriaALT">
                        <div className="alinhaModalCategoria">
                            <div className="fecharCategoria" onClick={fecharModalCategoriaALT}></div>
                            <h1>Alterar uma Categoria</h1>
                            <br></br>
                            <input id="prodCategoriaALT" className="StyleInputUser" placeholder="Categoria"></input>
                            <br></br>
                            <button onClick={ALTCategoria} className="Botao">
                                Alterar
                            </button>
                            <ToastContainer />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageADMcadCategorias;
