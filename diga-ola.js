const mostraMensagem = name => `Olá, ${name}`;

function diga(name) {
    console.log(mostraMensagem(name));
};

module.exports.digaOla = diga; // exportando para modulos do node um método, que é a funcao diga com o nome de digaOla
// o ideal é sempre exportar a funcao principal do modulo, pois se a variavel é exportada, ela pode ser sobrescrita e afeta a funcionalidade da função principal

//console.log(module);