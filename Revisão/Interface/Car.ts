export interface Car {
    brand: string
    model: string
    year: number
    startEngine(): void
    stopEngine(): void
}