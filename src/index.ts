import { add, multiply } from "./math.js";
import { greet } from "./greeting.js";

console.log(greet("World"));
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`4 * 5 = ${multiply(4, 5)}`);