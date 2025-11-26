// /js/cart.js

document.addEventListener("DOMContentLoaded", () => {
  const abrirModalBtn = document.getElementById("abrirModal");
  const fecharModalBtn = document.getElementById("fecharModal");
  const modal = document.getElementById("modalPagamento");
  const cancelarBtn = document.querySelector(".cancelar");

  // abre o modal ao clicar em "Pagar"
  if (abrirModalBtn) {
    abrirModalBtn.addEventListener("click", () => {
      if (!modal) return;
      // mostra o modal
      modal.style.display = "flex";

      // se não existir o botão "Confirmar Pagamento" dentro do modal, cria
      if (!document.getElementById("confirmPayment")) {
        const confirmBtn = document.createElement("button");
        confirmBtn.id = "confirmPayment";
        confirmBtn.className = "btn confirmar-pagamento";
        confirmBtn.textContent = "Confirmar Pagamento";

        // estilo inline mínimo (opcional — seu CSS já estiliza .btn)
        confirmBtn.style.marginTop = "12px";
        confirmBtn.style.padding = "12px";
        confirmBtn.style.borderRadius = "10px";
        confirmBtn.style.border = "none";
        confirmBtn.style.cursor = "pointer";
        confirmBtn.style.fontSize = "16px";

        // coloca o botão antes do botão fechar (ou no final)
        const modalContent = modal.querySelector(".modal-content");
        if (modalContent) {
          modalContent.appendChild(confirmBtn);

          // evento do botão de confirmar pagamento
          confirmBtn.addEventListener("click", () => {
            // simulação de pagamento concluído
            alert("Pagamento realizado com sucesso!");
            modal.style.display = "none";
            // redireciona para a tela principal (mude se necessário)
            window.location.href = "index.html";
          });
        }
      }
    });
  }

  // fecha o modal ao clicar em "Fechar"
  if (fecharModalBtn) {
    fecharModalBtn.addEventListener("click", () => {
      if (!modal) return;
      modal.style.display = "none";
    });
  }

  // cancelar pedido
  if (cancelarBtn) {
    cancelarBtn.addEventListener("click", () => {
      const ok = confirm("Tem certeza que deseja cancelar o pedido?");
      if (ok) {
        alert("Pedido cancelado.");
        // redireciona para a tela principal (mude se quiser outra ação)
        window.location.href = "index.html";
      }
    });
  }

  // Fecha o modal se o usuário clicar fora do conteúdo
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
