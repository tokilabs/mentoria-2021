function contar(){
    var ini = document.getElementById('txt_ini') 
    var fim = document.getElementById('txt_fim')
    var pas = document.getElementById('txt_pas')
    var res = document.getElementById('res')

    iniNum = Number(ini.value)
    fimNum = Number(fim.value)
    pasNum = Number(pas.value)

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[erro] Faltam dados')
    } else if (pasNum == 0){
        window.alert('valor do passo inválido')
    } else if (fimNum > iniNum){
        // Contagem crescente
        res.innerHTML = 'Contando: <br>'
        for (var temp = iniNum; temp <= fimNum; temp += pasNum){
                res.innerHTML += `${temp} 👉 `
            }
        } else if (fimNum < iniNum){
        // Contagem decrescente
        res.innerHTML = 'Contando:'
        for (var temp = iniNum; temp >= fimNum; temp -= pasNum){
                res.innerHTML += `${temp} 👉 `
            }
    }  
    res.innerHTML += ` 🏳️ `

}
