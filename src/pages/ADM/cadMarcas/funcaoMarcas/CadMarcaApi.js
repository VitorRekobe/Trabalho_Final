import { useEffect, useState } from 'react';
function CadMarca() {
    let marca = document.getElementById("prodMarca").value;

    fetch('http://localhost:8082/api/marca/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nome': marca
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao criar o produto');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Sucesso no Cadastro')
        })
        .catch(error => {
            console.error(error);
            alert('Erro no Cadastro')
        });
}

export default CadMarca;