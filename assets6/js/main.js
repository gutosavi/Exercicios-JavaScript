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
    })
};

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    return true;
}

const cpf = new ValidaCPF('009.345.390-65');
console.log(cpf.valida());

