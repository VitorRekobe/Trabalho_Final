function CadMarca() {
    let categoria = document.getElementById("prodCategoria").value;

    fetch('http://localhost:8082/api/categoria/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nome': categoria
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
            console.log(categoria)
            alert('Erro no Cadastro')
        });
}

export default CadMarca;