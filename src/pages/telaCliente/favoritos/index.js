import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClienteFavoritos.css';
import Header from "../../../componentes/Header/Header";
import { IoHeartOutline } from "react-icons/io5";

function pageClienteFavoritos() {

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <OpcoesCliente></OpcoesCliente>
                <div className="telaO">
                    <div id="divFavoritos">
                        
                        <h2>Favoritos  Vazio <IoHeartOutline color="#E8D1C5" />  </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pageClienteFavoritos;