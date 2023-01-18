function verificar() {
    var data = new Date()
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value == 0 || fano.value > ano) {
        window.alert ("[ERRO] Verifique os dados novamente")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        if (fsex[0].checked) {
            genero = "homem"
        } else if (fsex[1].checked) {
            genero = "mulher"
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos` 
         
                  
    }   
}