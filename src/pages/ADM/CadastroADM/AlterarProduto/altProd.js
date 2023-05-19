const AltProd = (marcaId, categoriaId, sexoId, imagemALT) => {
    let nome = document.getElementById("prodNomeALT").value;
    let valor = document.getElementById("prodValorALT").value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    var descricaoProduto = document.getElementById("prodDescriçãoALT").value;

    let produtoIdAlt = JSON.parse(localStorage.getItem("AltProdutos"));
    let idAlt = JSON.stringify(produtoIdAlt.id).replace(/[{}]/g, '');// Acessa o primeiro elemento do array e obtém o ID
    console.log(idAlt, nome, valor, descricaoProduto, imagemALT)
    
    const data = {
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
      };
    
      fetch(`http://localhost:8082/api/produto/${idAlt}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao alterar o produto');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          alert('Sucesso na Alteração');
        })
        .catch(error => {
          console.error(error);
          alert('Erro na Alteração');
        });
};

export default AltProd;
