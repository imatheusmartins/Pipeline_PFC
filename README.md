# Deep learning aplicado ao diagnóstico assistido de retinopatia diabética

Este repositório reúne a página principal de apresentação do projeto de TCC e a estrutura inicial de CI/CD utilizada para automatizar sua validação e publicação no GitHub Pages.

A proposta é manter uma landing page simples, estática e de fácil manutenção, alinhada ao tema do trabalho e suficiente para demonstrar a organização da camada de apresentação do projeto.

## Sobre o repositório

O conteúdo principal publicado neste repositório é uma landing page em HTML e CSS, construída para apresentar de forma objetiva:

- a proposta geral do projeto
- o contexto acadêmico da aplicação
- a identidade visual associada ao nome Hórus
- a estrutura inicial de integração e entrega contínuas

A página principal publicada no GitHub Pages foi estruturada de forma estática. Essa escolha reduz a complexidade da publicação e torna o pipeline mais direto para fins de apresentação e acompanhamento.

## Como o CI/CD está sendo implementado

O fluxo atualmente adotado é intencionalmente simples:

1. As alterações são desenvolvidas na branch `dev`.
2. O workflow de CI é executado em atualizações para `dev`, `master` e também em Pull Requests destinados à branch principal.
3. Durante a validação, o pipeline verifica a existência dos arquivos principais da página e confirma elementos essenciais da estrutura HTML.
4. Após a aprovação e o merge em `master`, o workflow de CD publica automaticamente a versão atualizada no GitHub Pages.

Esse processo garante uma camada mínima de controle sobre a evolução da página, sem depender de etapas de build mais complexas.

## Estrutura do projeto

- `index.html`: página principal publicada
- `styles.css`: arquivo de estilos da landing page
- `assets/`: imagens utilizadas pela landing page
- `.github/workflows/ci.yml`: workflow de integração contínua
- `.github/workflows/deploy.yml`: workflow de entrega contínua

## Publicação

A publicação é realizada por meio do GitHub Pages a partir da branch `master`. Sempre que há atualização nessa branch, o workflow de deploy envia o conteúdo do repositório e atualiza a página publicada.

## Finalidade no contexto do TCC

No contexto do trabalho, este repositório demonstra a aplicação de uma estrutura inicial de CI/CD voltada à apresentação do projeto. O foco está em manter uma página organizada, coerente com o tema acadêmico e integrada a um fluxo básico de validação e publicação contínua.
