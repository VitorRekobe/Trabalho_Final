import './divAdmOp.css'

import { Link } from 'react-router-dom'

function telaAdm(){
    return(
        <div className='opADM'>
            <Link to={"/ADM"} className='Link'><h2 className='cadProduto'>Cadastrar Produto</h2></Link>
            <Link to={"/ADM/ListProd"} className='Link'><h2 className='LtCliete'>Lista de Produtos</h2></Link>
            <Link to={"/ADM/ListCliente"} className='Vendas'><h2>Lista de Clientes</h2></Link>
            <Link to={"/ADM/Vendas"} className='Vendas'><h2>Vendas</h2></Link>
        </div>
    );
}

export default telaAdm;