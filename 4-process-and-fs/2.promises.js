// console.log(1);
// console.log(2);
// setTimeout(function() {
//   console.log(3);
//   console.log(4);
//   console.log(5);
//   setTimeout(function() {
//     console.log(6);
//     console.log(7);
//     console.log(8);
//     setTimeout(function() {
//       console.log(9);
//       console.log(10);
//       console.log(11);
//       setTimeout(function() {
//         console.log(12);
//         console.log(13);
//         console.log(14);
//       });
//     });
//   });
// });
let p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ message: "p1 data is available" });
  }, 3000);
});

let p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ message: "p2 data is available" });
  }, 3000);
});

let p3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({ message: "p3 data is available" });
  }, 3000);
});

let result = [];
// p1
//   .then(function(data) {
//     result.push(data);
//     return p2;
//   })
//   .then(function(data) {
//     result.push(data);
//     return p3;
//   })
//   .then(function(data) {
//     result.push(data);
//     console.log(result);
//   });

async function process() {
  let r1 = await p1;
  let r2 = await p2;
  let r3 = await p3;
  console.log(r1, r2, r3);
}

process();
