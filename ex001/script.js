function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora sao ${hora} horas e ${minuto} minutos.`
    
    if(hora >= 0 && hora < 12) {
        //manha
        img.src = 'fotomanha.png'
        document.body.style.background = '#a7bfe4'
    }
    else if(hora >= 12 && hora < 18) {
        //tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#8990f7'
    }
    else {
        //noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#484c86'
    }
}
