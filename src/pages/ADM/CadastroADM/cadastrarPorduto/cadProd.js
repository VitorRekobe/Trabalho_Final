function cadProd() {
    let Marca = document.getElementById("prodMarca").value;
    let nomeProd = document.getElementById("prodNome").value;
    let categoria = document.getElementById("prodCategoria").value;
    let valor = document.getElementById("prodValor").value;
    var file = document.getElementById("imgFile").files[0];
    
    if (Marca == '') {
        alert("Campos Vazios")
    } else {
        const data = {
            "id" : "-1",
            "nome" : Marca
        };
        console.log((JSON.stringify(data)))
        fetch("http://localhost:8082/api/marca/", {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then((response) => response.json())
        .then((data) => {
            alert("Cadastro Concluido")
            console.log("Success:", data);
            document.getElementById("prodMarca").value = '';
        })
        .catch((error) => {
            alert("Erro No Cadastro MARCA")
            console.error("Error:", error);
        });
        
        
    }
    
    if (categoria == '') {
        alert("Campos Vazios")
    } else {
        const data = {
            "id": "-1",
            "nome": categoria
        };
        console.log((JSON.stringify(data)))
        fetch("http://localhost:8082/api/categoria/", {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then((response) => response.json())
            .then((data) => {
                alert("Cadastro Concluido")
                console.log("Success:", data);
                document.getElementById("prodCategoria").value = '';
            })
            .catch((error) => {
                alert("Erro No Cadastro CATEGORIA")
                console.error("Error:", error);
            });
            
        }

        if (nomeProd == '' || valor == '') {
            alert("Campos Vazios")
        } else {
            const data = {
                "id": "-1",
                "nome": nomeProd,
                "valor": valor
            };
            console.log((JSON.stringify(data)))
            fetch("http://localhost:8082/api/produto/", {
                body: JSON.stringify(data),
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8',
    
                    'Access-Control-Allow-Origin': '*'
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    alert("Cadastro Concluido")
                    console.log("Success:", data, Marca, categoria);
                    document.getElementById("prodNome").value = '';
                    document.getElementById("prodValor").value = '';
                })
                .catch((error) => {
                    alert("Erro No Cadastro PRODUTO")
                    console.error("Error:", error);
                });
        }

        const data = {
            "id": "-1",
            "nome" : file
        };
        console.log((JSON.stringify(data)))
        fetch("http://localhost:8082/api/produtoImagens/", {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
    
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Cadastro Concluido")
                console.log("Success:", data, Marca, categoria);
                document.getElementById("prodNome").value = '';
                document.getElementById("prodValor").value = '';
            })
            .catch((error) => {
                alert("Erro No Cadastro PRODUTO")
                console.error("Error:", error);
            });

}
export default cadProd;