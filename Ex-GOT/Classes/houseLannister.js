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
exports.houseLannister = void 0;
var NobleHouse_1 = require("./NobleHouse");
var houseLannister = /** @class */ (function (_super) {
    __extends(houseLannister, _super);
    function houseLannister(houseName, houseAnthem, houseFamilyNumber, houseMoney) {
        var _this = _super.call(this, houseName, houseAnthem) || this;
        _this.houseName = houseName;
        _this.houseAnthem = houseAnthem;
        _this.houseFamilyNumber = houseFamilyNumber;
        _this.houseMoney = houseMoney;
        return _this;
    }
    houseLannister.prototype.houseTalk = function () {
        console.log("The family is talking");
    };
    houseLannister.prototype.getFamilyNumber = function () {
        return this.houseFamilyNumber;
    };
    return houseLannister;
}(NobleHouse_1.NobleHouse));
exports.houseLannister = houseLannister;
