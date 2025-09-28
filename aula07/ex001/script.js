function carregar() {
    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são <strong>${hora}</strong> horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        imagem.src = 'foto-manha.png'
        document.body.style.background = '#EBD8B1';
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        imagem.src = 'foto-tarde.png'
        document.body.style.background = '#C58E68';
    } else {
        // BOA NOITE
        imagem.src = 'foto-noite.png'
        document.body.style.background = '#392C46';
    }
}

