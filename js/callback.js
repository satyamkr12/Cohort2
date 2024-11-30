// function calculator(a, b, Sumcallback) {
//   Sumcallback(a, b);
// }

// calculator(1, 2, (a, b) => {
//   console.log(a + b);
// });
// // var name = 'satyam';
// function hello() {
//   console.log("Hello");
// }

// // Set timeout function takes function and time as argument
// setTimeout(hello, 3000);

// CallBack

const firstTask = (callback) => {
  setTimeout(() => {
    console.log("First Task is Done");
    callback();
  }, 1000);
};

const secondTask = (callback) => {
  setTimeout(() => {
    console.log("Second Task is Done");
    callback();
  }, 1000);
};

const thirdTask = (callback) => {
  setTimeout(() => {
    console.log("Third Task is Done");
    callback();
  }, 1000);
};

firstTask(() => {
  secondTask(() => {
    thirdTask(() => {
      console.log("Done");
    });
  });
});
