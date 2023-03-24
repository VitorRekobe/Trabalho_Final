function cadProd() {
    let Marca = document.getElementById("prodMarca").value;
    let NomeProd = document.getElementById("prodNome").value;
    let Categoria = document.getElementById("prodCategoria").value;
    let Valor = document.getElementById("prodValor").value;
    
    if (Marca == '') {
        alert("Campos Vazios")
    } else {
        const data = {
            "id": "-1",
            Marca
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
    
    if (Categoria == '') {
        alert("Campos Vazios")
    } else {
        const data = {
            "id": "-1",
            Categoria
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

        if (NomeProd == '' || Valor == '') {
            alert("Campos Vazios")
        } else {
            const data = {
                "id": "-1",
                NomeProd,
                Valor
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
                    console.log("Success:", data, Marca, Categoria);
                    document.getElementById("prodNome").value = '';
                    document.getElementById("prodValor").value = '';
                })
                .catch((error) => {
                    alert("Erro No Cadastro PRODUTO")
                    console.error("Error:", error);
                });
        }
}
export default cadProd;
