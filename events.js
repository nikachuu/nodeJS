const EventEmitter = require("events"); // importar a utilizacao do modulo de eventos
const event = new EventEmitter();

event.on("mensagemEnviada", function () { // ouvir o evento
    console.log("Ouvi esse evento!");
});

event.emit("mensagemEnviada"); // emitir o evento que será ouvido no .on, pode receber como segundo parametro um dado pra ser recebido

// quando a chave de um objeto é uma função, ele na verdade se chama MÉTODO

