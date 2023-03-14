import OpcoesCliente from "../../../componentes/divClienteOp/divClienteOp";
import './pageClienteFavoritos.css';
import Header from "../../../componentes/Header/Header";
import { FcLike } from "react-icons/fc";

function pageClienteFavoritos() {
    
    return (
        <>
            <Header></Header>
            <div className="principalCliente">
                <OpcoesCliente></OpcoesCliente>
                <div className="telaO">
                    <FcLike></FcLike>
                </div>
            </div>
        </>
    )
}

export default pageClienteFavoritos;