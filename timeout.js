function doSomething() {
    console.log(2365);
}
console.log(7854);
setTimeout(doSomething,4000);
console.log(6325);
// setTimeout(() => {
//  console.log('see you letter')
// },4000)
setInterval(() => {
   console.log ('doing it')
}, 1000);
console.log(5668);
console.log(4582);

// There is a difference between setTimeout and setInterval:-
// 1.Being setTimeout will only be executed once.
// 2.setTimeout works in a asynchronous way.
// 3.setInterval means that the time will be given from time to time.
