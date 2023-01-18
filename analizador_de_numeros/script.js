let lista =document.getElementById("flista");
let res = document.getElementById("res");
let num = document.getElementById("txtn");
let valores = [];

function isNumber(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true;
    }else {
        return false;

    }
}

function inList(n,l){
    if(l.indexOf(Number(n))!= -1){
        return true;
    }else {
        return false;
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value,valores)){
        valores.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
        res.innerHTML = " ";

    }else {
        alert("Número inválido ou já digitado");
    }
    num.value = " ";
    num.focus();
}

function finalizar () {
    if(valores.length == 0){
        alert("Nenhum valor foi adicionado");
    }else {
        let total = valores.length;
        let menor = valores[0];
        let maior =valores [0];
        let soma = 0;
        let media = 0;
        for(let pos in valores){
            soma += valores[pos];
            if (valores[pos] > maior)
                maior = valores[pos];
            if (valores[pos] < menor)
                menor = valores[pos];
        }
        media = soma / total;
        res.innerHTML = "";
        res.innerHTML += `O total de valores na lista: ${total} <br>` 
        res.innerHTML += `O maior número: ${maior} <br>`
        res.innerHTML += `O menor número: ${menor} <br>`
        res.innerHTML += `A média desses valores: ${media} <br>` 

        
    } 

}

    


