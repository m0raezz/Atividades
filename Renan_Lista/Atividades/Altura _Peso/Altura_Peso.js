    let nH = 0;
    let nM = 0;
    let mA = 0;
    let sexomA;

    for (let i = 0; i < 5; i++) {
      let altura = parseFloat(prompt("Digite a altura da pessoa " + (i + 1) + " em metros:"));
      let sexo = prompt("Digite o sexo da pessoa " + (i + 1) + " (M ou F):").toUpperCase();

      if (sexo === "M") {
        nH++;
      } else if (sexo === "F") {
        nM++;
      }

      if (altura > mA) {
        mA = altura;
        sexomA = sexo;
      }
    }

    document.write("Número de homens: " + nH + "<br>");
    document.write("Número de mulheres: " + nM + "<br>");

    if (sexomA === "M") {
      document.write("A maior altura é de um homem e é " + mA.toFixed(2) + "m");
    } else {
      document.write("A maior altura é de uma mulher e é " + mA.toFixed(2) + "m");
    }