
function carregar (){
    const ano = new Date().getFullYear();
    const res = document.querySelector('#resultado');
    const img = document.querySelector('#fotos');
    const anoNascimento = Number(document.querySelector('#nasc').value);
    

    if (anoNascimento.length == 0 || anoNascimento > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        const fsex = document.getElementsByName('sexo')
        const idade = ano - anoNascimento
        let genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade <= 10){
                img.setAttribute('src', '../assets_2/img/crianca-masc.png')
            } else if (idade <= 20) {
                img.setAttribute('src', '../assets_2/img/adolescente-masc.jpg')
            } else if (idade <= 50){
                img.setAttribute('src','../assets_2/img/homem-adulto.jpg' )
            } else {
                img.setAttribute('src', '../assets_2/img/homem-idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade <= 10){
                img.setAttribute('src', '../assets_2/img/crianca-fem.png')
            } else if (idade <= 20){
                img.setAttribute('src', '../assets_2/img/adolescente-fem.jpg')
            } else if (idade <= 50){
                img.setAttribute('src', '../assets_2/img/mulher-adulta.jpg')
            } else {
                img.setAttribute('src', '../assets_2/img/mulher-idosa.jpg')
            }
        };
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.classList.toggle('mostrar');
    }

    

};


