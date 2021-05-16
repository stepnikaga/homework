// W pliku jest lista marek samochodów znajdujących się w wypożyczalni samochodowej. Wypożyczalnia ta posiada bardzo dużo aut różnej marki,
// ilość tych aut w wypożyczalni ogólnie i aktualnie(auta aktualnie niewypożyczone) oraz cenę za dzień wynajmu. Za pomocą metod na tablicach:
// a) posortuj marki aut alfabetycznie,
// b) przefiltruj marki aut z ceną za dzień poniżej 400,
// c) posortuj marki aut cenowo od najmniejszej do największej,
// d) przefiltruj tą tablicę i pokaż tylko te marki w których wszystkie auta z posiadanych są dostępne,
// e) posortuj auta względem dostępnej ilości aut(od tych gdzie jest najwięcej aut do tych gdzie jest ich najmniej)
// f) sprawdź z której wypożyczalni będziemy mogli wynająć na 7 dni auto mając do dyspozycji 3500zł,
// g) ** Wskaż jakie auta są wypożyczane najczęściej i być może należy zaopatrzyć wypożyczalnie w więcej takich aut?
// (Chodzi o stosunek w danej marce aut dostępnych w wypożyczalni ogólnie i aktualnie, gdzie procentowo zostało
// ich teraz najmniej) Wskaż 3 najczęściej wypożyczane marki aut.
const rentalCarCompany = [
  {
    name: "audi",
    allCarsNumber: 70,
    carsToRent: 30,
    price: 140,
  },
  {
    name: "fiat",
    allCarsNumber: 120,
    carsToRent: 120,
    price: 90,
  },
  {
    name: "bwm",
    allCarsNumber: 50,
    carsToRent: 50,
    price: 430,
  },
  {
    name: "ferrari",
    allCarsNumber: 3,
    carsToRent: 1,
    price: 1200,
  },
  {
    name: "mustang",
    allCarsNumber: 13,
    carsToRent: 3,
    price: 650,
  },
  {
    name: "mercedes",
    allCarsNumber: 22,
    carsToRent: 12,
    price: 340,
  },
];
