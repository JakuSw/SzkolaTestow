const VatService = require("./vatService");
const vatProvider = require("./vatProvider");
const Product = require("./product");
const VatProvider = require("./vatProvider");


jest.mock("./vatProvider", () => {
  return jest.fn().mockImplementation(() => {
    return {
        getDefaultVat: () => {return 0.23},
        getVatForType: (type) => {return 0.08},
    };
  });
});

function getenrateProductWithPrice(price, type){
    return new Product(1321, price, type);
}

describe("Should return gross price for product", () => {

    beforeEach(() => {
        vatService = new VatService();
    });
    
    test("Should return gross price for default Vat value", () => {
        let product = getenrateProductWithPrice(20.00);
        let result = vatService.getGrossPriceForDefaultVat(product); 
        expect(result).toBe(24.60);
    });
    
    test("Should return gross price for other Vat value", () => {
        let product = getenrateProductWithPrice(10.00);
        let result = vatService.getGrossPrice(product)
        expect(result).toBe(10.80);
    });
});
