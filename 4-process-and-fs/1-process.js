let isDelaySet = false;
console.log("working with process object");
process.on("exit", function() {
  console.log("Exiting");
});

process.on("beforeExit", function() {
  if (!isDelaySet) {
    isDelaySet = true;
    setTimeout(function() {
      console.log("delay");
    }, 3000);
  }
});
