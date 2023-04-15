import { useEffect, useState } from 'react';

function SelectedSexo({ onValueChange }) {
    const [Sexo, setSexo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8082/api/marca/')
            .then(response => response.json())
            .then(data => {
                setSexo(data);
            })
            .catch(error => {
                console.error('Ocorreu um erro ao consultar o banco de dados', error);
            });
    }, []);

    const pegarSexo = (event) => {
        let setSelectedSexo = event.target.value;
        onValueChange(setSelectedSexo);
    };

    return (
        <select onChange={pegarSexo} className='StyleInputUser select'>
            <option >Selecione o sexo</option>
            {Sexo.map(sexo => (
                <option key={sexo.id} value={sexo.nome}>{sexo?.nome}</option>
            ))}
        </select>
    )
}

export default SelectedSexo;