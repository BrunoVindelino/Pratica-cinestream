document.addEventListener('DOMContentLoaded', function () {
    var btnAbrir = document.getElementById('abrir-formulario');
    var btnFechar = document.getElementById('fechar-formulario');
    var modal = document.getElementById('modal-formulario');
    var formFilme = document.getElementById('form-filme');
    var gradeFilmes = document.querySelector('.grade-filmes');

    btnAbrir.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    btnFechar.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    formFilme.addEventListener('submit', function (event) {
        event.preventDefault();

        var titulo = document.getElementById('titulo').value;
        var capa = document.getElementById('capa').value;
        var sinopse = document.getElementById('sinopse').value;
        var genero = document.getElementById('genero').value;

        var novoCard = document.createElement('article');
        novoCard.className = 'card-filme';

        novoCard.innerHTML = 
            '<img src="' + capa + '" alt="Capa do filme" class="capa-filme">' +
            '<div class="info-filme">' +
                '<h3>' + titulo + '</h3>' +
                '<span class="genero">Geral</span>' +
                '<p>' + sinopse + '</p>' +
                '<span class="genero">' + genero + '</span>' +
                '<a href="#" class="btn-detalhes">Ver Mais</a>' +
            '</div>';

        gradeFilmes.appendChild(novoCard);

        formFilme.reset();
        modal.style.display = 'none';
    });
});