function beautifulDays(i, j, k) {
    // Write your code here


let count = 0;
    
for (let range = i; range <= j; range++) {
let reverse = parseInt(range.toString().split("").reverse().join(""))
if (Math.abs(range - reverse) % k === 0) 
count++;
    }
    
return count
}
