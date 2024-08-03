import EventEmitter from "events";

class myEmitter extends EventEmitter {}
const emitter = new myEmitter();

// example 1
// Register Event Listener
emitter.on("event", () => {
  console.log("an event occurred");
});

// Trigger Event
emitter.emit("event");
emitter.emit("event");

// example 2
// Register Event Listener
let a = 0;
emitter.on("event1", () => {
  console.log(++a);
});

emitter.emit("event1");
emitter.emit("event1");


// example 3
// Register Event Listener
let b = 0;
emitter.once("event2", () => {
  console.log(++a);
});

emitter.emit("event2");
emitter.emit("event2");

/*
on() - When a listner using the on() method,that listener is invoked every time the named event is emitted. on() method is used to register listeners.
⁡⁢⁣⁢Syntax : on(eventName.callback)⁡

once() - When a listener is registered using the once() method,it is possible to register a listener that is called at most once for a particuular event. Once the event is emitted ,the listener is unregistered and then called.
⁡⁢⁣⁢Syntax : once(eventName,callback)⁡

emit() - The emit() method allows an arbitray set of arguments to be passed to the listener functions. emit() method is used to trigger the event.
⁡⁢⁣⁢Syntax : emit(eventName,args)⁡
*/
