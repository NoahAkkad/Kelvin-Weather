// kelvin
const kelvin = 0;
// Convert to Celsius
let celsius= kelvin - 273;
// Convert to Fahrenheit
let fahrenheit = celsius * ( 9 / 5) + 32;
//Convert to Newton
let newton = celsius * (33/100);
//// Round down
newton = Math.floor(newton);
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);