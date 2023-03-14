import "./DivCadastroStyle.css"
import Header from "../../componentes/Header/Header";
import { Link } from "react-router-dom";

function DivLogin() {

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

                <div id="sumir">
                    <div id="Login" className='divStyle'>
                        <div id="Formulario">
                            <input id="email" type="email" className="StyleInputUser" placeholder="Email" />
                            <input id="LoginSenha" type="password" className="StyleInputUser" placeholder="Senha" />
                            <div className="divButtonLogin">
                                <button className="Botao">Sing Up</button>
                                <button className="Botao Esqueceu">Esqueceu a senha?</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default DivLogin;