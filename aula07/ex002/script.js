function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-masc-bb.png')
            } else if (idade >=10 && idade < 21) {
               img.setAttribute('src', 'foto-masc-teen.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'foto-masc-adulto.png')
            } else {
                img.setAttribute('src', 'foto-masc-idoso.png')
            }
        } else {
            gênero = 'Mulher'
               if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-fem-bb.png')
            } else if (idade >=10 && idade < 21) {
                img.setAttribute('src', 'foto-fem-teen.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'foto-fem-adulto.png')
            } else {
                img.setAttribute('src', 'foto-fem-idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}