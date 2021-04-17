// 1. Napisz funkcje (typy proste):

//    a) zwracającą sumę trzech liczb podanych w parametrach funkcji,
function add(number1, number2, number3) {
  return number1 + number2 + number3;
}

//    b) zwracającą pole trójkąta ze wzoru podstawa * wysokość / 2, która zwróci
//      'Pole trójkąta to x(zmienna tu powinna być), czyli ma on x długości podstawy i x
//       wysokości'
function poleTrojkata(x, h) {
  const pole = (x * h) / 2;
  return `Pole trójkąta to ${pole}, czyli ma on ${x} długości podstawy i ${h} wysokości`;
}

//    c) zwracającą ile aktualnie ktoś ma lat prawo jazdy na podstawie dwóch argumentów,
//      wieku danej osoby i wieku w którym to prawo jazdy zdał,
function ageDrivingLicense(ageNow, ageExam) {
  return ageNow - ageExam;
}

//    d) zwracającą ile zapłacimy za jazdę autem jeśli jako jeden parametr podamy spalanie
//      na 100km, a jako drugi przejechaną trasę,
function drivingCosts(fuelUse, distance) {
  return (fuelUse / 100) * distance;
}

//    e) zwracającą stringa 'Ala ma 23 lata i 2 dzieci', gdzie imię, wiek i ilość dzieci
//      podajemy w parametrach funkcji,
function person(firstName, age, children) {
  return `${firstName} ma ${age} lata i ${children} dzieci`;
}

// 2. Napisz funkcje (typy złożone):

//    a) zwracającą przekazaną do parametru tablicę,
const array = ["Ola", true, 12];
function returnArray(arr) {
  return arr;
}

//    b) zwracającą drugą wartość przekazanej do funkcji tablicy 3 elementowej,
function threeElement(arr) {
  return arr[1];
}

//    c) zwracającą stringa 'Przekazana tablica ma x elementów, a elementem nr 3 jest x'
function stringArr(arr) {
  return `Przekazana tablica ma ${arr.length} elementów, a elementem nr 3 jest ${arr[2]}.`;
}

//    d) dodaje elementy do stworzonej na zewnątrz funkcji pustej tablicy i zwraca już
//      zmienioną tablice z dodatkowym elementem,
arr2 = [];
function emptyArr(newElement) {
  arr2.push(newElement);
  return arr2;
}

//    e) zwracającą imię osoby przekazanej w obiekcie(powinien zawierać imię, nazwisko i wiek)
//       do funkcji,
const personData = {
  imie: "Mikołaj",
  nazwisko: "Rucki",
  wiek: 34,
  wzrost: 180,
};
function namePerson(name) {
  return name.imie;
}

//    f) zwracającą stringa 'imię(tu zmienna) i nazwisko(tu zmienna) ma x(tu zmienna) lat
//      i x(tu zmienna) cm wzrostu'
function returnString(dataPerson) {
  return `${dataPerson.imie}${dataPerson.nazwisko} ma ${dataPerson.wiek} lat i ${dataPerson.wzrost} cm wzrostu`;
}

//    g) przyjmującą dwa parametry jeden do obiekt a drugi to wiek, i zwracającą zmieniony
//      wiek, czyli wiek który przekazujemy w parametry zamieniamy z wiekiem w obiekcie,
function twoParameter(object, age) {
  object.changeAge = age;
  return object.changeAge;
}
console.log(object.changeAge);

// 3. Napisz funkcje (warunki if, else - typy proste):

//    a) która przyjmuje wiek osoby i informacje czy ma prawo jazdy, jeśli dana osoba
//      ma poniżej 18 lat to powinno wyświetlić, że 'Nie ma prawa jazdy'. Jak ma powyżej
//      18stu lat i nie ma prawka to też ma wyświetlić, ze 'Nie ma prawa jazdy'. A jak
//      ma powyżej 18stu lat i prawo jazdy to niech wyświetli, że "Możesz śmiało jeździć"
function driveLicense(age, hasLicense) {
  if (age > 18 && hasLicense === true) {
    return `Możesz śmiało jeździć`;
  } else if (age > 18 && hasLicense === false) {
    return `Nie ma prawa jazdy`;
  } else {
    return `Nie ma prawa jazdy`;
  }
}

//    b) przyjmuje jako parametr string, jeśli string jest równy 'Kup', niech wyświetli
//      'Widzę, że zrobić zakupy', a jak string jest równy 'Sprzedaj' niech wyświetli
//      'Możesz tutaj swobodnie sprzedawać', a jeśli nie będzie ani tym ani tym to niech
//      pokaże 'Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj'
function transactions(options) {
  if (options === `Kup`) {
    return `Widzę, że zrobić zakupy`;
  } else if (options === `Sprzedaj`) {
    return `Możesz tutaj swobodnie sprzedawać`;
  } else {
    return `Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj`;
  }
}

//    c) przyjmuje liczbę jak argument i zwraca string z informacja 'Liczba jest dodatnia',
//      'Liczba jest ujemna' lub 'Liczba jest równa 0'
function number(x) {
  if (x > 0) {
    return `Liczba jest dodatnia`;
  } else if (x < 0) {
    return `Liczba jest ujemna`;
  } else {
    return `Liczba jest równa 0`;
  }
}

//    d) przyjmującą liczbę jako argument i jeśli liczba jest podzielna przez 3 to niech
//      pokaże 'Fizz', jak podzielna jest przez 5 to 'Buzz', a jak przez 3 i 5 to 'FizzBuzz',
function acceptNumber(number) {
  if (number % 3 && number % 5) {
    return `FizzBuzz`;
  } else if (number % 3) {
    return `Fizz`;
  } else {
    return `Buzz`;
  }
}

//    e) napisz funkcję, która wyświetla czy osoba może obejrzeć film dla osób 15+, funkcja
//      powinna przyjąć dwa argumenty, wiek danej osoby i to czy ma zgodę rodziców, jeśli
//      ma powyżej 15 lat to może oglądać, jak ma poniżej ale ma zgodę rodziców też może
//      oglądać, a jak ma poniżej i nie ma zgody to nie może, wyświetli odpowiednie komunikaty,
//    W tych funkcjach napisz warunki używając ternary operatora!!

function film(age, acceptance) {
  return age >= 15 || acceptance
    ? `Możesz oglądać film`
    : `Film dozwolony od 15 l.`;
}

//    f) zwracającą 'Tak' jeśli jak argument podamy true i 'Nie' jeśli podamy false,
function question(answer) {
  if (answer === true) {
    return `Tak`;
  } else {
    return `Nie`;
  }
}
//    g) zwracającą informację czy podana jako argument liczba jest parzysta czy nie,
function evenUnpaired(number) {
  if (number % 2 === 0) {
    return `Liczba jest parzysta`;
  } else {
    return `Liczba jest nieparzysta`;
  }
}

// 4. Napisz funkcje(warunki if, else - typy złożone):

//    a) która przyjmuje obiekt car(model, marka, rok produkcji, isCabrio) i jeśli rok
//      produkcji jest większy niż aktualny rok to informacja, ze auta jeszcze nie wyprodukowano,
//      jak będzie rok poniżej aktualnego to wyświetlamy w zdaniu ładnie informacje o
//      aucie + informacje czy jest Cabrio czy nie jest,
const car1 = {
  marka: "Ford",
  model: "Focus",
  rokProdukcji: 2015,
  isCabrio: true,
};
function information(product) {
  if (product.rokProdukcji >= 2021) {
    return `Auto jeszcze nie zostało wyprodukowane`;
  } else {
    return `W ofercie posiadamy auto ${product.marka}, ${product.model}, ${
      product.rokProdukcji
    }. Auto ${product.isCabrio ? "jest kabrioletem" : "nie jest kabrioletem"}`;
  }
}

//    b) która przyjmuje tablicę jako parametr z dowolna liczbą elementów, jeśli tablica
//      jest pusta to zwracamy string pusta tablica, a jak nie to mamy zwrócić stringa
//      'tablica ma x elementów',
const arr3 = [a, b, c, d, e, f];
const arr4 = [];
function someArray(emptyOrNot) {
  return emptyOrNot.length > 0
    ? `Tablica składa się z ${emptyOrNot.length} elementów`
    : `Pusta tablica`;
}

//    c) przyjmuje dwa parametry, oba sa obiektami, jeden to osoba (imię, nazwisko, wiek, czyLubiCzytacKsiazki, maTV)
//      a drugi to książka (tytuł, rodzaj, ilość stron) i funkcja ta powinna zwrócić stringa
//      odpowiednio, jeśli osoba lubi czytać książkę to niech jej zaproponuje książkę z
//      obiektu: 'Cześć x(imie), polecam Ci przeczytać x(nazwa książki) książkę, ma tylko
//      (strony książki) stron', a jeśli nie lubi czytać, ale ma tv to niech zwróci
//      żeby 'Poszedł oglądać tv' lub po prostu jak nie ma 'Nie wiem co Ci zaproponować'
const person1 = {
  imię: "Agata",
  nazwisko: "Nowacka",
  wiek: 23,
  czyLubiCzytacKsiazki: true,
  maTv: true,
};

const book1 = {
  tytuł: "Słowik",
  rodzaj: "powieść historyczna",
  ilośćStron: 560,
};
function proposition(reader, kind) {
  if (reader.czyLubiCzytacKsiazki === true) {
    return `Cześć ${reader.imię}, polecam Ci przeczytać książkę pod tytułem ${kind.tytuł}, ma tylko ${kind.ilośćStron} stron.`;
  } else if (reader.czyLubiCzytacKsiazki === false && reader.maTv === true) {
    return `Proponuję obejrzeć TV`;
  } else {
    return `Nie wiem co Ci zaproponować`;
  }
}
