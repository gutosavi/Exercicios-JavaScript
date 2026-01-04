const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}` 
};

const relogio = setInterval(() => {
    const data = new Date();
    data.toLocaleTimeString('pt-BR', {
        hour12: false
    })

    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = sec;

})