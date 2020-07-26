const Product = require("./product")
module.exports = class VatService{
    constructor() {
    this.vatValue = 0.23;
    }

    getGrossPrice(netPrice, vatValue){
        if(vatValue >= 1){
            throw "Vat must be lower!";
        }else{
            return (netPrice * (1 + vatValue));
        }

    }
    getGrossPriceForDefaultVat(product){
        if(product instanceof Product){
            return (product.netPrice * (1 + this.vatValue));
        }
    }

}
