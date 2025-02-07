# Sistema de Gerenciamento de Biblioteca

## Objetivo
Desenvolver um sistema para gerenciamento de uma biblioteca, permitindo operações como empréstimo, devolução, reserva de livros e consulta ao status de cada exemplar. O sistema também deve incluir a possibilidade de cadastrar usuários, manter histórico de empréstimos e calcular multas para livros atrasados.

## Funcionalidades

### 1. **Cadastro de Usuários**
Os usuários podem ser cadastrados no sistema com informações como nome, ID e contato.

### 2. **Empréstimo de Livro**
Os usuários podem solicitar o empréstimo de um livro, desde que o mesmo esteja disponível.

### 3. **Reserva de Livro**
Quando um livro não estiver disponível, os usuários podem reservar o livro. Assim que o livro estiver disponível, o usuário será notificado.

### 4. **Verificação de Multa**
Caso um usuário esteja com um livro atrasado, o sistema deve calcular e notificar o valor da multa, considerando os dias de atraso.

### 5. **Listagem de Livros**
O sistema deve fornecer as seguintes listas:
- **Livros Disponíveis**: Exibe todos os livros disponíveis para empréstimo.
- **Livros Emprestados**: Exibe todos os livros atualmente emprestados.
- **Livros Atrasados**: Exibe os livros que estão com atraso para devolução.

### 6. **Histórico de Empréstimos**
Cada usuário terá um histórico de livros emprestados, permitindo rastrear os livros que foram retirados ao longo do tempo.

### 7. **Listagem de Livros por Gênero**
O sistema permitirá que os usuários visualizem livros por gênero, facilitando a busca por obras de interesse.

## Estrutura

### **Enums Utilizados**

#### Status do Livro
- **Disponível**: O livro está disponível para empréstimo.
- **Emprestado**: O livro foi emprestado a um usuário.
- **Atrasado**: O livro foi devolvido após o prazo estipulado.
- **Reservado**: O livro foi reservado por um usuário, mas ainda não foi retirado.

#### Gêneros Literários
- **Ficção Científica**
- **Romance**
- **Fantasia**
- **Mistério**
- **Aventura**

## Funcionalidades de Implementação

### 1. **Cadastro de Usuários**
- Permite adicionar usuários com nome, ID e informações de contato.

### 2. **Empréstimo de Livro**
- O livro deve ser marcado como "Emprestado" ao ser retirado.
- O histórico de empréstimos do usuário deve ser atualizado.

### 3. **Reserva de Livro**
- O livro deve ser marcado como "Reservado" até que o usuário o retire.

### 4. **Devolução de Livro**
- Quando um livro for devolvido, ele deve ser marcado como "Disponível".
- Se houver atraso, será calculada a multa com base nos dias de atraso.

### 5. **Consulta ao Status de Livro**
- O sistema deve permitir consultar o status de um livro a qualquer momento: disponível, emprestado, atrasado ou reservado.

### 6. **Listagem de Livros**
- Listagem de livros por estado: disponíveis, emprestados e atrasados.
- Listagem de livros por gênero.

### 7. **Histórico de Empréstimos**
- O histórico de empréstimos deve manter o registro dos livros que cada usuário retirou.

### 8. **Cálculo de Multa**
- O valor da multa deve ser calculado com base nos dias de atraso e notificado ao usuário.

## Exemplo de Fluxo de Funcionamento

1. O usuário **João** faz o cadastro no sistema com ID 123 e contato.
2. O livro **"O Senhor dos Anéis"** está disponível. João faz o **empréstimo** do livro.
3. O livro é marcado como **Emprestado** e o histórico de João é atualizado.
4. O livro é devolvido após 5 dias do prazo, gerando uma **multa**.
5. O livro agora está disponível para outro empréstimo.

## Conclusão
Este sistema oferece uma estrutura completa de gerenciamento de uma biblioteca, com funcionalidades de controle de empréstimos, reservas, multas e histórico de usuários. A implementação de enums para os status dos livros e gêneros literários torna a categorização eficiente e facilita a consulta e organização das informações.

