// constructor function Airplane with given parameters and objects
var Airplane = function(model,seatingCapacity,maxSpeed) {
    this.model = model;
    this.seatingCapacity = seatingCapacity;
    this.maxSpeed = maxSpeed;
    
    // print function created
    this.print = function() {
        console.log(`Model: ${this.model}`); 
        console.log(`Seating Capacity: ${this.seatingCapacity}`); 
        console.log(`Maximum Speed: ${this.maxSpeed}`);
        console.log("------------------------------");
    }
}

// created 3 Airplane objects and called print methods
var P1 = new Airplane('Boeing',700,5000);
var P2 = new Airplane('Typhoon',300,2000);
var P3 = new Airplane('Jet',400,4000);
console.log(P1.print());
console.log(P2.print());
console.log(P3.print());

// updated seating capacity 
console.log("AFTER UPDATING SEATING CAPACITY");
console.log("*******************************");
P1.seatingCapacity += 10;
P2.seatingCapacity += 10;
P3.seatingCapacity += 10;
console.log(P1.print());
console.log(P2.print());
console.log(P3.print());

// deleted maximum speed and added average speed
console.log("DELETING MAX SPEED AND ADDING AVERAGE SPEED");
console.log("*******************************************");
delete P1.maxSpeed;
delete P2.maxSpeed;
delete P3.maxSpeed;
console.log(P1);
console.log(P2);
console.log(P3);

P1.avgSpeed = 600;
P2.avgSpeed = 600;
P3.avgSpeed = 600;
console.log(P1);
console.log(P2);
console.log(P3);














