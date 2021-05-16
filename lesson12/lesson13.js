// // function obliczCene(name, price, vat) {
// //   const totalPrice = price + (price * vat) / 100;
// //   return `Cena produktu ${name} to ${totalPrice}`;
// // }

// // console.log(obliczCene("Książka taka sobie", 80, 23));
// // console.log(obliczCene("Książka casaf", 120, 8));
// // console.log(obliczCene("Książka JS", 35, 23));

// // obliczCene(`książka JS`, 100, 23)
// const stawkiVAT = {
//   ksiazka: 8,
//   szkolenie: 23,
//   hotel: 23,
//   Paradise: 14,
// };
// // {name, type, price}
// function obliczCene(obj) {
//   // console.log(obj.type);
//   const stawkaVAT = stawkiVAT[obj.type];
//   const totalPrice = obj.price + (obj.price * stawkaVAT) / 100;
//   return `Cena produktu ${obj.type} ${obj.name} to ${totalPrice} PLN`;
// }
// const produktu = {
//   name: `Paradise`,
//   price: 100,
//   type: `hotel`,
// };
// const produktu2 = {
//   name: `Mazowsze`,
//   price: 500,
//   type: `hotel`,
// };
// const produktu3 = {
//   name: `Mariot`,
//   price: 1000,
//   type: `hotel`,
// };
// const produktu4 = {
//   name: `Radisson`,
//   price: 1000,
// };

// console.log(obliczCene(produktu));
// console.log(obliczCene(produktu2));
// console.log(obliczCene(produktu3));
// console.log(obliczCene(produktu4));

function licznik() {
  let ile = 0;

  function zwieksz() {
    ile = ile + 1;
  }

  function zmniejsz() {
    ile = ile - 1;
  }
  // zwieksz();
  // zmniejsz();
  // console.log(`ile`, ile);
  // return {
  //   valeu: ile,
  //   increase: zwieksz,
  //   decrease: zmniejsz,
  // };

//   return {
//     ile,
//     zwieksz,
//     zmniejsz,
//   };
// }

// const counter = licznik();
// console.log(counter);
