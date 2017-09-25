"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * picoyplacapredictor
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com>
 * MIT Licensed
 */
var moment = require("moment");
var Functions = /** @class */ (function () {
    function Functions() {
    }
    Functions.calculateAge = function (_birthdate) {
        var today = moment();
        var birthdate = moment(_birthdate);
        var daysDiff = parseInt(today.format("DD")) - parseInt(birthdate.format("DD"));
        var monthDiff = parseInt(today.format("MM")) - parseInt(birthdate.format("MM"));
        var yearDiff = parseInt(today.format("YYYY")) - parseInt(birthdate.format("YYYY"));
        if (monthDiff < 0)
            yearDiff--;
        if (monthDiff == 0 && daysDiff < 0)
            yearDiff--;
        return yearDiff;
    };
    Functions.getLastChar = function (_value) {
        return _value.substr(_value.length - 1);
    };
    Functions.isValidLicensePlate = function (_licensePlate) {
        var exp = /^[A-Z]{3}-\d{4}$/;
        return exp.test(_licensePlate);
    };
    Functions.isValidDatetimeFormat = function (_datetime) {
        var exp = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
        return exp.test(_datetime);
    };
    Functions.isValidDatetime = function (_datetime) {
        if (this.isValidDatetimeFormat(_datetime)) {
            var datetime = moment(_datetime);
            if (!datetime.isValid()) {
                return new MyResponse(false, _datetime, "Invalid Datetime");
            }
            else {
                return new MyResponse(true, _datetime, "");
            }
        }
        else {
            return new MyResponse(false, _datetime, "Invalid Datetime Format");
        }
    };
    Functions.isBetweenDateTime = function (_starDateTime, _endDateTime, _datetime) {
        var start = moment(_starDateTime);
        var end = moment(_endDateTime);
        var datetime = moment(_datetime);
        if (datetime >= start && datetime <= end) {
            return true;
        }
        return false;
    };
    return Functions;
}());
exports.Functions = Functions;
var MyResponse = /** @class */ (function () {
    function MyResponse(_response, _input, _message_error, _message_info) {
        this._response = _response;
        this._input = _input;
        this._message_error = _message_error;
        this._message_info = _message_info;
    }
    Object.defineProperty(MyResponse.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyResponse.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyResponse.prototype, "messageError", {
        get: function () {
            return this._message_error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyResponse.prototype, "message_info", {
        set: function (theMessage_info) {
            this._message_info = theMessage_info;
        },
        enumerable: true,
        configurable: true
    });
    return MyResponse;
}());
exports.MyResponse = MyResponse;
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days = exports.Days || (exports.Days = {}));
;
//# sourceMappingURL=utils.js.map