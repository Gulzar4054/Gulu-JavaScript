const user ={
    username: "Gulzar",
    price: 99,

    welcomeMessage: function(){
      console.log(`${this.username}, welcome to our website !`);
    },
}

user.welcomeMessage();
user.username ="Ali";
user.welcomeMessage();
user.username ="Sara";
user.welcomeMessage();

const product ={
    name: "Laptop",
    price: 150000,

showdetails: function(){
    console.log(`${this.name} costs Rs.${this.price}`);
},
}

product.showdetails();
product.name ="Mobile";
product.price = 80000;

product.showdetails();
product.name ="Tablet";
product.price = 60000;
product.showdetails();


function polo() {

}



////////////////////////////////////////Test 2////////////////////////////////


const car ={
    brand : "Toyota",
    model : "Corolla",

    showInfo : function(){
        console.log (`${this.brand} the model is  ${this.model} the price ${this.price}`);
    }
}

car.showInfo();
car.brand = "Honda";
car.model = "Civic";
car.price = 2500000;
car.showInfo();


//************************************************************************** */


function polo() {
let name = "Gulzar";
let id = 12345;
console.log(this.name);

} 

polo();



const addtwo = (a, b) => {
    return a + b;
}
console.log(addtwo(3,5));

//---------------------------------------------------------------------------   -   ---------------------


const subtract = (a, b) => a - b;
console.log(subtract(10,4));
