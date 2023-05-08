function Cadastrar() {

    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let dtNascimento = document.getElementById("dtNascimento").value;
    let senha = document.getElementById("CadSenha").value;
    let Senha1 = document.getElementById("CadSenha").value;
    let Senha2 = document.getElementById("ComSenha").value;

    if (Senha1 != Senha2) {
        alert("Senhas diferentes")

    } else if(nome == '' || email == '' || senha == ''){
        alert("Campos Vazios")
    } else {
        senha = Senha1;
        const data = {
            "id": "-1",
            nome,
            email,
            // dtNascimento,
            senha
        };
        console.log((JSON.stringify(data)))
        fetch("http://localhost:8082/api/cliente/", {
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
                document.getElementById("name").value = '';
                document.getElementById("email").value = '';
                document.getElementById("dtNascimento").value = '';
                document.getElementById("CadSenha").value = '';
                document.getElementById("CadSenha").value = '';
                document.getElementById("ComSenha").value = '';
            })
            .catch((error) => {
                alert("Erro No Cadastro")
                console.error("Error:", error);
            });
    }
}

export default Cadastrar;