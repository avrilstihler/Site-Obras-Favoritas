# Projeto Obras Favoritas

## Objetivo do Projeto
O objetivo deste projeto é criar um site pessoal interativo onde serão exibidos e organizados meus projetos e obras favoritas, como animes, filmes e jogos. O site permitirá a navegação através de cards dinâmicos, com a possibilidade de filtragem e busca por palavras-chave. Além disso, será possível exibir imagens e descrições detalhadas de cada obra, proporcionando uma experiência visualmente agradável e informativa para os usuários.

## Funcionalidades Planejadas

### Funcionalidades Básicas:
- **Exibição de Cards**: Exibir as obras favoritas em formato de cards, com imagem, título e descrição.
- **Filtro de Busca**: Implementar uma barra de pesquisa que permita filtrar as obras com base no nome, descrição ou tags.
- **Exibição de Imagens**: As imagens de cada obra serão exibidas ao lado das informações do projeto.
- **Design Responsivo**: O site será responsivo e funcionará bem em dispositivos móveis e desktops.

## Cronograma de Desenvolvimento

| Etapa                        | Descrição                                                | Prazo Estimado       |
|------------------------------|----------------------------------------------------------|----------------------|
| **1. Planejamento do Projeto** | Definir os objetivos e escopo do projeto.                | 16/11/2024           |
| **2. Configuração Inicial**   | Configuração do repositório no GitHub e estruturação inicial do site. | 16/11/2024           |
| **3. Desenvolvimento do Layout** | Criar a estrutura HTML e CSS para o layout básico do site. | 17/11/2024           |
| **4. Implementação do Filtro de Busca** | Desenvolver a funcionalidade de busca e filtragem das obras. | 17/11/2024           |
| **5. Integração de Imagens**  | Incluir imagens das obras e garantir a exibição correta. | 18/11/2024           |
| **6. Testes e Ajustes**       | Testar a funcionalidade e fazer ajustes de design e usabilidade. | 20/11/2024           |
| **8. Finalização e Publicação** | Finalizar o site e publicá-lo no GitHub Pages.          | 20/11/2024           |

## Documentação do Processo de Desenvolvimento

### Desafios Enfrentados

1. **Organização das Imagens**:
   Um dos primeiros desafios foi garantir que as imagens fossem exibidas corretamente no site. Inicialmente, mesmo com as imagens armazenadas na pasta correta, elas não apareciam devido a problemas com o caminho dos arquivos e a configuração do GitHub Pages. Após revisar o código e corrigir os caminhos relativos das imagens, o problema foi resolvido.

2. **Configuração do Git e GitHub Pages**:
   A configuração inicial do Git e do GitHub Pages apresentou dificuldades, especialmente ao tentar vincular o repositório com a página do GitHub. Tive que ajustar a URL remota do repositório e configurar corretamente o branch para que o site fosse publicado corretamente.

3. **Problemas com Cache**:
   Após realizar algumas modificações no código e no repositório, percebi que as alterações não estavam sendo refletidas na página publicada. O problema foi causado pelo cache do navegador, que estava carregando versões antigas dos arquivos. Após limpar o cache e realizar um novo push para o GitHub, o site foi atualizado corretamente.

4. **Responsividade**:
   Outra dificuldade foi garantir que o design fosse responsivo e adaptasse bem a diferentes tamanhos de tela. Embora o layout tenha sido inicialmente projetado para desktop, foi necessário ajustar o CSS para que o site também funcionasse razoavelmente bem em dispositivos móveis.

### Como o Git Ajudou a Gerenciar o Projeto

- **Controle de Versões**:
  O Git foi fundamental para manter um histórico de todas as mudanças feitas no projeto. Cada etapa do desenvolvimento foi registrada com commits, permitindo reverter alterações quando necessário e acompanhar a evolução do projeto.

- **Colaboração e Backup**:
  Embora este projeto seja pessoal, o uso do Git permite que, no futuro, outras pessoas possam colaborar facilmente, já que todas as alterações são versionadas. Além disso, o GitHub serve como um backup na nuvem, garantindo que o código e os arquivos não sejam perdidos.

- **Deploy com GitHub Pages**:
  O GitHub Pages foi uma ferramenta importante para a publicação do site, permitindo que o projeto fosse hospedado diretamente do repositório no GitHub sem a necessidade de servidores externos. O processo de integração com o GitHub Pages foi facilitado pelo Git, que gerenciou os commits e atualizações do repositório.

## Conclusão

O uso do Git e GitHub foi essencial para o sucesso deste projeto, permitindo um controle eficiente sobre as versões do código, facilitando o processo de publicação no GitHub Pages e possibilitando a colaboração no futuro. Apesar dos desafios enfrentados, especialmente com a configuração das imagens e a responsividade do site, o projeto está funcionando conforme o esperado e foi uma excelente oportunidade para aplicar conhecimentos de desenvolvimento web e gerenciamento de código com Git.
