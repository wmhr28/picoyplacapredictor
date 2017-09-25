/*!
 * picoyplacapredictor 
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com> 
 * MIT Licensed
 */

import { Person } from "./person";
import { Functions } from "./utils";

export class Car {
    constructor(private _licensePlate: string, private _licensePlateType: TypeLicensePlate, private _owner: Person) {
    }
    public get licensePlateType(): TypeLicensePlate {
        return this._licensePlateType;
    };
    public get licensePlate(): string {
        return this._licensePlate;
    };

    hasOwnerDisability(): boolean {
        return this._owner.hasDisability();
    }
    hasOwnerOldAge(): boolean {
        return this._owner.hasOldAge();
    }
    getLastDigitOfLicensePlate(): number {
        let lastChar = Functions.getLastChar(this._licensePlate);
        let parse = parseInt(lastChar);
        if (parse.toString() === "NaN") {
            return 0;
        }
        return parse;
    }
}
export enum TypeLicensePlate { Particular, Moto, Alquiler, Municipal, Gubernamental };
