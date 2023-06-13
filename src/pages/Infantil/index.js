import "./infantil.css"

import Header from "../../componentes/Header/Header";
import HeaderPesquisa from "../../componentes/HeaderItens.js/BarraPesquisa";

function InfantilPage() {

    return (
        <div id="pageK">
            <Header></Header>
            <HeaderPesquisa></HeaderPesquisa>
            <div id="div_1_kids">
                <div className="imagemKids" id="casacoK">
                    <div className="imgCardMale"><h1 className="nameCardK">Casacos</h1></div>
                </div>
                <div className="imagemKids" id="calçadosK">
                    <div className="imgCardKids"><h1 className="nameCardK">Estilos Variados</h1></div>
                </div>
                <div className="imagemKids" id="calçaK">
                    <div className="imgCardMale"><h1 className="nameCardK">Conjuntos</h1></div>
                </div>
                <div className="imagemKids" id="Vestidos">
                    <div className="imgCardKids"><h1 className="nameCardK">Vestido Infantil</h1></div>
                </div>
            </div>
        </div>
    )

}

export default InfantilPage;