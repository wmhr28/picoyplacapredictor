/*!
 * picoyplacapredictor 
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com> 
 * MIT Licensed
 */
import moment = require("moment");

export class Functions {

    public static calculateAge(_birthdate: string): number {
        let today = moment();
        let birthdate = moment(_birthdate);
        let daysDiff = parseInt(today.format("DD")) - parseInt(birthdate.format("DD"));
        let monthDiff = parseInt(today.format("MM")) - parseInt(birthdate.format("MM"));
        let yearDiff = parseInt(today.format("YYYY")) - parseInt(birthdate.format("YYYY"));
        if (monthDiff < 0)
            yearDiff--;
        if (monthDiff == 0 && daysDiff < 0)
            yearDiff--;
        return yearDiff;
    }

    public static getLastChar(_value: string): string {
        return _value.substr(_value.length - 1);
    }
    public static isValidLicensePlate(_licensePlate: string): boolean {
        let exp = /^[A-Z]{3}-\d{4}$/;
        return exp.test(_licensePlate);
    }
    private static isValidDatetimeFormat(_datetime: string): boolean {
        let exp = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
        return exp.test(_datetime);
    }
    public static isValidDatetime(_datetime: string): MyResponse {
        if (this.isValidDatetimeFormat(_datetime)) {
            let datetime = moment(_datetime);
            if (!datetime.isValid()) {
                return new MyResponse(false, _datetime, "Invalid Datetime");
            } else {
                return new MyResponse(true, _datetime, "");

            }
        } else {
            return new MyResponse(false, _datetime, "Invalid Datetime Format");
        }
    }
    public static isBetweenDateTime(_starDateTime: string, _endDateTime: string, _datetime: string): boolean {
        let start = moment(_starDateTime);
        let end = moment(_endDateTime);
        let datetime = moment(_datetime);
        if (datetime >= start && datetime <= end) {
            return true;
        }
        return false;
    }
}
export class MyResponse {

    constructor(private _response: boolean, private _input: any, private _message_error: string, private _message_info?: string) {
    }
    public get response(): boolean {
        return this._response;
    }
    public get input(): any {
        return this._input;
    }
    public get messageError(): string {
        return this._message_error;
    }

    public set message_info(theMessage_info: string) {
        this._message_info = theMessage_info;
    }
}
export enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
