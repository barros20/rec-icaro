var titulo = document.querySelector(".titulo");
titulo.textContent = "Alunos"

var alunos = document.querySelectorAll(".aluno");

    alunos.forEach ((aluno) => {
        var lista = alunos.querySelector(".info-peso").textContent;
        var trabalho = alunos.querySelector(".info-lista").textContent;
        var prova = alunos.querySelector(".info-trabalho").textContent;
        var media = alunos.querySelector(".info-prova").textContent;
        var soma = (lista+altura)
        var media = soma /2


    }

)

var botao = document.querySelector("#adicionar-aluno");
botao.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var alunoTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var listaTd = document.createElement("td");
    var trabalhoTd = document.createElement("td");
    var provaTd = document.createElement("td");
    var somaTd = document.createElement("td");
    var mediaTd = document.createElement("td");

    nomeTd.textContent = form.nome.value;
    listaTd.textContent = form.lista.value;
    trabalhoTd.textContent = form.trabalho.value;
    provaTd.textContent = form.prova.value;
    somaTd.textContent = form.soma.value;
    mediaTd.textContent = form.media.value;

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(listaTd);
    alunoTr.appendChild(trabalhoTd);
    alunoTr.appendChild(provaTd);

    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
});
