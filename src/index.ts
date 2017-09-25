/*!
 * picoyplacapredictor 
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com> 
 * MIT Licensed
 */
import { Person } from "./lib/person";
import { Car, TypeLicensePlate } from "./lib/car";
import { City } from "./lib/city"; 
/*Start Parameters*/

/*Datetime*/
let cityName = "Quito";
let datetimeRoad = "2017-09-09 19:35:58";  
/*Car*/
let licensePlate = "PCT-5660";
let licensePlateType = TypeLicensePlate.Moto;
/*Owner*/
let firstName = "Mauricio";
let lastName = "Herrera";
let birthdate = "1989-03-28";
let percentDisability = 0;

/*End Parameters*/

let myOwner = new Person(firstName, lastName, birthdate);
myOwner.setPercentDisability(percentDisability);
let myCar = new Car(licensePlate, licensePlateType, myOwner);
let myCity = new City(cityName);
/*Response*/
console.log(myCity.carHasPicoyPlaca(myCar, datetimeRoad));

