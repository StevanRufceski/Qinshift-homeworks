console.log("completed")

ingredients = [];

let recipeName = prompt("What is the name of your recipe?");
document.getElementsByTagName("h2")[0].innerText = recipeName;

let numberOfIngredients = prompt("How many ingredients your recipe has?")
console.log(numberOfIngredients);


for (let i = 0; i < numberOfIngredients; i++){
    ingredients[i] = prompt(`What is your ingredient ${i+1}?`);
    document.getElementsByTagName("tbody")[0].innerHTML += `<tr><td>${i+1}</td><td>${ingredients[i]}</td></tr>`
}