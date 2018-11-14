// const enviaMensagem = require("./envia-mensagem.js");

// enviaMensagem.events.on("mensagemEnviada", mensagem => {
//     console.log(`A mensagem "${mensagem}" foi enviada com sucesso!`);
// });


// enviaMensagem.enviar("Olá, mundo!");

// os dois arquivos nao estao falando da mesma instancia no caso acima...

const enviaMensagem = require("./envia-mensagem.js");
const mensagem = new enviaMensagem();


mensagem.on("mensagemEnviada", mensagem => {
    console.log(`A mensagem "${mensagem}" foi enviada com sucesso!`);
});

mensagem.enviar("Olá, mundo!")