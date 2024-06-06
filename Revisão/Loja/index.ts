import { Book } from "./Book";
import { Eletronic } from "./Eletronic"
import { CreditCardPayment } from "./CreditCardPayment"
import { DigitalWalletPayment } from "./DigitalWalletPayment"
import { ShoppingCart } from "./ShoppingCart"

const livro = new Book('A Arte da Guerra', 29.99, "Sun Tzu");
const celular = new Eletronic('Smartphone', 999.99, 'Apple');

const cartaoCredito = new CreditCardPayment();
const carteiraDigital = new DigitalWalletPayment();



const carrinho = new ShoppingCart(cartaoCredito);
carrinho.addItem(livro);
carrinho.addItem(celular);


carrinho.checkout();