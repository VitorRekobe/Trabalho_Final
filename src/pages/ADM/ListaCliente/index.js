import TableCliente from './tabeCliente';
import './pageAdmCliente.css';
import Header from "../../../componentes/Header/Header";
import TelaAdm from '../../../componentes/divAdmOp/divAdmOp';
import { useEffect, useState } from 'react';

function PageAdmClientes() {

    const [clientes, setClientes] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8082/api/cliente/')
            .then((response) => response.json())
            .then((data) => {
                setClientes(data)
            })
    }, [])

    return (
        <div className="background">
            <Header></Header>
            <div className="principalCliente">
                <TelaAdm></TelaAdm>
                <div className="telaO">
                    <TableCliente clientes={clientes}></TableCliente>

                </div>
            </div>
        </div>
    )
}

export default PageAdmClientes;