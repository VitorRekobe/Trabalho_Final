import './App.css';

import Home from './pages/Lobby/homeScript';
import DivCadastro from './pages/SingUp/DivCadastro';
import DivLogin from './pages/SingUp/DivLogin';
import PageCarrinho from './pages/carrinho/pageCarrinho';

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
        </Routes>
      </Router>
    </div>
  );
}

export default Rotas;