"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * picoyplacapredictor
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com>
 * MIT Licensed
 */
var utils_1 = require("./utils");
var Person = /** @class */ (function () {
    function Person(_firstName, _lastName, _birthdate) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._birthdate = _birthdate;
    }
    Person.prototype.setPercentDisability = function (thePercentDisability) {
        this._percentDisability = thePercentDisability;
    };
    Person.prototype.hasDisability = function () {
        var resp = false;
        if (this._percentDisability > 0) {
            resp = true;
        }
        return resp;
    };
    Person.prototype.hasOldAge = function () {
        var resp = false;
        if (utils_1.Functions.calculateAge(this._birthdate) >= 65) {
            resp = true;
        }
        return resp;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map