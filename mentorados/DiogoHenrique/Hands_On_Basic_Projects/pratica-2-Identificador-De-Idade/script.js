function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano') // fano = formulário ano
    var res  = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else{
        var fsex  = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = '' 
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade <= 10){
                //criança
                img.setAttribute('src', 'crianca-masculino.jpg')
            } else if(idade <= 21){
                //joven
                img.setAttribute('src', 'joven-masculino.jpg')
            } else if(idade <= 50){
                //adulto
                img.setAttribute('src', 'adulto-masculino.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso-masculino.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade <= 10){
                //criança
                img.setAttribute('src', 'crianca-feminino.jpg')
            } else if(idade <= 21){
                //joven
                img.setAttribute('src', 'joven-feminino.jpg')
            } else if(idade <= 50){
                //adulto
                img.setAttribute('src', 'adulto-feminino.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idosa-feminino.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}