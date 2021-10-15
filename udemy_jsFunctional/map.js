const numbersV1 = [4, 7, 98, 62, 175, 3,];
const numbersV2 = numbersV1.map(el => el * 2);

const notEven = el => el%2 != 0;

const greaterThanZero = el => el < 10;
const greaterThanTen = el => el > 10;
 
console.log(numbersV1.filter(notEven));
console.log(numbersV1.filter(el => el%2 === 0));

console.log(numbersV1.filter(greaterThanZero));
console.log(numbersV1.filter(greaterThanTen));

// console.log(numbersV2);

const alumni = [
    { name: 'Heloisa', media: 7.9 },
    { name: 'Elisa', media: 9.8 },
    { name: 'Brenner', media: 8.5 },
    { name: 'Emanoela', media: 8.8 },
    { name: 'Marcos', media: 6.3 }
]

const getMedia = el => el.media;
// console.log(getMedia);

const result = alumni
    .map(getMedia)
    .map(Math.ceil);

// console.log(result);

// por queeee???