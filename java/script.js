document.addEventListener('DOMContentLoaded', function () {
    const produtosContainer = document.querySelector('.produtos');
    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');

    setaDireita.addEventListener('click', function () {
        produtosContainer.scrollLeft += 200; // Ajuste o valor conforme necessário
    });

    setaEsquerda.addEventListener('click', function () {
        produtosContainer.scrollLeft -= 200; // Ajuste o valor conforme necessário
    });
});
