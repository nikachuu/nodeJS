const EventEmitter = require("events");
const event = new EventEmitter();

event.on("gatoMiou", function(evento) {
    console.log('O gato miou! Meow~ :3', `o nome do Evento é: ${evento.nomeDoEvento}` )
})

event.emit("gatoMiou", { nomeDoEvento: "gatoMiou" });