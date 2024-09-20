// function getSuccessRate(statistic) {
//     if (statistic === '') {
//       return "Hii";
//     }
  
//     let con = 0;
//     for (let ch of statistic) {
//       if (statistic[ch] === 1) {
//         con += 1; 
//       }
//     }
  
//     return con;
//   }

//   console.log(getSuccessRate('01100111'));

//--------------------------

// let arr = [1, 2, 3, 4, -1, -2, -3, -4, -5];

// function countPositivesSumNegatives(input) {
//   let a = 0;
//   let b = 0;
  
//   for (let ch of input) {
//     if (ch > 0) {
//       a++;
//     }
//     if (ch < 0) {
//       b += input[0]; 
//     }
//   }
//   return [a, b];
// }

// console.log(countPositivesSumNegatives(arr));

//-------------------------------------

// function century(years) {
//   let = 0;
//   res = Math.ceil(years);

//   return console.log(res);;
// } 

// console.log(century(1758));

// console.log(Math.ceil(years));

//--------------------------

// function convertCurrency(amount, exchangeRate, currencyName) {
//   if (amount || exchangeRate === 0) {
//     return 'Enter valid data';
//   } else {
//     let money = amount * exchangeRate;
//     let out = money.toFixed(2)
//   }
//   console.log(money);
//   return `Give them + ${money} + ${currencyName} + (s)`;
// }

// console.log(`Give them ${money} ${currencyName}(s)`);

//--------------------------------------------

function countPositivesSumNegatives(input) {
  if (input === [0]) {
    return [];
  }
    
    let count = 0;
    let sum = 0;
    for (let n of input) {
      if (n >= 0) {
        count ++;
      } else if (n < 0) {
        sum -= (-n);
      }
    }
  
    return [count, sum]
  }

  console.log(countPositivesSumNegatives([1, 2, 3, 4, 8, -1.-2, -1, -3]));
  console.log(countPositivesSumNegatives([ 10, -50 ]));