# Prova UC4 TDS23-2N

# Questões Objetivas

1. O encapsulamento é alcançado usando:
- [ ]  A palavra-chave `public` para tornar membros acessíveis de fora da classe.
- [ ]  A palavra-chave `private` para limitar o acesso aos membros apenas dentro da classe.
- [ ]  A palavra-chave `protected` para permitir acesso aos membros apenas dentro da classe e suas subclasses.
- [ ]  Todas as opções acima.

2. Qual é a maneira correta de definir uma classe filha que herda propriedades e métodos de uma classe pai?
- [ ]  Usando a palavra-chave `extends` na declaração da classe filha.
- [ ]  Copiando e colando o código da classe pai para a classe filha.
- [ ]  Usando a palavra-chave `inherits` na declaração da classe filha.
- [ ]  Não é possível herdar propriedades e métodos.

3. As interfaces são usadas para:
- [ ]  Definir estruturas de dados e contratos para objetos.
- [ ]  Implementar funcionalidades específicas em classes.
- [ ]  Definir métodos privados em classes.
- [ ]  Nenhuma das opções acima.

4. O polimorfismo refere-se a:
- [ ]  A capacidade de uma classe ter múltiplos construtores.
- [ ]  A capacidade de uma classe ter múltiplos métodos com o mesmo nome, mas com diferentes implementações.
- [ ]  A capacidade de uma classe herdar de múltiplas classes pai.
- [ ]  A capacidade de uma classe encapsular múltiplos objetos.

5. Qual é a diferença fundamental entre herança de classes e implementação de interfaces?
- [ ]  Herança de classes permite a reutilização de código, enquanto interfaces não.
- [ ]  Implementação de interfaces permite a reutilização de código, enquanto herança de classes não.
- [ ]  Herança de classes é mais flexível do que implementação de interfaces.
- [ ]  Não há diferença entre herança de classes e implementação de interfaces.

6. Qual das seguintes estruturas de dados é mais adequada para implementar um sistema de gerenciamento de tarefas em um aplicativo de lista de afazeres, onde as tarefas são adicionadas no final, removidas do início e processadas na ordem em que foram adicionadas?
- [ ]  Pilha.
- [ ]  Fila.
- [ ]  Lista.

7. Qual é a vantagem de usar getters e setters em classes?
- [ ]  Eles melhoram a legibilidade do código.
- [ ]  Eles facilitam a manipulação de dados privados.
- [ ]  Eles evitam a necessidade de encapsulamento.
- [ ]  Nenhuma das opções acima.

8. O que é um construtor em uma classe?
- [ ]  Um método usado para criar instâncias da classe.
- [ ]  Um método especial que é automaticamente invocado quando uma instância da classe é criada.
- [ ]  Um método usado para destruir instâncias da classe.
- [ ]  Um método usado para modificar propriedades da classe após sua criação

9. Como enumeradores são definidos e qual sua finalidade?
- [ ]  Enumeradores são definidos usando a palavra-chave enum e são usados para representar um conjunto de valores nomeados. Por exemplo, enumerações podem ser usadas para representar dias da semana ou estados de um objeto.
- [ ]  Enumeradores são definidos usando a palavra-chave enum e são usados apenas para criar coleções de constantes numéricas.
- [ ]  Enumeradores são definidos usando a palavra-chave enum e são usados exclusivamente para definir métodos dentro de uma classe.
- [ ]  Enumeradores são definidos usando a palavra-chave enum e são usados apenas para declarar variáveis dentro de funções.

10. Como TypeScript lida com a visibilidade de membros (public, private, protected) em classes?
- [ ]  TypeScript não suporta visibilidade de membros em classes.
- [ ]  A visibilidade de membros em TypeScript é determinada pelo contexto de execução.
- [ ]  TypeScript ignora completamente as palavras-chave de visibilidade.
- [ ]  TypeScript respeita as palavras-chave de visibilidade e impõe restrições de acesso conforme especificado.

# Questões de interpretação de código

**1) Encapsulamento -** Considere o seguinte código:

```tsx
class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

const person = new Person("John");
console.log(person.name);
```

O que será impresso no console? Preste muita atenção antes de responder! Haverá algum erro? Se sim, como você poderia corrigi-lo?

**2) Herança -** Considere o seguinte código:

```tsx
class Animal {
    sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    breed: string;

    constructor(breed: string) {
        super("Woof!");
        this.breed = breed;
    }

    displayInfo() {
        console.log(`This dog is a ${this.breed} breed.`);
    }
}

class GoldenRetriever extends Dog {
    constructor() {
        super("Golden Retriever");
    }

    fetch() {
        console.log("Fetching...");
    }
}

const golden = new GoldenRetriever();
golden.makeSound();
golden.displayInfo();
golden.fetch();
```

O que será impresso no console?

 **3) Polimorfismo -** Considere o seguinte código:

```tsx
class Shape {
    draw(): void {
        console.log("Desenhando forma...");
    }
}

class Circle extends Shape {
    draw(): void {
        console.log("Desenhando círculo...");
    }

    calculateArea(): void {
        console.log("Calculando área do círculo...");
    }
}

class Square{
    draw(): void {
        console.log("Desenhando quadrado...");
    }
}

function drawShapes(shapes: Shape[]): void {
    shapes.forEach(shape => {
        shape.draw();
    });
}

const circle = new Circle();
const square = new Square();

const shapes: Shape[] = [circle, square];

drawShapes(shapes);

```

O que acontecerá neste código? PRESTE MUITA ATENÇÃO! Ocorrerá algum erro? Se sim, qual?

**4) Interfaces -** Considere o seguinte código:

```tsx
interface Calculator {
    add(a: number): number {
        return a + 10;
    }
}

class BasicCalculator implements Calculator {
    add(a: number): number {
        return a + 10;
    }
}

const calculator: Calculator = new BasicCalculator();
const result = calculator.add(5, 7);
console.log(result);
```

O que acontecerá neste código? PRESTE MUITA ATENÇÃO! Ocorrerão erros? Se sim, quais?

**5) Enumeradores -** Considere o seguinte código:

```tsx
enum DayOfWeek {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}

function getNextDay(day: DayOfWeek): DayOfWeek {
    if (day === DayOfWeek.Sunday) {
        return DayOfWeek.Monday;
    } else {
        return day + 1;
    }
}

const currentDay: DayOfWeek = DayOfWeek.Wednesday;
const nextDay: DayOfWeek = getNextDay(currentDay);
console.log("Next day:", nextDay);
```

O será mostrado no console?

# Questões de escrita de código

**1) Herança e polimorfismo**

**Joana** é filha de **Carlos**, que é filho de **Manoel**.

Demonstre a implementação de ***classes***, de ***herança***, de ***polimorfismo*** e de ***encapsulamento*** através destes exemplos. Lembre-se de seguir todas estas especificações:

- Use pelo menos 1 atributo e 1 método para a superclasse.
- Acrescente pelo menos um atributo novo e um método novo para cada filho.
- Para o encapsulamento, use `protected`, `private` e `public` pelo menos uma vez cada (isso pode ser em classes separadas).

Finalmente, chame todos os métodos em um arquivo chamado '**index.ts**'.

**2) Estruturas de dados**

Você foi contratado para desenvolver um sistema de gerenciamento de histórico de navegação para um navegador web. Uma das funcionalidades requeridas é a capacidade de desfazer a última ação de navegação realizada pelo usuário, semelhante à funcionalidade de "voltar" em um navegador web padrão. Ela remove o último site visitado do histórico.

Desenvolva uma classe que utilize a estrutura de dados mais adequada que permita armazenar o histórico de navegação do usuário e implemente um método para desfazer a última ação de navegação.

**Dica 1:** Toda vez que você navega, o última página que você visitou vai para o topo do histórico.

**Dica 2:** A função que desfaz a última ação de navegação remove a última página que foi visitada, ou seja, a que está no topo do histórico.

**Dica 3:** Você pode usar simples strings para representar as páginas, como **"Site Exemplo"** ou **http://www.meusite.com/**

**Dica 4:** Não esqueça que também deve ser mostrado o histórico!

**Dica 5:** Acesse os pdfs para descobrir qual a melhor estrutura de código para este caso.

Seu objetivo é criar uma solução que seja capaz de armazenar o histórico de navegação e permitir que o usuário desfaça a última ação de navegação.
