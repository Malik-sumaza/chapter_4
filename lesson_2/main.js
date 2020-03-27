// setTimeout(() => {
//   console.log("Five seconds");
// }, 5000);

// console.log("work");

// const myPromise = new Promise((resolve, reject) => {
//   resolve("This is a good result!");
//   reject("This is a bad result!");
// });
// console.log(myPromise);

// myPromise
//   .then(result => {
//     console.log(result, "SUCCESS");
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Цепочка promise

// const waitForFiveSeconds = function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Five seconds have passed");
//     }, 5000);
//   });
// };

// const waitForThreeSeconds = function(message) {
//   console.log(message);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Three seconds have passed");
//     }, 3000);
//   });
// };
// // waitForThreeSeconds().then(result => console.log(result));
// waitForFiveSeconds()
//   .then(waitForThreeSeconds)
//   .then(result => console.log(result));

// Работа с api

// const countryURL = "https://restcountries.eu/rest/v2/name/russia";
// const getAlpha = "https://restcountries.eu/rest/v2/alpha/";
// fetch(countryURL)
//   .then(response => response.json())
//   .then(data => console.log(data));

// const borderedCountries = async () => {
//   const response = await fetch(countryURL);
//   const data = await response.json();
//   data[0].borders.forEach(async item => {
//     const responseBorders = fetch(getAlpha + item);
//     const countryData = await (await responseBorders).json();
//     console.log(countryData);
//   });
// };
// borderedCountries();

// Error hadling

// try {
//   let some = getUnderfined();
// } catch (error) {
//   console.log(error);
// }

// console.log("work");

// fetch("http://localhost:3000/main")
//   .then(response => response.json())
//   .then(data => console.log(data));

// let form = $(".myForm");
// form.on("submit", function(e) {
//   e.preventDefaut();
//   $.ajax({
//     type: "post",
//     url: "http://localhost:3000/main",
//     data: form.serialize(),
//     success: function(data) {
//       console.log(data);
//     },
//     error: function(err) {
//       console.log(err);
//     }
//   });
// });

// let inp = $(".inp");
// let btnAdd = $(".btn-add");

// btnAdd.on("click", function() {
//   let obj = {
//     task: inp.val()
//   }
//   console.log(inp.val());
//   $.ajax({
//     type: "post",
//     url: "http://localhost:8000/tasks",
//     data: obj,
//     success: function(data) {
//       console.log(data);
//     },
//     error: function(err) {
//       console.log(err);
//     }
//   });
// });

// $.ajax({
//   type: "post",
//   url: "http://localhost:8000/tasks",
//   // data: obj
//   success: function(data) {
//     console.log(data);
//   },
//   error: function(err) {
//     console.log(err);
//   }
// })})
