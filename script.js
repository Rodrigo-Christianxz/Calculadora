const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Define a função para calcular com base no botão clicado.
const calculate = (btnValue) => {
  display.focus();
  
  if (btnValue === "=" && output !== "") {
    // Se a saída tiver '%', substitua por '/100' antes de avaliar.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // Se o botão DEL for clicado, remove o último caractere da saída.
    output = output.toString().slice(0, -1);
  } else {
    // Se a saída estiver vazia e o botão for specialChars, então retorne.
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  
  display.value = output;
};

// Adicione um ouvinte de eventos aos botões, chame calculate() ao clicar.
buttons.forEach((button) => {
  // O ouvinte de clique de botão chama calculate() com o valor do dataset como argumento.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
