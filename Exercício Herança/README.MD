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
```

---

# Getters e Setters em TypeScript

**Getters** e **Setters** são métodos especiais em TypeScript usados para acessar ou modificar as propriedades de uma classe de forma controlada. No exemplo abaixo, usaremos um método `setName()` para modificar a propriedade e `getName()` para acessá-la.

### Exemplo de Getters e Setters usando métodos convencionais:

```typescript
class Pessoa {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  // Getter
  public getName(): string {
    return this._nome;
  }

  // Setter
  public setName(nome: string): void {
    if (nome.length > 3) {
      this._nome = nome;
    } else {
      console.log("Nome muito curto!");
    }
  }
}

const pessoa = new Pessoa("João");

console.log(pessoa.getName());  // Acessa o nome usando o getter

pessoa.setName("Maria");  // Modifica o nome usando o setter
console.log(pessoa.getName());  // Acessa novamente o nome

pessoa.setName("Li");  // Não altera o nome, pois é muito curto


