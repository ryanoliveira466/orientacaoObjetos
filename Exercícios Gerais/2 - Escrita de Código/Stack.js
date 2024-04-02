"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        return null;
    };
    Stack.prototype.peek = function () {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
        return null;
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.show = function () {
        if (!this.isEmpty()) {
            return this.items;
        }
        else {
            return null;
        }
    };
    return Stack;
}());
exports.Stack = Stack;
