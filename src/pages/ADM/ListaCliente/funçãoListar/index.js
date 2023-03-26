function pesquisarProd() {
    var tbody = document.getElementById("tbodyProd")

    document.getElementById("buscarProd").addEventListener("keyup", function () {
        var busca = document.getElementById("buscarProd").value.toLowerCase();

        for (let i = 0; i < tbody.childNodes.length; i++) {
            var achou = false;
            var tr = tbody.childNodes[i];
            var td = tr.childNodes;

            for (let j = 0; j < td.length; j++) {
                var value = td[j].childNodes[0].nodeValue.toLowerCase();
                console.log((value.indexOf(busca)))
                if(value.indexOf(busca) >= 0){
                    achou = true;
                    
                }
            }

            if(achou){
                tr.style.display = "table-row"
            } else{
                tr.style.display = "none"
            }
        }
    })
}

export default pesquisarProd;