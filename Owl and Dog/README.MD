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
