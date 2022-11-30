import readline from "readline";

const teclado = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

teclado.question("Digite o valor inteiro!: ", (valor) => {
  var valorFixo = parseInt(valor);
  var valorVariavel = parseInt(valor);
  var valorFinal = 0;
  while (valorVariavel > 0) {
    valorVariavel = valorVariavel - 1;
    var fatorar = parseInt(valorFixo) * parseInt(valorVariavel);
    valorFinal = valorFinal + fatorar;
  }
  console.log("Valor Fatorado: " + parseInt(valorFinal));
});
