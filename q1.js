import readline from "readline";

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

teclado.question("Digite o valor, em cm, da base do objeto: ", (valor1) => {
  teclado.question("Digite o valor, em cm, da altura do objeto: ", (valor2) => {
    var area = parseInt(valor1) * parseInt(valor2);
    if (valor1 == valor2) {
      var forma = "Quadrado";
    } else {
      var forma = "Retângulo";
    }
    console.log(
      "Esse objeto é um " + forma + " e área desse objeto é :" + area + " cm²!"
    );
  });
});
