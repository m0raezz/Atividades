let soma = 0;
let operacoes = "";
for (let i = 1; i <= 1000; i++) {
  soma += i;
  if (operacoes === "") {
    operacoes += i;
  } else {
    operacoes += " + " + i;
  }
}
alert("A soma dos números de 1 a 1000 é: " + soma + "\nContas: " + operacoes + " = " + soma);
