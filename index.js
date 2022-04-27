//nodeJS is a single threaded async language

let a = 10,
  b = 0;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 3000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
