import React, { useState } from "react";
import "./DivCadastroStyle.css";
import Header from "../../componentes/Header/Header";
import { Link, useNavigate } from "react-router-dom";

function DivLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const Login = async () => {

    const response = await fetch("http://localhost:8082/api/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });

    if (response.ok) {
      console.log("Usuário autenticado!");
      const data = await response.json();
      localStorage.setItem("usuario", JSON.stringify(data));
      
      console.log(data)
      navigate("/");
    } else {
      console.log("Erro ao autenticar o usuário.");
    }
  }
  
  return (
    <div className="background">
      <Header></Header>
      <div id="DivCadastro">
        <div className="divStyle">
          <ol className="hoverCad">
            <Link to="/cadastro">Cadastrar</Link>
          </ol>
          <ol>|</ol>
          <ol className="hoverCad">
            <Link to="/Login">Entrar</Link>
          </ol>
        </div>
        <hr></hr>

        <div id="sumir">
          <div id="Login" className="divStyle">
            <div id="Formulario">
              <input
                id="email"
                type="email"
                className="StyleInputUser fontCad"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="LoginSenha"
                type="password"
                className="StyleInputUser fontCad"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <div className="divButtonLogin">
                <button className="Botao tamanhoButton" onClick={Login}>
                  Sing Up
                </button>
                <button className="Botao Esqueceu tamanhoButton">
                  Esqueceu a senha?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DivLogin;