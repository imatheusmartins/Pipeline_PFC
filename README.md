# Deep learning aplicado ao diagnóstico assistido de retinopatia diabética

Este repositório reúne a estrutura de CI/CD e a interface de apresentação do projeto de TCC **Deep learning aplicado ao diagnóstico assistido de retinopatia diabética**.

A página principal publicada no GitHub Pages passa a priorizar a aplicação React localizada em `FE-horus-develop/FE-horus-develop`, que concentra a landing page do projeto.

## Sobre o repositório

O objetivo deste repositório é manter a apresentação do projeto integrada a um fluxo básico de validação e publicação contínua. Em vez de publicar apenas uma página estática da raiz, o pipeline considera a aplicação React como fonte principal da interface exibida.

Com isso, o repositório passa a contemplar:

- a landing page principal do projeto em React
- uma validação estrutural simples da aplicação
- a automação de build da aplicação no momento do deploy
- a publicação contínua da versão principal no GitHub Pages

## Como o CI/CD está sendo implementado

O fluxo atual está organizado da seguinte forma:

1. O desenvolvimento acontece na branch `dev`.
2. A cada atualização em `dev`, `master` ou em Pull Requests destinados à branch principal, o workflow de CI é executado.
3. No workflow de CI, são realizadas validações simples, como verificação da estrutura do projeto, presença dos arquivos principais e existência dos scripts essenciais no `package.json`.
4. Quando há atualização na branch `master`, o workflow de CD instala as dependências, gera o build da aplicação e publica o conteúdo compilado no GitHub Pages.

Esse processo mantém uma camada básica de validação automática no CI, sem tornar o pipeline excessivamente complexo para o estágio atual do projeto.

## Estrutura do projeto

- `FE-horus-develop/FE-horus-develop`: aplicação React utilizada como página principal
- `.github/workflows/ci.yml`: workflow de integração contínua
- `.github/workflows/deploy.yml`: workflow de entrega contínua
- `index.html` e `styles.css`: versão estática mantida na raiz do repositório

## Publicação

Durante o processo de deploy, o GitHub Actions utiliza a aplicação React da pasta `FE-horus-develop/FE-horus-develop`, executa o build da interface e publica o conteúdo do diretório `dist` no GitHub Pages.

## Finalidade no contexto do TCC

No contexto do trabalho, este repositório demonstra a adoção de uma estrutura inicial de CI/CD aplicada à camada de apresentação do projeto. A proposta é manter uma rotina simples de validação, build e publicação contínua, alinhada à evolução da interface principal da aplicação.
