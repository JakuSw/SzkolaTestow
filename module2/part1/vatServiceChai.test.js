const VatService = require("./vatService");
const Product = require("./product")
const should = require('chai').should()
const expect = require('chai').expect

function getenrateProductWithPrice(price){
    return new Product(1321, price);
}

describe("Should return gross price for product - chai", () => {
    var vatService; 

    beforeEach(() => {
        vatService = new VatService();
      });
    
    test("Should return gross price for default Vat value", () => {
        let product = getenrateProductWithPrice(20.00);
        let result = vatService.getGrossPriceForDefaultVat(product); 
        result.should.equal(24.60);
    });
    
    test("Should return gross price for other Vat value", () => {
        let product = getenrateProductWithPrice(10.00);
        let result = vatService.getGrossPrice(product.netPrice, 0.08)
        result.should.equal(10.80);
    });

    test("Should throw error when Vat is too high", () => {
        let product = getenrateProductWithPrice(10.00);
        expect(() => vatService.getGrossPrice(product.netPrice, 10)).to.throw("Vat must be lower!");
    });

});