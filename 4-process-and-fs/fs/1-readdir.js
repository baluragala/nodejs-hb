var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
let dir = "c:\\training\\nodejs-hb\\1-intro-to-node";

let result = [];
async function readFiles() {
  try {
    let files = await fs.readdirAsync(dir);
    console.log(files);
    for (let file of files) {
      console.log(file);
      //try {
      if (fs.lstatSync(dir + "\\" + file).isFile()) {
        let contents = await fs.readFileAsync(dir + "\\" + file);
        result.push(contents.toString());
      }
      //} catch (err) {
      //console.log(err);
      //}
    }
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

readFiles().then(function() {});

// fs.readdirAsync(dir).then(function(files) {
//   console.log(files);
// });

// fs.readdir(dir, function(err, files) {
//   if (err) {
//     console.log("Error", err);
//     return;
//   }
//   for (let file of files) {
//     let s = fs.stat(dir + "\\" + file, function(err, data) {
//       console.log(file, data);
//     });
//   }
// });

// let files;
// try {
//   files = fs.readdirSync(__dirname + "ddd");
// } catch (err) {
//   console.log(err);
// }
// console.log(files);
