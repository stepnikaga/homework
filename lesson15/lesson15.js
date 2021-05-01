// 1. Napisz pętle, która:
// // a) wyświetli wartości od 1 do 9,
for (i = 1; i < 10; i++) {
  console.log(i);
}

// // b) wyświetli wartości od 9 do 1,
for (i = 9; i > 0; i--) {
  console.log(i);
}

// c) wyświetli wartości od 5 do 15,
for (i = 5; i < 16; i++) {
  console.log(i);
}

// d) wyświetli wartości od 0 do -10,
for (i = 0; i >= -10; i--) {
  console.log(i);
}

// e) wyświetli wartości od 1 do 20 zwiększając się co 2 w każdej iteracji,
for (i = 1; i < 21; i += 2) {
  console.log(i);
}

// f) wyświetli wartości od 10 do -10 zmniejszając się o 4 w każdej iteracji,
for (i = 10; i >= -10; i -= 4) {
  console.log(i);
}

// g) wyświetli wartości od 1 do 100 zwiększając liczbę co iterację mnożąc ją razy 2,
for (i = 1; i < 100; i *= 2) {
  console.log(i);
}

//  2. Napisz pętle, która:
// a) wyświetli wartości od 0 do 20, ale tylko liczby parzyste,
for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// b) wyświetli wartości od 0 do 20, ale tylko liczby nieparzyste,
for (i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// c) wyświetli wartości od 0 do 10, ale tam gdzie jest liczba parzystą pokaże napis liczba parzysta, a tam gdzie nie niech wyświetli napis liczba nieparzysta,
for (i = 0; i <= 10; i++) {
  i % 2 === 0
    ? console.log(i, `Liczba parzysta`)
    : console.log(i, `Liczba nieparzysta`);
}

// d) wyświetli liczby od 1 do 30 i tam gdzie liczba jest podzielna tylko przez 3 niech pokaze Fizz, tam gdzie przez 5 niech pokaże Buzz, a tam gdzie przez 3 i 5 niech wyświetli FizzBuzz, w reszcie przypadków niech pokaże po prostu cyfry,
for (i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
}

// e) wyświetli liczby od 100 do 0, ale zmniejszając się o 5 co iteracje i jak liczba jest podzielna przez 10 to niech doda obok napis "- podzielna przez 10",
for (i = 100; i >= 0; i -= 5) {
  i % 10 == 0 ? console.log(i, `- liczba podzielna przez 10`) : console.log(i);
}

// 3. Napisz funkcje, która:
// a) przyjmuje jako parametr liczbe do której wykona się pętla od 0,
function number(x) {
  for (i = 0; i <= x; i++) {
    console.log(i);
  }
}
number(20);

// b) przyjmuje jako parametr liczbe od której pętla się wykona do 15,
function numberStart(x) {
  for (i = x; i <= 15; i++) {
    console.log(i);
  }
}
numberStart(8);

// c) przyjmuje jako parametr liczbę wskazującą o ile ma się zwiększać pętla co iteracje i wyświetla taką pętle od 0 do 15,
function iteracja(x) {
  for (i = 0; i <= 15; i += x) {
    console.log(i);
  }
}
iteracja(2);

// d) przyjmuje dwa parametry, liczbę od której ma się pętla rozpocząć i do jakiej ma trwać,
function twoParameters(start, end) {
  for (i = start; i <= end; i++) {
    console.log(i);
  }
}
twoParameters(2, 30);

// e) przyjmuje trzy argumenty, pierwszy - liczba od której zaczynamy pętle, drugi - liczbę do której pętla ma trwać, trzeci -
// liczbę co ile ma się pętla zwiększać,
function threeParameters(a, b, c) {
  for (i = a; i <= b; i += c) {
    console.log(i);
  }
}
threeParameters(0, 40, 3);

// 4. Napisz funkcje, która:
// a) stwórz tablice 5 elementową i za pomocą pętli wypisz wszystkie jej elementy,
const arr = [1, 2, 3, 4, 5];
for (i = 1; i <= arr.length; i++) {
  console.log(i);
}

// b) stwórz tablice z kilkoma imionami i wyświetl "Cześć {imie}" za pomocą pętli dla każdego imienia,
const arr1 = ["Marta", "Ludwik", "Justyna", "Zosia", "Staś"];
function name() {
  for (i = 0; i < arr1.length; i++) {
    console.log(`Cześć ${arr1[i]}`);
  }
}
name();

// c) stwórz tablicę z obiektami, w każdym obiekcie niech będzie model auta i kolor, i wyświetl w stringu "Przed Wami stoi {kolor} {model}",
const arr3 = [
  {
    model: "Fiat",
    color: "żółty",
  },
  {
    model: "Opel",
    color: "czerwony",
  },
  {
    model: "Peugeot",
    color: "biały",
  },
  {
    model: "Honda",
    color: "czarny",
  },
];
function cars() {
  for (i = 0; i < arr3.length; i++) {
    console.log(`Przed Wami stoi ${arr3[i].color} ${arr3[i].model}`);
  }
}
cars();

// d) stwórz tablicę z 10 elementami, czyli cyframi od 1 do 10 i niech wyświetli ona tylko liczby parzyste z tej tablicy
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenNumbers() {
  for (i = 0; i <= arr4.length; i++) {
    if (arr4[i] % 2 == 0) {
      console.log(arr4[i]);
    }
  }
}
evenNumbers();

// e) ** stwórz tablice kilku elementową o różnych typach i wyświetl z tablicy tylko te elementy które są stringami,
const arr5 = [58, "Michał", true, "false", "5", 46, 7];
function onlyString() {
  for (i = 0; i < arr5.length; i++) {
    if (typeof arr5[i] === "string") {
      console.log(arr5[i]);
    }
  }
}
onlyString();


// f) ** stwórz tablice kilku elementową o różnych typach i wrzuć wszystkie elementy które w tej tablicy są numberami do nowej tablicy,
const arr6 = [58, "Ania", 34, true, "false", "5", 46, 7, 124];
const arr7 = [];
function emptyArr() {
  for (i = 0; i < arr6.length; i++) {
    if (typeof arr6[i] === "number") arr7.push(arr6[i]);
  }
}
emptyArr();
console.log(arr6);
console.log(arr7);


//  5. Napisz funkcję, która:
// a) przyjmuje tablicę liczb jako parametr i liczy sume elementów tej tablicy,
const arr8 = [3, 46, 7, 8];
function sumOfElements(sum) {
  let suma = 0;
  for (i = 0; i < sum.length; i++) {
    suma += sum[i];
  }
  console.log(suma);
}
sumOfElements(arr8);


// b) przyjmuje tablicę z numberami i z tego tworzy dwie nowe tablice z liczbami parzystymi i nieparzystymi,
const arr9 = [3, 46, 7, 8, 15, 22, 64];
function evenOddNumbers(array) {
  const evenNumbers = [];
  const oddNumbers = [];
  for (i = 0; i < array.length; i++) {
    array[i] % 2 == 0 ? evenNumbers.push(arr9[i]) : oddNumbers.push(arr9[i]);
  }
  console.log(`${evenNumbers}`);
  console.log(`${oddNumbers}`);
}
evenOddNumbers(arr9);


// / c) przyjmuje string jako parametr i jeśli string zawiera w sobie "y" niech wyświetli Jest!, a w inny przypadku Nie ma!
const word = "Moja praca domowa";
const word1 = "Mam nadzieję, że wykonam ją poprawnie";
const word2 = "W przeciwnym wypadku Bart&Mati nie będą zadowoleni";
function wordWithY(string) {
  if (string.includes("y") === true) {
    console.log("Jest!");
  } else {
    console.log("Nie ma!");
  }
  console.log(`${string}`);
}
wordWithY(word);
wordWithY(word1);
wordWithY(word2);


// d) przyjmuje liczbę jako parametr i wyświetla wynik mnożenia jej razy cyfry pomniejszone o 1 aż do 1ego, np.countResult(4) // 4 * 3 * 2 * 1 = 24. Przykładowy wynik 24
function multiple(number) {
  for (i = number - 1; i >= 1; i--) {
    number *= i;
  }
  console.log(number);
}
multiple(4);
multiple(3);
multiple(2);
multiple(1);



// e) Przyjmuje tablicę jako jeden parametr i string "number" lub "string" jako drugi parametr, w zależności od drugiego parametru niech funkcja
// dodaje do siebie elementu number lub string do siebie tworząc sumę lub jeden długi string, jeśli drugi parametr nie będzie sie zgadzał z "number"
// lub "string" to niech pokaże odpowiedni komunikat "Drugi parametr jest nieprawidłowy!", dodaj jeszcze zabezpieczenie jeśli tablica będzie pusta
const arrayNumbers = [3, 18, 242,]
const arrayString = ['jakiś', 'tam', 'tekst']
const arrayEmpty = []
function addElement(array, string) {

 for (i = 0; i < array.length; i++){

  }

// }nie mam pomysłu jak to poprowadzić dalej :-( Jak się douczę to dokończę.
  

// f) przyjmuje jako parametr tablicę obiektów. W każdym obiekcie powinno znajdować się: name, lastName, hasCar, hasDrivingLicence. Niech będzie
// to tablica z 4 osobami. Stwórz funkcję które przyjmie taką tablicę jako parametr i sprawdzi nam kto ma prawo jazdy i samochód i kto może Cię
// zabrać do domu z imprezy, niech również wyświetli odpowiedni komunikat jeśli ktoś ma prawko ale nie ma auta lub nie ma ani jednego ani drugiego,
const partyPeople = [
  {
    name: "Tomasz",
    lastName: "Nowicki",
    hasCar: true,
    hasDrivingLicence: true,
  },
  {
    name: "Anna",
    lastName: "Nowicka",
    hasCar: true,
    hasDrivingLicence: false,
  },
  {
    name: "Aga",
    lastName: "Salicka",
    hasCar: false,
    hasDrivingLicence: true,
  },
  {
    name: "Jan",
    lastName: "Krupiński",
    hasCar: false,
    hasDrivingLicence: false,
  },
];

function whoIsDriver(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i].hasCar === true && array[i].hasDrivingLicence === true) {
      console.log(
        `Hej ${array[i].name}, podobno masz prawko i samochód. Czy mógłbyś zabrać mnie do domu?`
      );
    } else if (
      array[i].hasDrivingLicence === true &&
      array[i].hasCar === false
    ) {
      console.log(
        `Sorry ${array[i].lastName}, wiem, że masz prawko, ale jak chcesz mnie odwieźć, jak nie masz samochodu?`
      );
    } else {
      console.log(
        `${array[i].name} ${array[i].lastName} chyba musimy zamówić Ubera :-)`
      );
    }
  }
}
whoIsDriver(partyPeople);

  
// g) przyjmuje jako parametr tablice i nowy element do tablicy. Funkcja ta powinna przeiterować tablice sprawdzając czy już taki element w niej jest
// jeśli go nie ma to dodać do tablicy, a jak jest to wyświetlić odpowiedni komunikat,
let arr10 = ["Ania", 43, true, 2];
function iteration(array, newElement) {
  for (i = 0; i < array.length; i++) {
    if (array.includes(newElement) === true) {
      console.log("Taki element już istnieje!");
    } else if (array.includes(newElement) === false) {
      console.log(array.push(newElement));
    }
  }
}
iteration(arr10, 2);
console.log(arr10);

// Największy problem sprawiło mi zad.5 pkt c,g. Chodzi o to, że przy consol.logu komunikat wyświetla się tyle razy ile jest elementów w tablicy.
// W związku z czym w pkt c zrezygnowałam z pętli for, natomiast w pkt g zostawiłam ją. Mam nadzieję, że uświadomisz mi co robię nie tak: -)
// BTW. Kahooty są super, ale chyba nie dla mnie. Jeszcze za dużo czasu potrzebuję na rozwiązanie zadania :-) Ale będę się starać :-)
