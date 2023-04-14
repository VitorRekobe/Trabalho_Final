import "./femalePage.css"; // css

// COMPONENTES
import Header from "../../componentes/Header/Header";
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa";

function PageFeminino() {
    return (
        <div id="pageF">
            <Header></Header>
            <HeaderPesquisa></HeaderPesquisa>
            <div id="div_1_Female">
                <div className="imagemFemale" id="casacoF">
                    <div className="imgCard"><h1 className="nameCard">Casacos</h1></div>
                </div>
                <div className="imagemFemale" id="calçadosF">
                    <div className="imgCard"><h1 className="nameCard">Calçados</h1></div>
                </div>
                <div className="imagemFemale" id="calçaF">
                    <div className="imgCard"><h1 className="nameCard">Calças</h1></div>
                </div>
                <div className="imagemFemale" id="vestidos">
                    <div className="imgCard"><h1 className="nameCard">Vestidos</h1></div>
                </div>
            </div>
        </div>
    )
}

export default PageFeminino;