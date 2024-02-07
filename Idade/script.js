function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(f_ano.value.length == 0 || f_ano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(f_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'homem'
            if(idade >= 0 && idade <= 2){
                img.setAttribute('src', 'bebe.jpg')
            } else if(idade > 2 && idade <= 12) {
                img.setAttribute('src', 'menino.jpeg')
            } else if(idade > 12 && idade < 65){
                img.setAttribute('src', 'homem.jpg')
            } else{
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade <= 2){
                img.setAttribute('src', 'bebe.jpg')
            } else if(idade > 2 && idade <= 12) {
                img.setAttribute('src', 'menina.jpg')
            } else if(idade > 12 && idade < 65){
                img.setAttribute('src', 'mulher.jpg')
            } else{
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        document.getElementById('txtano').value=''; 
    }
}