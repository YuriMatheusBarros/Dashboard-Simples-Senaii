document.addEventListener("DOMContentLoaded", () => { 
  // 1. Exibir status do sistema
  // A função exibe uma mensagem de status no topo da página, informando que o dashboard foi carregado com sucesso.
  function exibirStatus() {
      const statusDiv = document.createElement("div"); // Cria um elemento div dinamicamente.
      statusDiv.textContent = "Dashboard carregado com sucesso!"; // Define o texto dentro da div.
      statusDiv.style.background = "#4CAF50"; // Define o fundo da div para verde (indicando sucesso).
      statusDiv.style.color = "#fff"; // Define a cor do texto para branco.
      statusDiv.style.padding = "10px"; // Adiciona um padding (espaçamento) de 10px para dar um visual mais limpo.
      statusDiv.style.position = "fixed"; // A posição será fixa, ou seja, sempre no topo da tela.
      statusDiv.style.top = "0"; // Posiciona a div no topo da página.
      statusDiv.style.width = "100%"; // Define a largura da div para 100% da largura da tela.
      statusDiv.style.textAlign = "center"; // Centraliza o texto dentro da div.
      document.body.prepend(statusDiv); // Insere a div criada como o primeiro filho do body, garantindo que apareça no topo.

      // Esconde a mensagem após 3 segundos.
      setTimeout(() => { 
          statusDiv.style.display = "none"; // Altera o estilo da div para não exibi-la.
      }, 3000); // O tempo de espera é de 3000 milissegundos (3 segundos).
  }
  exibirStatus(); // Chama a função para exibir o status assim que a página for carregada.

  // 2. Relatórios: Exibe uma mensagem de sucesso ou erro ao gerar um relatório
  // A função abaixo é acionada ao clicar no botão "Gerar Relatório"
  document.querySelector("button[type='button']").addEventListener("click", () => {
      const selecaoRelatorio = document.querySelector("select"); // Seleciona o campo <select> (menu suspenso) na página.
      const areaRelatorio = document.querySelector(".report-output"); // Seleciona o elemento onde a mensagem do relatório será exibida.

      // 2.1 Se o usuário selecionou um tipo de relatório válido:
      if (selecaoRelatorio.value) { 
          // Exibe a mensagem indicando que o relatório foi gerado com sucesso
          areaRelatorio.textContent = `Relatório de ${selecaoRelatorio.options[selecaoRelatorio.selectedIndex].text} gerado com sucesso!`; 
          areaRelatorio.style.color = "#4CAF50"; // Altera a cor do texto para verde (indicando sucesso).
      } else {
          // Caso o usuário não tenha selecionado um tipo de relatório, exibe uma mensagem de erro
          areaRelatorio.textContent = "Por favor, selecione um tipo de relatório.";
          areaRelatorio.style.color = "red"; // Altera a cor do texto para vermelho (indicando erro).
      }
  });

  // 3. Configurações: Valida o preenchimento de e-mail e senha
  // A função abaixo é chamada ao enviar o formulário de configurações (e-mail e senha)
  document.querySelector("#configuracoes form").addEventListener("submit", (evento) => {
      evento.preventDefault(); // Previne que o formulário seja enviado de forma tradicional.

      const emailUsuario = document.querySelector("#email").value; // Obtém o valor do campo de e-mail.
      const senhaUsuario = document.querySelector("#senha").value; // Obtém o valor do campo de senha.

      // 3.1 Verifica se o e-mail ou a senha não foram preenchidos:
      if (!emailUsuario || !senhaUsuario) {
          alert("Por favor, insira um e-mail e uma senha antes de salvar as configurações."); // Exibe um alerta caso falte e-mail ou senha.
          return; // Impede que o formulário seja enviado.
      }
      alert("Configurações salvas com sucesso!"); // Exibe uma mensagem de sucesso se ambos os campos forem preenchidos.
  });

  // 4. Validação de e-mail: Verifica a formatação do e-mail enquanto o usuário digita
  // A função abaixo é acionada toda vez que o usuário digitar algo no campo de e-mail.
  document.querySelector("#email").addEventListener("input", (evento) => {
      if (!evento.target.value.includes("@")) { // Verifica se o e-mail contém o símbolo "@".
          evento.target.style.border = "2px solid red"; // Se não tiver "@" no e-mail, marca o campo em vermelho.
      } else {
          evento.target.style.border = ""; // Se o e-mail estiver correto, remove a marcação vermelha.
      }
  });

  // 5. Edição do perfil: Permite que o usuário edite seu nome e e-mail
  document.querySelector("#perfil button").addEventListener("click", () => {
      // 5.1 Prompt para editar o nome do usuário
      let novoNome = prompt("Digite seu novo nome:", document.querySelector("#usuario-nome").textContent);
      if (novoNome) document.querySelector("#usuario-nome").textContent = novoNome; // Se o usuário fornecer um novo nome, atualiza o nome exibido.

      // 5.2 Prompt para editar o e-mail do usuário
      let novoEmail = prompt("Digite seu novo e-mail:", document.querySelector("#usuario-email").textContent);
      if (novoEmail) document.querySelector("#usuario-email").textContent = novoEmail; // Se o usuário fornecer um novo e-mail, atualiza o e-mail exibido.
  });

  // 6. Ajuda: Exibe uma mensagem de ajuda ao usuário
  document.body.insertAdjacentHTML("beforeend", '<button id="ajuda">Ajuda</button>'); // Cria um botão de "Ajuda" dinamicamente na página.
  document.querySelector("#ajuda").addEventListener("click", () => { // Adiciona um evento de clique ao botão de "Ajuda".
      alert("Para mais informações, consulte a documentação do sistema."); // Exibe uma mensagem com um link para a documentação.
  });
});
