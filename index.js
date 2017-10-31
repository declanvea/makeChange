// Making Change
// Let’s work with the most common coin denominations in the US: pennies, nickels, dimes, and quarters (worth 1 cent, 5 cents, 10 cents, and 25 cents, respectively).
// Suppose we want to make 17 cents using these types of coins. There are six different ways:
// 1 dime, 1 nickel, 2 pennies
// 1 dime, 7 pennies
// 3 nickels, 2 pennies
// 2 nickels, 7 pennies
// 1 nickel, 12 pennies
// 17 pennies
//
// Write a Javascript function that will tell you how many different ways you can make change for a given number of cents. So, following the example above:
// WaysToChange(17) should return 6, since there are six different ways to make 17 cents.




function WaysToChange(x){
  let countWays = 0;
  let quarters = 0;
  while(quarters <= x/25){
    let dimes = 0;
    while(dimes <= (x-quarters*25)/10){
      let nickels = 0;
      while(nickels <= (x-(quarters*25+dimes*10))/5){
        console.log('quarters: ',quarters,'dimes: ',dimes, 'nickels: ', nickels, 'rest are pennies');
        countWays++;
        nickels++;
      }
      dimes++;
    }
    quarters++;
  }
  return countWays;
}
//
// console.assert(WaysToChange(9) === 2, 'ways to change should be 2');
//
// console.assert(WaysToChange(12) === 4, "ways to change should be 4");
// console.assert(WaysToChange(17) === 6, "ways to change should be 6");
// console.assert(WaysToChange(35) === 24, "ways to change should be 24");



  // Next, suppose your favorite restaurant sells chicken nuggets in boxes of 6, 9, or 20. There is no way to order 7 nuggets (since no multiples of 6, 9, and 20 add up to 7). There are two possible ways to order 18 nuggets:
  // 2 boxes of 9
  // 3 boxes of 6
  //
  // Write a Javascript function that will tell you how many different ways you can order a given number of nuggets, so for example:
  // WaysToOrder(7) returns 0
  // WaysToOrder(18) returns 2
  //
  // What is the largest value of n such that there is no way to order n nuggets? That is, what’s the largest n for which WaysToOrder(n) returns 0?
  //
  // After writing the WaysToChange and WaysToOrder functions, create a series of test cases to check that they give the results you expect. Share test cases with each other and make sure your functions give the same answers.
//

// small: 6
// medium: 9
// large: 20

function WaysToOrder(x){
  let countOrders = 0;
  let large = 0;
  while(large <= x/20){
    let medium = 0;
    while(medium <= (x-large*20)/9){
      let small = 0;
      while(small <= (x-(large*20-medium*9))/6){
        if((x-(large*20+medium*9+small*6)) == 0){
          console.log('x: ',x,',small: ',small, ',medium: ',medium, ',large: ',large);
          countOrders++;
        }
        small++;
      }
      medium++;
    }
    large++;
  }
  return countOrders;
}
console.log(WaysToOrder(5));
console.assert(WaysToOrder(5) === 0, "ways to order should be 0");
console.log(WaysToOrder(12));
console.assert(WaysToOrder(12) === 1, "ways to order should be 1");
console.log(WaysToOrder(18));
console.assert(WaysToOrder(18) === 2, "ways to order should be 2");
console.log(WaysToOrder(30));
console.assert(WaysToOrder(30) === 2, "ways to order should be 2");
