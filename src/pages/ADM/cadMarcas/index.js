import './pageAdmMarca.css';
import Header from '../../../componentes/Header/Header';
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import TableMarca from './tableMarca';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PageADMcadMarcas() {
    const [idMarca, setIdMarca] = useState();
    const [Marca, setMarca] = useState();

    function fecharModalMarca() {
        document.getElementById('divCadMarcas').style.display = 'none';
    }

    function fecharModalMarcaALT() {
        document.getElementById('divCadMarcasALT').style.display = 'none';
    }

    function pegarIDMarca(MarcaID) {
        setIdMarca(MarcaID);
    }

    function ALTMarca() {
        let nome = document.getElementById('prodMarcaALT').value;

        fetch(`http://localhost:8082/api/marca/${idMarca}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Marca atualizada:', data);
                console.log(nome);
                toast.success('Marca atualizada com sucesso');
            })
            .catch((error) => {
                console.error('Erro ao atualizar Marca:', error);
                toast.error('Erro ao atualizar marca');
            });
    }

    function CadMarca() {
        let marca = document.getElementById('prodMarca').value;

        fetch('http://localhost:8082/api/marca/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: marca,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao criar o produto');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                toast.success('Sucesso no Cadastro');
            })
            .catch((error) => {
                console.error(error);
                toast.error('Erro no Cadastro');
            });
    }

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <TableMarca onpegarMarca={pegarIDMarca}></TableMarca>
                    <div className="divCadMarcas" id="divCadMarcas">
                        <div className="alinhaModalMarca">
                            <div className="fecharMarca" onClick={fecharModalMarca}></div>
                            <h1>Cadastrar uma marca</h1>
                            <br></br>
                            <input id="prodMarca" className="StyleInputUser" placeholder="Marca"></input>
                            <button onClick={CadMarca} className="Botao BotaoCadastrarMarca">
                                Cadastrar
                            </button>
                            <ToastContainer />
                        </div>
                    </div>

                    <div className="divCadMarcas" id="divCadMarcasALT">
                        <div className="alinhaModalMarca">
                            <div className="fecharMarca" onClick={fecharModalMarcaALT}></div>
                            <h1>Alterar uma marca</h1>
                            <br></br>
                            <input id="prodMarcaALT" className="StyleInputUser" placeholder="Marca"></input>
                            <button onClick={ALTMarca} className="Botao BotaoCadastrarMarca">
                                Alterar
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PageADMcadMarcas;
