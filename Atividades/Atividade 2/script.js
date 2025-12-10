function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
//var hora = data.getHours()
var hora = 21
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom Dia!
    img.src ="/Atividade 2/imagem/manha.jpg"
} else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = "/Atividade 2/imagem/tarde.jpg"
} else {
    //Boa Noite!
    img.src = "/Atividade 2/imagem/noite.jpg"
}
}
