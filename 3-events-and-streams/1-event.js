// const events = require("events");
// const EventEmitter = events.EventEmitter;
// const ee = new EventEmitter();

const ee = new (require("events")).EventEmitter();
/*
1. emit - raise an event
2. on - to listen to event
*/

function handler1(args) {
  console.log("Got an event - sub1", args);
}

function handler2(args) {
  console.log("Got an event - sub2", args);
  if (args.message == "Good Day !!") {
    ee.removeListener("hello", handler3);
  }
}

function handler3(args) {
  console.log("Got an event - sub3", args);
}

ee.on("hello", handler1);
ee.on("hello", handler2);
ee.on("hello", handler3);

ee.emit("hello", { message: "Welcome to events" });
ee.emit("hello", { message: "Good Day !!" });
ee.emit("hello", 20);
ee.emit("hello", true);
