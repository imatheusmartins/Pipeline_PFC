# Deep learning aplicado ao diagnostico assistido de retinopatia diabetica

Este repositorio apresenta a estrutura de pipeline CI/CD utilizada no contexto do projeto de TCC sobre deep learning aplicado ao diagnostico assistido de retinopatia diabetica.

## Objetivo

Organizar um fluxo basico de:

- desenvolvimento em `dev`
- integracao continua com GitHub Actions
- consolidacao de versoes em `master`
- publicacao continua com GitHub Pages

## Estrutura do fluxo

1. Voce faz alteracoes na branch `dev`.
2. O workflow de CI valida se o arquivo `index.html` existe e se contem o conteudo esperado.
3. Depois, voce abre um Pull Request de `dev` para `master`.
4. Ao aprovar e fazer merge, o push na `master` dispara o workflow de CD.
5. O GitHub Pages publica automaticamente a pagina.

## Arquivos principais

- `index.html`: pagina inicial de apresentacao do projeto
- `.github/workflows/ci.yml`: integracao continua
- `.github/workflows/deploy.yml`: entrega continua

## Como usar

1. Crie um repositorio no GitHub.
2. Envie estes arquivos para o repositorio.
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
6. Faça alguma pequena alteracao em `dev`, envie com `git push` e observe o workflow `CI`.
7. Abra um Pull Request de `dev` para `master`, faça o merge e observe o workflow `CD`.

## Relacao com o projeto

Voce pode explicar que:

- `dev` concentra as evolucoes do projeto em desenvolvimento
- `master` representa a versao principal publicada
- o CI verifica automaticamente a consistencia minima da aplicacao
- o CD publica a versao mais recente sem intervencao manual

## Apresentacao resumida

"Este projeto organiza uma estrutura de CI/CD para apoiar a evolucao e a publicacao de versoes de uma aplicacao voltada ao diagnostico assistido de retinopatia diabetica com deep learning. A proposta reforca boas praticas de desenvolvimento, validacao e entrega continua."
