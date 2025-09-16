function calcularIMC() {

    //Entrada
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

  //PROCESSAMENTO
    const resultado = document.getElementById("resultado");

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Magro";
  } else if (imc < 24.9) {
    classificacao = "Normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade nível I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade nível II";
  } else {
    classificacao = "Obesidade nível III";
  }
  //SAÍDA

 document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);
 document.getElementById("classificacao").textContent = "Sua classificação é: " + classificacao;

}
