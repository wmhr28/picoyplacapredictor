/*!
 * picoyplacapredictor 
 * Copyright(c) 2017 Mauricio Herrera <wmhr28@hotmail.com> 
 * MIT Licensed
 */
var assert = require("assert");
var utils = require("../dist/lib/utils");

describe("Class.Utils.Functions", function () {
  describe("1.- function calculateAge", function () {
    it("should return 28 when input is 1989-03-28 and today is 2017-09-24", function () {
      let resp = utils.Functions.calculateAge("1989-03-28");
      assert.equal(28, resp);
    });
    it("should return 28 when input is 1989-02-11 and today is 2017-09-24", function () {
      let resp = utils.Functions.calculateAge("1989-02-11");
      assert.equal(28, resp);
    });
    it("should return 0 when input is 2017-09-24 and today is 2017-09-24", function () {
      let resp = utils.Functions.calculateAge("2017-09-24");
      assert.equal(0, resp);
    });
    it("should return 0 when input is 2017-09-23 and today is 2017-09-24", function () {
      let resp = utils.Functions.calculateAge("2017-09-23");
      assert.equal(0, resp);
    });
    it("should return 1 when input is 2016-09-24 and today is 2017-09-24", function () {
      let resp = utils.Functions.calculateAge("2016-09-24");
      assert.equal(1, resp);
    });
    it("should return 1 when input is 2016-09-23 and today is 2017-09-24", function () {
      let resp = utils.Functions.calculateAge("2016-09-23");
      assert.equal(1, resp);
    });
    it.skip("should return 0 when input is 2016-09-25 and today is 2017-09-24", function () {
      let resp = utils.Functions.calculateAge("2016-09-25");
      assert.equal(0, resp);
    });

  });
  describe("2.- function getLastChar", function () {
    it("should return C when input is ABC", function () {
      let resp = utils.Functions.getLastChar("ABC");
      assert.equal("C", resp);
    });
    it("should return 5 when input is AB5", function () {
      let resp = utils.Functions.getLastChar("AB5");
      assert.equal("5", resp);
    });
    it("should return ' ' when input is 'AB '", function () {
      let resp = utils.Functions.getLastChar("AB ");
      assert.equal(" ", resp);
    });
    it("should return ' ' when input is ' AB '", function () {
      let resp = utils.Functions.getLastChar(" AB ");
      assert.equal(" ", resp);
    });
  });
  describe("3.- function isValidLicensePlate => RegExp= ^[A-Z]{3}-\d{4}$", function () {
    it("should return false when input is PXTAXDFS", function () {
      let resp = utils.Functions.isValidLicensePlate("PXTAXDFS");
      assert.equal(false, resp);
    });
    it("should return false when input is PXT-XDFS", function () {
      let resp = utils.Functions.isValidLicensePlate("PXT-XDFS");
      assert.equal(false, resp);
    });
    it("should return false when input is PXT-XDF5", function () {
      let resp = utils.Functions.isValidLicensePlate("PXT-XDF5");
      assert.equal(false, resp);
    });
    it("should return true when input is PXT-2345", function () {
      let resp = utils.Functions.isValidLicensePlate("PXT-2345");
      assert.equal(true, resp);
    });
    it("should return true when input is PXT-0000", function () {
      let resp = utils.Functions.isValidLicensePlate("PXT-0000");
      assert.equal(true, resp);
    });
    it("should return false when input is 'PXT-0000 '", function () {
      let resp = utils.Functions.isValidLicensePlate("PXT-0000 ");
      assert.equal(false, resp);
    });
    it("should return false when input is 'PXT-000 '", function () {
      let resp = utils.Functions.isValidLicensePlate("PXT-000 ");
      assert.equal(false, resp);
    });
    it("should return false when input is ' PXT-2345'", function () {
      let resp = utils.Functions.isValidLicensePlate(" PXT-2345");
      assert.equal(false, resp);
    });
  });
  describe("4.- function isValidDatetimeFormat => RegExp= ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$", function () {
    it("should return true when input is '2017-09-01 19:35:58'", function () {
      let resp = utils.Functions.isValidDatetimeFormat("2017-09-01 19:35:58");
      assert.equal(true, resp);
    });
    it("should return true when input is '2017-09-01 19:35:68'", function () {
      let resp = utils.Functions.isValidDatetimeFormat("2017-09-01 19:35:68");
      assert.equal(true, resp);
    });
    it("should return false when input is '2017-09-01T19:35:58'", function () {
      let resp = utils.Functions.isValidDatetimeFormat("2017-09-01T19:35:58");
      assert.equal(false, resp);
    });
    it("should return false when input is 'xxx'", function () {
      let resp = utils.Functions.isValidDatetimeFormat("xxx");
      assert.equal(false, resp);
    });
  });
  describe("5.- function isValidDatetime", function () {
    it("should return true when input is '2017-09-01 19:35:58'", function () {
      let resp = utils.Functions.isValidDatetime("2017-09-01 19:35:58");
      assert.equal(true, resp.response);
    });
    it("should return false when input is '2017-09-01 19:35:68'", function () {
      let resp = utils.Functions.isValidDatetime("2017-09-01 19:35:68");
      assert.equal(false, resp.response);
    });
    it("should return false when input is '2017-09-01T19:35:58'", function () {
      let resp = utils.Functions.isValidDatetime("2017-09-01T19:35:58");
      assert.equal(false, resp.response);
    });
    it("should return false when input is 'xxx'", function () {
      let resp = utils.Functions.isValidDatetime("xxx");
      assert.equal(false, resp.response);
    });
  });
  describe("6.- function isBetweenDateTime", function () {
    it("should return true when start '2017-09-24 07:00:00' end '2017-09-24 09:30:00' input is '2017-09-24 07:00:00'", function () {
      let start="2017-09-24 07:00:00";
      let end="2017-09-24 09:30:00";
      let input="2017-09-24 07:00:00";
      let resp = utils.Functions.isBetweenDateTime(start,end,input);
      assert.equal(true, resp);
    });
    it("should return true when start '2017-09-24 07:00:00' end '2017-09-24 09:30:00' input is '2017-09-24 09:30:00'", function () {
      let start="2017-09-24 07:00:00";
      let end="2017-09-24 09:30:00";
      let input="2017-09-24 09:30:00";
      let resp = utils.Functions.isBetweenDateTime(start,end,input);
      assert.equal(true, resp);
    });
    it("should return true when start '2017-09-24 07:00:00' end '2017-09-24 09:30:00' input is '2017-09-24 07:00:01'", function () {
      let start="2017-09-24 07:00:00";
      let end="2017-09-24 09:30:00";
      let input="2017-09-24 07:00:01";
      let resp = utils.Functions.isBetweenDateTime(start,end,input);
      assert.equal(true, resp);
    });
    it("should return false when start '2017-09-24 07:00:00' end '2017-09-24 09:30:00' input is '2017-09-24 09:30:01'", function () {
      let start="2017-09-24 07:00:00";
      let end="2017-09-24 09:30:00";
      let input="2017-09-24 09:30:01";
      let resp = utils.Functions.isBetweenDateTime(start,end,input);
      assert.equal(false, resp);
    });
  });
});