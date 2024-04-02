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
exports.Carlos = void 0;
var Manoel_1 = require("./Manoel");
var Carlos = /** @class */ (function (_super) {
    __extends(Carlos, _super);
    function Carlos(name, age, job, car) {
        var _this = _super.call(this, name, age, job) || this;
        _this.car = car;
        return _this;
    }
    Carlos.prototype.sleep = function () {
        console.log('Carlos: Sleep');
    };
    return Carlos;
}(Manoel_1.Manoel));
exports.Carlos = Carlos;
