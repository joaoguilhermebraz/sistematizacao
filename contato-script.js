document.addEventListener("DOMContentLoaded", function() {
    fetch("contatos.json")
        .then(response => response.json())
        .then(data => {
            const contatoList = document.getElementById("contato-list");
            data.forEach(contato => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <h3>${contato.nome}</h3>
                    <p>Especialidade: ${contato.especialidade}</p>
                    <p>Telefone: ${contato.telefone}</p>
                    <p>E-mail: ${contato.email}</p>

                `;
                contatoList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Erro ao carregar dados:", error));
});