let produtos = [
    { id: 1, nome: "Dipirona", preco: 12.50, categoria: "Medicamento" },
    { id: 2, nome: "Escova de Dente", preco: 15.00, categoria: "Higiene" },
    { id: 3, nome: "Vitamina C", preco: 45.00, categoria: "Suplemento" },
    { id: 4, nome: "Protetor Solar", preco: 80.00, categoria: "Higiene" },
    { id: 5, nome: "Ibuprofeno", preco: 22.00, categoria: "Medicamento" },
    { id: 6, nome: "Paracetamol", preco: 25.00, categoria: "Medicamento" },
    { id: 7, nome: "Barra de proteína", preco: 15.00, categoria: "Suplemento" },
    { id: 8, nome: "Enxaguante Bucal", preco: 10.00, categoria: "Higiene" },
    { id: 9, nome: "Benegrip", preco: 5.00, categoria: "Medicamento" },
    { id: 10, nome: "Decong. Nasal", preco: 6.00, categoria: "Medicamento" },
];

function renderizarTudo(){
    const lista = document.querySelector('#lista-produtos');
    const exibeTela = document.querySelector('#estatisticas');

    const produtosHtml = produtos.map(valor => {
        return `<li>${valor.nome} - ${valor.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} - ${valor.categoria} <button onclick='btnRemover(${valor.id})'><i class="fa-solid fa-trash-can"></i></button></li>`;
    });
    lista.innerHTML = produtosHtml.join('');

    const total = produtos.reduce((acumulador, valor) => acumulador + valor.preco, 0)
    exibeTela.innerHTML = `Valor total em estoque: ${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;

    contadorPorCategoria();
};

const btnDesconto = document.querySelector('#btn-desconto');

btnDesconto.addEventListener('click', () => {
    produtos = produtos.map(function(valor){
        return {
            ...valor,
            preco: valor.preco * 0.85
        }

    })

    renderizarTudo();

    btnDesconto.disabled = true;
    btnDesconto.innerHTML = 'Desconto Aplicado!'
});

function btnRemover(id){
    const produtosRemover = produtos.findIndex(valor => valor.id === valor.id);
    if (produtosRemover !== -1){
        produtos.splice(produtosRemover, 1);
        renderizarTudo()
    }
};

function contadorPorCategoria(){
    const estoque = document.querySelector('#estoque');
    const produtosPorCategoria = produtos.reduce((acumulador, valor) => {
        if(acumulador[valor.categoria] === undefined){
            acumulador[valor.categoria] = 0
        }
        acumulador[valor.categoria] = acumulador[valor.categoria] + 1;
        return acumulador;

    }, {})

    estoque.innerHTML = '';

    for (let p in produtosPorCategoria){
        estoque.innerHTML += `<li class='li-estoque'>${p}: ${produtosPorCategoria[p]}</li>`
    }
}


renderizarTudo();