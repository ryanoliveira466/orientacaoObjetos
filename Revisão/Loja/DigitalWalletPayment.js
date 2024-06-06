"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalWalletPayment = void 0;
var DigitalWalletPayment = /** @class */ (function () {
    function DigitalWalletPayment() {
    }
    DigitalWalletPayment.prototype.pay = function (amount) {
        console.log("Pagamento de R$".concat(amount.toFixed(2), " realizado com carteira digital."));
    };
    return DigitalWalletPayment;
}());
exports.DigitalWalletPayment = DigitalWalletPayment;
