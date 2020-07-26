const Product = require("./product")
const VatProvider = require("./vatProvider")

const vatProvider = new VatProvider();

module.exports = class VatService{
    constructor(){};

    getGrossPriceForDefaultVat(product){
        return this.calculateGrossPrice(product.getNetPrice(), vatProvider.getDefaultVat());
    }

    getGrossPrice(product, type){
        return this.calculateGrossPrice(product.getNetPrice(), vatProvider.getVatForType(type));
    }

    calculateGrossPrice(netPrice, vatValue){
        if(vatValue >= 1){
            throw "Vat must be lower!";
        }else{
            return (netPrice * (1 + vatValue));
        }
    }

}
