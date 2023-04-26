import { useEffect, useState } from 'react';

function SelectedSexo({ onValueChange }) {
    const [Sexo, setSexo] = useState([]);

    const pegarSexo = (event) => {
        let setSelectedSexo = event.target.value;
        onValueChange(setSelectedSexo);
    };

    return (
        <select onChange={pegarSexo} className='StyleInputUser select'>
            <option value="">Selecione o sexo</option>
            <option >Masculino</option>
            <option >Feminino</option>
            <option >Unisex</option>
        </select>
    )
}

export default SelectedSexo;