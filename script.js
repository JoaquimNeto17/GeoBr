// ============================================================
// DADOS DOS ESTADOS COM BIOMAS E IMAGENS REAIS
// ============================================================
const estadosAPI = [
    { uf: "AC", name: "ACRE", capital: "RIO BRANCO", regiao: "Norte", bioma: "Amazônia", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ac-full.svg", bioma_img: "img/amazonia.jpg", curiosidade: "Único estado brasileiro inteiramente na Amazônia Ocidental. Maior produtor de castanha-do-pará do país." },
    { uf: "AL", name: "ALAGOAS", capital: "MACEIÓ", regiao: "Nordeste", bioma: "Mata Atlântica", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/al-full.svg", bioma_img: "img/mata_atlantica.gif", curiosidade: "Famoso pelas lagoas Mundaú e Manguaba. Praias de Maragogi são conhecidas como 'Caribe Brasileiro'." },
    { uf: "AP", name: "AMAPÁ", capital: "MACAPÁ", regiao: "Norte", bioma: "Amazônia", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ap-full.svg", bioma_img: "img/amazonia.jpg", curiosidade: "Cortado pela Linha do Equador. A cidade de Macapá não tem horário de verão." },
    { uf: "AM", name: "AMAZONAS", capital: "MANAUS", regiao: "Norte", bioma: "Amazônia", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/am-full.svg", bioma_img: "img/amazonia.jpg", curiosidade: "Maior estado brasileiro em área. Abriga o Encontro das Águas e a Zona Franca de Manaus." },
    { uf: "BA", name: "BAHIA", capital: "SALVADOR", regiao: "Nordeste", bioma: "Caatinga", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ba-full.svg", bioma_img: "img/caatinga.jpg", curiosidade: "Primeira capital do Brasil (1549-1763). Berço do acarajé, samba de roda e axé." },
    { uf: "CE", name: "CEARÁ", capital: "FORTALEZA", regiao: "Nordeste", bioma: "Caatinga", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ce-full.svg", bioma_img: "img/caatinga.jpg", curiosidade: "Primeiro estado a abolir a escravidão (1884). Famoso pelas dunas de Jericoacoara." },
    { uf: "DF", name: "DISTRITO FEDERAL", capital: "BRASÍLIA", regiao: "Centro-Oeste", bioma: "Cerrado", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/df-full.svg", bioma_img: "img/cerrado.webp", curiosidade: "Projetado por Oscar Niemeyer e Lúcio Costa. Patrimônio Mundial da UNESCO." },
    { uf: "ES", name: "ESPÍRITO SANTO", capital: "VITÓRIA", regiao: "Sudeste", bioma: "Mata Atlântica", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/es-full.svg", bioma_img: "img/mata_atlantica.gif", curiosidade: "Possui o Convento da Penha (1558). Praias de Guarapari são famosas pelas águas claras." },
    { uf: "GO", name: "GOIÁS", capital: "GOIÂNIA", regiao: "Centro-Oeste", bioma: "Cerrado", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/go-full.svg", bioma_img: "img/cerrado.webp", curiosidade: "Conhecido pelas águas termais de Caldas Novas, as maiores do mundo." },
    { uf: "MA", name: "MARANHÃO", capital: "SÃO LUÍS", regiao: "Nordeste", bioma: "Cerrado", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ma-full.svg", bioma_img: "img/cerrado.webp", curiosidade: "Lar dos Lençóis Maranhenses, dunas com lagoas de água doce." },
    { uf: "MT", name: "MATO GROSSO", capital: "CUIABÁ", regiao: "Centro-Oeste", bioma: "Cerrado", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/mt-full.svg", bioma_img: "img/cerrado.webp", curiosidade: "Portal do Pantanal, maior planície alagável do mundo." },
    { uf: "MS", name: "MATO GROSSO DO SUL", capital: "CAMPO GRANDE", regiao: "Centro-Oeste", bioma: "Pantanal", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ms-full.svg", bioma_img: "img/pantanal.jpg", curiosidade: "Abriga Bonito, referência mundial em ecoturismo e águas cristalinas." },
    { uf: "MG", name: "MINAS GERAIS", capital: "BELO HORIZONTE", regiao: "Sudeste", bioma: "Cerrado", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/mg-full.svg", bioma_img: "img/cerrado.webp", curiosidade: "Maior produtor de café do Brasil. Famoso pelo pão de queijo e cachaça." },
    { uf: "PA", name: "PARÁ", capital: "BELÉM", regiao: "Norte", bioma: "Amazônia", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/pa-full.svg", bioma_img: "img/amazonia.jpg", curiosidade: "Famoso pelo Mercado Ver-o-Peso e Círio de Nazaré. Maior produtor de açaí." },
    { uf: "PB", name: "PARAÍBA", capital: "JOÃO PESSOA", regiao: "Nordeste", bioma: "Caatinga", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/pb-full.svg", bioma_img: "img/caatinga.jpg", curiosidade: "Ponta do Seixas: ponto mais oriental das Américas, onde o sol nasce primeiro." },
    { uf: "PR", name: "PARANÁ", capital: "CURITIBA", regiao: "Sul", bioma: "Mata Atlântica", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/pr-full.svg", bioma_img: "img/mata_atlantica.gif", curiosidade: "Abriga as Cataratas do Iguaçu, uma das 7 Maravilhas Naturais do Mundo." },
    { uf: "PE", name: "PERNAMBUCO", capital: "RECIFE", regiao: "Nordeste", bioma: "Caatinga", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/pe-full.svg", bioma_img: "img/caatinga.jpg", curiosidade: "Berço do frevo e maracatu. Olinda é Patrimônio da Humanidade." },
    { uf: "PI", name: "PIAUÍ", capital: "TERESINA", regiao: "Nordeste", bioma: "Caatinga", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/pi-full.svg", bioma_img: "img/caatinga.jpg", curiosidade: "Parque Nacional Serra da Capivara tem pinturas rupestres de 25 mil anos." },
    { uf: "RJ", name: "RIO DE JANEIRO", capital: "RIO DE JANEIRO", regiao: "Sudeste", bioma: "Mata Atlântica", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/rj-full.svg", bioma_img: "img/mata_atlantica.gif", curiosidade: "Cristo Redentor é uma das 7 Maravilhas do Mundo Moderno." },
    { uf: "RN", name: "RIO GRANDE DO NORTE", capital: "NATAL", regiao: "Nordeste", bioma: "Caatinga", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/rn-full.svg", bioma_img: "img/caatinga.jpg", curiosidade: "Possui o maior cajueiro do mundo (8.500 m²). Dunas de Genipabu são famosas." },
    { uf: "RS", name: "RIO GRANDE DO SUL", capital: "PORTO ALEGRE", regiao: "Sul", bioma: "Pampa", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/rs-full.svg", bioma_img: "img/pampa.jpg", curiosidade: "Tradição do chimarrão, churrasco e fandango. Cultura gaúcha forte." },
    { uf: "RO", name: "RONDÔNIA", capital: "PORTO VELHO", regiao: "Norte", bioma: "Amazônia", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ro-full.svg", bioma_img: "img/amazonia.jpg", curiosidade: "Nome em homenagem ao marechal Cândido Rondon. Estrada de Ferro Madeira-Mamoré." },
    { uf: "RR", name: "RORAIMA", capital: "BOA VISTA", regiao: "Norte", bioma: "Amazônia", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/rr-full.svg", bioma_img: "img/amazonia.jpg", curiosidade: "Monte Roraima: tepuy na tríplice fronteira Brasil-Venezuela-Guiana." },
    { uf: "SC", name: "SANTA CATARINA", capital: "FLORIANÓPOLIS", regiao: "Sul", bioma: "Mata Atlântica", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/sc-full.svg", bioma_img: "img/mata_atlantica.gif", curiosidade: "Forte influência alemã e italiana. Oktoberfest em Blumenau." },
    { uf: "SP", name: "SÃO PAULO", capital: "SÃO PAULO", regiao: "Sudeste", bioma: "Mata Atlântica", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/sp-full.svg", bioma_img: "img/mata_atlantica.gif", curiosidade: "Maior economia do país. Maior cidade da América Latina (12 milhões)." },
    { uf: "SE", name: "SERGIPE", capital: "ARACAJU", regiao: "Nordeste", bioma: "Mata Atlântica", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/se-full.svg", bioma_img: "img/mata_atlantica.gif", curiosidade: "Menor estado do Brasil em área (21.910 km²). Famoso pela laranja e coco." },
    { uf: "TO", name: "TOCANTINS", capital: "PALMAS", regiao: "Norte", bioma: "Cerrado", flag_url: "https://assets.codante.io/codante-apis/bandeiras-dos-estados/to-full.svg", bioma_img: "img/cerrado.webp", curiosidade: "Estado mais jovem do Brasil, criado pela Constituição de 1988." }
];

// Lista de biomas para alternativas
const biomasList = ["Amazônia", "Cerrado", "Mata Atlântica", "Caatinga", "Pantanal", "Pampa"];

// Ícone visual único: o quiz não usa emojis nas alternativas.
const biomaIcons = {
    "Amazônia": "fa-tree",
    "Cerrado": "fa-seedling",
    "Mata Atlântica": "fa-leaf",
    "Caatinga": "fa-sun",
    "Pantanal": "fa-water",
    "Pampa": "fa-mountain-sun"
};

// Cores para cada bioma
const biomaColors = {
    "Amazônia": "#2E7D32",
    "Cerrado": "#F9A825",
    "Mata Atlântica": "#43A047",
    "Caatinga": "#E65100",
    "Pantanal": "#00897B",
    "Pampa": "#78909C"
};

// ============================================================
// PATENTES
// ============================================================
const patentes = ["EXPLORADOR", "CONHECEDOR", "ESPECIALISTA", "CARTOGRAFO", "MESTRE DO BRASIL"];
const xpThresholds = [0, 30, 100, 220, 420];

// ============================================================
// RANKING ESCOLAR
// ============================================================
let ranking = [];
const PERFIS_JOGADORES_KEY = "geo_suite_profiles";

function carregarPerfisJogadores() {
    try {
        return JSON.parse(localStorage.getItem(PERFIS_JOGADORES_KEY)) || {};
    } catch {
        return {};
    }
}

function buscarPerfilJogador(nome) {
    return carregarPerfisJogadores()[normalizarNomeJogador(nome)] || null;
}

function salvarPerfilJogador(nome, xp, personagem, patente) {
    if (!nome) return;
    const perfis = carregarPerfisJogadores();
    const chave = normalizarNomeJogador(nome);
    const anterior = perfis[chave] || {};
    perfis[chave] = {
        ...anterior,
        nome: String(nome).trim().replace(/\s+/g, " "),
        xp: Number(xp) || 0,
        personagem: normalizarPersonagem(personagem),
        patente: patente || "EXPLORADOR",
        atualizadoEm: Date.now()
    };
    localStorage.setItem(PERFIS_JOGADORES_KEY, JSON.stringify(perfis));
}

function carregarRanking() {
    const saved = localStorage.getItem("missaoBrasil_ranking");
    if (saved && saved !== "[]") {
        ranking = JSON.parse(saved);
        ranking = ranking.slice(0, 5);
    } else {
        ranking = [];
    }
}

function salvarRanking() {
    ranking.sort((a, b) => b.xp - a.xp);
    ranking = ranking.slice(0, 5);
    localStorage.setItem("missaoBrasil_ranking", JSON.stringify(ranking));
}

function resetarRankingCompleto() {
    ranking = [];
    salvarRanking();
    atualizarRankingUI();
    mostrarNotificacao("RANKING RESETADO COM SUCESSO!", "info");
}

function limparRankingComoGeoMundo() {
    const confirmado = confirm("Tem certeza que deseja apagar todo o ranking? Essa ação não pode ser desfeita.");
    if (!confirmado) return;
    resetarRankingCompleto();
}

function atualizarRankingUI() {
    const container = document.getElementById("rankingList");
    if (!container) return;
    
    container.innerHTML = "";
    
    for (let i = 0; i < 5; i++) {
        const div = document.createElement("div");
        div.className = "ranking-item";
        
        if (i < ranking.length && ranking[i]) {
            const item = ranking[i];
            let posicaoTexto = "";
            posicaoTexto = `${i+1}º`;
            
            div.innerHTML = `
                <div class="ranking-pos">${posicaoTexto}</div>
                <img class="ranking-avatar" src="${caminhoPersonagem(item.personagem, 1)}" alt="">
                <div class="ranking-nome">${item.nome}</div>
                <div class="ranking-serie">${item.serie || "---"}</div>
                <div class="ranking-xp">${item.xp} XP</div>
            `;
        } else {
            div.classList.add("placeholder");
            let posicaoTexto = "";
            posicaoTexto = `${i+1}º`;
            
            div.innerHTML = `
                <div class="ranking-pos">${posicaoTexto}</div>
                <div class="ranking-nome">---</div>
                <div class="ranking-serie">---</div>
                <div class="ranking-xp">0 XP</div>
            `;
        }
        container.appendChild(div);
    }

    renderizarRankingAbertura();
}

function renderizarRankingAbertura() {
    const container = document.getElementById("rankingListAbertura");
    if (!container) return;
    container.innerHTML = "";

    if (!ranking.length) {
        const vazio = document.createElement("p");
        vazio.className = "ranking-empty";
        vazio.textContent = "Nenhum explorador no ranking. Seja o primeiro!";
        container.appendChild(vazio);
        return;
    }

    ranking.slice(0, 5).forEach((item, index) => {
        const linha = document.createElement("div");
        linha.className = `ranking-row${item.nome === player.nome ? " destaque" : ""}`;

        const posicao = document.createElement("span");
        posicao.className = "ranking-pos";
        posicao.textContent = `${index + 1}º`;

        const avatar = document.createElement("img");
        avatar.className = "ranking-avatar";
        avatar.src = caminhoPersonagem(item.personagem, 1);
        avatar.alt = "";

        const dados = document.createElement("span");
        dados.className = "opening-ranking-player";
        const nome = document.createElement("strong");
        nome.textContent = item.nome;
        const patente = document.createElement("small");
        patente.textContent = item.patente || "EXPLORADOR";
        dados.append(nome, patente);

        const xp = document.createElement("span");
        xp.className = "ranking-xp";
        xp.textContent = `${item.xp} XP`;
        linha.append(posicao, avatar, dados, xp);
        container.appendChild(linha);
    });
}

function normalizarNomeJogador(nome) {
    return String(nome || "").trim().replace(/\s+/g, " ").toLocaleUpperCase("pt-BR");
}

function adicionarOuAtualizarRanking(nome, serie, xp, patente, personagem = "classica") {
    if (!nome || !serie) return;
    
    const nomeNormalizado = normalizarNomeJogador(nome);
    const index = ranking.findIndex(p => normalizarNomeJogador(p.nome) === nomeNormalizado);
    if (index !== -1) {
        const novoRecorde = xp >= ranking[index].xp;
        ranking[index].xp = Math.max(ranking[index].xp, xp);
        if (novoRecorde) ranking[index].patente = patente;
        ranking[index].personagem = normalizarPersonagem(personagem);
    } else {
        ranking.push({ nome, serie, xp, patente, personagem: normalizarPersonagem(personagem) });
    }
    salvarPerfilJogador(nome, xp, personagem, patente);
    salvarRanking();
    atualizarRankingUI();
}

// ============================================================
// PLAYER STATE
// ============================================================
let player = {
    nome: "",
    serie: "GEO BR",
    personagem: "classica",
    xp: 0,
    totalCorrect: 0,
    unlockedStates: new Array(27).fill(false),
    levelIndex: 0,
    maxCombo: 0,
    modoAtual: "bandeiras",
    achievements: {
        firstHit: false, fiveCombo: false, northComplete: false,
        northeastComplete: false, centerwestComplete: false,
        southeastComplete: false, southComplete: false, allFlags: false
    }
};

let modoPendenteAbertura = null;

function prepararNovoJogador() {
    player.nome = "";
    player.xp = 0;
    player.totalCorrect = 0;
    player.unlockedStates = new Array(27).fill(false);
    player.levelIndex = 0;
    player.maxCombo = 0;
    player.achievements = {
        firstHit: false, fiveCombo: false, northComplete: false,
        northeastComplete: false, centerwestComplete: false,
        southeastComplete: false, southComplete: false, allFlags: false
    };
}

// ============================================================
// GAME SESSION
// ============================================================
let gameSession = {
    currentIndex: 0,
    shuffledIndices: [],
    score: 0,
    combo: 0,
    answered: false,
    currentCorrect: null,
    timerInterval: null,
    secondsElapsed: 0,
    autoNextTimeout: null,
    regionFilter: "all",
    sessionMaxCombo: 0,
    modoJogo: "bandeiras",
    tempoQuestao: 5,
    tempoRestante: 5,
    vidas: 3,
    dicaUsada: false
};

// ============================================================
// PERSISTÊNCIA
// ============================================================
function salvarLocal() {
    localStorage.setItem("missaoBrasil_neo", JSON.stringify({
        serie: player.serie,
        personagem: player.personagem,
        xp: player.xp,
        totalCorrect: player.totalCorrect,
        unlocked: player.unlockedStates,
        levelIdx: player.levelIndex,
        maxCombo: player.maxCombo,
        modoAtual: player.modoAtual,
        achievements: player.achievements
    }));
}

function carregarLocal() {
    const data = localStorage.getItem("missaoBrasil_neo");
    if (data) {
        const p = JSON.parse(data);
        // O nome identifica apenas a sessão atual e nunca é recuperado do navegador.
        player.nome = "";
        player.serie = "GEO BR";
        player.personagem = normalizarPersonagem(p.personagem);
        player.xp = p.xp || 0;
        player.totalCorrect = p.totalCorrect || 0;
        player.unlockedStates = p.unlocked || new Array(27).fill(false);
        player.levelIndex = p.levelIdx || 0;
        player.maxCombo = p.maxCombo || 0;
        player.modoAtual = p.modoAtual || "bandeiras";
        player.achievements = p.achievements || {
            firstHit: false, fiveCombo: false, northComplete: false,
            northeastComplete: false, centerwestComplete: false,
            southeastComplete: false, southComplete: false, allFlags: false
        };
    }
    
    atualizarPatente();
    atualizarModoUI();
    // Migra automaticamente registros antigos, removendo o nome do perfil local.
    salvarLocal();
}

function resetarProgresso() {
    player = {
        nome: player.nome,
        serie: player.serie,
        personagem: player.personagem,
        xp: 0,
        totalCorrect: 0,
        unlockedStates: new Array(27).fill(false),
        levelIndex: 0,
        maxCombo: 0,
        modoAtual: "bandeiras",
        achievements: {
            firstHit: false, fiveCombo: false, northComplete: false,
            northeastComplete: false, centerwestComplete: false,
            southeastComplete: false, southComplete: false, allFlags: false
        }
    };
    salvarLocal();
    if (player.nome && player.serie) {
        adicionarOuAtualizarRanking(player.nome, player.serie, player.xp, patentes[player.levelIndex], player.personagem);
    }
    atualizarPatente();
    atualizarUI();
    atualizarAlbumUI();
    atualizarBarraXP();
    fecharModalReset();
    atualizarModoUI();
}

// ============================================================
// PROGRESSÃO
// ============================================================
function atualizarPatente() {
    for (let i = xpThresholds.length - 1; i >= 0; i--) {
        if (player.xp >= xpThresholds[i]) {
            player.levelIndex = i;
            break;
        }
    }
    salvarLocal();
}

function adicionarXP(valor) {
    const nivelAntigo = player.levelIndex;
    player.xp += valor;
    atualizarPatente();
    atualizarBarraXP();
    
    if (player.nome && player.serie) {
        adicionarOuAtualizarRanking(player.nome, player.serie, player.xp, patentes[player.levelIndex], player.personagem);
    }
    
    if (player.levelIndex > nivelAntigo) {
        mostrarNotificacao(`SUBIU PARA ${patentes[player.levelIndex]}!`, "info");
    }
}

function atualizarBarraXP() {
    const atual = xpThresholds[player.levelIndex];
    const proximo = xpThresholds[player.levelIndex + 1] || xpThresholds[player.levelIndex] + 200;
    const xpNoNivel = player.xp - atual;
    const xpNecessario = proximo - atual;
    const porcentagem = Math.min(100, Math.max(0, (xpNoNivel / xpNecessario) * 100));
    
    const barra = document.getElementById("barraXP");
    if (barra) barra.style.width = `${porcentagem}%`;
    
    const xpTexto = document.getElementById("xpTexto");
    if (xpTexto) xpTexto.innerText = `${xpNoNivel} / ${xpNecessario}`;
    
    const proximoNivel = document.getElementById("proximoNivel");
    if (proximoNivel && player.levelIndex < patentes.length - 1) {
        proximoNivel.innerText = `PRÓXIMO: ${patentes[player.levelIndex + 1]}`;
    } else if (proximoNivel) {
        proximoNivel.innerText = "NÍVEL MÁXIMO!";
    }
}

// ============================================================
// NOTIFICAÇÕES
// ============================================================
function mostrarNotificacao(mensagem, tipo, xpBonus = null) {
    const feedback = document.getElementById("areaFeedback");
    if (!feedback) return;
    
    let tipoClass = "notification-info";
    if (tipo === "acerto") {
        tipoClass = "notification-correct";
    } else if (tipo === "erro") {
        tipoClass = "notification-wrong";
    }
    
    let xpHtml = "";
    if (xpBonus !== null) {
        xpHtml = `<div class="notification-xp">+${xpBonus} XP</div>`;
    }
    
    const reacao = tipo === "acerto" ? 2 : (tipo === "erro" ? 3 : 1);
    if (tipo === "acerto" || tipo === "erro") tocarSom(tipo);
    feedback.innerHTML = `
        <div class="notification ${tipoClass}">
            <img class="notification-mascot" src="${caminhoPersonagem(player.personagem, reacao)}" alt="">
            <div class="notification-content">
                <div class="notification-title">${tipo === "acerto" ? "ACERTOU!" : (tipo === "erro" ? "ERROU!" : "ATENÇÃO")}</div>
                <div class="notification-desc">${mensagem}</div>
            </div>
            ${xpHtml}
        </div>
    `;
}

// ============================================================
// CONQUISTAS
// ============================================================
function desbloquearConquista(id, nome) {
    if (player.achievements[id]) return;
    player.achievements[id] = true;
    salvarLocal();
    mostrarNotificacao(`CONQUISTA: ${nome}`, "info");
}

function verificarConquistas() {
    if (!player.achievements.firstHit && player.totalCorrect >= 1) desbloquearConquista('firstHit', "PRIMEIRO ACERTO");
    if (!player.achievements.fiveCombo && gameSession.sessionMaxCombo >= 5) desbloquearConquista('fiveCombo', "COMBO 5x");
    
    const regioes = { "Norte": 0, "Nordeste": 0, "Centro-Oeste": 0, "Sudeste": 0, "Sul": 0 };
    const totais = { "Norte": 7, "Nordeste": 9, "Centro-Oeste": 4, "Sudeste": 4, "Sul": 3 };
    
    estadosAPI.forEach((est, idx) => {
        if (player.unlockedStates[idx]) regioes[est.regiao]++;
    });
    
    if (!player.achievements.northComplete && regioes["Norte"] === totais["Norte"]) desbloquearConquista('northComplete', "REGIÃO NORTE");
    if (!player.achievements.northeastComplete && regioes["Nordeste"] === totais["Nordeste"]) desbloquearConquista('northeastComplete', "REGIÃO NORDESTE");
    if (!player.achievements.centerwestComplete && regioes["Centro-Oeste"] === totais["Centro-Oeste"]) desbloquearConquista('centerwestComplete', "CENTRO-OESTE");
    if (!player.achievements.southeastComplete && regioes["Sudeste"] === totais["Sudeste"]) desbloquearConquista('southeastComplete', "SUDESTE");
    if (!player.achievements.southComplete && regioes["Sul"] === totais["Sul"]) desbloquearConquista('southComplete', "SUL");
    if (!player.achievements.allFlags && player.unlockedStates.filter(u => u).length === 27) desbloquearConquista('allFlags', "COLEÇÃO COMPLETA");
}

// ============================================================
// UI
// ============================================================
function atualizarUI() {
    document.getElementById("nomeJogadorMenu").innerText = player.nome || "JOGADOR";
    document.getElementById("nomeJogadorJogo").innerText = player.nome || "JOGADOR";
    atualizarAvatares();
    document.getElementById("nivelJogador").innerText = patentes[player.levelIndex];
    document.getElementById("totalXP").innerText = player.xp;
    document.getElementById("totalAcertos").innerText = player.totalCorrect;
    document.getElementById("maxCombo").innerText = player.maxCombo;
    const avatarAbertura = document.getElementById("avatarAbertura");
    if (avatarAbertura) avatarAbertura.src = caminhoPersonagem(player.personagem, 1);
    const nomeAbertura = document.getElementById("nomeJogadorAbertura");
    if (nomeAbertura) nomeAbertura.innerText = player.nome || "NOVO EXPLORADOR";
    const nivelAbertura = document.getElementById("nivelJogadorAbertura");
    if (nivelAbertura) nivelAbertura.innerText = player.nome ? patentes[player.levelIndex] : "Escolha um modo para começar";
    const xpAbertura = document.getElementById("xpAbertura");
    if (xpAbertura) xpAbertura.innerText = player.xp;
    
    const desbloq = player.unlockedStates.filter(u => u).length;
    document.getElementById("bandeirasDesbloqueadas").innerHTML = `${desbloq}<span class="neo-stat-small">/27</span>`;
    document.getElementById("albumCount").innerText = `${desbloq}/27`;
    
    // Atualiza o status do botão "Álbum Completo"
    const btnAlbum = document.getElementById("btnAbrirAlbum");
    const btnAlbumResultado = document.getElementById("btnVerAlbum");
    const albumBtnCount = document.getElementById("albumBtnCount");
    
    if (albumBtnCount) {
        albumBtnCount.innerText = desbloq;
    }
    
    if (desbloq < 27) {
        btnAlbum.classList.add("locked");
        btnAlbum.innerHTML = `<i class="fas fa-book"></i> ÁLBUM COMPLETO (<span id="albumBtnCount">${desbloq}</span>/27)`;
        btnAlbum.title = `Desbloqueie todas as 27 bandeiras para ver o álbum completo! (${desbloq}/27)`;
    } else {
        btnAlbum.classList.remove("locked");
        btnAlbum.innerHTML = `<i class="fas fa-book"></i> ÁLBUM COMPLETO`;
        btnAlbum.title = "Álbum completo desbloqueado!";
    }
    
    // Atualiza também o botão do resultado
    if (btnAlbumResultado) {
        if (desbloq < 27) {
            btnAlbumResultado.innerHTML = `<i class="fas fa-book"></i> VER ÁLBUM (${desbloq}/27)`;
            btnAlbumResultado.title = `Desbloqueie todas as 27 bandeiras para ver o álbum completo! (${desbloq}/27)`;
        } else {
            btnAlbumResultado.innerHTML = `<i class="fas fa-book"></i> VER ÁLBUM`;
            btnAlbumResultado.title = "Álbum completo desbloqueado!";
        }
    }
    
    atualizarMiniBandeiras();
    atualizarBiomaTracker();
}

function atualizarMiniBandeiras() {
    const container = document.getElementById("miniBandeirasPreview");
    if (!container) return;
    container.innerHTML = "";
    
    const preview = estadosAPI.slice(0, 12);
    preview.forEach((estado, idx) => {
        const img = document.createElement("img");
        img.src = estado.flag_url;
        img.alt = estado.name;
        img.className = `mini-flag ${player.unlockedStates[idx] ? "" : "locked"}`;
        container.appendChild(img);
    });
}

function atualizarModoUI() {
    document.querySelectorAll(".neo-btn-modo").forEach(btn => {
        if (btn.dataset.modo === player.modoAtual) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    gameSession.modoJogo = player.modoAtual;
    
    // Esconder/mostrar filtro de região no modo biomas
    const filtroContainer = document.getElementById("containerFiltro");
    if (player.modoAtual === "biomas") {
        filtroContainer.classList.add("hidden");
        gameSession.regionFilter = "all";
    } else {
        filtroContainer.classList.remove("hidden");
    }
}

// ============================================================
// BIOMA TRACKER
// ============================================================
function atualizarBiomaTracker() {
    const biomasUnlocked = new Set();
    estadosAPI.forEach((est, idx) => {
        if (player.unlockedStates[idx]) {
            biomasUnlocked.add(est.bioma);
        }
    });
    
    const container = document.getElementById("biomaTracker");
    if (!container) return;
    
    const biomaData = [
        { nome: "Amazônia", icon: "fa-tree" },
        { nome: "Cerrado", icon: "fa-seedling" },
        { nome: "Mata Atlântica", icon: "fa-leaf" },
        { nome: "Caatinga", icon: "fa-sun" },
        { nome: "Pantanal", icon: "fa-water" },
        { nome: "Pampa", icon: "fa-mountain-sun" }
    ];
    
    container.innerHTML = "";
    let descobertos = 0;
    
    biomaData.forEach(bioma => {
        const unlocked = biomasUnlocked.has(bioma.nome);
        if (unlocked) descobertos++;
        
        const div = document.createElement("div");
        div.className = `bioma-tracker-item ${unlocked ? 'unlocked' : 'locked'}`;
        div.innerHTML = `
            <span class="bioma-icon"><i class="fas ${bioma.icon}" aria-hidden="true"></i></span>
            <span>${bioma.nome}</span>
        `;
        container.appendChild(div);
    });
    
    const biomaCount = document.getElementById("biomaCount");
    if (biomaCount) {
        biomaCount.innerText = `${descobertos}/6`;
    }
}

// ============================================================
// JOGO - PERGUNTAS POR MODO
// ============================================================
function obterPergunta(indice) {
    const estado = estadosAPI[indice];
    if (gameSession.modoJogo === "bandeiras") {
        return {
            texto: "QUAL ESTADO POSSUI ESTA BANDEIRA?",
            correta: estado.name,
            imagem: estado.flag_url,
            tipo: "bandeira",
            mostrarImagem: true,
            biomaImg: null
        };
    } else if (gameSession.modoJogo === "capitais") {
        return {
            texto: `QUAL É A CAPITAL DO ESTADO ${estado.name}?`,
            correta: estado.capital,
            imagem: estado.flag_url,
            tipo: "capital",
            mostrarImagem: true,
            biomaImg: null
        };
    } else {
        // MODO BIOMAS
        return {
            texto: `QUAL É O BIOMA PRINCIPAL DO ESTADO ${estado.name}?`,
            correta: estado.bioma,
            imagem: estado.bioma_img,
            tipo: "bioma",
            mostrarImagem: true,
            biomaImg: estado.bioma_img,
            estadoNome: estado.name,
            regiao: estado.regiao
        };
    }
}

function obterAlternativas(correta, tipo) {
    if (tipo === "bioma") {
        let outras = biomasList.filter(b => b !== correta);
        for (let i = outras.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [outras[i], outras[j]] = [outras[j], outras[i]];
        }
        const distratores = outras.slice(0, 3);
        const alternativas = [correta, ...distratores];
        for (let i = alternativas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [alternativas[i], alternativas[j]] = [alternativas[j], alternativas[i]];
        }
        return alternativas.map(alt => ({
            nome: alt,
            icon: biomaIcons[alt] || "fa-leaf",
            className: `bioma-${alt.toLowerCase().replace(/ /g, '-')}`
        }));
    } else if (tipo === "bandeira") {
        let outras = estadosAPI.filter(e => e.name !== correta).map(e => e.name);
        for (let i = outras.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [outras[i], outras[j]] = [outras[j], outras[i]];
        }
        const distratores = outras.slice(0, 3);
        const alternativas = [correta, ...distratores];
        for (let i = alternativas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [alternativas[i], alternativas[j]] = [alternativas[j], alternativas[i]];
        }
        return alternativas.map(alt => ({ nome: alt }));
    } else {
        let outras = estadosAPI.filter(e => e.capital !== correta).map(e => e.capital);
        for (let i = outras.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [outras[i], outras[j]] = [outras[j], outras[i]];
        }
        const distratores = outras.slice(0, 3);
        const alternativas = [correta, ...distratores];
        for (let i = alternativas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [alternativas[i], alternativas[j]] = [alternativas[j], alternativas[i]];
        }
        return alternativas.map(alt => ({ nome: alt }));
    }
}

function animarPonto() {
    const pontuacaoSpan = document.getElementById("pontuacaoAtual");
    pontuacaoSpan.style.transform = "scale(1.2)";
    setTimeout(() => pontuacaoSpan.style.transform = "scale(1)", 150);
}

function atualizarVidas() {
    const valor = document.getElementById("vidasAtual");
    const container = document.getElementById("vidasJogo");
    if (valor) valor.innerText = gameSession.vidas;
    if (container) {
        container.classList.toggle("danger", gameSession.vidas === 1);
        container.setAttribute("aria-label", `${gameSession.vidas} ${gameSession.vidas === 1 ? "vida" : "vidas"}`);
    }
}

function usarDica() {
    if (gameSession.answered || gameSession.dicaUsada) return;
    const incorretas = Array.from(document.querySelectorAll(".neo-alt"))
        .filter((card) => card.dataset.valor !== gameSession.currentCorrect);
    embaralhar(incorretas).slice(0, 2).forEach((card) => {
        card.classList.add("hint-hidden");
        card.setAttribute("aria-hidden", "true");
    });
    gameSession.dicaUsada = true;
    document.getElementById("btnDica").disabled = true;
    tocarSom("dica");
}

function renderizarPergunta() {
    const idx = gameSession.shuffledIndices[gameSession.currentIndex];
    const pergunta = obterPergunta(idx);
    
    gameSession.currentCorrect = pergunta.correta;
    
    const modoLabel = document.getElementById("modoQuizLabel");
    if (modoLabel) {
        modoLabel.innerText = {
            bandeiras: "DESAFIO DE BANDEIRAS",
            capitais: "DESAFIO DE CAPITAIS",
            biomas: "DESAFIO DE BIOMAS"
        }[gameSession.modoJogo] || "DESAFIO GEO BR";
    }
    
    document.getElementById("perguntaTexto").innerText = pergunta.texto;
    
    // Configurar imagem (bandeira ou bioma)
    const containerImg = document.getElementById("containerImagem");
    const bandeiraImg = document.getElementById("bandeiraImg");
    
    if (gameSession.modoJogo === "biomas") {
        bandeiraImg.style.display = "none";
        containerImg.className = "neo-bandeira bioma-mode";
        containerImg.style.borderColor = "var(--border)";
        containerImg.innerHTML = `
            <img id="bandeiraImg" class="neo-bandeira-img" src="" alt="Bandeira" style="display:none;">
            <img id="biomaDisplayImg" class="neo-bioma-img" src="${pergunta.imagem}" alt="Imagem do bioma">
        `;
    } else {
        containerImg.className = "neo-bandeira";
        bandeiraImg.style.display = "block";
        bandeiraImg.src = pergunta.imagem;
        containerImg.style.background = "var(--flag-bg)";
        containerImg.style.borderColor = "var(--border)";
        containerImg.innerHTML = `
            <img id="bandeiraImg" class="neo-bandeira-img" src="${pergunta.imagem}" alt="Bandeira">
        `;
    }
    
    const alternativas = obterAlternativas(pergunta.correta, pergunta.tipo);
    const container = document.getElementById("containerAlternativas");
    container.innerHTML = "";
    
    alternativas.forEach(alt => {
        const card = document.createElement("div");
        if (pergunta.tipo === "bioma") {
            card.className = `neo-alt neo-alt-bioma ${alt.className || ''}`;
            card.innerHTML = `<span class="bioma-name">${alt.nome}</span>`;
            if (alt.nome && biomaColors[alt.nome]) {
                card.style.borderLeftColor = biomaColors[alt.nome];
                card.style.borderLeftWidth = "4px";
            }
        } else {
            card.className = "neo-alt";
            card.innerText = alt.nome;
        }
        card.dataset.valor = alt.nome;
        card.onclick = () => processarResposta(alt.nome);
        container.appendChild(card);
    });
    
    document.getElementById("areaFeedback").innerHTML = "";
    gameSession.dicaUsada = false;
    document.getElementById("btnDica").disabled = false;
    gameSession.answered = false;
    document.querySelectorAll(".neo-alt").forEach(card => card.classList.remove("disabled"));
    
    gameSession.tempoRestante = gameSession.tempoQuestao;
    const timerSpan = document.getElementById("timerSegundos");
    timerSpan.innerText = gameSession.tempoRestante;
    
    if (gameSession.timerInterval) clearInterval(gameSession.timerInterval);
    gameSession.timerInterval = setInterval(() => {
        if (!gameSession.answered && gameSession.tempoRestante > 0) {
            gameSession.tempoRestante--;
            timerSpan.innerText = gameSession.tempoRestante;
            if (gameSession.tempoRestante === 0) {
                clearInterval(gameSession.timerInterval);
                processarResposta(null);
            }
        } else if (gameSession.tempoRestante <= 0) {
            clearInterval(gameSession.timerInterval);
        }
    }, 1000);
}

function limparAutoProximo() {
    if (gameSession.autoNextTimeout) {
        clearTimeout(gameSession.autoNextTimeout);
        gameSession.autoNextTimeout = null;
    }
}

function iniciarTimerProximo() {
    limparAutoProximo();
    gameSession.autoNextTimeout = setTimeout(() => {
        proximaPergunta();
    }, gameSession.tempoQuestao * 1000);
}

function processarResposta(selecionada) {
    if (gameSession.answered) return;
    if (gameSession.timerInterval) clearInterval(gameSession.timerInterval);
    gameSession.answered = true;
    limparAutoProximo();
    
    document.querySelectorAll(".neo-alt").forEach(card => card.classList.add("disabled"));
    
    const idx = gameSession.shuffledIndices[gameSession.currentIndex];
    const estado = estadosAPI[idx];
    const pergunta = obterPergunta(idx);
    const correta = (selecionada === pergunta.correta);
    
    // Animação no container da imagem
    const containerImg = document.getElementById("containerImagem");
    containerImg.classList.remove("correct", "wrong");
    void containerImg.offsetWidth;
    
    if (correta) {
        containerImg.classList.add("correct");
        gameSession.combo++;
        gameSession.sessionMaxCombo = Math.max(gameSession.sessionMaxCombo, gameSession.combo);
        player.maxCombo = Math.max(player.maxCombo, gameSession.sessionMaxCombo);
        
        const bonusCombo = Math.min(gameSession.combo * 2, 18);
        const xpGanho = 10 + bonusCombo;
        
        gameSession.score += 10;
        adicionarXP(xpGanho);
        player.totalCorrect++;
        
        let msgDesbloqueio = "";
        if (!player.unlockedStates[idx]) {
            player.unlockedStates[idx] = true;
            msgDesbloqueio = ` DESBLOQUEOU ${estado.name}!`;
            salvarLocal();
            verificarConquistas();
            atualizarUI();
        }
        
        let respostaCorreta = "";
        if (gameSession.modoJogo === "bandeiras") {
            respostaCorreta = estado.name;
        } else if (gameSession.modoJogo === "capitais") {
            respostaCorreta = `${estado.name} - ${estado.capital}`;
        } else {
            respostaCorreta = `${estado.bioma} (${estado.name})`;
        }
        mostrarNotificacao(`${respostaCorreta}!${msgDesbloqueio}`, "acerto", xpGanho);
        
        verificarConquistas();
        animarPonto();
    } else {
        containerImg.classList.add("wrong");
        gameSession.combo = 0;
        gameSession.vidas = Math.max(0, gameSession.vidas - 1);
        atualizarVidas();
        adicionarXP(2);
        
        let respostaCorreta = "";
        if (gameSession.modoJogo === "bandeiras") {
            respostaCorreta = estado.name;
        } else if (gameSession.modoJogo === "capitais") {
            respostaCorreta = `${estado.capital} (${estado.name})`;
        } else {
            respostaCorreta = `${estado.bioma} (${estado.name})`;
        }
        mostrarNotificacao(`A RESPOSTA É ${respostaCorreta}. ${estado.curiosidade.substring(0, 80)}...`, "erro", 2);
    }
    
    document.getElementById("comboAtual").innerText = gameSession.combo;
    document.getElementById("pontuacaoAtual").innerText = gameSession.score / 10;
    
    atualizarUI();
    salvarLocal();
    if (gameSession.vidas <= 0) {
        setTimeout(() => mostrarResultadoFinal(true), 1400);
    } else {
        iniciarTimerProximo();
    }
}

function proximaPergunta() {
    limparAutoProximo();
    if (gameSession.currentIndex + 1 < gameSession.shuffledIndices.length) {
        gameSession.currentIndex++;
        renderizarPergunta();
        document.getElementById("progressoAtual").innerText = gameSession.currentIndex + 1;
    } else {
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal(encerrada = false) {
    if (gameSession.timerInterval) clearInterval(gameSession.timerInterval);
    limparAutoProximo();
    
    const totalAcertos = gameSession.score / 10;
    const totalPerguntas = gameSession.shuffledIndices.length;
    const precisao = Math.round((totalAcertos / totalPerguntas) * 100);
    
    const minutos = Math.floor(gameSession.secondsElapsed / 60);
    const segundos = gameSession.secondsElapsed % 60;
    
    document.getElementById("finalAcertos").innerText = totalAcertos;
    document.getElementById("finalTotal").innerText = totalPerguntas;
    document.getElementById("finalPrecisao").innerText = precisao;
    document.getElementById("finalTempo").innerText = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    document.getElementById("finalPatente").innerText = patentes[player.levelIndex];
    document.getElementById("finalMaxCombo").innerText = gameSession.sessionMaxCombo;
    document.getElementById("tituloResultado").innerText = encerrada ? "MISSÃO ENCERRADA" : "MISSÃO CUMPRIDA!";
    document.getElementById("mascoteResultado").src = caminhoPersonagem(player.personagem, encerrada ? 4 : 2);
    document.getElementById("mascoteResultado").alt = encerrada ? "Personagem triste" : "Personagem comemorando";
    tocarSom(encerrada ? "fim" : "vitoria");
    
    atualizarUI();
    
    document.getElementById("telaJogo").classList.remove("active");
    document.getElementById("telaResultado").classList.add("active");
}

function resetarSessao() {
    if (gameSession.timerInterval) clearInterval(gameSession.timerInterval);
    limparAutoProximo();
    
    let indicesFiltrados;
    if (gameSession.modoJogo === "biomas") {
        indicesFiltrados = [...Array(27).keys()];
    } else {
        indicesFiltrados = obterIndicesFiltrados();
    }
    
    gameSession.shuffledIndices = embaralhar([...indicesFiltrados]);
    gameSession.currentIndex = 0;
    gameSession.score = 0;
    gameSession.combo = 0;
    gameSession.sessionMaxCombo = 0;
    gameSession.answered = false;
    gameSession.secondsElapsed = 0;
    gameSession.vidas = 3;
    gameSession.dicaUsada = false;
    
    document.getElementById("timerSegundos").innerText = gameSession.tempoQuestao;
    document.getElementById("progressoAtual").innerText = "1";
    document.getElementById("totalPerguntas").innerText = indicesFiltrados.length;
    document.getElementById("pontuacaoAtual").innerText = "0";
    document.getElementById("comboAtual").innerText = "0";
    document.getElementById("areaFeedback").innerHTML = "";
    atualizarVidas();
    
    renderizarPergunta();
}

function obterIndicesFiltrados() {
    if (gameSession.regionFilter === "all") return [...Array(27).keys()];
    return estadosAPI.reduce((acc, est, idx) => {
        if (est.regiao === gameSession.regionFilter) acc.push(idx);
        return acc;
    }, []);
}

function embaralhar(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function iniciarJogo() {
    if (!player.nome) {
        abrirModalAluno();
        return;
    }
    
    if (player.modoAtual !== "biomas") {
        gameSession.regionFilter = document.getElementById("filtroRegiao").value;
    } else {
        gameSession.regionFilter = "all";
    }
    
    gameSession.modoJogo = player.modoAtual;
    resetarSessao();

    document.getElementById("geobrTheme").disabled = false;
    document.getElementById("geoBrOpening").classList.add("hidden");
    document.getElementById("appRoot").classList.remove("hidden");
    document.getElementById("telaInicial").classList.remove("active");
    document.getElementById("telaJogo").classList.add("active");
    document.getElementById("telaResultado").classList.remove("active");
    document.getElementById("telaAlbum").classList.remove("active");
}

function voltarMenu() {
    if (gameSession.timerInterval) clearInterval(gameSession.timerInterval);
    limparAutoProximo();
    document.getElementById("telaJogo").classList.remove("active");
    document.getElementById("telaAlbum").classList.remove("active");
    document.getElementById("telaResultado").classList.remove("active");
    document.getElementById("telaInicial").classList.remove("active");
    document.getElementById("appRoot").classList.add("hidden");
    document.getElementById("geoBrOpening").classList.remove("hidden");
    document.getElementById("geobrTheme").disabled = false;
    player.nome = "";
    atualizarUI();
    atualizarRankingUI();
}

// ============================================================
// ÁLBUM E MODAIS
// ============================================================
function abrirAlbum() {
    const desbloqueadas = player.unlockedStates.filter(u => u).length;
    
    if (desbloqueadas < 27) {
        mostrarNotificacao(`DESBLOQUEIE TODAS AS 27 BANDEIRAS PARA VER O ÁLBUM COMPLETO! (${desbloqueadas}/27)`, "info");
        return;
    }
    
    atualizarAlbumUI();
    document.getElementById("geobrTheme").disabled = true;
    document.getElementById("geoBrOpening").classList.add("hidden");
    document.getElementById("appRoot").classList.remove("hidden");
    document.getElementById("telaInicial").classList.remove("active");
    document.getElementById("telaAlbum").classList.add("active");
    if (gameSession.timerInterval) clearInterval(gameSession.timerInterval);
    limparAutoProximo();
}

function atualizarAlbumUI() {
    const container = document.getElementById("listaAlbum");
    container.innerHTML = "";
    
    estadosAPI.forEach((estado, idx) => {
        const card = document.createElement("div");
        card.className = `neo-state-card`;
        card.onclick = () => {
            document.getElementById("modalNomeEstado").innerText = estado.name;
            document.getElementById("modalBandeira").src = estado.flag_url;
            document.getElementById("modalCapital").innerHTML = estado.capital;
            document.getElementById("modalRegiao").innerHTML = estado.regiao;
            document.getElementById("modalBioma").innerHTML = estado.bioma;
            document.getElementById("modalCuriosidade").innerHTML = estado.curiosidade;
            document.getElementById("modalEstado").classList.add("active");
        };
        card.innerHTML = `
            <img class="neo-state-flag" src="${estado.flag_url}" alt="${estado.name}">
            <strong>${estado.name}</strong>
            <div style="font-size: 10px;">${estado.regiao}</div>
        `;
        container.appendChild(card);
    });
    
    document.getElementById("albumPatente").innerText = patentes[player.levelIndex];
}

function abrirModalConquistas() {
    document.getElementById("geobrTheme").disabled = true;
    document.getElementById("geoBrOpening").classList.add("hidden");
    document.getElementById("appRoot").classList.remove("hidden");
    const lista = document.getElementById("listaConquistas");
    const conquistas = [
        { id: "firstHit", title: "PRIMEIRO ACERTO", desc: "Acertar sua primeira pergunta", icon: "fa-bullseye" },
        { id: "fiveCombo", title: "COMBO 5x", desc: "Acertar 5 perguntas seguidas", icon: "fa-fire-flame-curved" },
        { id: "northComplete", title: "REGIÃO NORTE", desc: "Desbloquear todos os 7 estados do Norte", icon: "fa-tree" },
        { id: "northeastComplete", title: "REGIÃO NORDESTE", desc: "Desbloquear todos os 9 estados do Nordeste", icon: "fa-umbrella-beach" },
        { id: "centerwestComplete", title: "CENTRO-OESTE", desc: "Desbloquear todos os 4 estados", icon: "fa-mountain-sun" },
        { id: "southeastComplete", title: "SUDESTE", desc: "Desbloquear todos os 4 estados", icon: "fa-city" },
        { id: "southComplete", title: "SUL", desc: "Desbloquear todos os 3 estados", icon: "fa-snowflake" },
        { id: "allFlags", title: "COLEÇÃO COMPLETA", desc: "Desbloquear todos os 27 estados", icon: "fa-crown" }
    ];
    
    lista.innerHTML = "";
    conquistas.forEach(ach => {
        const unlocked = player.achievements[ach.id];
        const div = document.createElement("div");
        div.className = `achievement-item ${!unlocked ? 'locked' : ''}`;
        div.innerHTML = `
            <div class="achievement-icon"><i class="fas ${ach.icon}" aria-hidden="true"></i></div>
            <div class="achievement-info">
                <div class="achievement-title"><i class="fas ${unlocked ? 'fa-check' : 'fa-lock'}" aria-hidden="true"></i> ${ach.title}</div>
                <div class="achievement-desc">${ach.desc}</div>
            </div>
        `;
        lista.appendChild(div);
    });
    document.getElementById("modalConquistas").classList.add("active");
}

function abrirModalReset() {
    document.getElementById("modalReset").classList.add("active");
}

function fecharModalReset() {
    document.getElementById("modalReset").classList.remove("active");
}

function abrirModalAluno() {
    const modal = document.getElementById("modalAluno");
    const campoNome = document.getElementById("alunoNome");
    campoNome.value = "";
    document.getElementById("characterError").textContent = "";
    renderizarPersonagens(player.personagem);
    modal.classList.add("active");
    requestAnimationFrame(() => campoNome.focus());
}

function fecharModalAluno(cancelarPendente = true) {
    document.getElementById("modalAluno").classList.remove("active");
    if (cancelarPendente) modoPendenteAbertura = null;
}

function salvarAluno() {
    const nome = document.getElementById("alunoNome").value.trim();
    const serie = "GEO BR";
    
    if (nome === "") {
        alert("Digite seu nome!");
        return;
    }
    if (!player.personagem) {
        document.getElementById("characterError").textContent = "Escolha uma capivara.";
        return;
    }
    
    const cadastroExistente = buscarPerfilJogador(nome)
        || ranking.find(item => normalizarNomeJogador(item.nome) === normalizarNomeJogador(nome));
    if (cadastroExistente) {
        player.nome = cadastroExistente.nome;
        player.xp = Number(cadastroExistente.xp) || 0;
        player.personagem = normalizarPersonagem(cadastroExistente.personagem);
    } else {
        player.nome = nome.replace(/\s+/g, " ");
        player.xp = 0;
    }
    player.serie = serie;
    atualizarPatente();
    salvarLocal();
    salvarRanking();
    adicionarOuAtualizarRanking(player.nome, player.serie, player.xp, patentes[player.levelIndex], player.personagem);
    fecharModalAluno(false);
    atualizarUI();
    if (modoPendenteAbertura) {
        modoPendenteAbertura = null;
        iniciarJogo();
    }
}

// ============================================================
// EVENTOS
// ============================================================
document.getElementById("btnIniciarJogo").addEventListener("click", iniciarJogo);
document.getElementById("btnAbrirAlbum").addEventListener("click", abrirAlbum);
document.getElementById("btnFecharAlbum").addEventListener("click", voltarMenu);
document.getElementById("btnVoltarMenu").addEventListener("click", voltarMenu);
document.getElementById("btnMenuResultado").addEventListener("click", voltarMenu);
document.getElementById("btnResetarProgresso").addEventListener("click", abrirModalReset);
document.getElementById("btnConfirmarReset").addEventListener("click", resetarProgresso);
document.getElementById("btnCancelarReset").addEventListener("click", fecharModalReset);
document.getElementById("btnFecharModal").addEventListener("click", () => document.getElementById("modalEstado").classList.remove("active"));
document.getElementById("btnFecharConquistas").addEventListener("click", () => {
    document.getElementById("modalConquistas").classList.remove("active");
    document.getElementById("appRoot").classList.add("hidden");
    document.getElementById("geoBrOpening").classList.remove("hidden");
    document.getElementById("geobrTheme").disabled = false;
});
document.getElementById("btnAbrirConquistas").addEventListener("click", abrirModalConquistas);
document.getElementById("btnJogarNovamente").addEventListener("click", () => {
    document.getElementById("telaResultado").classList.remove("active");
    iniciarJogo();
});
document.getElementById("btnVerAlbum").addEventListener("click", () => {
    document.getElementById("telaResultado").classList.remove("active");
    const desbloqueadas = player.unlockedStates.filter(u => u).length;
    if (desbloqueadas < 27) {
        mostrarNotificacao(`COMPLETE TODAS AS 27 BANDEIRAS PARA VER O ÁLBUM! (${desbloqueadas}/27)`, "info");
        return;
    }
    abrirAlbum();
});
document.getElementById("btnTrocarNome").addEventListener("click", abrirModalAluno);
document.getElementById("btnSalvarAluno").addEventListener("click", salvarAluno);
document.getElementById("btnFecharModalAluno").addEventListener("click", fecharModalAluno);
document.getElementById("btnCancelarAluno").addEventListener("click", fecharModalAluno);
document.getElementById("btnResetarRanking").addEventListener("click", limparRankingComoGeoMundo);
document.getElementById("btnDica").addEventListener("click", usarDica);
document.getElementById("btnLimparRankingAbertura").addEventListener("click", limparRankingComoGeoMundo);

document.querySelectorAll(".geo-mode-card").forEach(btn => {
    btn.addEventListener("click", () => {
        prepararNovoJogador();
        player.modoAtual = btn.dataset.modo;
        modoPendenteAbertura = btn.dataset.modo;
        abrirModalAluno();
    });
});

document.querySelectorAll(".neo-btn-modo").forEach(btn => {
    btn.addEventListener("click", () => {
        player.modoAtual = btn.dataset.modo;
        salvarLocal();
        atualizarModoUI();
    });
});

window.addEventListener("click", (e) => {
    if (e.target.id === "modalAluno") {
        fecharModalAluno();
        return;
    }
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("active");
    }
});

// ============================================================
// INICIALIZAÇÃO
// ============================================================
if (localStorage.getItem("missaoBrasil_ranking")) {
    const oldRanking = JSON.parse(localStorage.getItem("missaoBrasil_ranking"));
    if (oldRanking && oldRanking.some(p => !p.nome || p.nome === "undefined" || p.nome === "EXPLORADOR")) {
        localStorage.removeItem("missaoBrasil_ranking");
    }
}

carregarRanking();
carregarLocal();
atualizarUI();
atualizarAlbumUI();
atualizarBarraXP();
atualizarRankingUI();
document.getElementById("totalPerguntas").innerText = "27";
