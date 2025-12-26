
function calcularImc (event){
    event.preventDefault();
    const peso = Number(document.getElementById('input-peso').value);
    const alturaCm = Number(document.getElementById('input-altura').value);
    const res = document.querySelector('.resultado');
    
    const altura = alturaCm / 100;
    const imcFinal = peso / (altura ** 2);
    console.log(imcFinal);

    if (imcFinal <= 18.5){
        res.innerText = `O seu IMC é ${imcFinal.toFixed(2)} e você está abaixo do peso.`
    } else if (imcFinal <= 24.9){
        res.innerText = `O seu IMC é ${imcFinal.toFixed(2)} e seu peso é normal.`
    } else if (imcFinal <= 29.9){
        res.innerText = `O seu IMC é ${imcFinal.toFixed(2)} e você tem obesidade de grau 1.`
    } else if (imcFinal <= 39.9){
        res.innerText = `O seu IMC é ${imcFinal.toFixed(2)} e você tem obesidade de grau 2.`
    } else {
        res.innerText = `O seu IMC é ${imcFinal.toFixed(2)} e você tem obesidade de grau 3.`
    };

}




