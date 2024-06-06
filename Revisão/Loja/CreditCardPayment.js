"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.pay = function (amount) {
        console.log("Pagamento de R$".concat(amount.toFixed(2), " realizado com cart\u00E3o de cr\u00E9dito."));
    };
    return CreditCardPayment;
}());
exports.CreditCardPayment = CreditCardPayment;
