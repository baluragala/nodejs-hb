/*
    4 types
    1. readable
    2. writable
    3. transformable
    4. duplex
*/

const fs = require("fs");
const zlib = require("zlib");
const rstream = fs.createReadStream("data.txt");
//const wstream = fs.createWriteStream("copy-data-1.txt");

rstream.pipe(zlib.createGzip()).pipe(fs.createWriteStream("data.zip"));

// rstream.on("data", function(chunk) {
//   console.log(
//     "********************************************************",
//     chunk.length
//   );
//   wstream.write(chunk.toString());
//   //console.log(chunk.toString());
// });

// rstream.on("error", function(err) {
//   console.log(err);
// });

// rstream.on("end", function() {
//   console.log("done");
//   wstream.end();
// });

// rstream.on("close", function() {
//   console.log("stream closed");
//   wstream.close();
// });

// wstream.on("error", function(err) {
//   console.log("Error", err);
// });

// wstream.on("close", function(err) {
//   console.log("write close");
// });
