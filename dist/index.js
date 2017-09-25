"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * picoyplacapredictor
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com>
 * MIT Licensed
 */
var person_1 = require("./lib/person");
var car_1 = require("./lib/car");
var city_1 = require("./lib/city");
/*Start Parameters*/
/*Datetime*/
var cityName = "Quito";
var datetimeRoad = "2017-09-09 19:35:58";
/*Car*/
var licensePlate = "PCT-5660";
var licensePlateType = car_1.TypeLicensePlate.Moto;
/*Owner*/
var firstName = "Mauricio";
var lastName = "Herrera";
var birthdate = "1989-03-28";
var percentDisability = 0;
/*End Parameters*/
var myOwner = new person_1.Person(firstName, lastName, birthdate);
myOwner.setPercentDisability(percentDisability);
var myCar = new car_1.Car(licensePlate, licensePlateType, myOwner);
var myCity = new city_1.City(cityName);
/*Response*/
console.log(myCity.carHasPicoyPlaca(myCar, datetimeRoad));
//# sourceMappingURL=index.js.map