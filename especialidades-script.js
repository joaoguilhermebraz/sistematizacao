var especialidadeData=[
    {
        "name": "Dermatologia",
        "description": "Nosso dermatologista, Dr. Carlos Santos, é um especialista altamente qualificado e dedicado em cuidar da saúde da sua pele. Com vasta experiência em diagnóstico e tratamento de uma variedade de condições dermatológicas, o Dr. Santos está comprometido em fornecer cuidados personalizados e eficazes para ajudar você a alcançar uma pele saudável e radiante."
    },
    {
        "name": "Cardiologia",
        "description": "Na área da cardiologia, você pode confiar no Dr. João Silva para oferecer cuidados excepcionais para o seu coração. Como um cardiologista experiente, o Dr. Silva se dedica a proporcionar diagnóstico preciso, tratamento abrangente e prevenção de doenças cardiovasculares. Sua abordagem centrada no paciente e sua expertise em tecnologia médica avançada garantem que você receba o melhor cuidado cardíaco possível."
    },
    {
        "name": "Pediatria",
        "description": "Quando se trata da saúde dos seus filhos, a Dra. Maria Oliveira é a pediatra em quem você pode confiar. Com uma abordagem carinhosa e dedicada, a Dra. Oliveira oferece cuidados abrangentes e personalizados para crianças de todas as idades. Desde consultas de rotina até tratamento de doenças infantis comuns, ela está comprometida em ajudar seus filhos a crescerem saudáveis e felizes."
    },
    {
        "name": "Ortopedia",
        "description": "Se você está enfrentando problemas musculoesqueléticos, o Dr. Carlos Santos é o ortopedista especializado que pode ajudar. Com sua experiência e habilidades avançadas, o Dr. Santos oferece diagnóstico preciso e tratamento eficaz para uma variedade de condições ortopédicas. Desde lesões esportivas até doenças degenerativas, ele está comprometido em ajudá-lo a recuperar sua mobilidade e qualidade de vida."
    }

]

document.addEventListener("DOMContentLoaded", function() {

            const especialidadeList = document.getElementById("especialidades-list");
            especialidadeData.forEach(especialidade => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <h3>${especialidade.name}</h3>
                    <p>Descrição: ${especialidade.description}</p>
                `;
                especialidadeList.appendChild(listItem);
            });

});
