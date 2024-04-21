var contatoData= [
    {
      "nome": "Dr. Carlos Santos",
      "especialidade": "Dermatologista",
      "telefone": "(61) 9 9848-1524",
      "email": "carlos.santos@gmail.com"
    },
    {
      "nome": "Dr. João Silva",
      "especialidade": "Cardiologia",
      "telefone": "(61) 9 9848-1424",
      "email": "joao.silva@gmail.com"
    },
    {
      "nome": "Dra. Maria Oliveira",
      "especialidade": "Pediatria",
      "telefone": "(61) 9 9848-2545",
      "email": "maria.oliveira@gmail.com"
    },
    {
      "nome": "Dr. Carlos Santos",
      "especialidade": "Ortopedia",
      "telefone": "(61) 9 9848-1524",
      "email": "carlos.santos@gmail.com"
    }      
  
  ];
  document.addEventListener("DOMContentLoaded", function() {
    const contatoList = document.getElementById("contato-list");
    contatoData.forEach(contato => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${contato.nome}</h3>
            <p>Especialidade: ${contato.especialidade}</p>
            <p>Telefone: ${contato.telefone}</p>
            <p>E-mail: ${contato.email}</p>

        `;
        contatoList.appendChild(listItem);
    });
});
