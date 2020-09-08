import { writable } from "svelte-persistent-store/dist/local";

let waterAsMultipleOfCoffee = writable("v60WaterAsMultipleOfCoffee", 16.66666666666667);
// This is equivalent to 30g coffee to 500g water (500 ÷ 30 = 16.67)

let waterAmount = writable("v60WaterAmount", 250);
let coffeeAmount = writable("v60CoffeeAmount", 15);

let currentCalculator = writable("v60CurrentCalculator", "coffeeFirst")

export { waterAmount, coffeeAmount, waterAsMultipleOfCoffee, currentCalculator };