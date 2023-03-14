import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageCliente.css';
import Header from "../../../componentes/Header/Header";

function pageClientePerfil() {
    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <OpcoesCliente></OpcoesCliente>
                <div className="telaO">
                        <div className="informaçõesCliente">
                            <input id="name" type="text" className="StyleInputUser" placeholder="Nome" />
                            <input id="email" type="email" className="StyleInputUser" placeholder="Email" />
                            <label for="dtNascimento">Data de Nascimento:
                                <input id="dtNascimento" type="date" className="StyleInputUser" />
                            </label>
                            <input id="Senha" type="password" className="StyleInputUser" placeholder="Senha" />
                            <button className="Botao" onClick={"Salvar"}>Salvar</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default pageClientePerfil;