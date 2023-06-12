import "./DivCadastroStyle.css"
import Header from "../../componentes/Header/Header";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function DivCadastro() {
    function Cadastrar() {
        let nome = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let senha = document.getElementById("CadSenha").value;
        let Senha1 = document.getElementById("CadSenha").value;
        let Senha2 = document.getElementById("ComSenha").value;
        let tipo = 'cliente';

        if (Senha1 !== Senha2) {
            toast.error("Senhas diferentes");
        } else if (nome === '' || email === '' || senha === '') {
            toast.error("Campos Vazios");
        } else {
            senha = Senha1;
            const data = {
                "id": "-1",
                nome,
                email,
                senha,
                tipo
            };

            console.log(JSON.stringify(data));
            fetch("http://localhost:8082/api/usuario/cadastro", {
                body: JSON.stringify(data),
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    toast.success("Cadastro Concluido");
                    console.log("Success:", data);
                    document.getElementById("name").value = '';
                    document.getElementById("email").value = '';
                    document.getElementById("dtNascimento").value = '';
                    document.getElementById("CadSenha").value = '';
                    document.getElementById("CadSenha").value = '';
                    document.getElementById("ComSenha").value = '';
                })
                .catch((error) => {
                    toast.error("Erro No Cadastro");
                    console.error("Error:", error);
                });
        }
    }

    return (
        <div className="background">
            <Header></Header>
            <div id="DivCadastro">
                <div className='divStyle'>
                    <ol className="hoverCad"><Link to='/cadastro'>Cadastrar</Link></ol>
                    <ol>|</ol>
                    <ol className="hoverCad"><Link to='/Login'>Entrar</Link></ol>
                </div>
                <hr></hr>

                <div id="Cadastro" className='divStyle'>
                    <div id="Formulario">
                        <input id="name" type="text" className="StyleInputUser fontCad" placeholder="Nome" />
                        <input id="email" type="email" className="StyleInputUser fontCad" placeholder="Email" />
                        <label htmlFor="dtNascimento">Dt_Nascimento:
                            <input id="dtNascimento" type="date" className="StyleInputUser dtNascimento fontCad" />
                        </label>
                        <input id="CadSenha" type="password" className="StyleInputUser fontCad" placeholder="Criar Senha" />
                        <input id="ComSenha" type="password" className="StyleInputUser fontCad" placeholder="Confirmar Senha" />
                        <button className="Botao tamanhoButton" onClick={Cadastrar}>Cadastrar</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default DivCadastro;