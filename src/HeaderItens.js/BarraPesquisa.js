import "./HeaderPesquisa.css"
import { Link } from 'react-router-dom'

function HeaderPesquisa() {
    return (     
            <div id="HeaderPesquisa">
                <Link to={'/lançamento'}><ol className="ol" id='Novidades'>Novidades</ol></Link>
                <Link to={'/ofertas'}><ol className="ol">Ofertas</ol></Link>
                <Link to={'/Femininas'}><ol className="ol">Femininas</ol></Link>
                <Link to={'/Masculinas'}><ol className="ol">Masculinas</ol></Link>
                <Link to={'/kids'}><ol className="ol">Infantil</ol></Link>
                <ol><input placeholder="  &#x1F50E;&#xFE0E; Buscar"></input></ol>
            </div>
    );
}

export default HeaderPesquisa;