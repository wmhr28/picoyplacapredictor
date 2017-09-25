"use strict";
/*!
 * picoyplacapredictor
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com>
 * MIT Licensed
 */
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Car = /** @class */ (function () {
    function Car(_licensePlate, _licensePlateType, _owner) {
        this._licensePlate = _licensePlate;
        this._licensePlateType = _licensePlateType;
        this._owner = _owner;
    }
    Object.defineProperty(Car.prototype, "licensePlateType", {
        get: function () {
            return this._licensePlateType;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Car.prototype, "licensePlate", {
        get: function () {
            return this._licensePlate;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Car.prototype.hasOwnerDisability = function () {
        return this._owner.hasDisability();
    };
    Car.prototype.hasOwnerOldAge = function () {
        return this._owner.hasOldAge();
    };
    Car.prototype.getLastDigitOfLicensePlate = function () {
        var lastChar = utils_1.Functions.getLastChar(this._licensePlate);
        var parse = parseInt(lastChar);
        if (parse.toString() === "NaN") {
            return 0;
        }
        return parse;
    };
    return Car;
}());
exports.Car = Car;
var TypeLicensePlate;
(function (TypeLicensePlate) {
    TypeLicensePlate[TypeLicensePlate["Particular"] = 0] = "Particular";
    TypeLicensePlate[TypeLicensePlate["Moto"] = 1] = "Moto";
    TypeLicensePlate[TypeLicensePlate["Alquiler"] = 2] = "Alquiler";
    TypeLicensePlate[TypeLicensePlate["Municipal"] = 3] = "Municipal";
    TypeLicensePlate[TypeLicensePlate["Gubernamental"] = 4] = "Gubernamental";
})(TypeLicensePlate = exports.TypeLicensePlate || (exports.TypeLicensePlate = {}));
;
//# sourceMappingURL=car.js.map