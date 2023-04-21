import TableProd from './tabe/index'
import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import { useEffect, useState } from 'react';
import PageADMCad from '../CadastroADM';

function PageADMLista(props) {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch('http://localhost:8082/api/produto/')
            .then((response) => response.json())
            .then((data) => {
                setProdutos(data)
            })
    }, [])

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
            <PageADMCad></PageADMCad> 
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <TableProd produtos={produtos}>

                    </TableProd>
                </div>
            </div>
        </div>
    )
}

export default PageADMLista;