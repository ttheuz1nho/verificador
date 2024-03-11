function verificar() {
    var anoNascimento = window.document.getElementById("anon").value;
    var res = window.document.getElementById("res")
    var datahj = new Date();
    var anoAtual = datahj.getFullYear();
    var anon = parseInt(anoNascimento);
    var idade = (anoAtual-anon)

    var genero = ''

    if (anon > anoAtual || anoNascimento == 0) {
        window.alert(`(ERRO) FAVOR PREENCHER DADOS CORRETAMENTE`)
    }
    else {
        var sexo = window.document.getElementsByName("sexo")
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if(sexo[0].checked) {
            genero = "homem"
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src','imagens/criança-m.png');
            }
            else if (idade <= 21){
                img.setAttribute('src','imagens/jovem-m.png');
            }
            else if (idade < 60) {
                img.setAttribute('src','imagens/adulto-m.png');
            }
            else if (idade > 60) {
                img.setAttribute('src', 'imagens/velho-m.png');
            }
            }
        
        else if (sexo[1].checked) {
            genero = "mulher";
                if (idade >= 0 && idade <= 10){
                img.setAttribute('src','imagens/criança-f.png');
            }
            else if (idade <= 21){
                img.setAttribute('src','imagens/jovem-f.png');
            }
            else if (idade < 60) {
                img.setAttribute('src','imagens/adulto-f.png');
            }
            else if (idade > 60) {
                img.setAttribute('src', 'imagens/velho-f.png');
            }
        }
        
    }
    
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
    res.appendChild(img)
}


