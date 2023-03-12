import './footerStyle.css';
import Secret from '../../pages/Secret/secret';
import { Link } from 'react-router-dom';

function footer() {
    return (
        <div id='footer'>
            <div className="footerMargin">
                <h3>Suporte</h3>
                <h3>Sobre a G.O.A.T STORE</h3>
                <h3>Redes Sociais</h3>
                <h3>Formas de pagamento</h3>
                <div class="spinner is-animating"><p><Link to={'/secret'}>.</Link></p></div>
            </div>
        </div>
    );
}

export default footer;