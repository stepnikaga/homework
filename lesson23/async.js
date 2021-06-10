// 1. Co oznacza, że kod może być asynchroniczny?
// Kod asynchroniczny to taki, który nie wykonuje się linijka po linijce.
// Jeśli część kodu zawiera w sobie dużą operację to zainicjuje się ale nie będzie czekał na jej zakończenie tylko przejdzie do dalszych poleceń.
// Gdy operacja się zakończy kod jest informowany i może się wykonać na danych, kóre tam występują.

// 2, 3. Pobierz tablicę postaci z powyższego endpointa i wyświetl ją w consoli za pomocą Promise.
// Dodaj zabezpieczenie do powyższego podpunktu tak aby w przypadku błędu wyświetlić w konsoli napis "Ups coś poszło nie tak!",
// przetestuj to dodając dowolne litery do enpointy aby był nieprawidłowy i sprawdź czy napis się wyświetli,

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => {
    console.log(error, "Ups..., cos poszło nie tak!");
  });

// 4. Zrób to samo co w punkcie 2 ale za pomocą async/await
const characterBoard = async () => {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const response = await data.json();
  console.log(
    response.results.forEach(({ name }) => {
      console.log(name);
    })
  );
};
characterBoard();
characterBoard().catch((res) => console.log(res, "UPS, cos poszlo nie tak"));

// 5. Znajdź  na stronie The Rick and Morty API  jak pobrać pojedyńczą postać i pobierz jedną postać w dowolny sposób,

const oneCharacterBoard = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/4");
  const data = await response.json();
  console.log(data);
};
oneCharacterBoard();
