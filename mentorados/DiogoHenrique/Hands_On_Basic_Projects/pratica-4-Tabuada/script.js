function gerar_tabuada(){
    var num = document.getElementById('txt_numero') // num = número  
    var res = document.getElementById('sel_tab')        // res = res(ultado) é a id que está no HTML

    if (num.value.length == 0){
        window.alert('[erro] Informe algum valor')
    } else{
        valor = Number(num.value)
        res.innerHTML = ''
        for (var temp = 1; temp <=10; temp++){
            // res.innerHTML += `${temp} x ${valor} = ${valor*temp} <br>`
            var item = document.createElement('option')
            item.text = `${temp} x ${valor} = ${valor*temp}`
            res.appendChild(item)
        }
    }
     
}