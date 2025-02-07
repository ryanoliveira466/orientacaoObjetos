# Conceitos de Programação Orientada a Objetos em TypeScript

## 1. **Classe**
Uma **classe** é um molde para criar objetos. Ela define os atributos e os métodos que os objetos dessa classe terão. 

- Exemplo: Uma classe `Carro` pode ter atributos como `modelo` e `cor`, e métodos como `exibirInfo()`.

## 2. **Herança**
A **herança** permite que uma classe herde características de outra. Isso ajuda a reutilizar código e facilita a extensão das funcionalidades.

- Exemplo: Uma classe `Carro` pode herdar da classe `Veiculo`, utilizando seus atributos e métodos.

## 3. **Encapsulamento**
O **encapsulamento** envolve esconder os detalhes de implementação dentro da classe e expor apenas o necessário. Isso é feito utilizando os modificadores de acesso: `private`, `protected` e `public`.

- Exemplo: Um atributo `saldo` em uma classe `ContaBancaria` pode ser `private`, sendo acessado e modificado apenas por métodos da classe.

## 4. **Interfaces**
Uma **interface** define um contrato de como uma classe deve ser estruturada. Ela declara os métodos e atributos que uma classe precisa implementar, garantindo que os objetos sigam um padrão.

- Exemplo: A interface `Animal` pode exigir que as classes `Cachorro` e `Gato` implementem o método `falar()`.

## 5. **Polimorfismo**
O **polimorfismo** permite que diferentes classes implementem o mesmo método de formas distintas. Isso é útil quando você tem diferentes tipos de objetos que devem ser tratados de maneira similar, mas com comportamentos específicos.

- Exemplo: A classe `Cachorro` pode implementar o método `falar()` de maneira diferente da classe `Gato`, mas ambos podem ser tratados de forma uniforme em um contexto que espera um `Animal`.

## 6. **Objeto**
Um **objeto** é uma instância de uma classe. Ele contém dados (atributos) e comportamentos (métodos) definidos pela classe.

- Exemplo: `const meuCarro = new Carro('Fusca', 'azul');` cria um objeto do tipo `Carro` com as características `modelo` e `cor`.

---

Esses conceitos são a base para a **Programação Orientada a Objetos** (POO) e são amplamente utilizados em TypeScript para construir código estruturado, reutilizável e de fácil manutenção.
