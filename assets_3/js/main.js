function relogio (){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar')
    let segundos = 0;
    let timer;

    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraSegundos(segundos);
        }, 1000)
    }

    function pausaRelogio(){
        clearInterval(timer);
    }

    document.addEventListener('click', function(e){
        const elemento = e.target;
        
        if(elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer);
            iniciaRelogio();
        }

        if (elemento.classList.contains('pausar')){
            relogio.classList.add('pausado')
            clearInterval(timer);
            pausaRelogio();  
        }

        if (elemento.classList.contains('zerar')){
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0; 
        }
    });

    function criaHoraSegundos (segundos){
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
    });

    // === Modo pelo qual eu tentei fazer ===

    // iniciar.addEventListener('click', function(event){
    //     relogio.classList.remove('pausado')
    //     clearInterval(timer);
    //     iniciaRelogio();
    // })

    // pausar.addEventListener('click', function(event){
    //     relogio.classList.add('pausado')
    //     clearInterval(timer);
    //     pausaRelogio();  
    // });

    // zerar.addEventListener('click', function (event){
    //     relogio.classList.remove('pausado')
    //     clearInterval(timer);
    //     relogio.innerHTML = '00:00:00';
    //     segundos = 0; 
    // });

    };
};

relogio();



