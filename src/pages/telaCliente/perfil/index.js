import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageCliente.css';
import Header from "../../../componentes/Header/Header";
import { useState } from 'react';

function PageClientePerfil() {
    const usuarioJson = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioJson);

    const [nome, setNome] = useState(usuario?.nome || '');
    const [email, setEmail] = useState(usuario?.email || '');
    const [dataNascimento, setDataNascimento] = useState(usuario?.dataNascimento || '');
    const [senha, setSenha] = useState('');

    const salvarPerfil = () => {
        // Lógica para salvar o perfil do cliente
        console.log("Perfil salvo!");
    }

    return (
        <div className="background">
            <Header />
            <div className="principalCliente">
                <OpcoesCliente />
                <div className="telaO">
                    <div className="informaçõesCliente">
                        <input
                            id="name"
                            type="text"
                            className="StyleInputUser"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input
                            id="email"
                            type="email"
                            className="StyleInputUser"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="dtNascimento">Data de Nascimento:</label>
                        <input
                            id="dtNascimento"
                            type="date"
                            className="StyleInputUser"
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                        />
                        <input
                            id="Senha"
                            type="password"
                            className="StyleInputUser"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <button className="Botao" onClick={salvarPerfil}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageClientePerfil;