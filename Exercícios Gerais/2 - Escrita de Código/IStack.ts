export interface IStack {
    // Adiciona um elemento ao topo da pilha
    push(item: any): void;

    // Remove e retorna o elemento do topo da pilha
    pop(): any | null;

    // Retorna o elemento do topo da pilha sem removê-lo
    peek(): any | null;

    // Verifica se a pilha está vazia
    isEmpty(): boolean;

    // Retorna o número de elementos na pilha
    size(): number;

    //Retorna os elementos na pilha
    show(): void;
}