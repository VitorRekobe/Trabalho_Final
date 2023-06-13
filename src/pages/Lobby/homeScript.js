import "./LobbyStyle.css";

import Header from "../../componentes/Header/Header";
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa";

import carrosel from './imagensHome/banner3.png'
import carrosel3 from './imagensHome/banner.png'
import carrosel2 from './imagensHome/banner2.png'

import bannerF from './imagensHome/BannerF.png';
import bannerM from './imagensHome/bannerM.png'
import bannerC from './imagensHome/bannerC.png'
import Footer from '../../componentes/Footer/index'

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <Header></Header>
            <HeaderPesquisa></HeaderPesquisa>

            <div id="Carrossel">
                <Carousel>
                    <Carousel.Item interval={10000}>
                        <Link to={'/Novidades'}><img src={carrosel}/></Link>
                    </Carousel.Item>

                    <Carousel.Item interval={10000}>
                        <Link to={'/Masculina'}><img src={carrosel2} /></Link>
                    </Carousel.Item>

                    <Carousel.Item interval={10000}>
                        <Link to={'/Femininas'}><img src={carrosel3} /></Link>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="textMargin">
                <h3 className="t1">Crie seu Estilo</h3>
                <h1 className="t2">SEJA SUA MODA</h1>
                <h3 className="t3">Mostre pra todos quem você é</h3>
                <Link to='/Novidades'><button className="BotaoHome">Lançamento</button></Link>
            </div>

            <div class="imgMargin">
                <Link to={'/Femininas'}><img src={bannerF} ></img></Link>
            </div>

            <div className="textMargin">
                <h3 className="t1">Vista roupas que dão</h3>
                <h1 className="t2">PERFEIÇÃO E CUIDADO</h1>
                <h3 className="t3">para que você seja a sua melhor versão</h3>
                <Link to='/Femininas'><button className="BotaoHome">Moda Female</button></Link>
            </div>

            <div class="imgMargin">
                <Link to={'/Masculina'}><img src={bannerM} ></img></Link>
            </div>

            <div className="textMargin">
                <h3>Possua o estilo e a moda</h3>
                <h1>AO ALCENCE DE TODOS</h1>
                <h3>Tendo os melhores looks a sua disposição</h3>
                <Link to='/Masculina'><button className="BotaoHome">Moda Male</button></Link>
            </div>

            <div class="imgMargin">
                <Link to={'/kids'}><img src={bannerC} ></img></Link>
            </div>

            <div className="textMargin">
                <h3>encontre a melhor peça</h3>
                <h1>Do básico ao elegante</h1>
                <h3>Para que o seu pequeno se sinta especial</h3>
                <Link to='/kids'><button className="BotaoHome">Moda Kids</button></Link>
            </div>

            <Footer></Footer>

        </>
    );
}

export default Home;