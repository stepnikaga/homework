const promise = new Promise((resolve, reject) => {
  resolve("siemka");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("siemka"), 5000);
})
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log("error", e);
  });
