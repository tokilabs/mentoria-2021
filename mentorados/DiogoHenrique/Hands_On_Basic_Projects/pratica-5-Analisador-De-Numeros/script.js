let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Adicionando o número: ${num.value}`
        flista.appendChild(item)
    } else{
        window.alert('Valor inválido ou já informado')
    }
}

function finalizar(){
    if (valores == 0){
        window.alert('Informe valores antes de finalizar')
    } else{
        let total = valores.length
        let maior = Math.max.apply(null, valores)
        let menor = Math.min.apply(null, valores)
        let soma  = 0
        let media = 0
    
        for (let i = 0; i < total; i++){
            soma += valores[i]
        }
        res.innerHTML  = '<br>'
        res.innerHTML += `Total de números informados: ${total} <br>`
        res.innerHTML += `Maior número informado: ${maior} <br>`
        res.innerHTML += `Menor número informado: ${menor} <br>`
        res.innerHTML += `Menor número informado: ${soma} <br>`
        res.innerHTML += `Média dos números informado: ${soma/total} <br>`
    }
 
}