/*
let js = "amazing";
//console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

//Camel case notation
let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let country = 'USA';
let continent = 'America';
let population = 333299583;

console.log(country);
console.log(continent);
console.log(population);




let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Alvarez'
console.log(lastName);


//Match operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Ibrahim';
const lastName = 'Alvarez';
console.log(firstName + ' ' + lastName);

//Assigment operators
let x = 10 + 5;
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1 = 101
x--; //x = x - 1 = 100
x--; //x = x-1 = 99
console.log(x);

//Comparison operators used to create boolean operators
console.log(ageJonas > ageSarah); //>, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

/*
//////////////////////////////////// Coding Challenge #1

//const markWeight = 78;
//const markHeight = 1.69;
//const johnWeight = 92;
//const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)

/////////////////////////////////////// 
Coding Challenge end 
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(jonasNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String 
with
multiple
lines`);


const age = 15;

if(age >= 18){
    console.log(`Sarah can start driving license 🚗`)

}else {
    const yearsLeft = 18 -age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21
}

console.log(century);
*/

/*
////////////////////// Coding Challenge #2

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

//const markWeight = 95;
//const markHeight = 1.88;
//const johnWeight = 85;
//const johnHeight = 1.76;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher that John's BMI (${johnBMI})`)
} else{
    console.log(`John's BMI (${johnBMI}) is higher that Mark's BMI (${markBMI}))`)
}

/////////////////// Coding Challenge #2 END
*/
/*
//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// console.log(Number('Jonas')); //Not a Number
console.log(String(23), 23)

//Type coercion
console.log('I am '+ 23 + ' years old') //numbers are converted to strings
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1 // 11
n = n - 1 // 11 - 1 =  10
console.log(n) 

let m = 2+3+4+'5';
console.log(m);

let o = '10' - '4' - '3' - 2+'5';
console.log(o);

//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 110;
if(money){
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job`);
}

let height =  0;
if(height){
    console.log(`YAY! Height is defined`)
} else {
    console.log(`Height is UNDEFINED`)
}


const age = '18';
if(age === 18) console.log('You just became an adult (STRICT)');

if(age == 18) console.log('You just became an adult (LOOSE)');

const favorite = Number(prompt("What's your favorite numer?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23){ // 23 === 23
    console.log(`Cool! ${favorite} is an amazing number!`)
} else if(favorite === 7){
    console.log(`${favorite} is also a cool number`)
} else {
    console.log('Number is not 23 or 7')
}

if(favorite !== 23){
    console.log('Why not 23?');
}


const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision); //AND
console.log(hasDriverLicense || hasGoodVision); //OR
console.log(!hasDriverLicense); //NOT

const shouldDrive = hasDriverLicense && hasGoodVision;

//if(shouldDrive){
//console.log('Sarah is able to drive!');
//} else {
//    console.log('Someone else should drive..')
//}

const isTired = false; //C
console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}


//Coding Challenge #3
const dolphinScore = 15 + 15 + 15;
const dolphinAVG = dolphinScore / 3;
console.log(`Dolphins average score is ${dolphinAVG}.`);

const koalasScore = 15 + 15 + 15;
const koalasAVG = koalasScore / 3;
console.log(`Koalas average score is ${koalasAVG}.`);

if(dolphinAVG > koalasAVG && dolphinAVG >= 100){
    console.log(`Dolphins are the WINNERS of the competition!`);
} else if(dolphinAVG > koalasAVG && dolphinAVG < 100){
    console.log(`Dolphins can't win because their score is less than 100: ${dolphinAVG}.`)
} else if(dolphinAVG === koalasAVG && dolphinAVG >= 100 && koalasAVG >= 100){   console.log(`There is a draw between the teams!`);
} else if(dolphinAVG === koalasAVG && dolphinAVG < 100 && koalasAVG < 100) { console.log(`Neither team can't win because their score is below 100.`)
} else if(koalasAVG > dolphinAVG && koalasAVG >= 100){
    console.log(`Koalas are the WINNERS of the competition!`);
} else{
    console.log(`Koalas can't win because their score is less than 100: ${koalasAVG}.`);
}

const day = 'Monday';

switch(day){
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

if(day === 'Monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day === 'Tuesday'){
    console.log('Prepare theory videos');
} else if(day === 'Wednesday' || day === 'Thursday') {
    console.log('Write code examples');
} else if(day === 'Friday'){
    console.log('Record videos');
} else if(day === 'Saturday' || day === 'Sunday'){
    console.log('Enjoy the weekend');
} else{
    console.log('Not a valid day')
}
*/

3 + 4 //This is an expression
1991 //This is an expression
true && false && !false //This is an expression

//This is an statement
if(33>10){
    const str = '23 is bigger'; //This is an expression
}

console.log(`I'm ${2037-1991} years old`);
//Hello this is a new comment
