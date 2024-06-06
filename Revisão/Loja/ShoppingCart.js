"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(paymentMethod) {
        this.items = [];
        this.paymentMethod = paymentMethod;
    }
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingCart.prototype.getTotal = function () {
        return this.items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    ShoppingCart.prototype.checkout = function () {
        var total = this.getTotal();
        this.paymentMethod.pay(total);
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
