# Exercício: Gerenciamento de Pedidos em um Restaurante

O objetivo deste exercício é criar um sistema de gerenciamento de pedidos para um restaurante. O sistema utilizará listas, filas e pilhas para gerenciar os pedidos recebidos, garantindo que eles sejam processados de maneira eficiente. O restaurante prepara três tipos de itens:

- **Pratos principais:** Preparados pela cozinha.
- **Bebidas:** Preparadas pelo bar (alcoólicas ou não alcoólicas).
- **Sobremesas:** Preparadas pela área de sobremesas.

## Funcionalidades do Sistema

### 1. **Adicionar um Pedido**
- O sistema deve permitir que o garçom adicione um novo pedido à lista de espera do restaurante.
- O pedido deve incluir as seguintes informações:
  - Tipo de pedido (prato principal, bebida ou sobremesa).
  - Detalhes do pedido (nome do prato, tipo de bebida, etc.).

### 2. **Preparar Pedidos**
- O sistema deve preparar os pedidos de acordo com a ordem em que foram recebidos.
- Quando um pedido for concluído, ele deve ser removido da fila correspondente (cozinha, bar ou sobremesa).

### 3. **Informar Quando um Pedido Estiver Pronto**
- O sistema deve ser capaz de informar quando o próximo pedido na fila estiver pronto para ser entregue aos clientes.
- Para isso, o sistema deve exibir o próximo pedido que está pronto para ser entregue, ou seja, o primeiro pedido da fila.

## Requisitos de Implementação

O sistema deve ser implementado em **TypeScript** e usar as seguintes estruturas de dados:

- **Lista:** Para armazenar os pedidos de cada tipo de item (prato principal, bebida, sobremesa).
- **Fila:** Para garantir que os pedidos sejam processados na ordem em que foram recebidos.
- **Pilha:** Para garantir que os pedidos podem ser finalizados e retirados de acordo com a ordem de prioridade, quando necessário.

### Estrutura Básica
- **Classes Necessárias:**
  - Classe `Pedido`: Representa um pedido no sistema, com informações sobre tipo e detalhes.
  - Classe `Restaurante`: Gerencia o processamento dos pedidos, incluindo as filas para pratos principais, bebidas e sobremesas.
  - Métodos para adicionar, preparar e informar pedidos prontos.

### Exemplos de Funcionalidades
1. **Adicionar Pedido**
   - O garçom adiciona um pedido para um prato principal: "Pizza Margherita".
   - O pedido de bebida: "Caipirinha".
   - O pedido de sobremesa: "Torta de Limão".

2. **Preparar Pedido**
   - Quando a cozinha termina de preparar o prato principal, ele é removido da fila de pratos principais.
   - Quando o bar termina de preparar a bebida, ele é removido da fila de bebidas.
   - Quando a área de sobremesas termina a sobremesa, ela é removida da fila de sobremesas.

3. **Informar Pedido Pronto**
   - O sistema informa qual o próximo pedido que está pronto para ser entregue, dependendo da fila de preparo.

O objetivo é criar um código eficiente e bem estruturado, utilizando as práticas de programação adequadas para gerenciar pedidos e processamento de alimentos e bebidas em um restaurante.

