const NarutoUzumaki = require("./exercicio-classe.js");
const Naruto = new NarutoUzumaki();

Naruto.on("ficouCerto", vezes => {
    console.log(`O Naruto ficou certo ${vezes} vezes! Tô certo!`);
});

Naruto.ficouCerto("1000");