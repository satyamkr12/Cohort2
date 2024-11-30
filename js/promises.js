// // let promise = new Promise(function (resolve, reject) {
// //   // Asynchronous task goes here
// //   let success = true; // This can be based on some condition

// //   if (success) {
// //     resolve("Task completed successfully!");
// //     console.log("resolved"); // Fulfilled
// //   } else {
// //     reject("Something went wrong.");
// //     console.log("rejected");
// //   }
// // });

// // Promise Chaining

// function prepareData() {
//   return new Promise((resolve, reject) => {
//     console.log("Preparing Data");
//     setTimeout(() => {
//       resolve("Data is Ready !");
//     }, 2000);
//   });
// }

// function sendData(Data) {
//   return new Promise((resolve, reject) => {
//     console.log("Sending Data to the Server");
//     setTimeout(() => {
//       resolve(`Data Sent SuccessFully : ${Data}`);
//     }, 2000);
//   });
// }

// // Chain the Promises

// prepareData()
//   .then((data) => {
//     console.log(data);
//     return sendData(data); // return another promises
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promisifed function :- Promise inside the function and function returns the promise
// function promisified(duration) {
//   const promise = new Promise(function (resolve) {
//     resolve("Hi there !!");
//   });
//   return promise;
// }

// promisified(1000).then(function () {
//   console.log("Promise Resolved");
// });

let promise = new Promise((resolve, reject) => {
  let p = true;

  if (p) {
    resolve("True");
  } else {
    reject("False");
  }
});

promise
  .then((result) => {
    console.log("Promise Fulfilled");
  })
  .catch((error) => {
    console.log("Promise Rejected");
  });
