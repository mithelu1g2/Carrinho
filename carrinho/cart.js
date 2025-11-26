const cancelButton = document.getElementById("cancel");
const payButton = document.getElementById("pay");
const addMoreButton = document.getElementById("add-more");

// Botão cancelar
cancelButton.addEventListener("click", () => {
  alert("Pedido cancelado.");
  window.location.href = "index.html";
});

// Botão pagar
payButton.addEventListener("click", () => {
  alert("Pagamento realizado com sucesso!");
  window.location.href = "index.html";
});

// Botão adicionar mais pedidos
addMoreButton.addEventListener("click", () => {
  window.location.href = "pedidos.html"; // página onde os pratos ficam
});
