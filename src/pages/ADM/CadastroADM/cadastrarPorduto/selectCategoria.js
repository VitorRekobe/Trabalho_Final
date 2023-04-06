import { useEffect, useState } from 'react';

function SelectCategoria({ onValueChange }) {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8082/api/categoria/')
            .then(response => response.json())
            .then(data => {
                setCategorias(data);
            })
            .catch(error => {
                console.error('Ocorreu um erro ao consultar o banco de dados', error);
            });
    }, []);

    const pegarCategoria = (event) => {
        let setSelectedCategoria = event.target.value;
        onValueChange(setSelectedCategoria);
    };

    return (
        <select onChange={pegarCategoria} className='StyleInputUser'>
            <option >Selecione uma Categoria</option>
            {categorias.map(categorias => (
                <option key={categorias.id} value={categorias.nome}>{categorias?.nome}</option>
            ))}
        </select>
    )
}

export default SelectCategoria;