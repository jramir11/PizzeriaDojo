var pizza = {
    tipoCorteza: "americana",
    tipoSalsa:  "cheddar",
    quesos:   ["queso suizo lacey"],
    salsas: ["salsa de rábano"]
};
console.log(pizza);




/*a. Crea una function llamada pizzaOven que devuelva un objeto JavaScript (Pizza) */
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}



/*b. Crea una pizza con: "estilo Chicago", "tradicional", ["mozzarella"] y ["pepperoni", "salchicha"] */
var pizza1 = pizzaOven("Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

   




/*c. Crea una pizza con: "lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"]*/
let pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);



/*d. ¡Crea 2 pizzas más con los ingredientes que quieras! */
let Pizza3 = pizzaOven("a la piedra", "tomatina", ["cheddar"], ["choclo"]);
console.log(Pizza3);

let Pizza4 = pizzaOven("americana", "hawaiana", ["cuatro quesos"],["cebollin"]);
console.log(Pizza4);


/*e. Bonus: Crea una function llamada randomPizza que use Math.random () para crear una pizza aleatoria. */
var tipoCortezaR = [
    "traditional",
    "a la piedra",
    "americana",
    "Chicago",
    "lanzada a mano"
];
var tipoSalsaR = [
    "hawaiana",
    "tomatina",
    "marinara",
    "tradicional"
];
var quesosR = [
    "cuatro quesos",
    "cheddar",
    "mozzarella",
    "feta"
];
var salsasR = [
    "cebollas",
    "aceitunas",
    "champiñones",
    "cebollin"
];/*
function PizzaR() {
    var pizza = {};
    pizza.tipoCorteza = random(tipoCortezaR);
    pizza.tipoSalsa = random(tipoSalsaR);
    pizza.quesos = random(quesosR);
    pizza.salsas = random(salsasR);
    return pizza;
}

console.log(PizzaR());
*/