import "./DivCadastroStyle.css"
import Header from "../../componentes/Header/Header";
import { Link } from "react-router-dom";
import Cadastrar from "./FunçõesCad/FuncaoCadastrar";

function DivCadastro() {

    return (
        <>
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
                        <input id="name" type="text" className="StyleInputUser" placeholder="Nome" />
                        <input id="email" type="email" className="StyleInputUser" placeholder="Email" />
                        <label for="dtNascimento">Data de Nascimento:
                            <input id="dtNascimento" type="date" className="StyleInputUser" />
                        </label>
                        <input id="CadSenha"  type="password" className="StyleInputUser" placeholder="Criar Senha" />
                        <input id="ComSenha"  type="password" className="StyleInputUser" placeholder="Comfirmar Senha" />
                        <button className="Botao" onClick={Cadastrar}>Cadastrar</button>
                    </div>
                </div>
            </div >
        </>
    );
}

export default DivCadastro;