let numero = parseInt(prompt("Digite um número inteiro de 1 a 10:"));

 
    document.write("<p><u><h2 align ='center'>Tabuada do número " + numero +"</h2>" + "</u>" + "</p>");

 if (numero >= 1 && numero <= 10) {
   
   for (let i = 1; i <= 10; i++) {
     document.write("<p align='center'>" + numero + " x " + i + " = " + (numero * i) + "</p>" + "<hr width ='10%' color='black'>" );
   }
}
   
else {
   alert("Número inválido. Por favor, digite um número inteiro de 1 a 10.");
 }