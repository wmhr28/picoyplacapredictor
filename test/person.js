/*!
 * picoyplacapredictor 
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com> 
 * MIT Licensed
 */
var assert = require("assert");
var lib = require("../dist/lib/person");

describe("Class.Person", function () {
    describe("1.- function hasDisability => percentDisability is > 0", function () {
        it("should return false when variable percentDisability is not declared in constructor", function () {
            let objPerson = new lib.Person("Mauricio", "Herrera", "1989-03-28");
            let resp = objPerson.hasDisability();
            assert.equal(false, resp);
        });
        it("should return false when input 0", function () {
            let objPerson = new lib.Person("Mauricio", "Herrera", "1989-03-28");
            objPerson.setPercentDisability(0);
            let resp = objPerson.hasDisability();
            assert.equal(false, resp);
        });
        it("should return true when input 1", function () {
            let objPerson = new lib.Person("Mauricio", "Herrera", "1989-03-28");
            objPerson.setPercentDisability(1);
            let resp = objPerson.hasDisability();
            assert.equal(true, resp);
        });
        it("should return true when input 99", function () {
            let objPerson = new lib.Person("Mauricio", "Herrera", "1989-03-28");
            objPerson.setPercentDisability(99);
            let resp = objPerson.hasDisability();
            assert.equal(true, resp);
        });
    });
    describe("2.- function hasOldAge => birthdate is >=65", function () {
        it("should return false when is not declared in constructor of objPerson", function () { 
            let objPerson = new lib.Person("Mauricio", "Herrera", "1989-03-28");
            let resp = objPerson.hasOldAge();
            assert.equal(false, resp);
        });
        it("should return false when input '1989-03-28'= 28 age old", function () { 
            let objPerson = new lib.Person("", "", "1989-03-28");
            let resp = objPerson.hasOldAge();
            assert.equal(false, resp);
        });        
        it("should return false when input '1953-03-28'= 64 age old", function () { 
            let objPerson = new lib.Person("", "", "1953-03-28");
            let resp = objPerson.hasOldAge();
            assert.equal(false, resp);
        });             
        it("should return true when input '1952-03-28'= 65 age old", function () { 
            let objPerson = new lib.Person("", "", "1952-03-28");
            let resp = objPerson.hasOldAge();
            assert.equal(true, resp);
        });             
        it("should return true when input '1951-03-28'= 66 age old", function () { 
            let objPerson = new lib.Person("", "", "1951-03-28");
            let resp = objPerson.hasOldAge();
            assert.equal(true, resp);
        });
        it("should return true when input '1929-03-28'= 88 age old", function () { 
            let objPerson = new lib.Person("", "", "1929-03-28");
            let resp = objPerson.hasOldAge();
            assert.equal(true, resp);
        }); 
    });
});