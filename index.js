// Seleciona todos os botões com a classe 'email'
document.querySelectorAll(".email").forEach(function(button) {
    button.addEventListener("click", function() {
        // Obtém o email do atributo data-email do botão clicado
        var email = this.getAttribute("data-email");

        // Cria um elemento de input temporário para copiar o texto
        var tempInput = document.createElement("input");
        tempInput.value = email;
        document.body.appendChild(tempInput);

        // Seleciona o texto no input temporário
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

        // Copia o texto para a área de transferência
        document.execCommand("copy");

        // Remove o input temporário do DOM
        document.body.removeChild(tempInput);

        // Mostra a mensagem de confirmação
        showConfirmationMessage("Email copiado para a área de transferência!");
    });
});

// Função para mostrar a mensagem de confirmação
function showConfirmationMessage(message) {
    // Cria um novo div para a mensagem
    var confirmationMessage = document.createElement("div");
    confirmationMessage.textContent = message;
    confirmationMessage.style.position = "fixed";
    confirmationMessage.style.bottom = "20px";
    confirmationMessage.style.right = "20px";
    confirmationMessage.style.backgroundColor = "#4CAF50";
    confirmationMessage.style.color = "#fff";
    confirmationMessage.style.padding = "10px 20px";
    confirmationMessage.style.borderRadius = "5px";
    confirmationMessage.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
    confirmationMessage.style.opacity = "0";
    confirmationMessage.style.transition = "opacity 0.3s ease";

    // Adiciona a mensagem ao body
    document.body.appendChild(confirmationMessage);

    // Exibe a mensagem (faz a opacidade passar de 0 para 1)
    setTimeout(() => {
        confirmationMessage.style.opacity = "1";
    }, 10);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        confirmationMessage.style.opacity = "0";
        confirmationMessage.addEventListener("transitionend", () => {
            confirmationMessage.remove();
        });
    }, 3000);
}
