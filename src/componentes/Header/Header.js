import './HeaderStyle.css';
import { Link } from 'react-router-dom'
import bolsa from './bolsa.png';
import User from './perfil.png'

function Header() {
    return (
        <header>
            <div className="juntarHeader">
                <div><ol><Link to='/'>G.O.A.T STORE</Link></ol></div>
                <div>
                    <ol className="hover"><Link to='/carrinho'><img src={bolsa}></img></Link></ol>
                    <ol>|</ol>
                    <ol className="hover"><Link to='/cadastro'><img src={User}></img></Link></ol>
                </div>
            </div>
        </header>
    );
}

export default Header;