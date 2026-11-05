const body = document.body;
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");
const overlay = document.getElementById("sidebar-overlay");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".scroll-section");

function openSidebar() {
    sidebar.classList.add("is-open");
    overlay.classList.add("is-visible");
    body.classList.add("sidebar-open");
    menuToggle.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    body.classList.remove("sidebar-open");
    menuToggle.setAttribute("aria-expanded", "false");
}

function toggleSidebar() {
    if (sidebar.classList.contains("is-open")) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

function setActiveLink() {
    if (showingProjectDetail) {
        navLinks.forEach((link) => link.classList.remove("active"));
        return;
    }

    const activeSection = [...sections].reduce((closest, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - 120);
        return distance < closest.distance ? { section, distance } : closest;
    }, { section: null, distance: Infinity }).section;

    navLinks.forEach((link) => {
        link.classList.toggle("active", activeSection && link.getAttribute("href") === `#${activeSection.id}`);
    });
}

menuToggle.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeSidebar();
    }
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
});

window.addEventListener("scroll", setActiveLink, { passive: true });
window.addEventListener("load", setActiveLink);

const projects = [
    {
        id: "google-cardboard-unity",
        title: "Google Cardboard Unity",
        image: "img/cardboard.png",
        overview: "Protótipo de jogo em realidade virtual desenvolvido na Unity, com o objetivo de explorar a integração com o Google Cardboard e proporcionar uma experiência interativa por meio de óculos de realidade virtual.",
        development: [
            "O protótipo apresenta um ambiente tridimensional que representa um quarto infantil. Nele, o jogador deve interagir com os objetos posicionados sobre uma mesa, organizando-os em uma prateleira.",
            "O ambiente também permite ligar e desligar a iluminação do quarto, proporcionando interações com elementos do cenário.",
            "O projeto foi desenvolvido para explorar recursos de interação em realidade virtual e a utilização do Google Cardboard na Unity."
        ],
        toolsTitle: "Ferramentas utilizadas",
        tools: ["Unity", "Google Cardboard"]
    },
    {
        id: "edicao-audio-cubase",
        title: "Edição de Áudio com Cubase",
        image: "img/cubase.jfif",
        overview: "Atividades práticas de edição e gravação de áudio realizadas com o software Cubase, voltadas à produção sonora e à sincronização de efeitos com conteúdos audiovisuais.",
        developmentTitle: "Desenvolvimento e atividades",
        development: [
            "Foram realizadas edições de áudio para vídeos curtos dos gêneros terror e suspense, com foco na construção da ambientação sonora e na adequação dos efeitos às cenas.",
            "Também foram desenvolvidos exercícios de sincronização de sons de movimentação e ataques em vídeos de gameplay do jogo Hollow Knight.",
            "As atividades envolveram edição, gravação e sincronização de elementos sonoros, buscando melhorar a integração entre imagem e áudio."
        ],
        toolsTitle: "Ferramenta utilizada",
        tools: ["Cubase"]
    },
    {
        id: "prototipo-fazenda",
        title: "Protótipo Fazenda",
        image: "img/fazenda.png",
        overview: "Protótipo de jogo desenvolvido na Unity, com foco na implementação de interfaces, recursos sonoros e adaptação para diferentes plataformas.",
        development: [
            "O jogador controla um fazendeiro que deve alimentar animais que se aproximam, lançando pizzas em sua direção.",
            "Cada animal atingido por uma pizza concede pontos ao jogador. Caso um animal atravesse o cenário sem receber alimento, o jogador perde uma vida."
        ],
        bullets: [
            "O jogador começa com três vidas.",
            "A cada animal que passa sem receber alimento, uma vida é perdida.",
            "Ao perder as três vidas, a partida termina em derrota.",
            "Ao acertar dez pizzas nos animais, o jogador vence a partida."
        ],
        afterBullets: [
            "O protótipo também foi utilizado para realizar modificações na interface do usuário (HUD), implementar os primeiros recursos sonoros e explorar a disponibilização do jogo para computadores e dispositivos Android, em formato de aplicativo."
        ],
        toolsTitle: "Ferramentas e tecnologias",
        tools: ["Unity", "FMOD"]
    },
    {
        id: "integracao-fmod",
        title: "Integração de Áudio com FMOD",
        image: "img/fmod.jpg",
        overview: "Utilização do FMOD para implementação e gerenciamento de recursos sonoros em jogos desenvolvidos na Unity.",
        development: [
            "O FMOD foi utilizado para integrar diferentes tipos de áudio aos projetos, permitindo configurar condições específicas de reprodução e adaptar os efeitos sonoros aos acontecimentos durante a experiência do jogador."
        ],
        bullets: [
            "Integração de efeitos sonoros aos ambientes e às interações.",
            "Configuração de condições para reprodução de áudio.",
            "Implementação de sons em loop.",
            "Aplicação de transições de volume por meio de fade-in e fade-out.",
            "Organização dos eventos sonoros e sua integração à Unity."
        ],
        afterBullets: [
            "A ferramenta foi utilizada especialmente nos projetos Cabana do Mistério (Escape Room) e UltraLab, contribuindo para a ambientação e para a experiência sonora dos jogos."
        ],
        toolsTitle: "Ferramentas utilizadas",
        tools: ["FMOD", "Unity"]
    },
    {
        id: "jogo-plataforma-2d",
        title: "Jogo de Plataforma 2D",
        image: "img/plataforma.png",
        overview: "Jogo de plataforma bidimensional desenvolvido na Unity, envolvendo movimentação do personagem, desafios de progressão e interação com elementos do cenário.",
        development: [
            "O objetivo do jogador é avançar pelas fases, superando obstáculos e enfrentando diferentes desafios.",
            "Durante a partida, o personagem pode eliminar ou evitar inimigos, coletar objetos distribuídos pelo cenário para acumular pontos e realizar movimentos de plataforma e parkour para alcançar novas áreas.",
            "O projeto explora mecânicas de movimentação, interação com objetos, pontuação e progressão entre fases."
        ],
        toolsTitle: "Ferramenta utilizada",
        tools: ["Unity"]
    },
    {
        id: "ultralab-pocus",
        title: "UltraLab: Protocolo POCUS",
        image: "img/projeto3.png",
        overview: [
            "Jogo educacional em 2D, desenvolvido em pixel art na Unity como Trabalho de Conclusão de Curso (TCC), em parceria com o curso de Enfermagem da Universidade Federal do Paraná (UFPR).",
            "O projeto tem como objetivo auxiliar na formação de estudantes de Enfermagem por meio de uma experiência de aprendizagem interativa e simulada."
        ],
        development: [
            "A narrativa acompanha um personagem em formação na área de Enfermagem, que precisa desenvolver habilidades relacionadas ao atendimento e ao acompanhamento de pacientes.",
            "Durante o jogo, o personagem recebe treinamento para a utilização do POCUS (Point-of-Care Ultrasound), uma técnica de ultrassonografia realizada à beira do leito, que pode auxiliar na avaliação clínica de pacientes em ambientes como a Unidade de Terapia Intensiva (UTI).",
            "O jogador deve acompanhar a evolução dos pacientes ao longo dos dias, observar suas condições e registrar as informações relevantes em seus respectivos prontuários.",
            "A proposta é oferecer um ambiente de aprendizagem no qual estudantes possam praticar procedimentos, tomar decisões, identificar possíveis erros e esclarecer dúvidas por meio de situações simuladas.",
            "O projeto busca contribuir para a formação dos futuros profissionais de Enfermagem, utilizando a tecnologia e os jogos digitais como recursos educacionais."
        ],
        toolsTitle: "Ferramentas e tecnologias",
        tools: ["Unity", "Pixel art", "FMOD"]
    },
    {
        id: "cabana-misterio",
        title: "Cabana do Mistério",
        image: "img/projeto4.png",
        overview: [
            "Jogo tridimensional do gênero escape room, desenvolvido na Unity e inspirado no universo da animação Gravity Falls.",
            "O projeto utiliza elementos de exploração, investigação e resolução de enigmas para construir uma experiência interativa de mistério."
        ],
        development: [
            "Na história, o jogador assume o papel de um invasor que entra em uma cabana misteriosa e acaba ficando preso após a ativação de uma armadilha preparada pelo proprietário, Stan Pines.",
            "Para escapar, o jogador precisa explorar o ambiente, observar os objetos e interpretar as pistas encontradas ao longo da partida.",
            "O principal objetivo é localizar três livros escondidos na cabana, utilizando as informações obtidas durante a exploração para solucionar os desafios e encontrar uma maneira de sair.",
            "A experiência possui um limite de tempo, aumentando a sensação de urgência e incentivando o jogador a investigar o cenário com atenção.",
            "O jogo apresenta diversas referências ao universo de Gravity Falls, incorporadas à ambientação e aos elementos narrativos."
        ],
        toolsTitle: "Ferramentas e tecnologias",
        tools: ["Unity", "FMOD"]
    },
    {
        id: "jogo-terror-3d",
        title: "Jogo de Terror 3D",
        image: "img/terrorunity.jpg",
        overview: "Protótipo de jogo de terror tridimensional desenvolvido na Unity, com foco no aprendizado de criação e personalização de terrenos, construção de ambientes e desenvolvimento de uma experiência narrativa de suspense.",
        development: [
            "A história acompanha um personagem que está acampando com um amigo em uma floresta.",
            "Durante a noite, o protagonista percebe que seu companheiro desapareceu misteriosamente. Ao investigar o local, encontra vestígios de sangue no chão, indicando que algo pode ter acontecido.",
            "Em seguida, o personagem escuta gritos vindos do interior da floresta e decide investigar a origem dos sons.",
            "Durante a exploração, encontra uma cabana aparentemente abandonada, onde a busca pelo amigo continua.",
            "O objetivo do jogador é investigar os acontecimentos, encontrar seu companheiro desaparecido e conseguir deixar a floresta o mais rápido possível.",
            "O projeto foi desenvolvido para explorar a criação de terrenos personalizados em 3D, a ambientação de cenários e a construção de uma narrativa de terror e suspense."
        ],
        toolsTitle: "Ferramentas e tecnologias",
        tools: ["Unity", "FMOD"]
    },
    {
        id: "surround",
        title: "Surround",
        image: "img/surround.png",
        overview: "Projeto de recriação do jogo clássico Surround, originalmente lançado para o Atari 2600. Desenvolvido com HTML, CSS e JavaScript, o jogo apresenta partidas para dois jogadores, nas quais cada participante deve controlar seu personagem, evitar colisões e utilizar estratégias para superar o adversário. O projeto explora programação de jogos, movimentação em canvas, detecção de colisões e recursos sonoros.",
        toolsTitle: "Tecnologias",
        tools: ["HTML", "CSS", "JavaScript"]
    }
];

const projectsById = new Map(projects.map((project) => [project.id, project]));
const projectDetail = document.getElementById("project-detail");
const projectDetailTitle = document.getElementById("project-detail-title");
const projectDetailImage = document.getElementById("project-detail-image");
const projectDetailContent = document.getElementById("project-detail-content");
const projectDetailBack = document.getElementById("project-detail-back");
const originalDocumentTitle = document.title;
let showingProjectDetail = false;
let activeProjectId = null;

function appendProjectPanel(title, paragraphs, bullets = [], listClass = "", afterBullets = []) {
    const panel = document.createElement("section");
    panel.className = "project-detail__panel";

    const heading = document.createElement("h3");
    heading.textContent = title;
    panel.append(heading);

    paragraphs.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        panel.append(paragraph);
    });

    if (bullets.length > 0) {
        const list = document.createElement("ul");
        list.className = listClass;
        bullets.forEach((text) => {
            const item = document.createElement("li");
            item.textContent = text;
            list.append(item);
        });
        panel.append(list);
    }

    afterBullets.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        panel.append(paragraph);
    });

    projectDetailContent.append(panel);
}

function renderProject(project) {
    projectDetailTitle.textContent = project.title;
    projectDetailImage.src = project.image;
    projectDetailImage.alt = project.title;
    projectDetailContent.replaceChildren();

    appendProjectPanel("Descrição geral", Array.isArray(project.overview) ? project.overview : [project.overview]);
    appendProjectPanel(
        project.developmentTitle || "Desenvolvimento e funcionalidades",
        project.development,
        project.bullets,
        "",
        project.afterBullets
    );
    appendProjectPanel(project.toolsTitle, [], project.tools, "project-detail__tools");
    document.title = `${project.title} | ${originalDocumentTitle}`;
}

function scrollToInstant(position) {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, position);
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
}

function renderProjectRoute() {
    const match = window.location.hash.match(/^#projeto\/([a-z0-9-]+)$/);
    const project = match ? projectsById.get(match[1]) : null;

    if (match && !project) {
        window.history.replaceState(null, "", "#portfolio");
    }

    const isShowingProject = Boolean(project);
    body.classList.toggle("project-detail-open", isShowingProject);
    document.querySelectorAll(".page-content > :not(#project-detail)").forEach((element) => {
        element.hidden = isShowingProject;
    });
    projectDetail.hidden = !isShowingProject;

    if (project && activeProjectId !== project.id) {
        renderProject(project);
        activeProjectId = project.id;
    }

    if (!project) {
        activeProjectId = null;
        document.title = originalDocumentTitle;
    }

    if (showingProjectDetail !== isShowingProject) {
        showingProjectDetail = isShowingProject;

        if (isShowingProject) {
            scrollToInstant(0);
            closeSidebar();
        } else {
            const target = document.getElementById(window.location.hash.slice(1)) || document.getElementById("portfolio");
            const scrollPosition = target.getBoundingClientRect().top + window.scrollY;
            scrollToInstant(scrollPosition);
        }

        setActiveLink();
    }
}

function openProject(projectId) {
    if (!projectsById.has(projectId)) {
        return;
    }

    if (window.location.hash !== "#portfolio") {
        window.history.replaceState(null, "", "#portfolio");
    }
    window.history.pushState({ projectDetail: true }, "", `#projeto/${projectId}`);
    renderProjectRoute();
}

const projectTrack = document.querySelector(".carousel-track");

if (projectTrack) {
    projectTrack.addEventListener("click", (event) => {
        const card = event.target.closest("[data-project]");
        if (card && projectTrack.contains(card)) {
            if (card.dataset.projectUrl) {
                window.location.href = card.dataset.projectUrl;
                return;
            }
            openProject(card.dataset.project);
        }
    });

    projectTrack.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
            return;
        }

        const card = event.target.closest("[data-project]");
        if (card && projectTrack.contains(card)) {
            event.preventDefault();
            if (card.dataset.projectUrl) {
                window.location.href = card.dataset.projectUrl;
                return;
            }
            openProject(card.dataset.project);
        }
    });
}

projectDetailBack.addEventListener("click", () => {
    if (window.history.state && window.history.state.projectDetail) {
        window.history.back();
        return;
    }

    window.history.replaceState(null, "", "#portfolio");
    renderProjectRoute();
});

window.addEventListener("hashchange", renderProjectRoute);
window.addEventListener("popstate", renderProjectRoute);
renderProjectRoute();

if (window.location.hash === "#portfolio-instant") {
    const portfolio = document.getElementById("portfolio");
    const scrollPosition = portfolio.getBoundingClientRect().top + window.scrollY;
    scrollToInstant(scrollPosition);
    window.history.replaceState(window.history.state, "", "#portfolio");
}

const carousel = document.querySelector(".carousel-container");

if (carousel) {
    const track = carousel.querySelector(".carousel-track");
    const previousButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isAnimating = false;
    let animationTimer;
    let transitionHandler;

    function getStep() {
        const firstCard = track.firstElementChild;
        const trackStyles = window.getComputedStyle(track);
        return firstCard.getBoundingClientRect().width + parseFloat(trackStyles.columnGap || trackStyles.gap || 0);
    }

    function finishAnimation(direction) {
        if (!isAnimating) {
            return;
        }

        window.clearTimeout(animationTimer);
        if (transitionHandler) {
            track.removeEventListener("transitionend", transitionHandler);
            transitionHandler = null;
        }

        if (direction === "next") {
            track.append(track.firstElementChild);
        }

        track.style.transition = "none";
        track.style.transform = "translate3d(0, 0, 0)";
        track.offsetWidth;
        track.style.removeProperty("transition");
        track.style.removeProperty("transform");
        isAnimating = false;
    }

    function moveCarousel(direction) {
        if (isAnimating || track.children.length < 2) {
            return;
        }

        isAnimating = true;

        if (reducedMotion.matches || document.hidden) {
            if (direction === "next") {
                track.append(track.firstElementChild);
            } else {
                track.prepend(track.lastElementChild);
            }
            isAnimating = false;
            return;
        }

        const step = getStep();

        if (direction === "previous") {
            track.style.transition = "none";
            track.prepend(track.lastElementChild);
            track.style.transform = `translate3d(-${step}px, 0, 0)`;
            track.offsetWidth;
        }

        transitionHandler = function onTransitionEnd(event) {
            if (event.target !== track || event.propertyName !== "transform") {
                return;
            }

            finishAnimation(direction);
        };
        track.addEventListener("transitionend", transitionHandler);

        track.style.removeProperty("transition");
        track.style.transform = direction === "next" ? `translate3d(-${step}px, 0, 0)` : "translate3d(0, 0, 0)";
        animationTimer = window.setTimeout(() => finishAnimation(direction), 1000);
    }

    previousButton.addEventListener("click", () => moveCarousel("previous"));
    nextButton.addEventListener("click", () => moveCarousel("next"));
}
