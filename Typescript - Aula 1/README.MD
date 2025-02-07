# Tipos de Dados e Declaração em TypeScript

## 1. **Declaração de String**
Em TypeScript, você pode declarar uma variável do tipo `string` para armazenar texto.

### Exemplo:
```typescript
let nome: string = "João";
const saudacao: string = "Olá, " + nome + "!";
```

---

## 2. Declaração de Número
O tipo number em TypeScript pode armazenar valores inteiros e decimais.

### Exemplo:
```typescript
let nome: string = "João";
const saudacao: string = "Olá, " + nome + "!";
```

---

## 3. Declaração de Boolean
O tipo boolean é usado para armazenar valores true ou false.

### Exemplo:
```typescript
let isAtivo: boolean = true;
let temCarro: boolean = false;
```

---

## 4. Declaração de Array
Arrays em TypeScript podem ser declarados de duas formas: com o tipo de elementos ou com a sintaxe Array`<tipo>`.

### Exemplo:
```typescript
let frutas: string[] = ["maçã", "banana", "laranja"];
let numeros: Array<number> = [1, 2, 3, 4, 5];
```
---

## 5. Declaração de Tupla
Tuplas permitem armazenar um conjunto de valores de tipos diferentes em uma variável.

### Exemplo:
```typescript
let pessoa: [string, number] = ["João", 30];
```

---

## 6. Declaração de Any
O tipo any permite que você armazene qualquer tipo de dado. Deve ser usado com cuidado, pois perde os benefícios da tipagem estática do TypeScript.

### Exemplo:
```typescript
let dado: any = "Texto";
dado = 10;  // Agora é um número
dado = true; // Agora é um boolean

```

