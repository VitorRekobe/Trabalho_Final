import './App.css';

import Home from './pages/Lobby/homeScript';
import DivCadastro from './pages/SingUp/DivCadastro';
import DivLogin from './pages/SingUp/DivLogin';
import PageCarrinho from './pages/carrinho/pageCarrinho';
import Pagamento_Entrega from './pages/carrinho/pagamento-e-entrega/Pagamento_Entrega';
import Secret from './pages/Secret/secret';
import PageCliente from './pages/telaCliente/perfil';

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
        </Routes>
      </Router>
    </div>
  );
}

export default Rotas;