let car = {
    model: "Scoda Octavia",
    color: "White",
    year: 2014,
    fuel: "LPG",
    fuelConsumptionLitersPer100km: 9,
    fuelConsumptionPerDistance: function(){
        let distance = prompt(`Enter the distance in kolimeters you want to calculate fuel consumption with ${this.model} ${this.year} on ${this.fuel}:`);
        let consumption = this.fuelConsumptionLitersPer100km*distance/100;
        console.log(`This car will consume ${consumption} liters per ${distance} kilometers.`)
        return consumption;
    }
}
console.log(car);
car.fuelConsumptionPerDistance();