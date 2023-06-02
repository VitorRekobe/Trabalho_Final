import React, { useEffect, useState } from 'react';
import pesquisarProd from '../funçãoListar';

function TableVendas() {
    const [Vendas, setVendas] = useState([]);

    function AbrirModalCad() {
        document.getElementById('cadModal').style.display = 'block';
    }

    useEffect(() => {
        fetch('http://localhost:8082/vendas/')
            .then((response) => response.json())
            .then((data) => {
                setVendas(data);
                console.log(data)
            });
    }, []);

    return (
        <div className="divListCliente">
            <div className="AlinharPesquisaEnovo">
                <label>
                    Pesquisar Vendas: &ensp;
                    <input
                        placeholder="  &#x1F50E;&#xFE0E;  Buscar"
                        id="buscarProd"
                        onChange={pesquisarProd}
                    />
                </label>
                <div>
                    <button className="Botao NovoTable" onClick={AbrirModalCad}>
                        Novo
                    </button>
                </div>
            </div>
            <br />
            <table id="tabela">
                <thead>
                    <tr>
                        <th className="idTable">&nbsp;</th>
                        <th>dt_Compra</th>
                        <th>Qtd_Produtos</th>
                        <th className="valorTable">Total</th>
                    </tr>
                </thead>
                <tbody id="tbodyProd">
                    {Vendas.length > 0 ? (
                        Vendas.map((venda, index) => {
                            let somaPrecos = venda.itensVenda.reduce((accumulator, item) => accumulator + (parseFloat(item.preco) * item.qtdVendas), 0);
                            let somaQtd = venda.itensVenda.reduce((accumulatorr, item) => accumulatorr + item.qtdVendas, 0);
                            return (
                                <tr key={index}>
                                    <td>{venda.id}</td>
                                    <td>{venda.dataCriacao}</td>
                                    <td>{somaQtd}</td>
                                    <td>
                                        {somaPrecos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="5">Nenhuma venda encontrada.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TableVendas;