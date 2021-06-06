function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0  || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente de novo!')
    }
    else if ((ano - Number(fano.value) > 125)) {
        window.alert('[ERRO] Ano de nascimento incorreto. tente novamente!')
    }

   else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var forma = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'masculino'
            anos = 'anos'
            if(idade >= 0 && idade < 12) {
                //crianca
                forma = 'Crianca'
                if(idade == 1) {
                    anos = 'ano'
                }
                img.setAttribute('src', 'foto-bebe-m.png')

            }
            else if(idade < 19) {
                //adolescente
                forma = 'Jovem'
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if(idade < 60) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                forma = 'Adulto'
            }
            else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                forma = 'Idoso'
            }
        }
        else if(fsex[1].checked) {
            genero = 'feminino'
            if(idade >= 0 && idade < 12) {
                //Crianca
                img.setAttribute('src', 'foto-bebe-f.png')
                forma = 'Crianca'
                if(idade == 1) {
                    anos = 'ano'
                }
            }
            else if(idade < 19) {
                //adolescente
                img.setAttribute('src', 'foto-jovem-f.png')
                forma = 'Jovem'
            }
            else if(idade < 60) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                forma = 'Adulta'
            }
            else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                forma = 'Idosa'
            }
        }
        else if(fsex[1].checked) {
        }
        res.innerHTML = `${forma}, do sexo ${genero}, com ${idade} ${anos}.`
        res.appendChild(img)
    }
}