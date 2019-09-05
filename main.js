//Array of names was taken from stack overflow
const maleNames =  ["aaron", "abdul", "abe", "abel", "abraham", "adam", "adan", "adolfo", "adolph", "adrian"];

const lastNames =  ["abbott", "acosta", "adams", "adkins", "aguilar"];

//Watched youtube video on learning how to create a random name generator using Codepen
//https://www.youtube.com/watch?v=J3MIQTxV8-c
const getRandomNumber = (max) => Math.floor(Math.random() * max);


const getRandomName = () => `${maleNames[getRandomNumber(maleNames.length)]} ${lastNames[getRandomNumber(lastNames.length)]}`;

const setRandomName = () => {
document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();