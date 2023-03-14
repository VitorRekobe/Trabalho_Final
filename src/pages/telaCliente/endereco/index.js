import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClienteEndereco.css';
import Header from "../../../componentes/Header/Header";

function pageClienteEndereco() {
    
    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <OpcoesCliente></OpcoesCliente>
                <div className="telaO">
                <div className="informaçõesClienteEndereco">
                            {/* <input id="CEP" type="text" className="StyleInputUser" placeholder="CEP" /> */}
                            <input id="Estado" type="password" className="StyleInputUser" placeholder="Estado" />
                            <input id="Cidade" type="password" className="StyleInputUser" placeholder="Cidade" />
                            <input id="Rua" type="email" className="StyleInputUser" placeholder="Rua" />
                            <label for="numberHouse">Numero da Casa/apto:
                                <input id="numberHouse" type="number" min='0' className="StyleInputUser" />
                            </label>

                            <button className="Botao" onClick={"Salvar"}>Salvar</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default pageClienteEndereco;