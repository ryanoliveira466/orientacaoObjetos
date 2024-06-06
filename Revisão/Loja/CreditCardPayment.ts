
import { PaymentMethod } from "./PaymentMethod";

export class CreditCardPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Pagamento de R$${amount.toFixed(2)} realizado com cartão de crédito.`);
        
    }
}