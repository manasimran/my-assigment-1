function add(a: number, b: number): number {
    return a + b;
}
function check_even_or_odd(num: number): string {
    return (num%2===0) ? "Even" : "Odd";//use of ternary operator
}
function calculate_Area(width: number, height: number): number {
    return width * height;
}
function reverse_String(inputString: string): string {
    return inputString.split("").reverse().join("");
}
function convert_celsius_to_fahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}
console.log(add(5, 3)); // Output: 8
console.log(check_even_or_odd(7)); // Output: Odd
console.log(calculate_Area(4, 6)); // Output: 24
console.log(reverse_String("Hello world")); // Output: olleH
console.log(convert_celsius_to_fahrenheit(25)); // Output: 77
