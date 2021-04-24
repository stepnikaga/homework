// // 1. Napisz funkcję na 2 sposoby, czyli przekazując parametry w formie listy i obiektu, Funkcje powinny dostawać podczas wywołania obiekt
// // car(zawierający marke, model, rokProdukcji) I wyświetlić dane o tym aucie w stringu, użyj do tego ``,

// // Funkcja z parametrem w formie listy
function listForm(brand, model, yearOfProduction) {
  return `Car ${brand}, ${model}, wyprodukowany w ${yearOfProduction} roku.`;
}
const car = {
  brand: `Citroen`,
  model: `C4`,
  yearOfProduction: 2019,
};
listForm(car.brand, car.model, car.yearOfProduction);

// Funkcja z parametrem w formie obiektu
function objectForm(obj) {
  return `Car ${obj.brand}, ${obj.model}, wyprodukowany w ${obj.yearOfProduction} roku.`;
}
objectForm(car);

// //2. Utworzony w powyższej funkcji obiekt zdestrukturyzuj poza funkcja tak aby można było dostać się do poszczególnych jego wartości,
// // bezpośrednio, zamiast wpisując car.model tylko aby można to było zrobić za pomocą samego model

const { brand, model, yearOfProduction } = car;
console.log(brand);
console.log(model);
console.log(yearOfProduction);

// // 3. Do funkcji w zadaniu pierwszym dodaj destrukturyzację wewnątrz funkcji, na parametrze obiektu i wstaw do stringa odpowiednie
// // zmienne już zdestrukturyzowane,
const { brand, model, yearOfProduction } = obj;
return `Car ${brand}, ${model}, wyprodukowany w ${yearOfProduction} roku.`;

// // 4. Pokaż mi swój przykład i napisz czym się różni inkrementacja z ++ przed zmienna, a ++ po zmiennej czyli let x = 5, ++x OD x++ ?

let x = 43;
console.log(x++);
// wyświetli liczbę 43
console.log(x);
// wyświetli liczbę 44

console.log(++x);
// wyświetli liczbę 44
console.log(x);
// wyświetli liczbę 44

// Inkrementacja z ++ po zmiennej powoduje zwiększenie wartości zmiennej o 1 w kolejnej linii.
// Inkrementacja z ++ przed zmienną powoduje zwiększenie wartości zmiennej o 1 od razu w tej samej linii.

// 5. Napisz funkcję o nazwie kosz, która będzie zawierała w sobie dwie funkcję, rzutZaDwaPkt i rzutZaTrzyPkt oraz stan czyli
// w obiekcie aktualnyWynik, ktory będzie się zaczynał od 0, każda funkcja wewnątrz powinna dodawać odpowiednio 2 i 3 do naszego
// stanu, zwróc z tej funkcji stan i obie funkcje aby móc ich użyć i zrób tak aby aktualnyWynik doszedł do wyniku 7,

function kosz() {
  let aktualnyWynik = {
    sumaPunktow: 0,
  };

  function rzutZaDwaPkt(rzutDwa) {
    const sum = rzutDwa * 2;
    return (aktualnyWynik.sumaPunktow += sum);
  }

  function rzutZaTrzyPkt(rzutTrzy) {
    const sum = rzutTrzy * 3;
    return (aktualnyWynik.sumaPunktow += sum);
  }

  return {
    aktualnyWynik,
    rzutZaDwaPkt: rzutZaDwaPkt,
    rzutZaTrzyPkt: rzutZaTrzyPkt,
  };
}
const counter = kosz();
counter.rzutZaDwaPkt(2);
counter.rzutZaTrzyPkt(1);
console.log(`${counter.aktualnyWynik.sumaPunktow}`);

// 6. Stwórz obiekt pralka, która zawiera nazwę, liczbę dostępnych funkcji oraz metodę wewnątrz o nazwę information która wyświetli
// nam dane o pralce czyli jaki to model i ile ma funkcji dostępnych,

const washingMachine = {
  name: `Samsung`,
  numberOfFunctions: 20,
  information() {
    console.log(`${this.name}, ${this.numberOfFunctions}`);
  },
};

// 7. Opisz w skrócie na czym polega różnica miedzy kopią, a referencja i stwórz swój własny przykład obrazujący tą różnice +
// jakie konkretnie typy danych są typami prostymi a jakie złożonymi?

// W przypadku kopii (czyli typu prostego) do zmiennej przypisywana jest konkretna wartość i każda zmienna ma swoją wartość.
// Typy danych w przypadku typu prostego to:
// * liczby
// * boolean
// * string
// * undefined
// * null

// Typy referencyjny różni się od kopii tym, że nie przypisujemy wartości tylko referencję, czyli adres do odpowiedniego obiektu w kórym znajduje się nasza wartość.
// Typy danych w przypadku typu złożonego to:
// * tablice
// * obiekty
// * funkcje

// przykład typu prostego:
let a = 12;
let b = a;
a = 10;
console.log(a); //10
console.log(b); //12

// W typie referencyjnym będzie to wyglądało następująco:
let a = { number: 12 };
let b = a;
a.number = 10;
console.log(a.number); //10
console.log(b.number); //10
