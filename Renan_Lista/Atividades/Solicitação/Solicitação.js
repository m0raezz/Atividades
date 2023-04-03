let n1 = parseInt(prompt("Digite um número inteiro:"));



let raiz = Math.sqrt(n1);
let Cubica = Math.cbrt(n1);
let potencia = Math.pow(n1, 2);

document.write("<h2> A baixo as seguintes operaçãoes, raiz quadrada, cúbica e potencia do número " + n1 + " respectivamente.<br> <h2>")
document.write("Raiz quadrada -> " + raiz + "<br>Raiz cúbica -> " + Cubica + "<br>Potência -> " + potencia)