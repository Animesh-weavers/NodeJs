//nodeJS is a single threaded async language

let a=10,b=0;
setTimeout(() => {
  b=20;
}, 3000);
console.log(a+b);
