import React from 'react';
import Header from '../../componentes/Header/Header';
import HeaderPesquisa from '../../componentes/HeaderItens.js/BarraPesquisa';
import Footer from '../../componentes/Footer/index'

import './error.css'

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <HeaderPesquisa></HeaderPesquisa>
            <div id='errorDivPage'>
                <h1 id='erro404'>404</h1>
                <div className='NDPAGE'>
                    <h2>G.O.A.T STORE PAGE</h2>
                    <h2>NÃO ENCONTRADA</h2>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;