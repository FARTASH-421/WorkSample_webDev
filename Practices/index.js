
// function Human(fN, lN, age){
//     this.fName = fN;
//     this.lName = lN;
//     this.age = age;

//     this.getAge = function(){return this.age};
//     this.getLname = function(){return this.lName};
//     this.getFName = function () {return this.fName};

//     this.display = function(){
//         console.log(`my frist name is ${this.getFName()}\nmy last name ${this.getLname()}\nI am ${this.getAge()} years old!`)
//     }
// }


// const human1 = new Human("A.Qadir", "Fartash", 23);
// human1.display();
// console.log(human1.getAge())
// console.log(human1.fName);
// console.log(human1.getLname());
// console.log("\n");

// const h2 = new Human ("A.Samad", "Mahdi Yar", 24);
// h2.display();
// console.log(h2.getAge())
// console.log(h2.fName);
// console.log(h2.getLname());


// ------------------------------
//  class in javaScript
// -----------------------------

class Product {

    constructor(name, price){
        this.price = price;
        this.name = name;
        this.dis = `${this.name}: ${this.price}`
    }

    display(){
        console.log(`Product Name: ${this.name}`);
        console.log(`Price Product $${this.price.toFixed(2)}`);
    }

    getName(){
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

const p1 = new Product("Computer", 124);
p1.display()
console.log(p1.dis);
console.log(p1.getName());
console.log(p1.getPrice());

const p2 = new Product("Mobile", 40);
p2.display();
console.log(p2.dis);
