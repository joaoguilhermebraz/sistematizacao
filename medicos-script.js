var medicosData = [
    {
      "nome": "Dr. Carlos Santos",
      "especialidade": "Dermatologista"
    },
    {
      "nome": "Dr. João Silva",
      "especialidade": "Cardiologia"
    },
    {
      "nome": "Dra. Maria Oliveira",
      "especialidade": "Pediatria"
    },
    {
      "nome": "Dr. Carlos Santos",
      "especialidade": "Ortopedia"
    }
  ];

document.addEventListener("DOMContentLoaded", function() {
    const medicosList = document.getElementById("medicos-list");
    medicosData.forEach(medico => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${medico.nome}</h3>
            <p>Especialidade: ${medico.especialidade}</p>
        `;
        medicosList.appendChild(listItem);
    });
});
