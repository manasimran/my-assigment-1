// Initialize an array
let cars: string[] = ["Supra", "Lamborghini", "Bugatti", "Nissan GTR"];

// Scenario 1 - Modify Array with Methods

// push: Add new elements to the end of the array
cars.push("Ferrari", "Porsche");

// pop: Remove the last element from the array
let removedCar = cars.pop();

// shift: Remove the first element from the array
let shiftedCar = cars.shift();

// unshift: Add new elements to the beginning of the array
cars.unshift("Tesla", "Maserati");

// Display the modified array
console.log("Scenario 1 - Modified Array:", cars);
console.log("Removed Car:", removedCar);
console.log("Shifted Car:", shiftedCar);

// Scenario 2 - Subarray Creation

// Initialize an array
let originalCars: string[] = ["Supra", "Lamborghini", "Bugatti", "Nissan GTR"];

// splice: Create a subarray by removing elements from the original array
let removedCars: string[] = originalCars.splice(1, 2); // Removes "Lamborghini" and "Bugatti"

// slice: Create a subarray without modifying the original array
let subCars: string[] = originalCars.slice(1, 3);

// Display the results
console.log("\nScenario 2 - Original Cars Array:", originalCars);
console.log("Removed Cars:", removedCars);
console.log("Subarray using slice:", subCars);
