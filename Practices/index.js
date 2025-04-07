
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

// class Product {

//     constructor(name, price){
//         this.price = price;
//         this.name = name;
//         this.dis = `${this.name}: ${this.price}`
//     }

//     display(){
//         console.log(`Product Name: ${this.name}`);
//         console.log(`Price Product $${this.price.toFixed(2)}`);
//     }

//     getName(){
//         return this.name;
//     }

//     getPrice() {
//         return this.price;
//     }
// }

// const p1 = new Product("Computer", 124);
// p1.display()
// console.log(p1.dis);
// console.log(p1.getName());
// console.log(p1.getPrice());

// const p2 = new Product("Mobile", 40);
// p2.display();
// console.log(p2.dis);


// -----------------------------------
//  static keyword in jS
// -----------------------------------

// class User{
//     static counter = 0;
//     constructor(fName, lName){
//         this.fristName = fName;
//         this.lastName = lName;
//         User.counter += 1;
//     }

//     display(){
//         console.log(`my frist name is ${this.fristName}`);
//         console.log(`my Last name is ${this.lastName}`);
//     }
// }


// const user1 = new User("A.Qadir", "Fartash");
// const user2 = new User("Ahmad", "Ahmadi");


// user1.display();
// console.log('\n');
// user2.display();

// console.log(User.counter)


// ----------------------
// inhertance in js
// ----------------------

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     display(){
        
//     }
// }

// class Fish extends Animal{
//     constructor(nameAnimal, age, speed){
//         super(nameAnimal);
//         this.age = age;
//         this.speed = speed;
//     }

    
//     display(){
//         super.display();
//         console.log(`this is a name ${this.name}`);
//         console.log(`this is my age ${this.age}`);
//         console.log(`this my speed ${this.speed}`);

//     }
// }

// const fish = new Fish("Bobo", 3, 45);

// fish.display()


// ----------------------------------
// Destructuring in JS
// -----------------------------

// swap Values;
// let a = 30;
// let b = 20;
// console.log(`a: ${a} -> b: ${b}`);

// [a, b] = [b, a];
// console.log(`a: ${a} -> b: ${b}`);


// swap Values in Arrays

// const colors = ["red", "green", "blue", "black", "white"];
// console.log(colors);
// [colors[0], colors[4]] = [colors[4], colors[0]]
// console.log(colors);


// Extiract value in function
// function displayColor([firstColor, secondColor, ...Exrt]){
//     console.log(`frist color: ${firstColor}`)
//     console.log(`second color: ${secondColor}`)
//     console.log(`Other Colors: ${Exrt}`)
// }
// const colors = ["red", "green", "blue", "black", "white"];

// displayColor(colors)


// Extract data in Object
const Person1 = {
    firstName: "Fartash",
    lastName : "A.Qadir",
    age:        23,
    job:        "Student"
}


const {fName, lName, age, job} = Person1;

console.log(`first Name: ${fName}`);
console.log(`second Name: ${lName}`);
console.log(`my ange : ${age}`);
console.log(`my Job : ${job}`);