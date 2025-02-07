# Herança em TypeScript

## O que é Herança?

Herança é um dos pilares da programação orientada a objetos (POO). Ela permite que uma classe herde propriedades e métodos de outra classe. Isso permite que você reutilize código, criando uma hierarquia de classes onde classes filhas herdam funcionalidades da classe pai.

Em TypeScript, a herança é implementada utilizando a palavra-chave `extends`, que permite que uma classe herde de outra.

## Como Funciona a Herança em TypeScript?

Quando uma classe "filha" herda de uma classe "pai", ela pode acessar as propriedades e métodos da classe pai, além de poder adicionar suas próprias propriedades e métodos ou sobrescrever os existentes.

### Exemplo Básico de Herança:

```typescript
// Classe Pai
class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  fazerSom() {
    console.log(`${this.nome} faz um som.`);
  }
}

// Classe Filha que herda de Animal
class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome); // Chama o construtor da classe pai
  }

  // Sobrescreve o método fazerSom
  fazerSom() {
    console.log(`${this.nome} late.`);
  }
}

// Criando uma instância da classe Cachorro
const meuCachorro = new Cachorro('Rex');
meuCachorro.fazerSom(); // Output: Rex late.
