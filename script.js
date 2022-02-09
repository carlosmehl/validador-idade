function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13){
                // criança
                img.setAttribute('src', 'crianca-mas.jpg')
            }else if(idade >= 13 && idade < 18){
                // adolescente
                img.setAttribute('src', 'adolescente-mas.jpg')
            }else if(idade >= 18 && idade < 50){
                // adulto
                img.setAttribute('src', 'adulto-mas.jpg')
            }else{
                // idoso
                img.setAttribute('src', 'idoso-mas.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 13){
                // criança
                img.setAttribute('src', 'crianca-fem.jpg')
            }else if(idade >= 13 && idade < 18){
                // adolescente
                img.setAttribute('src', 'adolescente-fem.jpg')
            }else if(idade >= 18 && idade < 50){
                // adulto
                img.setAttribute('src', 'adulto-fem.jpg')
            }else{
                // idoso
                img.setAttribute('src', 'idoso-fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}