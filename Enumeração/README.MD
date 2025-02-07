# Enumeração em TypeScript

## O que são Enums?

Enums (ou enumerações) em TypeScript são um recurso que permite definir um conjunto de valores nomeados. Eles ajudam a representar um conjunto de constantes de maneira mais legível e organizada, facilitando a manutenção e compreensão do código.

## Definindo um Enum

Um enum é criado usando a palavra-chave `enum`, seguida pelo nome do enum e os valores que ele pode ter.

### Exemplo:
```typescript
enum Status {
  Disponivel,
  Emprestado,
  Atrasado,
  Reservado
}
