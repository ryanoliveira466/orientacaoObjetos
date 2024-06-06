import { Product } from "./Product";
import { PaymentMethod } from "./PaymentMethod";

export class ShoppingCart {

    private items: Product[] = [];
    private paymentMethod: PaymentMethod;

    constructor(paymentMethod: PaymentMethod){
        this.paymentMethod = paymentMethod;
    }

    addItem(item: Product): void {
        this.items.push(item);
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    checkout(): void {
        const total = this.getTotal();
        this.paymentMethod.pay(total);
    }

}
