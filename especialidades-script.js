document.addEventListener("DOMContentLoaded", function() {
    fetch("especialidades.json")
        .then(response => response.json())
        .then(data => {
            const especialidadeList = document.getElementById("especialidades-list");
            data.forEach(especialidade => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <h3>${especialidade.name}</h3>
                    <p>Descrição: ${especialidade.description}</p>
                `;
                especialidadeList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Erro ao carregar dados:", error));
});
