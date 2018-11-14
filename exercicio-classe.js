const EventEmitter = require("events");

class NarutoUzumaki extends EventEmitter {
    ficouCerto(vezes){
        console.log(`Vezes que o Naruto ficou certo: ${vezes}`);
        this.emit("ficouCerto", vezes)
    };
};
module.exports = NarutoUzumaki;