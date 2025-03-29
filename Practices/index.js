
function Human(fN, lN, age){
    this.fName = fN;
    this.lName = lN;
    this.age = age;

    this.getAge = function(){return this.age};
    this.getLname = function(){return this.lName};
    this.getFName = function () {return this.fName};

    this.display = function(){
        console.log(`my frist name is ${this.getFName()}\nmy last name ${this.getLname()}\nI am ${this.getAge()} years old!`)
    }
}


const human1 = new Human("A.Qadir", "Fartash", 23);
human1.display();
console.log(human1.getAge())
console.log(human1.fName);
console.log(human1.getLname());
console.log("\n");

const h2 = new Human ("A.Samad", "Mahdi Yar", 24);
h2.display();
console.log(h2.getAge())
console.log(h2.fName);
console.log(h2.getLname());