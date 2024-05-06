
// Discount Calculator
 
function discount(totalValue:number , percentage:number) {
    return totalValue * percentage / 100;
}
const result = discount(10000, 20);
console.log(result);
