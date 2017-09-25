/*!
 * picoyplacapredictor 
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com> 
 * MIT Licensed
 */
var assert = require("assert");
var libCity = require("../dist/lib/city");
var libCar = require("../dist/lib/car");
var libPerson = require("../dist/lib/person");

describe("Class.City", function () {
    describe("1.- function isLicensePlateTypeRestricted", function () {
        it("should return true when input 0=>Particular", function () {
            let objCity = new libCity.City("Quito");
            let resp = objCity.isLicensePlateTypeRestricted(0);
            assert.equal(true, resp);
        });
        it("should return true when input 1=>Moto", function () {
            let objCity = new libCity.City("Quito");
            let resp = objCity.isLicensePlateTypeRestricted(1);
            assert.equal(true, resp);
        });
        it("should return false when input 2=>Alquiler", function () {
            let objCity = new libCity.City("Quito");
            let resp = objCity.isLicensePlateTypeRestricted(2);
            assert.equal(false, resp);
        });
        it("should return false when input 3=>Municipal", function () {
            let objCity = new libCity.City("Quito");
            let resp = objCity.isLicensePlateTypeRestricted(3);
            assert.equal(false, resp);
        });
        it("should return false when input 4=>Gubernamental", function () {
            let objCity = new libCity.City("Quito");
            let resp = objCity.isLicensePlateTypeRestricted(4);
            assert.equal(false, resp);
        });
    });
    describe("2.- function carHasPicoyPlaca", function () {
        it("should return false when the datetime is invalid format, input 'xxx'", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let myCar = new libCar.Car("PXT-2341", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "xxx");
            assert.equal(false, resp.response);
        });
        it("should return false when the datetime is invalid, input '2017-09-25 07:00:60'", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let myCar = new libCar.Car("PXT-2341", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:60");
            assert.equal(false, resp.response);
        });
        it("should return false when the datetime is invalid, input '2017-09-25 07:00:61'", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let myCar = new libCar.Car("PXT-2341", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:61");
            assert.equal(false, resp.response);
        });
        it("should return false when the license plate is invalid, input 'PXTC2345'", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let myCar = new libCar.Car("PXTC2345", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:01");
            assert.equal(false, resp.response);
        });
        it("should return false when the LicensePlateType is not Restricted, input 2=>Alquiler", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let myCar = new libCar.Car("PXT-2341", 2, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:01");
            assert.equal(false, resp.response);
        });
        it("should return false when the LicensePlateType is not Restricted, input 3=>Municipal", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let myCar = new libCar.Car("PXT-2341", 3, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:01");
            assert.equal(false, resp.response);
        });
        it("should return false when the LicensePlateType is not Restricted, input 4=>Gubernamental", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            let myCar = new libCar.Car("PXT-2341", 4, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:01");
            assert.equal(false, resp.response);
        });
        it("should return false when the Owner has Disability, input setPercentDisability = 1", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28");
            objOwner.setPercentDisability(1);
            let myCar = new libCar.Car("PXT-2341", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:01"); 
            assert.equal(false, resp.response);
        });
        it("should return false when the Owner has OldAge >= 65, input '1952-03-28'= 65 age old", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1952-03-28"); 
            let myCar = new libCar.Car("PXT-2341", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:01"); 
            assert.equal(false, resp.response);
        });        
        it("should return true when is Monday and license plate is PXT-2341 and datetime road is 2017-09-25 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2341", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:01"); 
            assert.equal(true, resp.response);
        });    
        it("should return true when is Monday and license plate is PXT-2342 and datetime road is 2017-09-25 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2342", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:01"); 
            assert.equal(true, resp.response);
        });
        it("should return false when is Monday and license plate is PXT-2343 and datetime road is 2017-09-25 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2343", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:01"); 
            assert.equal(false, resp.response);
        });        
        it("should return true when is Tuesday and license plate is PXT-2343 and datetime road is 2017-09-26 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2343", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-26 07:00:01"); 
            assert.equal(true, resp.response);
        }); 
        it("should return true when is Tuesday and license plate is PXT-2344 and datetime road is 2017-09-26 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2344", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-26 07:00:01"); 
            assert.equal(true, resp.response);
        });
        it("should return false when is Tuesday and license plate is PXT-2345 and datetime road is 2017-09-26 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2345", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-26 07:00:01"); 
            assert.equal(false, resp.response);
        });
        it("should return true when is Wednesday and license plate is PXT-2345 and datetime road is 2017-09-27 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2345", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-27 07:00:01"); 
            assert.equal(true, resp.response);
        });
        it("should return true when is Wednesday and license plate is PXT-2346 and datetime road is 2017-09-27 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2346", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-27 07:00:01"); 
            assert.equal(true, resp.response);
        });
        it("should return false when is Wednesday and license plate is PXT-2347 and datetime road is 2017-09-27 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2347", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-27 07:00:01"); 
            assert.equal(false, resp.response);
        });        
        it("should return true when is Thursday and license plate is PXT-2347 and datetime road is 2017-09-28 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2347", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-28 07:00:01"); 
            assert.equal(true, resp.response);
        });
        it("should return true when is Thursday and license plate is PXT-2348 and datetime road is 2017-09-28 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2348", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-28 07:00:01"); 
            assert.equal(true, resp.response);
        });
        it("should return false when is Thursday and license plate is PXT-2349 and datetime road is 2017-09-28 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2349", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-28 07:00:01"); 
            assert.equal(false, resp.response);
        });
        it("should return true when is Friday and license plate is PXT-2349 and datetime road is 2017-09-29 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2349", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-29 07:00:01"); 
            assert.equal(true, resp.response);
        });
        it("should return true when is Friday and license plate is PXT-2340 and datetime road is 2017-09-29 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2340", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-29 07:00:01"); 
            assert.equal(true, resp.response);
        });
        it("should return false when is Friday and license plate is PXT-2341 and datetime road is 2017-09-29 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2341", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-29 07:00:01"); 
            assert.equal(false, resp.response);
        });         
        it("should return false when is Saturday  and datetime road is 2017-09-30 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2340", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-30 07:00:01"); 
            assert.equal(false, resp.response);
        });
        it("should return false when is Sunday  and datetime road is 2017-09-24 07:00:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2340", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-24 07:00:01"); 
            assert.equal(false, resp.response);
        });
        
        it("should return true when is Monday and license plate is PXT-2342 and datetime road is 2017-09-25 07:00:00", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2342", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 07:00:00");  
            assert.equal(true, resp.response);
        });
        it("should return true when is Monday and license plate is PXT-2342 and datetime road is 2017-09-25 09:30:00", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2342", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 09:30:00");  
            assert.equal(true, resp.response);
        });
        
        it("should return false when is Monday and license plate is PXT-2342 and datetime road is 2017-09-25 09:30:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2342", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 09:30:01");  
            assert.equal(false, resp.response);
        });

        
        it("should return true when is Monday and license plate is PXT-2342 and datetime road is 2017-09-25 16:00:00", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2342", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 16:00:00");  
            assert.equal(true, resp.response);
        });
        it("should return true when is Monday and license plate is PXT-2342 and datetime road is 2017-09-25 19:30:00", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2342", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 19:30:00");  
            assert.equal(true, resp.response);
        });
        it("should return true when is Monday and license plate is PXT-2342 and datetime road is 2017-09-25 19:30:01", function () {
            let objCity = new libCity.City("Quito");
            let objOwner = new libPerson.Person("Mauricio", "Herrera", "1989-03-28"); 
            let myCar = new libCar.Car("PXT-2342", 0, objOwner);
            let resp = objCity.carHasPicoyPlaca(myCar, "2017-09-25 19:30:01"); 
            assert.equal(false, resp.response);
        });
    });
});