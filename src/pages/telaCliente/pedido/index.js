import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import "./pageClientePedidos.css";
import Header from "../../../componentes/Header/Header";

function pageClientePedido() {
  return (
    <div className="background">
      <Header></Header>
      <div className="principalCliente">
        <OpcoesCliente></OpcoesCliente>
        <div className="telaO">
          <div id="divPedidos">
            <h2>Não há pedidos</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pageClientePedido;
