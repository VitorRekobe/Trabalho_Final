import './divAdmOp.css'

import { Link } from 'react-router-dom'

function telaAdm(){
    return(
        <div className='opADM'>
            {/* <Link to={"/ADM"} className='Link'><h2 className='cadProduto'>Cadastrar Produto</h2></Link> */}
            <Link to={"/ADM/ListProd"} className='Link'><h2 className='LtCliete'>Produtos</h2></Link>
            <Link to={"/ADM/ListCliente"} className='ListCliente'><h2>Clientes</h2></Link>
            <Link to={"/ADM/Vendas"} className='Vendas'><h2>Vendas</h2></Link>
            <Link to={"/ADM/cadMarcas"} className='MarcasCad'><h2>Marcas</h2></Link>
            <Link to={"/ADM/cadCategorias"} className='CategoriasCad'><h2>Categorias</h2></Link>
        </div>
    );
}

export default telaAdm;