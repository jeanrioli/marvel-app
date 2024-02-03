# Teste Prático

Esse projeto foi criado com [Create React App](https://github.com/facebook/create-react-app). Certifique-se de ter `Node` e `Npm` instalados.

## Como executar

No diretório do projeto, rode o comando:

### `npm install`

Após ter instalado as dependências, rode o comando:

### `npm start`

Acesse [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

## Sobre a aplicação

Ao rodar a aplicação, o usuário deverá incluir as chaves da API da Marvel [https://developer.marvel.com/pleasesignin](https://developer.marvel.com/pleasesignin).

A primeira tela permitirá selecionar as páginas de conteúdo para:
- Characters;
- Comics;
- Creators.

Em cada uma dessas telas, o usuário contará com scroll infinito para visualização do conteúdo.

Além disso, na barra de pesquisa, o usuário poderá pesquisar pelo nome do conteúdo e selecionar o desejado a partir de um dropdown, quando o respectivo card será mostrado na tela.

Também nessa tela, ao clicar no card, o usuário será redirecionado para a tela de detalhes daquele item.

## Decisões de Projeto

- Optei por cobrir os requisitos técnicos desejáveis, porém, não tive tempo hábil para criar os testes unitários, assim como para exaurir testes de bancada.
- Optei por cobrir as funcionalidades satisfatórias, embora houvesse o desejo de implementar a feature de favoritos.
- Decidi simplificar o tratamento de erros simplesmente exibindo um alerta em tela.
- Utilizei as ferramentas do Styled Components para gerenciamento de tema.
- Implementei minimamente responsividade e semântica.
- Incluí verificação de autenticação em qualquer rota da aplicação, limitando o acesso a usuários autenticados.

## Premissas Assumidas

- Optei por não tratar um problema no endpoint '/comics', que, quando usado com parâmetros offset e limit, traz itens duplicados (erro confirmado no ambiente da própria Marvel API).
- Assumi que as keys necessariamente precisavam estar nos cookies e não persistidas na Local Storage, portanto, mesclei cookies e Redux para tratar a autenticação.
- Como não há uma rota para validação das keys, não implementei verificação no momento em que elas são inseridas. Qualquer erro será mostrado ao realizar a primeira chamada em uma das telas de conteúdo.
