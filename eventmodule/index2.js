const EvenetEmitter = require("events");
const event = new EvenetEmitter();

event.on("sayMyName", () => {
  // listening to the event
  console.log("Your name is Rishabh");
});

event.emit("sayMyName"); // creating a custom event

// The basic logic is that we create an event emitter and then we listen
// to that event emitter and then we emit that event emitter
//First Listennig to the event and then emitting the event

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok"); // emitting the event with status code 200 and mssg
