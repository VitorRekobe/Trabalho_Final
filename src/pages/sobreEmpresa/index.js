import Header from "../../componentes/Header/Header";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './sobrenos.css'
import Footer from '../../componentes/Footer/index'

function Sobrenos() {
    return (
        <div className="backgroundo">
            <Header></Header>
            <div className="sobre_nos">
                <div className="App">
                    <section className="section">
                        <Container>
                            <Row>
                                <Col>
                                    <h2>Missão</h2>
                                    <p>Nosso objetivo é fornecer roupas de alta qualidade que unem o minimalismo e a praticidade, oferecendo uma experiência de compra online simples, conveniente e inspiradora para nossos clientes. Acreditamos que o estilo e a funcionalidade podem caminhar juntos, por isso selecionamos cuidadosamente peças versáteis e atemporais que se encaixam perfeitamente no dia a dia moderno. Queremos ajudar nossos clientes a simplificar suas vidas, permitindo que se expressem através de um guarda-roupa minimalista e elegante.</p>
                                </Col>
                                <hr/>
                            </Row>
                            <Row>
                                <Col>
                                    <h2>Visão</h2>
                                    <p>Nosso objetivo é nos tornarmos a principal referência em moda minimalista e prática, reconhecidos por nossa seleção cuidadosa de roupas modernas e versáteis. Desejamos oferecer aos nossos clientes uma experiência de compra online excepcional, proporcionando um ambiente inspirador e fácil de navegar, onde eles possam descobrir peças que complementam seu estilo de vida minimalista. Almejamos ser reconhecidos como uma marca confiável e inovadora, que atende às necessidades dos clientes que valorizam a simplicidade, a qualidade e a conveniência.</p>
                                </Col>
                                <hr/>
                            </Row>
                            <Row>
                                <Col>
                                    <h2>Valores</h2>
                                    <ul>
                                        <li>Minimalismo: Acreditamos que menos é mais. Valorizamos roupas com designs limpos, elegantes e sem excessos, proporcionando uma abordagem descomplicada para a moda.</li>
                                        <li>Qualidade: Comprometemo-nos a oferecer roupas de alta qualidade, confeccionadas com materiais duráveis ​​e acabamentos impecáveis, para garantir a satisfação dos nossos clientes.</li>
                                        <li>Praticidade: Buscamos simplificar a vida dos nossos clientes, oferecendo roupas funcionais e versáteis, que possam ser facilmente combinadas e adaptadas a diferentes ocasiões.</li>
                                        <li>Atendimento ao cliente: Colocamos nossos clientes em primeiro lugar, fornecendo um atendimento excepcional e uma experiência de compra online conveniente, personalizada e amigável.</li>
                                        <li>Sustentabilidade: Preocupamo-nos com o meio ambiente e adotamos práticas sustentáveis ​​em nosso negócio. Buscamos parcerias com marcas comprometidas com a sustentabilidade e adotamos medidas para reduzir nosso impacto ambiental.</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <Footer></Footer>
                    
                </div>
            </div>
        </div>
    )
}

export default Sobrenos;