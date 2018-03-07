const fs = require("fs");
fs.readdir(__dirname, function(err, files) {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log(files);
});

let files;
try {
  files = fs.readdirSync(__dirname + "ddd");
} catch (err) {
  console.log(err);
}
console.log(files);
