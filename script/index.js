const formulario = document.querySelector("form");
const resultado = document.querySelector("#resultado");
const historico = document.querySelector("#historicoJogadas");

const generateValue = (numeroLados) =>
  Math.floor(Math.random() * numeroLados) + 1;

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let numeroLados = document.querySelector("input[name='dice-type']:checked");
  numeroLados = parseInt(numeroLados.id.replace("d", ""));

  const valorGerado = generateValue(numeroLados);

  resultado.innerHTML = valorGerado;
  historico.innerHTML += ` &#8213; <strong>D${numeroLados}:</strong> <span class="text-primary">${valorGerado}</span>`;
});
