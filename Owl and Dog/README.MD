# Classes em TypeScript

**Classes** são uma maneira de definir tipos de objetos que podem conter propriedades e métodos. Elas servem como moldes para criar instâncias de objetos. Em TypeScript, as classes são baseadas no paradigma de Programação Orientada a Objetos (POO).

### Exemplo básico de classe:

```typescript
class Carro {
  // Propriedades
  private modelo: string;
  private ano: number;

  // Construtor
  constructor(modelo: string, ano: number) {
    this.modelo = modelo;
    this.ano = ano;
  }

  // Método
  public exibirDetalhes(): void {
    console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}`);
  }
}

// Criando uma instância de Carro
const meuCarro = new Carro("Fusca", 1978);

// Chamando um método da classe
meuCarro.exibirDetalhes(); // Saída: Modelo: Fusca, Ano: 1978

---

# Polimorfismo em TypeScript

**Polimorfismo** é um dos princípios fundamentais da Programação Orientada a Objetos (POO) que permite que diferentes classes possam ser tratadas de maneira uniforme, mas com comportamentos diferentes.

Em TypeScript, o polimorfismo é geralmente alcançado através de **herança** e **interfaces**. Ele permite que objetos de diferentes tipos sejam tratados de forma similar, mesmo possuindo implementações diferentes.

### Exemplo básico de Polimorfismo:

```typescript
// Classe base
class Animal {
  public fazerSom(): void {
    console.log("Som de animal");
  }
}

// Classe derivada - Cachorro
class Cachorro extends Animal {
  public fazerSom(): void {
    console.log("Au Au");
  }
}

// Classe derivada - Gato
class Gato extends Animal {
  public fazerSom(): void {
    console.log("Miau");
  }
}

// Função que aceita qualquer tipo de Animal
function emitirSom(animal: Animal): void {
  animal.fazerSom();
}

// Instanciando objetos
let cachorro = new Cachorro();
let gato = new Gato();

// Polimorfismo em ação
emitirSom(cachorro); // Saída: Au Au
emitirSom(gato);     // Saída: Miau

