# Deep learning aplicado ao diagnóstico assistido de retinopatia diabética

Este repositório reúne a estrutura inicial de integração contínua e entrega contínua adotada no desenvolvimento do projeto de TCC **Deep learning aplicado ao diagnóstico assistido de retinopatia diabética**.

A proposta deste material é documentar como o projeto está sendo organizado em termos de versionamento, validação automática e publicação, de modo que a evolução da aplicação aconteça com mais controle, rastreabilidade e consistência.

## Sobre o repositório

O conteúdo deste repositório representa a base do fluxo de CI/CD utilizado no projeto. Além da página de apresentação, foram definidos workflows para validar alterações no código e automatizar a publicação da versão principal.

Na prática, este repositório funciona como um apoio à condução do projeto, permitindo:

- manter uma separação entre desenvolvimento e versão principal
- executar verificações automáticas a cada atualização relevante
- reduzir falhas manuais no processo de integração
- publicar a versão mais recente de forma padronizada

## Como o CI/CD está sendo implementado

O fluxo foi estruturado de forma simples e objetiva, compatível com a fase inicial do projeto.

1. As alterações são realizadas na branch `dev`, destinada ao desenvolvimento.
2. A cada atualização, o workflow de integração contínua executa validações básicas para verificar se a estrutura essencial da aplicação permanece íntegra.
3. Após a conferência das mudanças, a integração com a branch `master` ocorre por meio de Pull Request.
4. Quando o conteúdo é aprovado e incorporado à branch principal, o processo de entrega contínua é acionado.
5. A publicação da página é realizada automaticamente com GitHub Pages.

Esse modelo permite acompanhar a evolução do projeto com um processo mais organizado, mantendo uma rotina de validação antes da publicação de novas versões.

## Estrutura do projeto

- `index.html`: página principal de apresentação do projeto
- `styles.css`: arquivo responsável pela estilização da interface
- `.github/workflows/ci.yml`: workflow de integração contínua
- `.github/workflows/deploy.yml`: workflow de entrega contínua

## Tecnologias e serviços utilizados

- Git e GitHub para versionamento e colaboração
- GitHub Actions para automação do pipeline
- GitHub Pages para publicação da página
- HTML e CSS para a interface inicial do projeto

## Execução do fluxo no GitHub

Para utilizar esta estrutura no repositório remoto:

1. Inicialize o projeto com Git.
2. Envie os arquivos para a branch principal.
3. Crie a branch `dev` para concentrar o desenvolvimento.
4. Configure o GitHub Pages para publicação via GitHub Actions.
5. Realize alterações na branch `dev` e acompanhe a execução do workflow de CI.
6. Abra um Pull Request para `master` e, após o merge, acompanhe a execução do workflow de CD.

## Finalidade no contexto do TCC

No contexto do trabalho, esta estrutura demonstra a aplicação de boas práticas de engenharia de software no apoio ao desenvolvimento da solução principal. Mais do que publicar uma página, o repositório evidencia uma organização mínima de pipeline para validar mudanças, controlar versões e automatizar a disponibilização do projeto.
