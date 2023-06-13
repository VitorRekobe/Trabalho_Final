import "./malePage.css"; // css

// COMPONENTES
import Header from "../../componentes/Header/Header";
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa";

function PageMasculino() {
    return (
        <div id="pageF">
            <Header></Header>
            <HeaderPesquisa></HeaderPesquisa>
            <div id="div_1_male">
                <div className="imagemMale" id="casacoM">
                    <div className="imgCardMale"><h1 className="nameCardM">Casacos</h1></div>
                </div>
                <div className="imagemMale" id="calçadosM">
                    <div className="imgCardMale"><h1 className="nameCardM">Calçados</h1></div>
                </div>
                <div className="imagemMale" id="calçaM">
                    <div className="imgCardMale"><h1 className="nameCardM">Calças</h1></div>
                </div>
                <div className="imagemMale" id="estiloMasc">
                    <div className="imgCardMale"><h1 className="nameCardM">Esporte Fino</h1></div>
                </div>
            </div>
        </div>
    )
}

export default PageMasculino;