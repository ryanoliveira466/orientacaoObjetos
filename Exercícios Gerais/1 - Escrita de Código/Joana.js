"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joana = void 0;
var Carlos_1 = require("./Carlos");
var Joana = /** @class */ (function (_super) {
    __extends(Joana, _super);
    function Joana(name, age, job, car, house) {
        var _this = _super.call(this, name, age, job, car) || this;
        _this.house = house;
        return _this;
    }
    Joana.prototype.run = function () {
        console.log('Joana: Run');
    };
    return Joana;
}(Carlos_1.Carlos));
exports.Joana = Joana;
