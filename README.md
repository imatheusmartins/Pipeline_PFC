# Deep learning aplicado ao diagnóstico assistido de retinopatia diabética

Este repositório apresenta a estrutura de pipeline CI/CD utilizada no contexto do projeto de TCC sobre deep learning aplicado ao diagnóstico assistido de retinopatia diabética.

## Objetivo

Organizar um fluxo básico de:

- desenvolvimento em `dev`
- integração contínua com GitHub Actions
- consolidação de versões em `master`
- publicação contínua com GitHub Pages

## Estrutura do fluxo

1. Você faz alterações na branch `dev`.
2. O workflow de CI valida se o arquivo `index.html` existe e se contém o conteúdo esperado.
3. Depois, você abre um Pull Request de `dev` para `master`.
4. Ao aprovar e fazer merge, o push na `master` dispara o workflow de CD.
5. O GitHub Pages publica automaticamente a página.

## Arquivos principais

- `index.html`: página inicial de apresentação do projeto
- `styles.css`: arquivo de estilos da página
- `.github/workflows/ci.yml`: integração contínua
- `.github/workflows/deploy.yml`: entrega contínua

## Como usar

1. Crie um repositório no GitHub.
2. Envie estes arquivos para o repositório.
3. Inicialize o Git localmente:

```powershell
git init
git branch -M master
git add .
git commit -m "feat: estrutura pipeline ci cd do projeto"
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin master
```

4. Crie a branch de desenvolvimento:

```powershell
git checkout -b dev
git push -u origin dev
```

5. No GitHub, acesse `Settings > Pages` e selecione `GitHub Actions` como fonte de deploy.
6. Faça alguma pequena alteração em `dev`, envie com `git push` e observe o workflow `CI`.
7. Abra um Pull Request de `dev` para `master`, faça o merge e observe o workflow `CD`.

## Relação com o projeto

Você pode explicar que:

- `dev` concentra as evoluções do projeto em desenvolvimento
- `master` representa a versão principal publicada
- o CI verifica automaticamente a consistência mínima da aplicação
- o CD publica a versão mais recente sem intervenção manual

## Apresentação resumida

"Este projeto organiza uma estrutura de CI/CD para apoiar a evolução e a publicação de versões de uma aplicação voltada ao diagnóstico assistido de retinopatia diabética com deep learning. A proposta reforça boas práticas de desenvolvimento, validação e entrega contínua."
