//Parent Class

class Car{
    constructor(color,model){
        this.color = color;
        this.model = model;
    }
    startEngin(){
        console.log("This is strat engin method of Car class");
    }
}

//child class
class Bike extends Car{

}
let newBike = new Bike("Black",2023)
console.log(newBike);

let honda = new Car("red", 2023);
console.log(honda);