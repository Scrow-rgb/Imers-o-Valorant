function pesquisar() {
    // Obtém a referência ao elemento HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    // Inicializa uma variável para acumular o HTML gerado
    let resultado = '';
    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    console.log(campoPesquisa)

    if (!campoPesquisa || campoPesquisa == " ") {
        section.innerHTML = '<p class = "erro-input">Nada foi encontrado.Você precisa digitar algo relacionado</p>'
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Itera sobre cada item na base de dados (dados)
// Itera sobre cada item na base de dados (dados)
// Itera sobre cada item na base de dados (dados)
for (let dado of dados) {

    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.toLowerCase();
    let encontrou = false; // Flag para verificar se encontramos algo relevante

    // Verifica se o termo pesquisado está no título, descrição ou tags do agente
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        encontrou = true;
    }

    // Verifica se o termo pesquisado está no nome ou descrição de alguma habilidade
    for (let habilidade of dado.habilidades) {
        let nomeHabilidade = habilidade.nome.toLowerCase();
        let descricaoHabilidade = habilidade.descricao_habilidade.toLowerCase();

        if (nomeHabilidade.includes(campoPesquisa) || descricaoHabilidade.includes(campoPesquisa)) {
            encontrou = true;
            break; // Se já encontramos uma habilidade relevante, não precisamos continuar procurando
        }
    }

    // Se o agente ou suas habilidades correspondem ao termo pesquisado, adiciona ao resultado
    if (encontrou) {
        // Adiciona um bloco HTML para cada agente com título e descrição
        resultado += `<div class="item-resultado" id='item-resultado'>
        <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <ul class="descricao-meta">`;

        // Itera sobre cada habilidade do agente atual (exibe todas as habilidades, independentemente da pesquisa)
        for (let habilidade of dado.habilidades) {
            resultado += `<li><strong>${habilidade.nome}</strong>: ${habilidade.descricao_habilidade}</li>`;
        }

        // Fecha o bloco HTML da lista de habilidades e do agente
        resultado += '</ul></div>';
    }
}




    if (!resultado) {
        resultado = '<p class = "erro-input">Nada foi encontrado</p>'
    }

    // Atualiza o conteúdo HTML da seção com os resultados acumulados
    section.innerHTML = resultado;
}
