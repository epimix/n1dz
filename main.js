//1
class Selector {
    constructor(name) {
        this.name = name;
        this.styles = {};
    }

    addProperty(property, value) {
        this.styles[property] = value;
    }

    removeProperty(property) {
        delete this.styles[property];
    }

    getCSS() {
        let styleStr = "";
        for (let prop in this.styles) {
            styleStr += `${prop}: ${this.styles[prop]}; `;
        }
        return `.${this.name} { ${styleStr}}`;
    }
}


let s = new Selector("name");
s.addProperty("color", "red");
s.addProperty("font-size", "16px");
console.log(s.getCSS());
//2
class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        document.write(`<button style="width:${this.width}px; height:${this.height}px;">${this.text}</button>`);
    }
}

class BootstrapBtn extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }

    showBtn() {
        document.write(`<button style="width:${this.width}px; height:${this.height}px; background-color:${this.color};">${this.text}</button>`);
    }
}


let b1 = new Button(100, 20, "Btn1");
b1.showBtn();
let b2 = new BootstrapBtn(120, 600, "Btn2", "purple");
b2.showBtn();

//3
class ExtendedDate extends Date {
    constructor(...args) {
        super(...args);
    }
    getTextDate() {
        const months = [
            "січня", "лютого", "березня", "квітня", "травня", "червня",
            "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
        ];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }
    isFuture() {
        const now = new Date();
        return this >= new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }
    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }


    getNextDate() {
        const next = new Date(this);
        next.setDate(this.getDate() + 1);
        return new ExtendedDate(next);
    }
}


let myDate = new ExtendedDate(2025, 9, 28); 

console.log("Текстова дата:", myDate.getTextDate());
console.log("Чи в майбутньому/сьогодні:", myDate.isFuture()); 
console.log("Чи високосний рік:", myDate.isLeapYear());
console.log("Наступна дата:", myDate.getNextDate().toDateString());


