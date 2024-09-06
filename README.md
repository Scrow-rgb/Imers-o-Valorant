# Agentes do Valorant-Imersao com Google Gemini

## Descrição

Este projeto é um site dedicado a fornecer informações detalhadas sobre os agentes do jogo Valorant. Os usuários podem pesquisar por nome ou função dos agentes para obter detalhes sobre suas habilidades, biografias e muito mais.

## Estrutura do Projeto

O site é composto pelos seguintes arquivos e diretórios:

- `index.html`: Arquivo principal HTML que estrutura a página web.
- `style.css`: Arquivo CSS para estilização da página.
- `dados.js`: Arquivo JavaScript que contém a base de dados dos agentes.
- `app.js`: Arquivo JavaScript que implementa a funcionalidade de pesquisa.
- `favicon.png`: Ícone da página.

### Pesquisa de Agentes

- **Campo de Pesquisa**: Permite ao usuário digitar o nome ou função de um agente.
- **Botão de Pesquisa**: Aciona a função de pesquisa quando clicado.
- **Resultados da Pesquisa**: Exibe os agentes que correspondem ao termo pesquisado, mostrando o título, descrição e habilidades de cada um.

### Implementação

1. **HTML (`index.html`)**:
    - Estrutura básica da página com um campo de pesquisa e um botão para acionar a pesquisa.
    - Seção para exibir os resultados da pesquisa.
    - Rodapé com informações de contato.

2. **CSS (`style.css`)**:
    - Define a aparência do site, incluindo estilos para os resultados da pesquisa e mensagens de erro.

3. **JavaScript (`app.js`)**:
    - Implementa a lógica de pesquisa:
      - Obtém o valor do campo de pesquisa.
      - Itera sobre a base de dados (`dados.js`) para encontrar correspondências.
      - Atualiza a seção de resultados com informações dos agentes encontrados ou uma mensagem de erro se nada for encontrado.

4. **JavaScript (`dados.js`)**:
    - Contém a base de dados dos agentes do Valorant, incluindo títulos, descrições, tags e habilidades.

## Como Usar

1. **Abrir o site**: Abra o arquivo `index.html` em um navegador para visualizar o site.
2. **Pesquisar Agentes**:
    - Digite o nome ou função de um agente no campo de pesquisa.
    - Clique no botão "Pesquisar" para ver os resultados.

## Contribuições

Se desejar contribuir para o projeto, você pode:

1. Fazer um fork deste repositório.
2. Criar uma branch para suas modificações.
3. Enviar um pull request com suas alterações.

## Contato

Para quaisquer perguntas ou sugestões, entre em contato pelo email: macrinho32@gmail.com


