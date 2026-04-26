# Pipeline CI/CD Simulado

Este repositorio contem uma simulacao simples de CI/CD para apresentacao academica do projeto de TCC sobre deteccao de retinopatia diabetica com deep learning.

## Objetivo

Demonstrar um fluxo basico de:

- desenvolvimento em `dev`
- integracao continua com GitHub Actions
- merge para `master`
- deploy continuo com GitHub Pages

## Estrutura do fluxo

1. Voce faz alteracoes na branch `dev`.
2. O workflow de CI valida se o arquivo `index.html` existe e se contem o conteudo esperado.
3. Depois, voce abre um Pull Request de `dev` para `master`.
4. Ao aprovar e fazer merge, o push na `master` dispara o workflow de CD.
5. O GitHub Pages publica automaticamente a pagina.

## Arquivos principais

- `index.html`: pagina estatica de exemplo para o projeto
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
git commit -m "feat: cria simulacao de pipeline ci cd"
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

## Sugestao para apresentacao

Voce pode explicar que:

- `dev` simula o ambiente de desenvolvimento
- `master` simula o ambiente de producao
- o CI verifica automaticamente se a aplicacao minima continua valida
- o CD publica a versao mais recente sem intervencao manual

## Possiveis falas para a banca

"Mesmo com o sistema principal ainda em desenvolvimento, implementei uma simulacao funcional de CI/CD para representar como o projeto pode evoluir com automacao de testes e deploy. O pipeline foi construido com ferramentas gratuitas e de facil adocao."
