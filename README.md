# Teste Prático

Esse projeto foi criado com [Create React App](https://github.com/facebook/create-react-app). Certifique-se de ter `Node` e `Npm` instalados.

## Como executar

No diretório do projeto, rode o comando:

### `npm install`

Após ter instalado as dependências, rode o comando:

### `npm start`

Acesse [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

## Decisões de projeto

- Optei por cobrir os requisitos técnicos desejáveis, porém não tive tempo hábil para criação dos testes unitários, assim como para exaurir testes de bancada;
- Optei por cobrir as funcionalidades satisfatórias, embora houvesse o desejo de implementar a feature de favoritos;
- Decidi simplificar o tratamento simplesmente exibindo um alerta em tela;
- Utilizei as ferramentas do Styled Components para gerenciamento de tema;
- Implementei minimamente responsividade e semântica.

## Premissas assumidas

- Optei por não tratar um problema no endpoint /comics, que, quando usado com parâmetros offset e limit, traz itens duplicados (erro confirmado no ambiente da própria Marvel Api).
- Assumi que as keys necessariamente precisavam estar nos cookies e não persistidas na Local Storage, portando mesclei cookies e Redux para tratar a autenticação.
