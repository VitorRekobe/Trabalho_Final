import { useEffect, useState } from 'react';

function SelectedMarca({ onValueChange }) {
    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8082/api/marca/')
            .then(response => response.json())
            .then(data => {
                setMarcas(data);
            })
            .catch(error => {
                console.error('Ocorreu um erro ao consultar o banco de dados', error);
            });
    }, []);

    const pegarMarca = (event) => {
        let setSelectedMarca = event.target.value;
        onValueChange(setSelectedMarca);
    };

    return (
        <select onChange={pegarMarca} className='StyleInputUser'>
            <option >Selecione uma marca</option>
            {marcas.map(marca => (
                <option key={marca.id} value={marca.nome}>{marca?.nome}</option>
            ))}
        </select>
    )
}

export default SelectedMarca;