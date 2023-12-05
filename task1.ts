import inquirer from "inquirer";

console.log("Welcome to the store");
console.log("What would you like to buy");

interface ItemPrices {
    [itemName: string]: number;
}

let fruits: ItemPrices = { "apple": 12, "banana": 15, "orange": 20, "grapes": 30, "kiwi": 25 };
let vegetables: ItemPrices = { "carrot": 8, "ladyfinger": 10, "broccoli": 12, "spinach": 15 };
let groceries: ItemPrices = { "bread": 15, "milk": 13, "eggs": 12, "cereal": 17 };
let categories: string[] = ["groceries", "fruits", "vegetables"];
let cart: { name: string; price: number }[] = []; // To store items added to the cart

function calculateDiscount(totalPrice: number): number {
    const discountPercentage: number = totalPrice > 100 ? 10 : 0; // 10% discount if total price is more than $100
    return (totalPrice * discountPercentage) / 100;
}

function display_categories(categories: string[]): void {
    let no: number = 1;
    for (let index = 0; index < categories.length; index++) {
        console.log(`${no}:${categories[index]}`);
        no++;
    }
}

// Example usage:
display_categories(categories);

const selectedCategories: string[] = [];
let addMoreCategories: boolean = true;

while (addMoreCategories) {
    const choice = await inquirer.prompt([{
        name: "choice_1",
        type: "number",
        message: "Enter the number of the category you want to shop from (or enter 0 to finish shopping):"
    }]);

    if (choice["choice_1"] === 0) {
        addMoreCategories = false;
    } else if (choice["choice_1"] <= categories.length && choice["choice_1"] > 0) {
        const selectedCategory: string = categories[choice["choice_1"] - 1];

        if (selectedCategories.includes(selectedCategory)) {
            console.log("You've already selected items from this category. Please choose a different category.");
        } else {
            selectedCategories.push(selectedCategory);

            // Display items for the selected category
            console.log(`Items in ${selectedCategory}:`);
            let items: ItemPrices;

            if (selectedCategory === "fruits") {
                items = fruits;
            } else if (selectedCategory === "vegetables") {
                items = vegetables;
            } else if (selectedCategory === "groceries") {
                items = groceries;
            } else {
                console.log("Invalid category");
                process.exit(1);
            }

            let no = 1;
            for (const [itemName, itemPrice] of Object.entries(items)) {
                console.log(`${no}: ${itemName}: $ ${itemPrice}`);
                no++;
            }
            no = 1;
            // input user to add items to the cart
            let addMoreItems: boolean = true;
            while (addMoreItems) {
                const itemToAdd = await inquirer.prompt([{
                    name: "itemNumber",
                    type: "number",
                    message: "Enter the number of the item you want to add to your cart (or enter 0 to go back):"
                }]);

                if (itemToAdd["itemNumber"] === 0) {
                    addMoreItems = false;
                    display_categories(categories);
                } else if (items[`${Object.keys(items)[itemToAdd["itemNumber"] - 1]}`]) {
                    const selectedItemName = Object.keys(items)[itemToAdd["itemNumber"] - 1];
                    const selectedItemPrice = items[selectedItemName];
                    // Add item to the cart
                    cart.push({ name: selectedItemName, price: selectedItemPrice });
                    console.log(` ${selectedItemName} added to your cart!`);
                    console.log("Do you want to add more items?");
                } else {
                    console.log("Invalid item number. Please enter a valid item number.");
                }
            }
        }
    } else {
        console.log("Invalid category number. Please enter a valid category number.");
    }
}

// Calculate total price
const totalPrice: number = cart.reduce((acc, item) => acc + item.price, 0);

// Calculate and apply discount
const discount: number = calculateDiscount(totalPrice);

// Display the final receipt
console.log("Your shopping cart:");
for (const item of cart) {
    console.log(`${item.name}: $${item.price}`);
}
console.log(`Total Price: $${totalPrice}`);
if (discount > 0) {
    console.log(`Congratulations! You get a ${discount} discount for spending more than $100.`);
}
console.log(`Discount: ${discount}`);
console.log(`Final Price: $${totalPrice - discount}`);

// Choose payment method
const paymentMethods = ["Credit Card", "Jazzcash", "Cash","Easypaisa"];
const paymentChoice = await inquirer.prompt([{
    name: "payment",
    type: "list",
    message: "Choose a payment method:",
    choices: paymentMethods,
}]);
console.log(`You have selected ${paymentChoice.payment} as your payment method.`);
console.log("Thank you for shopping!");
