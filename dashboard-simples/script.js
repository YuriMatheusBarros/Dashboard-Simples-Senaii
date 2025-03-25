document.addEventListener("DOMContentLoaded", () => { 
    // 1. Visibilidade do status do sistema
    function exibirStatus() {
        const statusDiv = document.createElement("div");
        statusDiv.textContent = "Dashboard carregado com sucesso!";
        statusDiv.style.background = "#4CAF50";
        statusDiv.style.color = "#fff";
        statusDiv.style.padding = "10px";
        statusDiv.style.position = "fixed";
        statusDiv.style.top = "0";
        statusDiv.style.width = "100%";
        statusDiv.style.textAlign = "center";
        document.body.prepend(statusDiv);
  
        setTimeout(() => { 
            statusDiv.style.display = "none";
        }, 3000);
    }
    exibirStatus();
  
    // 2. Correspondência entre o sistema e o mundo real
    document.querySelector("button[type='button']").addEventListener("click", () => {
        const selecaoRelatorio = document.querySelector("select");
        const areaRelatorio = document.querySelector(".report-output");
  
        if (selecaoRelatorio.value) { 
            areaRelatorio.textContent = `Relatório de ${selecaoRelatorio.options[selecaoRelatorio.selectedIndex].text} gerado com sucesso!`;
            areaRelatorio.style.color = "#4CAF50";
        } else {
            areaRelatorio.textContent = "Por favor, selecione um tipo de relatório.";
            areaRelatorio.style.color = "red";
        }
    });
  
    // 3. Controle e liberdade do usuário
    document.querySelector("#configuracoes form").addEventListener("submit", (evento) => {
        evento.preventDefault();
        const emailUsuario = document.querySelector("#email").value;
        const senhaUsuario = document.querySelector("#senha").value;
  
        if (!emailUsuario || !senhaUsuario) {
            alert("Por favor, insira um e-mail e uma senha antes de salvar as configurações.");
            return;
        }
        alert("Configurações salvas com sucesso!");
    });
  
    // 4. Consistência e padrões
    document.querySelector("#email").addEventListener("input", (evento) => {
        if (!evento.target.value.includes("@")) {
            evento.target.style.border = "2px solid red";
        } else {
            evento.target.style.border = "";
        }
    });
  
    // 5. Prevenção de erros
    document.querySelector("#perfil button").addEventListener("click", () => {
        let novoNome = prompt("Digite seu novo nome:", document.querySelector("#usuario-nome").textContent);
        if (novoNome) {
            let confirmar = confirm("Deseja continuar a alteração?");
            if (confirmar) {
                document.querySelector("#usuario-nome").textContent = novoNome;
            }
        }
    
        let novoEmail = prompt("Digite seu novo e-mail:", document.querySelector("#usuario-email").textContent);
        if (novoEmail) {
            let confirmar = confirm("Deseja continuar a alteração?");
            if (confirmar) {
                document.querySelector("#usuario-email").textContent = novoEmail;
            }
        }
    });
  
    // 6. Reconhecimento em vez de lembrança
    // 9. Ajuda e documentação
    document.body.insertAdjacentHTML("beforeend", '<button id="ajuda">Ajuda</button>');
  
    document.querySelector("#ajuda").addEventListener("click", () => {
        alert(`Bem-vindo ao Dashboard!

    1. **Visibilidade do status do sistema**:
       - Quando o sistema for carregado, você verá uma mensagem de sucesso no topo da página.

    2. **Gerar Relatório**:
       - Para gerar um relatório, escolha um tipo de relatório na lista suspensa e clique no botão "Gerar Relatório". Se nada for selecionado, uma mensagem de erro aparecerá.

    3. **Configurações**:
       - Para salvar as configurações, insira seu e-mail e senha e clique no botão "Salvar". Certifique-se de preencher ambos os campos.

    4. **Modo Noturno**:
       - Para alternar entre modo claro e modo noturno, clique no botão "Modo Noturno" no canto superior direito da tela.

    Dica: Se precisar de mais ajuda, consulte a documentação completa ou entre em contato com o suporte.`);
    });
  
    // 7. Flexibilidade e eficiência de uso
    const botaoModoNoturno = document.querySelector("#modoNoturno");

    botaoModoNoturno.addEventListener("click", function() {
    if (document.body.classList.contains("modo-noturno")) {
        document.body.classList.remove("modo-noturno");
        botaoModoNoturno.textContent = "Modo Noturno";
        botaoModoNoturno.style.backgroundColor = "white";
    } else {
        document.body.classList.add("modo-noturno");
        botaoModoNoturno.textContent = "Modo Claro";
        botaoModoNoturno.style.backgroundColor = "black";
    }
    });

    // 8. Design estético e minimalista
  
    // 10. Diagnóstico e recuperação de erros

    });