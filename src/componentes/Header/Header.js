import React from 'react';
import './HeaderStyle.css';
import { Link } from 'react-router-dom';
import bolsa from './bolsa.png';
import User from './perfil.png';

function Header() {
  const usuarioJson = localStorage.getItem('usuario');
  const usuario = JSON.parse(usuarioJson);

  let telaHeader;

  if (usuario) {
    if (usuario.tipo === 'adm') {
      console.log('ADM');
      telaHeader = (
        <div className="juntarHeader">
          <div>
            <ol>
              <Link to="/">G.O.A.T STORE</Link>
            </ol>
          </div>
          <div>
            <ol className="hover">
              <Link to="/carrinho">
                <img src={bolsa} alt="Ícone da bolsa" />
              </Link>
            </ol>
            <ol>|</ol>
            <ol className="hover">
              <Link to="/ADM/ListProd">
                <img src={User} alt="Ícone do usuário" />
              </Link>
            </ol>
          </div>
        </div>
      );
    } else {
      console.log('cliente');
      telaHeader = (
        <div className="juntarHeader">
          <div>
            <ol>
              <Link to="/">G.O.A.T STORE</Link>
            </ol>
          </div>
          <div>
            <ol className="hover">
              <Link to="/carrinho">
                <img src={bolsa} alt="Ícone da bolsa" />
              </Link>
            </ol>
            <ol>|</ol>
            <ol className="hover">
              <Link to="/cliente">
                <img src={User} alt="Ícone do usuário" />
              </Link>
            </ol>
          </div>
        </div>
      );
    }
  } else {
    console.log('NÃO TEM');
    telaHeader = (
      <div className="juntarHeader">
        <div>
          <ol>
            <Link to="/">G.O.A.T STORE</Link>
          </ol>
        </div>
        <div>
          <ol className="hover">
            <Link to="/carrinho">
              <img src={bolsa} alt="Ícone da bolsa" />
            </Link>
          </ol>
          <ol>|</ol>
          <ol className="hover">
            <Link to="/cadastro">
              <img src={User} alt="Ícone do usuário" />
            </Link>
          </ol>
        </div>
      </div>
    );
  }

  return <header>{telaHeader}</header>;
}

export default Header;