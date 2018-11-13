const gatoMia = gato => `O gato ${gato} miou! Meow~`

function mia(gato) {
    console.log(gatoMia(gato));
};

module.exports.gatoMia = mia;