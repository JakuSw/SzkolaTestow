const VatService = require("./vatService");
const vatProvider = require("./vatProvider");
const Product = require("./product");
const VatProvider = require("./vatProvider");

jest.mock("./vatProvider", () => {
  return jest.fn().mockImplementation(() => {
    return {
        getDefaultVat: () => {return 0.23},
        getVatForType: (type) => {return 10}
    };
  });
});

function getenrateProductWithPrice(price, type){
    return new Product(1321, price, type);
}

describe("Should return gross price for product or error if Vat is too high", () => {

    beforeEach(() => {
        vatService = new VatService();

    });
    
    test("Should return gross price for default Vat value", () => {
        let product = getenrateProductWithPrice(20.00, "Clotes");
        let result = vatService.getGrossPriceForDefaultVat(product); 
        expect(result).toBe(24.60);
    });
    

    test("Should throw error when Vat is too high", () => {
        let product = getenrateProductWithPrice(10.00, "Clotes");
        expect(() => {
            vatService.getGrossPrice(product)})
        .toThrow("Vat must be lower!")
    });
});
