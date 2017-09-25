/*!
 * picoyplacapredictor 
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com> 
 * MIT Licensed
 */
import { Functions } from "./utils";

export class Person {
    private _percentDisability: number;

    constructor(private _firstName: string, private _lastName: string, private _birthdate: string) {
    }
    setPercentDisability(thePercentDisability: number): void {
        this._percentDisability = thePercentDisability;
    }
    hasDisability(): boolean {
        let resp = false;
        if (this._percentDisability > 0) {
            resp = true;
        }
        return resp;
    }
    hasOldAge(): boolean {
        let resp = false;
        if (Functions.calculateAge(this._birthdate) >= 65) {
            resp = true;
        }
        return resp;
    }

}