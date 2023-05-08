``
function inserirAluno (total_aulas) {
    var matricula = prompt('Digite a matricula do aluno');
    var nome = prompt('Digite o nome do aluno');
    var nota_b1 = parseFloat(prompt('Digite a nota do primeiro bimestre do aluno'));
    var nota_b2 = parseFloat(prompt('Digite a nota do segundo bimestre do aluno'));
    var faltas = parseInt(prompt('Digite o número de faltas do aluno'));

    var media = parseFloat(nota_b1 + nota_b2)/2;
    if (0.25 < faltas/total_aulas) {
        var situacao = 'REPROVADO - FALTAS';
        var notaPf = '-';
        var mediaF = '-';
    }else {
        if (media >= 7) {
            var situacao = 'APROVADO';
            var notaPf = '-';
            var mediaF = '-';
        }else {
            var notaPf = parseFloat(prompt('Digite a nota da prova final do aluno'));
            var mediaF = (notaPf + media)/2;
            if (mediaF >= 5) {
                var situacao = 'APROVADO';
            } else {
                var situacao = 'REPROVADO - NOTA';
            }
        }
    }

    var tabela = document.querySelector("#tabela");

    var novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).innerText = matricula;
    novaLinha.insertCell(1).innerText = nome;
    novaLinha.insertCell(2).innerText = nota_b1;
    novaLinha.insertCell(3).innerText = nota_b2;
    novaLinha.insertCell(4).innerText = media;
    novaLinha.insertCell(5).innerText = notaPf;
    novaLinha.insertCell(6).innerText = mediaF;
    novaLinha.insertCell(7).innerText = faltas;
    novaLinha.insertCell(8).innerText = situacao;
}
``