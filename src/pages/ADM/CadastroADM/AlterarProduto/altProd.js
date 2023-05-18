const AltProd = (marcaId, categoriaId, sexoId, imagemALT) => {
    let nome = document.getElementById("prodNomeALT").value;
    let valor = document.getElementById("prodValorALT").value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });;
    var descricaoProduto = document.getElementById("prodDescriçãoALT").value;


    if (marcaId, categoriaId) {
        fetch('http://localhost:8082/api/produto/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                descricaoProduto,
                valor,
                imagem: imagemALT,
                marca: {
                    id: marcaId,
                },
                categoria: {
                    id: categoriaId,
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
                alert('Sucesso no Cadastro')
            })
            .catch(error => {
                console.error(error);
                alert('Erro no Cadastro')
            });
    }
}

export default AltProd;