import { PaymentMethod } from "./PaymentMethod";

export class DigitalWalletPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Pagamento de R$${amount.toFixed(2)} realizado com carteira digital.`);
        
    }
}