# Encapsulamento em TypeScript

O **encapsulamento** é um dos pilares da **orientação a objetos** e refere-se à prática de esconder os detalhes internos de uma classe e expor apenas o necessário para o usuário da classe. Em TypeScript, isso é feito utilizando modificadores de acesso.

### Modificadores de Acesso:

1. **public**: O padrão, permitindo acesso a partir de qualquer lugar.
2. **private**: Restringe o acesso ao membro da classe apenas dentro da própria classe.
3. **protected**: Permite acesso dentro da classe e suas subclasses.

### Exemplo:

```typescript
class Carro {
  private marca: string;
  private modelo: string;
  private ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  public mostrarInfo(): void {
    console.log(`${this.marca} ${this.modelo} - ${this.ano}`);
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 2020);
meuCarro.mostrarInfo();  // Funciona
// meuCarro.marca = "Honda";  // Erro: 'marca' é privado
