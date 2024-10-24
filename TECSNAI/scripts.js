const tecnicos = [
    {
        nome: "João Silva",
        avaliacao: 4.5,
        valorServico: 100.00,
        area: "Elétrica",
        quantidadeServicos: 50,
        apresentacao: "Técnico elétrico com 10 anos de experiência.",
    },
    {
        nome: "Maria Oliveira",
        avaliacao: 5.0,
        valorServico: 120.00,
        area: "Informática",
        quantidadeServicos: 30,
        apresentacao: "Especialista em suporte técnico e redes.",
    },
    // Adicione mais técnicos conforme necessário
];

function mostrarTecnicos() {
    const tecnicosList = document.getElementById('tecnicos-list');
    tecnicosList.innerHTML = ''; // Limpa a lista atual

    // Pega os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const tipoTecnico = urlParams.get('tipo-tecnico');
    const tipoServico = urlParams.get('tipo-servico');
    const certificacao = urlParams.get('certificacao');
    const valorMinimo = parseFloat(urlParams.get('valor-minimo'));
    const valorMaximo = parseFloat(urlParams.get('valor-maximo'));

    // Filtra os técnicos com base nos critérios
    const tecnicosFiltrados = tecnicos.filter(tecnico => {
        return (
            (tipoTecnico === '' || tecnico.area.toLowerCase() === tipoTecnico) &&
            (tipoServico === '' || (tipoServico === 'freelancer' && tecnico.area.toLowerCase() === tipoTecnico)) &&
            (certificacao === '' || (certificacao === 'certificado' && tecnico.avaliacao >= 4)) && // Exemplo de certificação
            (valorMinimo <= tecnico.valorServico && tecnico.valorServico <= valorMaximo)
        );
    });
const tecnicos = [
    {
        nome: "João Silva",
        avaliacao: 4.5,
        valorServico: 100.00,
        area: "Elétrica",
        quantidadeServicos: 50,
        apresentacao: "Técnico elétrico com 10 anos de experiência.",
    },
    {
        nome: "Maria Oliveira",
        avaliacao: 5.0,
        valorServico: 120.00,
        area: "Informática",
        quantidadeServicos: 30,
        apresentacao: "Especialista em suporte técnico e redes.",
    },
    // Adicione mais técnicos conforme necessário
];

function mostrarTecnicos() {
    const tecnicosList = document.getElementById('tecnicos-list');
    tecnicosList.innerHTML = ''; // Limpa a lista atual

    // Pega os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const tipoTecnico = urlParams.get('tipo-tecnico');
    const tipoServico = urlParams.get('tipo-servico');
    const certificacao = urlParams.get('certificacao');
    const valorMinimo = parseFloat(urlParams.get('valor-minimo'));
    const valorMaximo = parseFloat(urlParams.get('valor-maximo'));

    // Filtra os técnicos com base nos critérios
    const tecnicosFiltrados = tecnicos.filter(tecnico => {
        return (
            (tipoTecnico === '' || tecnico.area.toLowerCase() === tipoTecnico) &&
            (tipoServico === '' || (tipoServico === 'freelancer' && tecnico.area.toLowerCase() === tipoTecnico)) &&
            (certificacao === '' || (certificacao === 'certificado' && tecnico.avaliacao >= 4)) && // Exemplo de certificação
            (valorMinimo <= tecnico.valorServico && tecnico.valorServico <= valorMaximo)
        );
    });

    if (tecnicosFiltrados.length === 0) {
        tecnicosList.innerHTML = '<p>Nenhum técnico encontrado para os critérios selecionados.</p>';
    } else {
        tecnicosFiltrados.forEach(tecnico => {
            const card = document.createElement('div');
            card.classList.add('tecnico-card');
            card.innerHTML = `
                <h3>${tecnico.nome}</h3>
                <p>Avaliação: ${tecnico.avaliacao} / 5</p>
                <p>Valor do Serviço: R$ ${tecnico.valorServico.toFixed(2)}</p>
                <p>Área Técnica: ${tecnico.area}</p>
                <p>Serviços Realizados: ${tecnico.quantidadeServicos}</p>
                <p>${tecnico.apresentacao}</p>
                <div class="button-container">
                    <button onclick="enviarMensagem('${tecnico.nome}')">Enviar Mensagem</button>
                    <button onclick="agendarServico('${tecnico.nome}')">Agendar Serviço</button>
                </div>
            `;
            tecnicosList.appendChild(card);
        });
    }
}

// Chama a função para mostrar os técnicos quando a página carrega
document.addEventListener('DOMContentLoaded', mostrarTecnicos);

    if (tecnicosFiltrados.length === 0) {
        tecnicosList.innerHTML = '<p>Nenhum técnico encontrado para os critérios selecionados.</p>';
    } else {
        tecnicosFiltrados.forEach(tecnico => {
            const card = document.createElement('div');
            card.classList.add('tecnico-card');
            card.innerHTML = `
                <h3>${tecnico.nome}</h3>
                <p>Avaliação: ${tecnico.avaliacao} / 5</p>
                <p>Valor do Serviço: R$ ${tecnico.valorServico.toFixed(2)}</p>
                <p>Área Técnica: ${tecnico.area}</p>
                <p>Serviços Realizados: ${tecnico.quantidadeServicos}</p>
                <p>${tecnico.apresentacao}</p>
                <div class="button-container">
                    <button onclick="enviarMensagem('${tecnico.nome}')">Enviar Mensagem</button>
                    <button onclick="agendarServico('${tecnico.nome}')">Agendar Serviço</button>
                </div>
            `;
            tecnicosList.appendChild(card);
        });
    }
}

// Chama a função para mostrar os técnicos quando a página carrega
document.addEventListener('DOMContentLoaded', mostrarTecnicos);
