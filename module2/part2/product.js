module.exports = class Product {
    constructor(id_, netPrice_, type_) {
        this.id = id_;
        this.netPrice = netPrice_;
        this.type = type_;
    }

    getNetPrice(){
        return this.netPrice;
    }

};
