class Goods {
    constructor(name, amount, image, count, out) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
        this.out = out;
    }

    draw() {
        document.querySelector(this.out).innerHTML = '<img src="'+ this.image +'" width="32" height="32" >' 
        + '<br>' 
        + this.name 
        + '<br>' 
        + 'Цена: ' + this.amount;
    }
}