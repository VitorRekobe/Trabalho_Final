import './App.css';

import Home from './pages/Lobby/homeScript';
import DivCadastro from './pages/SingUp/DivCadastro';
import DivLogin from './pages/SingUp/DivLogin';
import PageCarrinho from './pages/carrinho/pageCarrinho';
import Pagamento_Entrega from './pages/carrinho/pagamento-e-entrega/Pagamento_Entrega';
import Secret from './pages/Secret/secret';
import PageCliente from './pages/telaCliente/perfil';
import PageClienteFavoritos from './pages/telaCliente/favoritos';
import PageClientePedido from './pages/telaCliente/pedido';
import PageClientePagamentos from './pages/telaCliente/pagamento';
import PageClienteAtendimento from './pages/telaCliente/atendimento';
import PageClienteReebolso from './pages/telaCliente/reembolso';
import PageClienteEndereco from './pages/telaCliente/endereco';
import PageADMLista from './pages/ADM/ListaProd';
import PageADMVendas from './pages/ADM/Vendas';
import PageAdmClientes from './pages/ADM/ListaCliente';
import PageADMcadMarcas from './pages/ADM/cadMarcas';
import PageADMcadCategorias from './pages/ADM/cadCategorias';
import TelaBusca from './pages/TelasDeCompra/TelaProdutos';
import PageFeminino from './pages/Feminino';
import TelaProduto from './pages/TelaDoProduto';
import ErrorPage from './pages/TelaError';
import FinalizaCompra from './pages/carrinho/Finalização';
import Sobrenos from './pages/sobreEmpresa';
import PageMasculino from './pages/Masculino';
// import NovidadesPage from './pages/Novidades';
import InfantilPage from './pages/Infantil';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Rotas() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/cadastro' element={<DivCadastro></DivCadastro>}></Route>
          <Route path='/Login' element={<DivLogin></DivLogin>}></Route>
          <Route path='/carrinho' element={<PageCarrinho></PageCarrinho>}></Route>
          <Route path='/pagamento-e-entrega' element={<Pagamento_Entrega></Pagamento_Entrega>}></Route>
          <Route path='/secret' element={<Secret></Secret>}></Route>
          <Route path='/cliente' element={<PageCliente></PageCliente>}></Route>
          <Route path='/favoritos' element={<PageClienteFavoritos></PageClienteFavoritos>}></Route>
          <Route path='/pedidos' element={<PageClientePedido></PageClientePedido>}></Route>
          <Route path='/pagamentos' element={<PageClientePagamentos></PageClientePagamentos>}></Route>
          <Route path='/atendimento' element={<PageClienteAtendimento></PageClienteAtendimento>}></Route>
          <Route path='/reembolso' element={<PageClienteReebolso></PageClienteReebolso>}></Route>
          <Route path='/endereço' element={<PageClienteEndereco></PageClienteEndereco>}></Route>
          <Route path='/ADM/ListProd' element={<PageADMLista></PageADMLista>}></Route>
          <Route path='/ADM/ListCliente' element={<PageAdmClientes></PageAdmClientes>}></Route>
          <Route path='/ADM/Vendas' element={<PageADMVendas></PageADMVendas>}></Route>
          <Route path='/ADM/cadMarcas' element={<PageADMcadMarcas></PageADMcadMarcas>}></Route>
          <Route path='/ADM/cadCategorias' element={<PageADMcadCategorias></PageADMcadCategorias>}></Route>
          <Route path='/TelaDeCompra' element={<TelaBusca></TelaBusca>}></Route>
          <Route path='/Femininas' element={<PageFeminino></PageFeminino>}></Route>
          <Route path='/Produto' element={<TelaProduto></TelaProduto>}></Route>
          <Route path='/Finalizar_Compra' element={<FinalizaCompra></FinalizaCompra>}></Route>
          <Route path='/Sobrenos' element={<Sobrenos></Sobrenos>}></Route>
          <Route path='/Masculina' element={<PageMasculino></PageMasculino>}></Route>
          <Route path='/Kids' element={<InfantilPage></InfantilPage>}></Route>
          {/* <Route path='/Novidades' element={<NovidadesPage></NovidadesPage>}></Route> */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Rotas;