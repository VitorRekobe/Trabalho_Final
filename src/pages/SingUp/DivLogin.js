import "./DivCadastroStyle.css"
import Header from "../../Header/Header";
import { Link } from "react-router-dom";

function DivLogin() {
    
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

                <div id="sumir">
                    <div id="Login" className='divStyle'>
                        <div id="Formulario">
                            <input id="email" type="email" className="StyleInputUser" placeholder="Email" />
                            <input id="LoginSenha" type="password" className="StyleInputUser" placeholder="Senha" />
                            <button className="Botao">Sing Up</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default DivLogin;