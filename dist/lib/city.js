"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * picoyplacapredictor
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com>
 * MIT Licensed
 */
var moment = require("moment");
var car_1 = require("./car");
var utils_1 = require("./utils");
var City = /** @class */ (function () {
    function City(name) {
        this.name = name;
    }
    City.prototype.isLicensePlateTypeRestricted = function (theTypeLicensePlate) {
        if (theTypeLicensePlate === car_1.TypeLicensePlate.Moto || theTypeLicensePlate === car_1.TypeLicensePlate.Particular) {
            return true;
        }
        return false;
    };
    City.prototype.carHasPicoyPlaca = function (theCar, theDatetimeRoad) {
        /*Start Data validation*/
        var resp = utils_1.Functions.isValidDatetime(theDatetimeRoad);
        if (!resp.response) {
            resp.message_info = "Please enter a valid Datetime, the format is yyyy/mm/dd hh:mm:ss";
            return resp;
        }
        var licensePlate = theCar.licensePlate;
        if (!utils_1.Functions.isValidLicensePlate(licensePlate)) {
            return new utils_1.MyResponse(false, licensePlate, "Invalid license plate", "Please enter a valid license plate");
        }
        /*End Data validation*/
        var momentDatetimeRoad = moment(theDatetimeRoad);
        var date = momentDatetimeRoad.format("YYYY-MM-DD");
        var startDatetime1 = date + " 07:00:00";
        var endDateTime1 = date + " 09:30:00";
        var startDatetime2 = date + " 16:00:00";
        var endDateTime2 = date + " 19:30:00";
        var input = "License Plate: " + licensePlate + " License Plate Type: " + theCar.licensePlateType + " DateTime: " + theDatetimeRoad + " Day: " + momentDatetimeRoad.format("dddd");
        var respNotPicoyPlaca = new utils_1.MyResponse(false, input, "", "This Car has not pico y placa");
        if (this.isLicensePlateTypeRestricted(theCar.licensePlateType) && (utils_1.Functions.isBetweenDateTime(startDatetime1, endDateTime1, theDatetimeRoad) || utils_1.Functions.isBetweenDateTime(startDatetime2, endDateTime2, theDatetimeRoad))) {
            if (theCar.hasOwnerDisability()) {
                return new utils_1.MyResponse(false, input, "", "This Car has Safe passage, of persons with disabilities");
            }
            if (theCar.hasOwnerOldAge()) {
                return new utils_1.MyResponse(false, input, "", "This Car has Safe passage, for the elderly");
            }
            var lastDigit = theCar.getLastDigitOfLicensePlate();
            var hasPicoyPlaca = false;
            var dayNumber = parseInt(momentDatetimeRoad.format("e"));
            switch (dayNumber) {
                case utils_1.Days.Monday:
                    if (lastDigit === 1 || lastDigit === 2) {
                        hasPicoyPlaca = true;
                    }
                    break;
                case utils_1.Days.Tuesday:
                    if (lastDigit === 3 || lastDigit === 4) {
                        hasPicoyPlaca = true;
                    }
                    break;
                case utils_1.Days.Wednesday:
                    if (lastDigit === 5 || lastDigit === 6) {
                        hasPicoyPlaca = true;
                    }
                    break;
                case utils_1.Days.Thursday:
                    if (lastDigit === 7 || lastDigit === 8) {
                        hasPicoyPlaca = true;
                    }
                    break;
                case utils_1.Days.Friday:
                    if (lastDigit === 9 || lastDigit === 0) {
                        hasPicoyPlaca = true;
                    }
                    break;
            }
            if (hasPicoyPlaca) {
                return new utils_1.MyResponse(true, input, "", "This Car has pico y placa");
            }
            else {
                return respNotPicoyPlaca;
            }
        }
        else {
            return respNotPicoyPlaca;
        }
    };
    return City;
}());
exports.City = City;
//# sourceMappingURL=city.js.map