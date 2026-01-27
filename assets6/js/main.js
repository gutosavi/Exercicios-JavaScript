// 705484450-52

/*
cpf.replace(/\D+/g, '');

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0 40 28 48 20 16 15  0 = 237
11 - (237 % 11) = 5(primeiro dígito)

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0 45 32 56 24 20 20  0 10 = 284
11 = (284 % 11) = 2(segundo dígito)
*/
function ValidaCPF(cpf){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpf.replace(/\D+/g, '');
        }
    });
};

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false; // se o CPF for uma sequencia de números, retorna false;

    const cpfParcial = this.cpfLimpo.slice(0, -2); // para usar os 9 primeiros números
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCPF = cpfParcial + digito1 + digito2;
    return novoCPF === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial); // trasforma os números em array
    let regressivo = cpfArray.length + 1; // pra iniciar de 10;
    const digito = cpfArray.reduce((acc, valor) => {
        acc += (regressivo * Number(valor)); // acc = acc + (regressivo * valor)
        regressivo--;
        return acc;
    }, 0)
    const resto = digito % 11;
    return resto < 2 ? '0' : String(11 - resto); // (total % 11) - 11 
};

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52');

if(cpf.valida()){
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
};



