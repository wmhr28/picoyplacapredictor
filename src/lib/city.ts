/*!
 * picoyplacapredictor 
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com> 
 * MIT Licensed
 */
import moment = require("moment");
import { Car, TypeLicensePlate } from "./car";
import { Functions, MyResponse, Days } from "./utils";

export class City {

    constructor(private name: string) {
    }
    isLicensePlateTypeRestricted(theTypeLicensePlate: TypeLicensePlate): boolean {
        if (theTypeLicensePlate === TypeLicensePlate.Moto || theTypeLicensePlate === TypeLicensePlate.Particular) {
            return true;
        }
        return false;
    }
    carHasPicoyPlaca(theCar: Car, theDatetimeRoad: string): MyResponse {
        /*Start Data validation*/
        let resp = Functions.isValidDatetime(theDatetimeRoad);
        if (!resp.response) {
            resp.message_info = "Please enter a valid Datetime, the format is yyyy/mm/dd hh:mm:ss";
            return resp;
        }
        let licensePlate = theCar.licensePlate;
        if (!Functions.isValidLicensePlate(licensePlate)) {
            return new MyResponse(false, licensePlate, "Invalid license plate", "Please enter a valid license plate");
        }
        /*End Data validation*/
 
        let momentDatetimeRoad=moment(theDatetimeRoad);
        let date = momentDatetimeRoad.format("YYYY-MM-DD");
        let startDatetime1 = date + " 07:00:00";
        let endDateTime1 = date + " 09:30:00";
        let startDatetime2 = date + " 16:00:00";
        let endDateTime2 = date + " 19:30:00";
        
        let input = "License Plate: " + licensePlate + " License Plate Type: " + theCar.licensePlateType + " DateTime: " + theDatetimeRoad + " Day: " + momentDatetimeRoad.format("dddd");
        let respNotPicoyPlaca = new MyResponse(false, input, "", "This Car has not pico y placa");
        if (this.isLicensePlateTypeRestricted(theCar.licensePlateType) && (Functions.isBetweenDateTime(startDatetime1, endDateTime1, theDatetimeRoad) || Functions.isBetweenDateTime(startDatetime2, endDateTime2, theDatetimeRoad))) {
            if (theCar.hasOwnerDisability()) {
                return new MyResponse(false, input, "", "This Car has Safe passage, of persons with disabilities");
            }

            if (theCar.hasOwnerOldAge()) {
                return new MyResponse(false, input, "", "This Car has Safe passage, for the elderly");
            }
            let lastDigit = theCar.getLastDigitOfLicensePlate();
            let hasPicoyPlaca = false;
            let dayNumber = parseInt( momentDatetimeRoad.format("e"));
            switch (dayNumber) {
                case Days.Monday:
                    if (lastDigit === 1 || lastDigit === 2) {
                        hasPicoyPlaca = true;
                    }
                    break;
                case Days.Tuesday:
                    if (lastDigit === 3 || lastDigit === 4) {
                        hasPicoyPlaca = true;
                    }
                    break;
                case Days.Wednesday:
                    if (lastDigit === 5 || lastDigit === 6) {
                        hasPicoyPlaca = true;
                    }
                    break;
                case Days.Thursday:
                    if (lastDigit === 7 || lastDigit === 8) {
                        hasPicoyPlaca = true;
                    }
                    break;
                case Days.Friday:
                    if (lastDigit === 9 || lastDigit === 0) {
                        hasPicoyPlaca = true;
                    }
                    break;
            }


            if (hasPicoyPlaca) {
                return new MyResponse(true, input, "", "This Car has pico y placa");
            } else {
                return respNotPicoyPlaca;
            }
        } else {
            return respNotPicoyPlaca;
        }

    }
}