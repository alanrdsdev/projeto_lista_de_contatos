
const form = document.getElementById('formAgenda');
let linhas = '';

form,addEventListener('submit', function(e) {
    e.preventDefault();


    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas +=  linha;

    const corpo = document.querySelector(`tbody`);
    corpo.innerHTML = linhas;

    inputNome.value = '';
    inputTelefone.value = '';


});