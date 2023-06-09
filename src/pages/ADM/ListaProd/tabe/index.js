import pesquisarProd from '../funçãoListar';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { FiEdit, FiEdit3 } from "react-icons/fi";

function TableProd() {
    const [produtos, setProdutos] = useState([])

    function AbrirModalCad() {
        document.getElementById("cadModal").style.display = "block";
    }

    function AbrirModalALT(prodIdAlt) {
        document.getElementById("AltProdutos").style.display = "block";
        let idAlt = localStorage.getItem("altId");
        let novoProduto = {
            id: prodIdAlt,
        };

        const produto = produtos.find((produto) => produto.id === prodIdAlt);

        if (produto) {
            document.getElementById("prodNomeALT").value = produto.nome;
            document.getElementById("prodValorALT").value = produto.valor;
            document.getElementById("prodDescriçãoALT").value = produto.descricaoProduto;
            document.getElementById("urlImagenprodutoALT").value = produto.imagem;
            
            document.getElementById("SelectMarca").value = produto.marca.nome;
            document.getElementById("selectCategoria").value = produto.categoria.nome;

            // Definir os valores dos outros campos de input conforme necessário
        }

        idAlt = novoProduto;
        localStorage.setItem("AltProdutos", JSON.stringify(idAlt));
    }

    useEffect(() => {
        fetch('http://localhost:8082/api/produto/')
            .then((response) => response.json())
            .then((data) => {
                setProdutos(data)
            })
    }, [])

    function deleteProd(prodId) {
        fetch(`http://localhost:8082/api/produto/${prodId}`, {
            method: 'DELETE',
            header: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log('Pessoa excluída com sucesso', response);
                    setProdutos(produtos.filter((produto) => produto.id !== prodId));
                } else {
                    console.log('Erro ao excluir pessoa');
                }
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    }

    return (
        <div className="divListCliente">
            <div className='AlinharPesquisaEnovo'>
                <label>
                    Pesquisar produtos: &ensp;
                    <input placeholder="  &#x1F50E;&#xFE0E;  Buscar" id='buscarProd' onChange={pesquisarProd}></input>
                </label>
                <div>
                    <button className='Botao NovoTable' onClick={AbrirModalCad}>Novo</button>
                </div>
            </div>
            <br></br>
            <table id='tabela'>
                <tr>
                    <th className='idTable'>&nbsp;</th>
                    <th>Marca</th>
                    <th>Nome</th>
                    <th className='valorTable'>Valor</th>
                    <th className='apagarTable'>
                        <FaRegTrashAlt style={{ color: 'white' }}>
                        </FaRegTrashAlt>
                    </th>
                    <th className='apagarTable'><FiEdit style={{ color: 'white' }}></FiEdit></th>
                </tr>
                <tbody id='tbodyProd'>
                    {
                        produtos.map((produtos, index) => {

                            return (
                                <tr key={index}>
                                    <td>{produtos.id}</td>
                                    <td>{produtos.marca.nome}</td>
                                    <td>{produtos.nome}</td>
                                    <td>{produtos.valor}</td>
                                    <td>
                                        <button style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}
                                            onClick={() => deleteProd(produtos.id)}>
                                            X
                                        </button>
                                    </td>
                                    <td className='AlinhaAltButProd'>
                                        <button className="buttonEdit"
                                            onClick={() => AbrirModalALT(produtos.id)}>
                                            <FiEdit3 style={{ color: 'white' }}></FiEdit3>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableProd;