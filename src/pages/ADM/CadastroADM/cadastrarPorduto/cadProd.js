function cadProd() {
    let marca = document.getElementById("prodMarca").value;
    let nome = document.getElementById("prodNome").value;
    let categoria = document.getElementById("prodCategoria").value;
    let valor = document.getElementById("prodValor").value;
    var file = document.getElementById("imgFile").files[1];
    var descricaoProduto = document.getElementById("prodDescrição").value;

    fetch('http://localhost:8082/api/produto/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome,
            descricaoProduto,
            valor,
            marca: {
                id: 1,
                'nome': marca
            },
            categoria: {
                id: 1,
                'nome': categoria
            }
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
        })
        .catch(error => {
            console.error(error);
        });
}
export default cadProd;