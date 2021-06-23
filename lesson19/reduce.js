const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. zwróć sumę wszystkich elementów znajdujących się w tablicy,
const sum = array.reduce((prev, next) => prev + next);
console.log(sum);

// 2. zwróć sumę wszystkich parzystych elementów tablicy,

const evenSum = array.reduce((acc, item) =>
  item % 2 == 0 ? (acc += item) : acc
);
console.log(evenSum);

// 3. zwróć sumę wszystkich elementów tablicy + 10(10 dodaj za pomocą initialValue)
const sum2 = array.reduce((prev, next) => prev + next, 10);
console.log(sum2);

// 4. Napisz czym będzie accumulator jak nie podamy initialValue, a czym będzie jak podamy initialValue,
//  Accumulator jest pierwszą wartością tablicy lub nową wartością dodaną do początku tablicy.
// Jeśli podamy initialValue to stanie się automatycznie accumulatorem.

// 5. Jeśli podamy initialValue w tablicy to jaki index będzie miał prawdziwy pierwszy element naszej tablicy ?
// Jeśli podamy initialValue to prawdziwy pierwszy element tablicy będzie miał index 0.

// 6. Napisz pętle for która będzie miała takie samo działanie jak pętla reduce(pokazane było na live)
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

// // Some i every:
const someArray = [11, 3, 5, 31, 31, 54, 23, 14];

// 7. zwróć true jeśli tablica zawiera chociaż jeden element większy niż 50,
const someArray2 = someArray.some((item) => item > 50);
console.log(someArray2);

// 8. zwróć true jeśli w tablicy każdy element jest większy od 2,
const everyArray = someArray.every((item) => item > 2);
console.log(everyArray);

// 9. Jaka jest różnica między some i every?
// Metoda some zwróci true jeśli jakikolwiek element spełni warunek. Every zwróci true jeśli każdy element spełni warunek.

// 10. sprawdz czy tablica zawiera element podzielny przez 7 i jeśli tak to niech wyświetli w konsoli informacje, że
// w tablicy znajduje się element podzielny przez 7,
const someArray3 = someArray.some((item) =>
  item % 7 == 0
    ? `W tablicy ${someArray} znajduje się element podzelny przez 7.`
    : `W tablicy ${someArray} nie ma elementów podzielnych przez 7.`
);
console.log(`W tablicy ${someArray} znajduje się element podzelny przez 7.`);

// 11. stwórz metodę some za pomocą pętli for,
for (let i = 0; i < someArray.length; i++) {
  let sum = 5;
  if (someArray[i] > sum) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// 12. stwórz metodę every za pomocą pętli for,
const array = [1, 2, 3, 4, 5];
let result = true;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 === false) {
    result = false;
  }
}
console.log(result);

// Funkcje i metody reduce, some i every
// Stwórz funkcję, która:

// 13. przyjmuje tablicę jako parametr i sumuje nam elementy typu number z tej tablicy(użyj typeof),
const mixedArr = [15, true, 32, "tak", 1];

function sumItems(array) {
  const suma = array
    .filter(function numbers(item) {
      if (typeof item === "number") {
        return true;
      }
    })
    .reduce(function sum(prev, next) {
      return prev + next;
    });
  console.log(suma);
}
sumItems(mixedArr);

// // 14. przyjmuję dwa parametry (tablicę oraz wartość initialValue), a następnie odejmuje nam każdy kolejny element
// // tablicy od następnego,

const array2 = [50, 13, 12, 3];

function subtraction(item, initialValue) {
  const score = item.reduce((acc, value) => {
    return acc - value;
  }, initialValue);
  console.log(`suma wszystkich odjętych elementów tablicy`, score);
  return score;
}
subtraction(array2, 120);

// 15. przyjmuję dwa parametry(tablice i wartość, której szukamy w tej tablicy). Funkcją powinna nam zwrócić true
// jeśli w tablicy znajdzie się ta wartość,

const arr5 = [15, "Iza", true, 33, 58, "tak"];
const searcheValeu = (arr, value) => arr.includes(value);

console.log(searcheValeu(arr5, 58));

// Prototypy:

// 16. Stwórz funkcję konstruktora, która stworzy nam obiekt samochód z właściwościami:
// (model, yearOfProduction, color, drive()) i stwórz dwa samochody tym konstruktorem,

const car = function (model, yearOfProduction, color) {
  this.model = model;
  this.yearOfProduction = yearOfProduction;
  this.color = color;
  this.drive = () => {
    console.log(`Jedziesz samochodem ${model}`);
  };
};
const Ford = new car("Focus", 2015, "srebrny");
const Citroen = new car("C4", 2020, "czarny");
console.log(Ford);

// 17. Co robi słówko kluczowe New i kiedy możemy go użyć?
// Poprzez dodanie operatora new możemy tworzyć nowe obiekty,
// które będą miał takie właściwości jakie podaliśmy w argumentach funkcji konstruktora.

// 18. Za pomocą prototype dodaj dwie funkcje do konstruktora car, tankFuel i stop, które będą
// wypisywać w konsoli dowolny napis
car.prototype.tankFuel = function () {
  console.log(`Zatankuj ${this.color} samochód`);
};
car.prototype.stop = function () {
  console.log(`Zatrzymaj ${this.model} `);
};

Citroen.tankFuel();
Ford.stop();

// Nie do końca ogarniam te tematy, chyba potrzebuję więcej ćwiczeń, żeby poczuć się pewniej w tych zadaniach./
