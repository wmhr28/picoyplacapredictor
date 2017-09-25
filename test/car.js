/*!
 * picoyplacapredictor 
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com> 
 * MIT Licensed
 */
var assert = require("assert");
var libCar = require("../dist/lib/car");
var libPerson = require("../dist/lib/person");

describe("Class.Car", function () {
    describe("1.- function hasOwnerDisability => percentDisability is > 0", function () {
        it("should return false when the variable percentDisability is not declared in constructor of objOwner", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");;
            let objCar = new libCar.Car("", 0, objOwner);
            let resp = objCar.hasOwnerDisability();
            assert.equal(false, resp);
        });
        it("should return false when input 0", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");;
            objOwner.setPercentDisability(0);
            let objCar = new libCar.Car("", 0, objOwner);
            let resp = objCar.hasOwnerDisability();
            assert.equal(false, resp);
        });
        it("should return true when input 1", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");;
            objOwner.setPercentDisability(1);
            let objCar = new libCar.Car("", 0, objOwner);
            let resp = objCar.hasOwnerDisability();
            assert.equal(true, resp);
        });
        it("should return true when input 99", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");;
            objOwner.setPercentDisability(99);
            let objCar = new libCar.Car("", 0, objOwner);
            let resp = objCar.hasOwnerDisability();
            assert.equal(true, resp);
        });
    });
    describe("2.- function hasOwnerOldAge => birthdate is >=65", function () {
        it("should return false when is not declared in constructor of objOwner", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "");
            let objCar = new libCar.Car("", 0, objOwner);
            let resp = objCar.hasOwnerOldAge();
            assert.equal(false, resp);
        });
        it("should return false when input '1989-03-28'= 28 age old", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let objCar = new libCar.Car("", 0, objOwner);
            let resp = objCar.hasOwnerOldAge();
            assert.equal(false, resp);
        });
        it("should return false when input '1953-03-28'= 64 age old", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera","1953-03-28");
            let objCar = new libCar.Car("", 0, objOwner);
            let resp = objCar.hasOwnerOldAge();
            assert.equal(false, resp);
        });
        it("should return true when input '1952-03-28'= 65 age old", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1952-03-28");
            let objCar = new libCar.Car("", 0, objOwner);
            let resp = objCar.hasOwnerOldAge();
            assert.equal(true, resp);
        });
        it("should return true when input '1951-03-28'= 66 age old", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1951-03-28");
            let objCar = new libCar.Car("", 0, objOwner);
            let resp = objCar.hasOwnerOldAge();
            assert.equal(true, resp);
        });
        it("should return true when input '1929-03-28'= 88 age old", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1929-03-28");
            let objCar = new libCar.Car("", 0, objOwner);
            let resp = objCar.hasOwnerOldAge();
            assert.equal(true, resp);
        });
    });
    describe("3.- function getLastDigitOfLicensePlate", function () {
        it("should return 3 when input 'PCT-5663'", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let objCar = new libCar.Car("PCT-5663", 0, objOwner);
            let resp = objCar.getLastDigitOfLicensePlate();
            assert.equal("3", resp);
        });
        it("should return 0 when input 'PCT-566A'", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let objCar = new libCar.Car("PCT-566A", 0, objOwner);
            let resp = objCar.getLastDigitOfLicensePlate();
            assert.equal("0", resp);
        });        
        it("should return 0 when input 'PCT-566A '", function () {
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let objCar = new libCar.Car("PCT-566A ", 0, objOwner);
            let resp = objCar.getLastDigitOfLicensePlate();
            assert.equal("0", resp);
        });
    });
});