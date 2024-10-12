
//---------Mate----------Working with numbers------------

// let dan = 010;
// let bin = dan.toString(2);

// console.log(bin);

// --------------------------

// function getSuccessRate(statistic) {
//   if (statistic === '') {
//     return 0;
//   }

//   console.log('length to string ' + statistic.length);

//   let count = 0;
//   for (let ch of statistic) {
//     if (ch === '1') {
//       count ++;
//     }
//   }

//   console.log(count);

//   return (count / statistic.length) * 100;
// }

// console.log(getSuccessRate('1011'));


//--------------------------------------

// function makeDecision(fuelRemaining, distance, fuelConsumption) {
//   if (fuelRemaining < 0 || distance <= 0 || fuelConsumption <= 0) {
//     return 'please, enter the valid data';
//   }

//   let roz = (100 / fuelConsumption) * fuelRemaining;

//   if (roz >= distance) {
//     return 'reach gas station by themselves';
//   } else {
//     return 'ask for help';
//   }

// }


// console.log(makeDecision(-5, 34, 5));

//-------------------------------------------

// let a = 5;
// let b = 10;

// console.log(a + b);
// console.log(a < b);

//===========

// function convertCurrency(amount, exchangeRate, currencyName) {
//   if (amount > 0 && exchangeRate > 0) {
//     let money = +(amount * exchangeRate).toFixed(2);
//     console.log(money);
//     return `Give them ${money} ${currencyName}(s)`;
//   } else {
//     return 'Enter valid data'
//   }

// }


// console.log(convertCurrency(10000, 1.0946, 'dollar'));
// console.log(convertCurrency(250, 4.338, 'zloty')); 

//-------------------------------------

// function getPlan(startProduction, numberOfMonths, percent) {

//   let arr = [];
//   for (let i = 0; i < numberOfMonths; i++) {
//     startProduction += startProduction * percent / 100;
//     arr.push(startProduction);
//   }

//   return arr;
// }

//====

// function getPlan(startProduction, numberOfMonths, percent) {

//   let arr = [];
//   for (let i = 0; i < numberOfMonths; i++) {

//     let result = startProduction += (startProduction * percent) / 100;

//     arr.push(result);

//     console.log(result);
//   }

//   return arr;
// }

// console.log(getPlan(200, 3, 50));

// getPlan(10, 4, 30);
// [13, 16, 20, 26]

//=====================

// function getPlan(startProduction, numberOfMonths, percent) {

//   let goals = [];
//   let currentProduction = startProduction;

//   for (let i = 0; i < numberOfMonths; i++) {

//     currentProduction = startProduction += Math.floor((startProduction * percent) / 100);

//     console.log(currentProduction);

//     goals.push(currentProduction);
//   }

//   return goals;
// }

// console.log(getPlan(200, 3, 50));
// console.log(getPlan(1000, 6, 20));     // [1200, 1440, 1728, 2073, 2487, 2984]

//------------------------------------------------

// function getSpeedStatistic(testResults) {
//   if (testResults.length === 0) {
//     return [0, 0, 0];
//   }

//   let min = testResults[0];
//   for (let n of testResults) {
//      if (n < min) {
//        min = n;
//      }
//   }

//   let max = testResults[0];
//   for (let n of testResults) {
//     if (n > max) {
//       max = n;
//     }
//   }

//   let nominal = 0;
//   for (let n of testResults) {
//     nominal += n;
//   }
//   let nom = Math.floor(nominal / testResults.length);

//  return [min, max, nom];
// }

// console.log(getSpeedStatistic([8, 9, 3, 12]));           
// console.log(getSpeedStatistic([10, 10, 11, 9, 12, 8]));  

//-----------------------------------------------------------


// function getGuestsCount(guestsInput) {
  
//   let res = parseInt(guestsInput);
//   if (isNaN(res) === false) {
//     return res;
//   } else {
//     return 'not a number';
//   }

// }


// console.log(getGuestsCount('3 людини'));
// console.log(getGuestsCount('maybe 11 guests'));


// console.log(
//   isNaN('3 dfgh'),
//   isNaN('3'),
//   isNaN(' wrtyu')
// );

// console.log(
//   isFinite('3 dfg'),
//   isFinite('3 '),
//   isFinite(' dfg')
// );

// debugger;

// console.log(
//   Number('3 dfg'),
//   Number('  3 '),
//   Number(' dfg')
// );

//--------------------------------------------

// function calculateProfit(amount, percent, period) {
//   let total = amount;

//   for (let n = 1; n <= period; n++) {
//     let rock = (total * percent) / 100;
//     total += rock;
//   }

//   return total - amount;
// }

// console.log(calculateProfit(100, 4, 5));

//---------------------------------------------

// const name = 'String';
// let reversed = '';

// for (let char of name) {
//   // додаємо символ перед тими, що були додані раніше
//   reversed = char + reversed;
// }

// console.log(reversed); // 'gnirtS'

//==========

// function isLetter(ch) {

//   let vir = ch.toLowerCase() !== ch.toUpperCase();
//   return vir;
// }

// console.log(
//   isLetter('a'), // true
//   isLetter('B'), // true
//   isLetter('1'), // false
//   isLetter(','), // false
//   isLetter(' '), // false
// );

//-----------------------------------------------------------------

// function isWerewolf(target) {
//   let direct = '';
//   let reversed = '';

//   for (let ch of target) {
//     let vir = ch.toLowerCase() !== ch.toUpperCase();

//     if (vir === true) {
//       direct += ch.toLowerCase();
//       reversed = ch.toLowerCase() + reversed;
//     } 
//   }
//   console.log(direct);
//   console.log(reversed);

//   return direct === reversed;
// }

// console.log(isWerewolf('Rota ,tor rota tor'));
// console.log(isWerewolf('home to'));

//=====

// function isWerewolf(target) {
//   let direct = '';
//   let reversed = '';

//   for (let ch of target) {
//     if (ch.toLowerCase() !== ch.toUpperCase()) {
//       direct += ch.toLowerCase();
//       reversed = ch.toLowerCase() + reversed;
//     } 
//   }
//   console.log(direct);
//   console.log(reversed);

//   return direct === reversed;
// }

// console.log(isWerewolf('Rota ,tor rota tor'));
// console.log(isWerewolf('home to'));

//--------------------------------------------

// let ser = '1234567890';

// console.log(
//   ser.split(0, 1),
//   ser.split(2),
//   ser.split(1),

// );

// console.log(
  
//   ser.substring(0, 8),
//   ser.substring(2),
//   ser.substring(1, 4)

// );

// console.log(
  
//   ser.substr(3, 4),
//   ser.substr(3, 2),
//   // ser.substr(1, 4)
// );

//---------------------------------------------

// debugger;

// function isSpecialNumber(n) {
//   let str = `${n}`;

//   for (let i = 0; i < str.length; i++) {
//     if (Number(str[i]) > 5) {
//       return 'NOT!!';
//     }
//   }
  
//   return 'Special!!';
// }

// console.log(isSpecialNumber(16));

//===== MENTOR =====

// function isSpecialNumber(n) {
//   const check = n.toString();

//   for (let i = 0; i < check.length; i++) {
//     if (+check[i] > 5) {
//       return 'NOT!!';
//     }
//   }

//   return 'Special!!';
// }

// console.log(isSpecialNumber(16));

//-------------------------------------------------------

// function isTidy(n) {
//   let str = n.toString();

//   for (let i = 1; i < str.length; i++) {
//     if (+str[i - 1] > +str[i]) {
//       return false;
//     }
//   }

//  return true;
// }

// console.log(isTidy(18));

//===== MENTOR =====

// function isTidy(n) {
//   let prev = 0;

//   for (const digit of String(n)) {
//     if (prev > digit) {
//       return false;
//     }

//     prev = digit;
//   }

//   return true;
// }

// console.log(isTidy(012));

//===== AI =====

// function isTidy(n) {
//   let prev = -1; // Initialize prev to -1
//   for (const digit of String(n)) {
//     const currentDigit = Number(digit); // Convert digit to a number
//     if (prev > currentDigit) {
//       return false; // Compare as numbers
//     }
//     prev = currentDigit; // Update prev to the current digit
//   }
//   return true; // All digits are in non-decreasing order
// }

// console.log(isTidy(012));


//------------------------------------------

// function isJumping(n) {
//   if (n.length === 1) {
//     return 'JUMPING';
//   }

//   let str = n.toString();

//   for (let i = 1; i < str.length; i++) {
//     let res = Number(str[i]) - Number(str[i - 1]);

//     if ( res !== 1 && res !== -1 ) {
//       return 'NOT JUMPING';
//     }
//   }

//  return 'JUMPING';
// }

// console.log(isJumping(3432345));
// console.log(isJumping(2348));

//-------------------------------------------------------

// function makeAbbr(words) {
//   let abbreviation = words[0];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === ' ') {
//       abbreviation += words[i + 1];
//     }
//   }

//   return abbreviation.toUpperCase();
// }


// console.log(
//   makeAbbr('national aeronautics space administration')
// );

//--------------------------------------------------------------

// debugger;


// function scrollingText(word) {
//   let arr = [];
//   let out = word.toUpperCase();

//   for (let i = 0; i < out.length; i++) {
//     arr.push(out);
//     let result = out.slice(1) + out[0];
//     out = result;
//   }

//  return arr;
// }

// console.log(scrollingText('word'));
// console.log(scrollingText('robot'));


//===== MENTOR =====

// function scrollingText(word) {
//   const result = [];

//   for (let i = 0; i < word.length; i++) {

//     console.log(word.slice(i));
//     console.log(word.slice(0, i));

//     const part = word.slice(i) + word.slice(0, i);

//     result.push(part.toUpperCase());
//   }

//   return result;
// }

// console.log(scrollingText('rotator'));
// console.log(scrollingText('rot'));

//-----------------------------------------------------------

// function getDirection(direction) {

//   switch (direction) {
//     case 'forward':
//       return 'hor=0 ver=1';

//     default:
//               return 'hor=0 ver=0';        
//   }
  
  
// }

// console.log(
//   getDirection('forward'),
// );

// console.log(
//   getDirection('left'),
// );

//==========

// function getDirection(direction) {

//   switch (direction) {
//     case 'forward':
//       return 'hor=0 ver=1';

//     case 'back':
//       return 'hor=0 ver=-1';

//     case 'right':
//       return 'hor=1 ver=0';

//     case 'left':
//       return 'hor=-1 ver=0';

//     case 'stop':
//       return 'hor=0 ver=0';

//     default:
//       return 'hor=0 ver=0';      
//   }
  
// }

// console.log(
//   getDirection('forward')
// );

//-------------------------------------------------------

// function getName(count) {
//   switch (true) {
//     case (count < 2):
//       return 'One';

//     case (count <= 4):
//       return 'A few';

//     default:
//       return 'Many';  
//   }

// }

// console.log(
//   getName(4)
// );

//------------------------------------------------------

// function findCalculationType(a, b, res) {
//   if (res / b === a) {
//     return "multiplication";
//   } else if (res - b === a) {
//     return "addition";
//   } else if (res + b === a) {
//     return "subtraction";
//   } else if (res * b === a) {
//     return "division";
//   }
// }

// console.log(findCalculationType(3, 5, 15));

//============

// function findCalculationType(a, b, res) {
//   switch (a) {
//     case res / b:
//       return "multiplication";
//     case res - b:
//       return "addition";
//     case res + b:
//       return "subtraction";
//     case res * b:
//       return "division";
//   }

// }

// console.log(findCalculationType(3, 5, 15));

//===== MENTOR =====

// function findCalculationType(a, b, res) {
//   switch (res) {
//     case a - b:
//       return 'subtraction';

//     case a + b:
//       return 'addition';

//     case a / b:
//       return 'division';

//     case a * b:
//       return 'multiplication';
//   }
// }

// console.log(findCalculationType(3, 5, 15));

//--------------------------------------------------------

// function decodeSignal(input) {
//   switch (input) {
//     case false:
//       return 0;
//     case 0:
//       return 0;
//     case '':
//       return 0;
//     case NaN:
//       return 0;
//     case undefined:
//       return 0;
//     case null:
//       return 0;
//     case 0n:
//       return 0;
//     default: 
//       return 1;
//   }
// }

//============

// function decodeSignal(input) {
//   if (input) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(decodeSignal('abc'));
// console.log(decodeSignal(0n));
// console.log(decodeSignal(NaN));



//      ===== MENTOR =====
//=====    РЕАЛЬНО КРУТО    =====


// const decodeSignal = (input) => +!!input;



// console.log(decodeSignal('abc'));
// console.log(decodeSignal(0n));
// console.log(decodeSignal(NaN));


//-------------------------------------------------------

// function getWinner(maxSolved, romanSolved) {
//   let max = Number(maxSolved);
//   let roman = Number(romanSolved);

//   if (max > roman) {
//     return 'Max is the winner!!!';
//   } else if (max < roman) {
//     return 'Roman is the winner!!!';
//   } else {
//     return 'Roman and Maxim are the winners!!!';
//   }
// }

// console.log(getWinner(45, '42'));
// console.log(getWinner(45, '45'));
// console.log(getWinner('5', 48));


//============


// function getWinner(maxSolved, romanSolved) {
//   if (+maxSolved > +romanSolved) {
//     return 'Max is the winner!!!';
//   } else if (+maxSolved < +romanSolved) {
//     return 'Roman is the winner!!!';
//   } else {
//     return 'Roman and Maxim are the winners!!!';
//   }
// }

// console.log(getWinner(45, '42'));
// console.log(getWinner(45, '45'));
// console.log(getWinner('5', 48));



//              ===== MENTOR =====
//====  ВЕРТАЄ ПОРІВНЯННЯ ТЕРНАРНИМ ОПЕРАТОРОМ  ====



// const getWinner = (maxSolved, romanSolved) => {
//   if (+maxSolved === +romanSolved) {
//     return 'Roman and Maxim are the winners!!!';
//   }

//   return +maxSolved > +romanSolved ? 'Max is the winner!!!': 'Roman is the winner!!!';
// }

// console.log(getWinner(45, '42'));
// console.log(getWinner(45, '45'));
// console.log(getWinner('5', 48));

//--------------------------------------------------

// function canTheyBook(adultsCount, childrenCount) {

//   if (adultsCount + childrenCount > 8 || adultsCount > 8) {
//     return false;
//   }

//   if (adultsCount === 0) {
//     return false;
//   }

//   if (adultsCount * 2 < childrenCount) {
//     return false;
//   }

//   return true;
// }

// console.log(canTheyBook(1, 3));
// console.log(canTheyBook(5));
// console.log(canTheyBook(2, 4));


//      ===== MENTOR =====


// function canTheyBook(adultsCount = 0, childrenCount = 0) {
//   const hasEnoughSpace = adultsCount + childrenCount <= 8;
//   const hasAdult = adultsCount > 0;
//   const hasEnoughAdults = childrenCount <= 2 * adultsCount;

//   return hasEnoughSpace && hasAdult && hasEnoughAdults;
// }

// console.log(canTheyBook(1, 3));
// console.log(canTheyBook(5));
// console.log(canTheyBook(2, 4));

//------------------------------------------------------------

// function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {

//   if (adultsCount + childrenCount > 8 || adultsCount + childrenCount + babiesCount > 9 || adultsCount > 8) {
//     return false;
//   }

//   if (adultsCount === 0) {
//     return false;
//   }

//   if (adultsCount * 2 < childrenCount) {
//     return false;
//   }

//   if (adultsCount < babiesCount) {
//     return false;
//   }

//   if ((adultsCount * 2) < (childrenCount + babiesCount)) {
//     return false;
//   }

//   return true;
// }

// console.log(canTheyBook(1, 2));
// console.log(canTheyBook(8, 0, 8));
// console.log(canTheyBook(2, 1, 3));


//        ===== MENTOR =====


// function canTheyBook(
//   adultsCount = 0,
//   childrenCount = 0,
//   babiesCount = 0,
// ) {
//   // At least 1 adult
//   if (adultsCount < 1) {
//     return false;
//   }

//   // No more than 1 baby per adult
//   if (babiesCount > adultsCount) {
//     return false;
//   }

//   // No more than 2 childrend and babies per adult
//   if (childrenCount + babiesCount > 2 * adultsCount) {
//     return false;
//   }

//   const totalCount = adultsCount + childrenCount + babiesCount;

//   return (totalCount <= 8)
//       || (totalCount === 9 && babiesCount > 0);
// }

// console.log(canTheyBook(1, 2));
// console.log(canTheyBook(8, 0, 8));
// console.log(canTheyBook(2, 1, 3));


//-------------------------------------------------------------


// function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {

//   if (adultsCount + childrenCount > 8 || adultsCount + childrenCount + babiesCount > 9 || adultsCount > 8) {
//     return false;
//   }

//   if (adultsCount === 0) {
//     return false;
//   }

//   if (adultsCount * 2 < childrenCount) {
//     return false;
//   }

//   if (adultsCount < babiesCount) {
//     return false;
//   }

//   if ((adultsCount * 2) < (childrenCount + babiesCount)) {
//     return false;
//   }

//   let room;
//   let bed;

//   if (adultsCount + childrenCount > 4) {
//    room = 'big room';
//   } else {
//    room = 'small room';
//   }
  
//   if (babiesCount > 0) {
//    bed = ' + extra bed';
//   } else {
//     bed = '';
//   }

//   if (adultsCount + childrenCount + babiesCount === 4) {
//     bed = '';
//   }

//   if (adultsCount + childrenCount + babiesCount === 8) {
//     bed = '';
//   }
  
//   return `${room}${bed}`;
// }


// console.log(recommendRoom(5, 1, 1));
// console.log(recommendRoom(5, 1, 3));
// console.log(recommendRoom(2, 0, 1));



//        ===== MENTOR =====


// function recommendRoom(
//   adultsCount = 0,
//   childrenCount = 0,
//   babiesCount = 0,
// ) {
//   const totalCount = adultsCount + childrenCount + babiesCount;

//   if (totalCount <= 4) {
//     return 'small room';
//   }

//   if (totalCount === 5 && babiesCount > 0) {
//     return 'small room + extra bed';
//   }

//   if (totalCount <= 8) {
//     return 'big room';
//   }

//   // we are given only valid data, so we don't need to check it again
//   return 'big room + extra bed';
// }

// console.log(recommendRoom(5, 1, 1));
// console.log(recommendRoom(5, 1, 3));
// console.log(recommendRoom(2, 0, 1));



//-----Extended/Extended Extra/Color stones-------------
//------------------------------------------------------


// function colorStones(stones) {
//   let out = 0;

//   for (let i = 0; i < stones.length; i++) {
//     if (stones[i] === stones[i - 1]) {
//       out += 1;
//     }
//   }

//   return out;
// }

// console.log(colorStones('RRGB'));
// console.log(colorStones('RRRRGGGGBBBB'));


//-----Extended/Extended Extra/Find smaller digits/------
//------------------------------------------------------


// function countNextSmaller(numbers) {
//   let arr = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let count = 0;

//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[j] < numbers[i]) {
//         count ++;
//       }
//     }

//     arr.push(count);
//   }  

//   return arr;
// }

// console.log(countNextSmaller([5, 4, 3, 2, 1]));
// console.log(countNextSmaller([1, 1, -1, 0, 0]));
// console.log(countNextSmaller([5, 4, 7, 9, 2, 4, 4, 5, 6]));


//    ===== MENTOR =====


// function countNextSmaller(numbers) {
//   // we will put counts to this array later
//   const result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let smallerNumbersCount = 0;

//     // we iterate all the numbers after the current one
//     for (let j = i + 1; j < numbers.length; j++) {
//       // and count thouse that are less than the current one
//       if (numbers[j] < numbers[i]) {
//         smallerNumbersCount++;
//       }
//     }

//     // we save the number of smaller numbers to the resulting array
//     result.push(smallerNumbersCount);
//   }

//   return result;
// }

// console.log(countNextSmaller([5, 4, 3, 2, 1]));
// console.log(countNextSmaller([1, 1, -1, 0, 0]));
// console.log(countNextSmaller([5, 4, 7, 9, 2, 4, 4, 5, 6]));


//-----------------------------------------------------

// const robots = [
//   { coreVersion: 9 },
//   { coreVersion: 13 },
//   { coreVersion: 16 },
//   { coreVersion: 9 },
//   { coreVersion: 14 },
// ];

// // console.log(robots[3].coreVersion);  


// function getOutdated(robots, newVersion) {
//   let arrIndexRobots = [];

//   for ( let i = 0; i < robots.length; i++) {
//     if (newVersion > robots[i].coreVersion) {
//       arrIndexRobots.push(i);
//     }
//   }

//   return arrIndexRobots;
// }



// console.log(getOutdated(robots, 10));

// console.log(robots.coreVersion);



//-----Extended/Object Basics/restore names-------------
//------------------------------------------------------



// let users = [
//   {
//     firstName: 'Jack',
//     lastName: 'Holy',
//     fullName: 'Jack Holy',
//   },
//   {
//     lastName: 'Holy',
//     fullName: 'Jack Holy',
//   },
//   {
//     firstName: 'Mike',
//     lastName: 'Adams',
//     fullName: 'Mike Adams',
//   },
//   {
//     lastName: 'Adams',
//     fullName: 'Mike Adams',
//   },
// ];



// function restoreNames(users) {

//   for (let i = 0; i < users.length; i++) {

//     if (!(users[i].firstName)) {

//       // let indexSpace = users[i].fullName.indexOf(' ');
//       // let name = users[i].fullName.substring(0, indexSpace);

//       const name = users[i].fullName.split(' ');


//       users[i].firstName = name;
//     } 
//   }
// }

// console.log(users);


// console.log(restoreNames(users));


//   ===== MENTOR =====


// function restoreNames(users) {
//   for (const user of users) {
//     if (user.firstName) {
//       continue;
//     }

//     const parts = user.fullName.split(' ');

//     user.firstName = parts[0];
//   }
// }

// console.log(users);

// console.log(restoreNames(users));



//-----Extended/Object Basics/count boxes---------------
//------------------------------------------------------



// function countBoxes(boxes) {
//   if (boxes === '') {
//     return {};
//   }

//   let type = {};
 
//   for (let ch of boxes) {
//     if (type.hasOwnProperty(ch)) {
//       type[ch]++;
//     } else {
//       type[ch] = 1;
//     } 
//   }  

//   return type;
// }


// console.log(countBoxes('aaaabcc12'));


//   ===== MENTOR =====


// function countBoxes(boxes) {
//   const boxesCount = {};

//   for (const box of boxes) {
//     if (!boxesCount[box]) {
//       boxesCount[box] = 0;
//     }

//     boxesCount[box]++;
//   }

//   return boxesCount;
// };

// console.log(countBoxes('aaaabcc12'));



//-----Extended/Object Basics/get robot schema----------
//------------------------------------------------------



// const robot = {
//   version: 16,
//   name: 'Cleaner 3000',
//   released: true,
//   author: { name: 'Vlad' },
// };




// function getRobotSchema(robot) {
//   const copy = {};

//   for (const key in robot) {
//     copy[key] = typeof(robot[key]);
//   }

//   return copy;
// }

// console.log(getRobotSchema(robot));


//    ===== MENTOR =====


// function getRobotSchema(robot) {
//   const schema = {};

//   for (const key in robot) {
//     schema[key] = typeof robot[key];
//   }

//   return schema;
// }

// console.log(getRobotSchema(robot));

//----------------------------------------------------

// const char = {serialNo: 1, chipVer: 12};
// const lie = {serialNo: 2, chipVer: 12};


// console.log(Object.hasOwn(lie).length);


// const compareRobots = (robot1, robot2) => {

//   if (Object.hasOwn(robot1).length !== Object.hasOwn(robot2).length) {
//     return false;
//   }

  

//   for (const a in robot1) {
//     for (const b in robot2) {

//       // if (a === 'serialNo' && b === 'serialNo') {
//       //   continue;
//       // }
      
//       if (a !== b) {
//         return false;
//       }
      
//     }
//   }
//   console.log(robot1, robot2);

//   return true;
// };

// console.log(compareRobots(char, lie));




// const lordy = { serialNo: 2, chipVer: 12 };
// compareRobots(charlie, lordy); // true

// const paul = { serialNo: 3, chipVer: 15 };
// compareRobots(paul, charlie); // false

// const mike = { serialNo: 4, chipVer: 12, wheels: 1 };
// compareRobots(mike, charlie); // false

// const max = { serialNo: 5, engineVer: 12 };
// compareRobots(max, charlie); // false

// const steve = { serialNo: 6 };
// compareRobots(steve, charlie); // false


//-- JS Basic/Get Ready for the Interview/Decrypt Message
//-------------------------------------------------------

// debugger;

// function decryptMessage(message) {
//   let res = '';

//   for (let i = message.length - 1; i >= 0; i--) {
//     console.log(i.length);

//     res += message[i]; 
//   }

//   return res;
// }


// console.log(decryptMessage('a, b, c'));


//    ===== MENTOR =====


// function decryptMessage(message) {
//   let result = '';

//   for (let i = message.length - 1; i >= 0; i -= 1) {
//     result += message[i];
//   }

//   return result;
// }


// console.log(decryptMessage('repo'));

//--- JS Basic/Get Ready for the Intervie/is Sorted ---
//-----------------------------------------------------

// debugger;

// function isSorted(boxNumbers) {

//   for (let i = 1; i < boxNumbers.length; i++) {
//     if (boxNumbers[i] < boxNumbers[i - 1]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isSorted([1, 2, 3, 4, 5]));


//--------------- JS Basic ------------------------


// function removeVowels(doc) {
//   let vowels = 'aeiouy';
//   let result = '';

//   // for (let i = 0; i < doc.length; i++) {
//   //   if (!doc[i].includes(vowels)) {
//   //     result += doc[i];
//   //   }
//   // }

//   for (let ch of doc) {

//     if (!vowels.includes(ch.toLowerCase())) {
//       console.log(ch);
//       result += ch;
//     }

//   }

//   return result;
// }

// console.log(removeVowels('document'));
// console.log(removeVowels('I like my boss'));


//       =====  MENTOR  =====


// function removeVowels(doc) {
//   let result = '';

//   for (const ch of doc) {
//     if (!'aeiouy'.includes(ch.toLowerCase())) {
//       result += ch;
//     }
//   }

//   return result;
// }

// console.log(removeVowels('document'));
// console.log(removeVowels('I like my boss'));



//------------------  CW  --------------------



// function flickSwitch(arr){
//   if (arr === 0) {
//     return [];
//   } 

//   let result = [];
//   let start = true;
  
//   for (let ch of arr) {
    

    

//     if (ch === 'flick' || ch === false) {
//       start = false;
//     }

//     result.push(start);
    
//   }
  
//   return result;
// }

//====== ai

function flickSwitch(arr) {
  let isTrue = true;
  return arr.map(word => {
    if (word === 'flick') {
      isTrue = !isTrue;
    }
    return isTrue;
  });
}

// console.log(flickSwitch(['codewars', 'flick', 'code', 'wars', 'codewars', 'codewars',]));
// console.log(flickSwitch(['codewars', 'code', 'flick', 'wars']));

console.log(flickSwitch([[false, false, false, false]]));

// console.log(flickSwitch(['flick', 'codewars', 'code', 'wars', 'flick', ]));

//---------------------------------------------------

function repeatStr (n, s) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += s;
  }
  
  return str;
}

console.log(repeatStr(3, 'Hii+'));