// 1. Napisz funkcje (typy proste):

//    a) zwracającą sumę trzech liczb podanych w parametrach funkcji,
function add(number1, number2, number3) {
  return number1 + number2 + number3;
}
const suma = add(3, 4, 5);
console.log(suma);

//    b) zwracającą pole trójkąta ze wzoru podstawa * wysokość / 2, która zwróci
//      'Pole trójkąta to x(zmienna tu powinna być), czyli ma on x długości podstawy i x
//       wysokości'
function poleTrojkata(x, h) {
  const pole = (x * h) / 2;
  return `Pole trójkąta to ${pole}, czyli ma on ${x} długości podstawy i ${h} wysokości`;
}
const pole = poleTrojkata(8, 12);
console.log(pole);

//    c) zwracającą ile aktualnie ktoś ma lat prawo jazdy na podstawie dwóch argumentów,
//      wieku danej osoby i wieku w którym to prawo jazdy zdał,
function ageDrivingLicense(ageNow, ageExam) {
  return ageNow - ageExam;
}
const age = ageDrivingLicense(40, 18);
console.log(age);

//    d) zwracającą ile zapłacimy za jazdę autem jeśli jako jeden parametr podamy spalanie
//      na 100km, a jako drugi przejechaną trasę,
function drivingCosts(fuelUse, distance) {
  return (fuelUse / 100) * distance;
}
const costRoute = drivingCosts(8, 143);
console.log(costRoute);

//    e) zwracającą stringa 'Ala ma 23 lata i 2 dzieci', gdzie imię, wiek i ilość dzieci
//      podajemy w parametrach funkcji,
function person(firstName, age, children) {
  return `${firstName} ma ${age} lata i ${children} dzieci`;
}
const person1 = person("Ala", 23, 2);
console.log(person1);

// 2. Napisz funkcje (typy złożone):

//    a) zwracającą przekazaną do parametru tablicę,
arr = ["Ola", true, 12];
function returnArray(arr) {
  return arr(arr);
}
console.log(arr);

//    b) zwracającą drugą wartość przekazanej do funkcji tablicy 3 elementowej,
function threeElement(arr) {
  return arr[1];
}
console.log(arr[1]);

//    c) zwracającą stringa 'Przekazana tablica ma x elementów, a elementem nr 3 jest x'
function stringArr(arr) {
  return `Przekazana tablica ma ${arr.length} elementów, a elementem nr 3 jest ${arr[2]}.`;
}
console.log(stringArr(arr));

//    d) dodaje elementy do stworzonej na zewnątrz funkcji pustej tablicy i zwraca już
//      zmienioną tablice z dodatkowym elementem,
// arr2 = [];
// function emptyArr(newElement) {
//   arr2.push(newElement);
//   return arr2;
// }
// console.log(emptyArr(newElement));

//    e) zwracającą imię osoby przekazanej w obiekcie(powinien zawierać imię, nazwisko i wiek)
//       do funkcji,
const personData = {
  imie: "Mikołaj",
  nazwisko: "Rucki",
  wiek: 34,
  wzrost: 180,
};
function namePerson(name) {
  return name(imie);
}

//    f) zwracającą stringa 'imię(tu zmienna) i nazwisko(tu zmienna) ma x(tu zmienna) lat
//      i x(tu zmienna) cm wzrostu'
function returnString(dataPerson) {
  return `${dataPerson.imie}${dataPerson.nazwisko} ma ${dataPerson.wiek} lat i ${dataPerson.wzrost} cm wzrostu`;
}
console.log(returnString(dataPerson));
//    g) przyjmującą dwa parametry jeden do obiekt a drugi to wiek, i zwracającą zmieniony
//      wiek, czyli wiek który przekazujemy w parametry zamieniamy z wiekiem w obiekcie,
