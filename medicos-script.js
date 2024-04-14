document.addEventListener("DOMContentLoaded", function() {
    fetch("medicos.json")
        .then(response => response.json())
        .then(data => {
            const medicosList = document.getElementById("medicos-list");
            data.forEach(medico => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <h3>${medico.nome}</h3>
                    <p>Especialidade: ${medico.especialidade}</p>
                `;
                medicosList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Erro ao carregar dados:", error));
});
