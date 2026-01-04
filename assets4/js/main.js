const numero = document.querySelector('#numero');
const btnAdd = document.querySelector('#btn-add');
const btnFinalizar = document.querySelector('#btn-fim');
const res = document.querySelector('#resultado');
const lista = document.querySelector('#flista');

let valores = [];

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
};

function inLista(n, l){
    if (l.indexOf(Number(n)) !== -1){
        return true
    } else {
        return false
    }
};

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        const item = document.createElement('option');
        item.textContent = `O valor ${numero.value} foi adicionado`;
        lista.appendChild(item);
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
};

btnAdd.addEventListener('click', function(){
    adicionar(numero.value);
    numero.value = ''; //limpar o campo de input
    numero.focus(); //para o cursor voltar a piscar no input
    console.log(numero.value)
});

btnFinalizar.addEventListener('click', function mostrarResultado(){
    res.innerHTML = `<br>Ao todo temos ${valores.length} valores cadastrados</br>`;

    let maiorNumero = 0;
    for (let i = 1; i < valores.length; i++){
        if (valores[i] > maiorNumero) {
            maiorNumero = valores[i]
        }
    };

    res.innerHTML += `<br>O maior valor informado é ${maiorNumero}.</br>`;

    res.innerHTML += `<br>O menor valor informado é ${Math.min(...valores)}.</br>`;

    const soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    res.innerHTML += `<br>Somando todos os valores temos ${soma}.</br>`

    const media = soma / (valores.length);
    res.innerHTML += `<br>A média dos valores digitados é ${media.toFixed(2)}.</br>`
    
});



