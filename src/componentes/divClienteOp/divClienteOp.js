import './divClienteOp.css'

import { Link } from 'react-router-dom'

function telaCliente(){
    return(
        <div className='opCliente'>
            <Link to={"/cliente"} className='Link'><h2 className='perfil'>Perfil</h2></Link>
            <Link to={"/favoritos"} className='Link'><h2 className='favoritos'>Favoritos</h2></Link>
            <Link to={"/pedidos"} className='Link'><h2>Pedidos</h2></Link>
            <Link to={"/pagamentos"} className='Link'><h2>Pagamentos</h2></Link>
            <Link to={"/atendimento"} className='Link'><h2>Atendimento</h2></Link>
            <Link to={"/reembolso"} className='Link'><h2>Reembolso</h2></Link>
            <Link to={"/endereço"} className='Link'><h2>Endereço</h2></Link>
        </div>
    );
}

export default telaCliente;