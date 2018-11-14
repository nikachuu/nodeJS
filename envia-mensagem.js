const EventEmitter = require("events");
// const events = new EventEmitter();

// function enviar(mensagem) {
//     console.log("Enviando mensagem:", mensagem);
//     events.emit("mensagemEnviada", mensagem);
// };

// module.exports.enviar = enviar;
// module.exports.events = events;

class EnviaMensagem extends EventEmitter {
    enviar(mensagem) {
        console.log(`Enviando mensagem "${mensagem}"`);
        this.emit("mensagemEnviada", mensagem);
    };
};

module.exports = EnviaMensagem; // normalmente se exporta a classe inteira herdando o EventEmitter
