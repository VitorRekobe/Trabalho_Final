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
import PageADMCad from './pages/ADM/CadastroADM';
import PageADMLista from './pages/ADM/ListaCliente';
import PageADMVendas from './pages/ADM/Vendas';

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
          <Route path='/ADM' element={<PageADMCad></PageADMCad>}></Route>
          <Route path='/ADM/ListCliente' element={<PageADMLista></PageADMLista>}></Route>
          <Route path='/ADM/Vendas' element={<PageADMVendas></PageADMVendas>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Rotas;