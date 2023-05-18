import './footerStyle.css';
import Secret from '../../pages/Secret/secret';
import { Link } from 'react-router-dom';

function footer() {
    return (
        <div id='footer'>
            <div className="footerMargin">
                <h3>Sobre a empresa</h3>
                <h3>Redes Sociais</h3>
                <h3><Link to={'/cliente'}>Cliente</Link></h3>
                <h3><Link to={'/ADM/ListProd'}>Administrador</Link></h3>
                <div class="spinner is-animating"><p><Link to={'/secret'}>.</Link></p></div>
            </div>
        </div>
    );
}

export default footer;