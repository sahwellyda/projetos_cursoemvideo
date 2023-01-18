function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById("res")
     
    if (num.value == 0){
       alert("por favor digite um número")
    } else {
        let n = Number(num.value)
        tab.innerHTML = ""
        for (let c = 1; c <=10; c++) {
            tab.innerHTML += ` ${n} x ${c} = ${n*c} <br> `
            /*Como se fosse tab.innerHTML = tab.innerHTML + ` ${n} x ${c} = ${n*c} <br>  */
        }
    }
}