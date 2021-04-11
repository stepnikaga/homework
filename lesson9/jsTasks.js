// 1. Stwórz zmienną:
// a) typu string o nazwie name i wartości 'Karol',
const name = "Dominika";

// b) typu number o nazwie age i wartości 40,
const age = 40;

// c) typu boolean o nazwie isOpen i wartości true,
const isOpen = true;

// d) typu string o nazwie stringBoolean o wartości true,
const stringBoolean = "true";

// e) typu string o nazwie stringNumber o wartości 100,
const stringNumber = "100";

// 2. Zrób consol.log dla wartości:
// a) 'Michał'
console.log("Michał");

// b) 'Hello Ania'
console.log("Hello Ania");

// c) 4
console.log("4");

// d) false
console.log(false);

// 3. Zrób consol.log dla każdej zmiennej z zadania pierwszego,
console.log(name);
console.log(age);
console.log(isOpen);
console.log(stringBoolean);
console.log(stringNumber);

// 4. Napisz console.log, w którym wyświetlisz w konsoli:
// a) wynik dodawania 2 + 2,
console.log(2 + 2);

// b) wynik dodania dwóch stringów 'Michał ' + 'Kowalski',
console.log("Michał" + "Kowalski");

// c) wynik równania 2 + 2 * 2,
console.log(2 + 2 * 2);

// 5. Dodawanie dwóch cyfr(dowolnie wybranych) do zmiennej, później zrób consol.log tej zmiennej,
// aby wyświetliło się w następujący sposób: 'wynik', 4 <--- (4 to przykładowa wartość zmiennej)
let number = 5;
let number2 = 8;
let sum = number + number2;
console.log("wynik", sum);

// 6. Stwórz zmienną typu let i zmień jej wartość dwa razy, a następnie zrób consol.log ostatecznej
// wartości tej zmiennej,
let product = "cukier";
product = "kasza";
product = "mąka";
console.log(product);

// 7. Napisz funkcje, która:
// a) zwraca wynik dodawania 2 + 2 (bez parametrów)
function add2() {
  return 4;
}
// b) zwraca string 'Hello World!' (bez parametrów)
function helloString() {
  return "Hello World!";
}
// c) zwraca wartość true (bez parametrów)
function booleanTrue() {
  return true;
}
// d) zwraca reszte z dzielenie 6 przez 4,
function modulo() {
  return 6 % 4;
}
// e) zwraca wynik równania 3 do potęgi 4tej,
function power() {
  return 3 ** 4;
}
// f) zwraca 'Hello, ' + 'how are you?'
function howAreYou() {
  return "Hello," + "how are you?";
}
// g) zwraca wynik mnożenia 5 przez 60
function multiple() {
  return 5 * 60;
}
// h) zwraca wynik mnożenia 3 przez 3600,
function multiple2() {
  return 3 * 3600;
}
// i) zwraca wynik działania 10 * 9 / 2
function multipleDivide() {
  return (10 * 9) / 2;
}
// j) zwraca wynik odejmowania 10 od 200stu,
function minus() {
  return 200 - 10;
}

// 8. Stwórz tablicę:
// a) 3 elementową z cyframi od 1 do 3
const numbers = [1, 2, 3];

// b) 5 elementową z markami aut,
const cars = ["Ford", "Audi", "Mercedes", "Subaru", "Toyota"];

// c) 3 elementową składającą się z wartości true, false i true
const boolean = [true, false, true];

// d) pustą tablicę,
const emptyArray = [];

// e) składającą się z 5 dowolonych wartości z pomieszanymi typami,
const any = [true, "odebrane", 45, false, "141"];

// f) zrób console.loga w którym z powyższej tablicy wyświetlasz wartość która jest w drugiej
// kolejności od początku,
console.log(any[2]);
// w moim przypadku to 45

// g) *** Jaka właściwość i jak użyta słuzy do wyświetlenia długości tablicy? Stwórz własną tablicę
// z 3 elementami i wyświetl za pomocą consol.log jej długość,
const myBoard = ["js", 56, false];
console.log(myBoard.length);

// h) *** Czy wiesz jak stworzyć pustę tablicę ? dodać do niej losową wartość i wyświetlić za pomocą
// console.loga już zmienioną tablicę?
let emptyBoard1 = [];
emptyBoard1.push("jakaś zmiana");
console.log(emptyBoard1);

// 9. Stwórz obiekt:
// a) pusty obiekt,
const emptyObject = {};
// b) obiekt o nazwe person zawierający klucz name i jego wartość 'Iza',
const person = {
  name: "Iza",
};
// c) obiekt o nazwe personDetails zawierający dane o osobie jak name, lastName, age, drivingLicence
// gdzie ten ostatni powinien być booleanem, w zależności od tego czy osoba ma prawo jazdy czy nie
const personDetails = {
  name: "Daniel",
  lastName: "Bogucki",
  age: 39,
  drivingLicence: true,
};

// d) z obiektu personDetails zrób consol.log samego wieku,
console.log(personDetails.age);

// e) zrób console.log całego obiektu,
console.log(personDetails);

//10.  Napisz te same funkcje co wyżej ale dodając wartości jako argumenty podczas wywołania funkcji, czyli:
// a) dodającą dwie liczby,
function addNumber(a, b) {
  return a + b;
}
// b) wyświetlającą podany podczas wywołania napis,
function inscription(loren) {
  return loren;
}
// c) zwracającą true lub false w zależności od podania tej wartości jako argument,
function boolean(bool) {
  return bool;
}
// d) zwracającą resztę z dzielenie dwóch liczb,
function modulo2(a, b) {
  return a % b;
}
// e) zwracającą liczbę do braną do potęgi podanej jako drugi argument,
function power2(a, b) {
  return a ** b;
}
// f) zwracającej dwa złączone stringi podane w dwóch argumentach,
function twoString(firstString, secondString) {
  return firstString + secondString;
}
// g) taką która jako argument przyjmuje ilość minut i zamienia je na sekundy,
function minutesToSeconds(minutes) {
  return minutes * 60;
}
// h) taką która jako argument przyjmuje ilość godzin i zamienia je na sekundy,
function hoursToSeconds(hours) {
  return hours * 3600;
}
// i) taką która liczy pole trójkatą czyli jako argumenty podajemy wysokość i szerokość trójkąta
// i w ciele funkcji korzystamy ze wzoru a * b * 0.5,
function triangle(a, b) {
  return a * b * 0.5;
}
// j) która zamienia lata na dni(przyjmując, że rok ma 365dni)
function yearsToDays(years) {
  return years * 365;
}
// k) która liczbe podaną w argumencie bierze do potęgi tej samej co liczbą podana jako argument,
function power3(a) {
  return a ** a;
}
// l) która obliczy dłuższy bok trójkąta posługując się tym wzorem (side1 + side2) - 1
// Pamiętaj aby można było podmienić cyfry podczas wywołania na dowolne,
function areaTriangle(side1, side2) {
  return side1 + side2 - 1;
}
// m) która po wpisaniu imienia jak argument podczas wywołania, wyświetli przywitanie,
// czyli, np. hello('Iza') -> 'Cześć, Iza!'
function helloString2(name) {
  return "Cześć," + name + "!";
}
// n) która poda nam wiek osoby na podstawie podanego roku urodzenia w argumencie
// podczas wywołania,
function personAge(yearOfBirth) {
  return 2021 - yearOfBirth;
}
// o) która przyjmuje dwa parametry, pierwszy to liczba rzutów za 2 punkty, a drugi to liczba rzutów
// za trzy punkty i na podstawie podanych parametrów obliczy ilość punktów zdobytych przez gracza.
function playerPoints(twoPointTrow, treePointTrow) {
  return twoPointTrow * 2 + treePointTrow * 3;
}
// Dla mnie to było ogromne wyzwanie i aż wstyd przyznać ile czasu na to poświęciłam. Chyba muszę jeszcze dużo ćwiczyć, bo wielu rzeczy nie jestem do końca pewna.
