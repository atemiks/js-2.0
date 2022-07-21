class Goods2 extends Goods {
    constructor(name, amount, image, count, out, sale) {
        super(name, amount, image, count, out);
        this.sale = sale;
    }

    draw() {
        document.querySelector(this.out).innerHTML = '<img src="'+ this.image +'" width="32" height="32" >' 
        + '<br>' 
        + this.name 
        + '<br>' 
        + 'Цена: ' + this.amount 
        + '<br>'
        + 'Уценка: ' + this.sale;
    }
}