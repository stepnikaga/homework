// Zadanie projekt:

// Wersja podstawowa:
// a) Stwórz stronę index.html, do której dołączysz plik javascriptowy. W tym pliku pobierz jeszcze raz tablicę postaci
// za pomocą async await,

const characterBoard = async () => {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const response = await data.json();
  return response;
};
characterBoard();

// b) Z pobranej tablicy stwórz nową tablicę zawierającą pierwsze 10 postaci za pomocą filter lub splice,
const character10Board = async () => {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const json = await data.json();
  const initialTen = await json.results.splice(0, 10);
  console.log(initialTen);
};
character10Board();

// d) Pod tytułem dodaj opis który będzie zawierał informację "Wszystkich dostępnych postaci jest X"(tutaj gdzie X wyswietl
// liczbe wszystkich dostepnych postaci)
let page = 1;
let info = null;

const main = async () => {
  const $buttonPrev = document.getElementById("prev");
  const $buttonNext = document.getElementById("next");

  $buttonPrev.addEventListener("click", async (el) => {
    if (info.prev === null) {
      alert("Jesteś na pierwszej stronie");
      return;
    }
    page--;

    const characters = await allCharacters();
    info = characters.info;
    const $ilosc = document.getElementById("lista");
    $ilosc.innerHTML = null;
    character.results.forEach(allCharacters);
  });

  $buttonNext.addEventListener("click", async (el) => {
    if (info.next === null) {
      alert("Jesteś na ostatniej stronie");
      return;
    }
    page++;

    const characters = await allCharacters();
    console.log("characters", characters);
    info = characters.info;
    const $ilosc = document.getElementById("lista");
    $ilosc.innerHTML = null;
    characters.results.forEach(allCharacters);
  });

  const allCharacters = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const response = await data.json();
    return response;
  };

  function characterCard(data) {
    const $card = document.createElement("div");
    $card.classList = "card";

    const $img = document.createElement("img");
    $img.src = data.image;
    $img.alt = data.name;

    $card.appendChild($img);

    const $name = document.createElement("H4");
    $name.innerHTML = data.name;

    const $container = document.createElement("div");
    $container.classList = "container";

    const $status = document.createElement("H4");
    $status.innerHTML = data.status;

    $container.appendChild($name);
    $container.appendChild($status);
    $card.appendChild($container);

    const $lista = document.getElementById("lista");
    console.log($card);
    $lista.appendChild($card);
  }

  const characters = await allCharacters();
  characters.results
    .splice(0, 10)
    .map((characters) => characterCard(characters));

  const characters = await allCharacters();
  info = characters.info;
  const $ilosc = document.getElementById("ilosc");
  $ilosc.innerHTML = characters.info.count;

  console.log("char", characters);
  characters.results.forEach(allCharacters);

  // const $allPage = document.getElementById("wszystkie");
  // $allPage.innerHTML = 2;

  // const $buttonPrev = document.getElementById("prev");
  // $buttonPrev.addEventListener("click", async (el) => {
  //   const data = await fetch(
  //     "https://rickandmortyapi.com/api/character?page=1"
  //   );
  //   const json = await data.json();
  //   const $lista = document.getElementById("lista");
  //   $strona.innerHTML = 1;
  //   $lista.innerHTML = "";
  //   json.results.splice(0, 10).forEach((character) => characterCard(character));
  // });

  // const $buttonNext = document.getElementById("next");

  // $buttonNext.addEventListener("click", async (el) => {
  //   const data = await fetch(
  //     "https://rickandmortyapi.com/api/character?page=1"
  //   );
  //   const json = await data.json();
  //   const $lista = document.getElementById("lista");
  //   $strona.innerHTML = 2;
  //   $lista.innerHTML = "";
  //   json.results
  //     .splice(10, 10)
  //     .forEach((character) => characterCard(character));
  // });

  // const $buttonAlternative = document.getElementById("alternative");

  // $buttonAlternative.addEventListener("click", async (el) => {
  //   const data = await fetch(
  //     "https://rickandmortyapi.com/api/character?page=12"
  //   );
  //   const json = await data.json();
  //   const $lista = document.getElementById("lista");
  //   $lista.innerHTML = "";
  //   json.results.splice(13, 1).forEach((character) => characterCard(character));
  // });

  // function characterCard(data) {
  //   const $card = document.createElement("div");
  //   $card.classList = "card";

  //   const $img = document.createElement("img");
  //   $img.src = data.image;
  //   $img.alt = data.name;

  //   $card.appendChild($img);

  //   const $name = document.createElement("H4");
  //   $name.innerHTML = data.name;

  //   const $container = document.createElement("div");
  //   $container.classList = "container";

  //   const $status = document.createElement("H4");
  //   $status.innerHTML = data.status;

  //   $container.appendChild($name);
  //   $container.appendChild($status);
  //   $card.appendChild($container);

  //   const $lista = document.getElementById("lista");
  //   console.log($card);
  //   $lista.appendChild($card);
  // }

  // const character = await allCharacters();
  // character.results.splice(0, 10).map((character) => characterCard(character));
};
main();
