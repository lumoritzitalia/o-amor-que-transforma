const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const filters = document.querySelectorAll('.filter');
const studies = [...document.querySelectorAll('.study-item')];
const search = document.getElementById('study-search');
const emptyState = document.getElementById('empty-state');
let currentFilter = 'todos';

function updateStudies() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;

  studies.forEach(study => {
    const matchesFilter = currentFilter === 'todos' || study.dataset.category === currentFilter;
    const searchable = (study.dataset.title + ' ' + study.textContent).toLowerCase();
    const matchesSearch = searchable.includes(query);
    const show = matchesFilter && matchesSearch;
    study.hidden = !show;
    if (show) visible++;
  });

  emptyState.hidden = visible !== 0;
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.dataset.filter;
    updateStudies();
  });
});

search.addEventListener('input', updateStudies);

const articles = {
  silencio: {
    type: 'Devocional',
    title: 'Quando Deus parece estar em silêncio',
    verse: '“Aquietai-vos e sabei que eu sou Deus.” — Salmo 46:10',
    body: `
      <p>Há momentos em que oramos, buscamos respostas e, ainda assim, tudo parece silencioso. Nessas horas, podemos pensar que Deus se afastou ou que não está ouvindo.</p>
      <p class="scripture">“Aquietai-vos e sabei que eu sou Deus.” — Salmo 46:10</p>
      <p>O silêncio de Deus não significa ausência. Muitas vezes, é nesse período que Ele aprofunda nossa confiança, corrige nossa pressa e nos ensina a descansar em quem Ele é.</p>
      <h3>Para refletir</h3>
      <p>Em qual área da sua vida você precisa trocar a ansiedade pela confiança? Reserve alguns minutos para apresentar isso a Deus em oração.</p>
    `
  },
  amor: {
    type: 'Devocional',
    title: 'Um amor que nos encontra',
    verse: '“Nós amamos porque ele nos amou primeiro.” — 1 João 4:19',
    body: `
      <p>O evangelho começa não com nossa procura por Deus, mas com o amor de Deus vindo ao nosso encontro.</p>
      <p class="scripture">“Nós amamos porque ele nos amou primeiro.” — 1 João 4:19</p>
      <p>Em Cristo, somos alcançados por uma graça que não depende do nosso desempenho. Esse amor nos recebe como estamos, mas não nos deixa como estamos: ele cura, corrige e transforma.</p>
      <h3>Para praticar</h3>
      <p>Pense em uma pessoa que precisa experimentar acolhimento. Demonstre hoje, por meio de uma atitude concreta, o amor que você recebeu de Deus.</p>
    `
  },
  esperanca: {
    type: 'Devocional',
    title: 'Esperança para os dias difíceis',
    verse: '“Alegrai-vos na esperança, sede pacientes na tribulação.” — Romanos 12:12',
    body: `
      <p>A esperança cristã não ignora a dor. Ela olha para a realidade com honestidade, mas se recusa a acreditar que a dificuldade possui a palavra final.</p>
      <p class="scripture">“Alegrai-vos na esperança, sede pacientes na tribulação.” — Romanos 12:12</p>
      <p>Nossa esperança está firmada no caráter de Deus e na obra de Cristo. Por isso, mesmo em dias difíceis, podemos continuar orando, servindo e caminhando.</p>
      <h3>Oração</h3>
      <p>Senhor, fortalece meu coração e ajuda-me a lembrar que tua fidelidade é maior do que aquilo que hoje me assusta. Amém.</p>
    `
  }
};

const studyContent = {
  atributos: {
    type: 'Estudo Teológico',
    title: 'Os atributos de Deus: santidade, amor e justiça',
    body: `
      <p>Os atributos de Deus descrevem aquilo que as Escrituras revelam a respeito de seu ser e de sua ação.</p>
      <h3>1. Santidade</h3>
      <p>A santidade aponta para a absoluta pureza e distinção de Deus. Ele é separado de todo mal e digno de reverência.</p>
      <h3>2. Amor</h3>
      <p>O amor não é apenas uma atitude ocasional de Deus. A Escritura o apresenta como parte essencial de seu caráter.</p>
      <h3>3. Justiça</h3>
      <p>Deus age com retidão. Sua justiça demonstra que seus juízos não são arbitrários e que sua vontade é moralmente perfeita.</p>
      <h3>Conclusão</h3>
      <p>Esses atributos não competem entre si. Em Deus, santidade, amor e justiça existem em perfeita harmonia.</p>
    `
  },
  reino: {
    type: 'Estudo Teológico',
    title: 'O Reino de Deus nos Evangelhos',
    body: `
      <p>O anúncio do Reino de Deus ocupa lugar central no ministério de Jesus. O Reino aponta para o governo soberano de Deus entrando na história.</p>
      <h3>Já presente</h3>
      <p>Nos atos e ensinamentos de Jesus, o Reino torna-se visível por meio de cura, libertação, perdão e restauração.</p>
      <h3>Ainda aguardado</h3>
      <p>Ao mesmo tempo, a plenitude do Reino permanece futura. A Igreja vive entre a inauguração e a consumação.</p>
      <h3>Implicações</h3>
      <p>Seguir Jesus é viver sob o governo de Deus, testemunhando seus valores no presente enquanto aguardamos a restauração final.</p>
    `
  },
  hermeneutica: {
    type: 'Estudo Teológico',
    title: 'Princípios para interpretar a Bíblia com responsabilidade',
    body: `
      <p>A interpretação bíblica responsável exige atenção ao texto, ao contexto e ao propósito da passagem.</p>
      <h3>Contexto histórico</h3>
      <p>É importante considerar autor, destinatários, circunstâncias e ambiente cultural.</p>
      <h3>Gênero literário</h3>
      <p>Poesia, narrativa, profecia, carta e literatura apocalíptica comunicam de modos diferentes.</p>
      <h3>Contexto imediato</h3>
      <p>Versículos devem ser compreendidos dentro do argumento do parágrafo, do capítulo e do livro.</p>
      <h3>Aplicação</h3>
      <p>A boa aplicação nasce do significado do texto, e não de ideias impostas sobre ele.</p>
    `
  },
  alianca: {
    type: 'Estudo Teológico',
    title: 'A aliança ao longo das Escrituras',
    body: `
      <p>A temática da aliança ajuda a perceber a unidade da história bíblica e a fidelidade de Deus ao seu povo.</p>
      <h3>Promessa e relacionamento</h3>
      <p>As alianças bíblicas estabelecem compromissos, promessas e responsabilidades dentro do relacionamento de Deus com a humanidade.</p>
      <h3>Desenvolvimento bíblico</h3>
      <p>As alianças com Noé, Abraão, Israel e Davi contribuem para a expectativa de redenção.</p>
      <h3>Nova aliança</h3>
      <p>No Novo Testamento, a obra de Cristo é apresentada como cumprimento e inauguração da nova aliança.</p>
    `
  }
};

const modal = document.getElementById('content-modal');
const modalContent = document.getElementById('modal-content');

function openContent(item) {
  modalContent.innerHTML = `
    <span class="eyebrow">${item.type}</span>
    <h2>${item.title}</h2>
    ${item.body}
  `;
  modal.showModal();
  document.body.classList.add('modal-open');
}

document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => openContent(articles[button.dataset.article]));
});

document.querySelectorAll('.study-action').forEach(button => {
  button.addEventListener('click', () => openContent(studyContent[button.dataset.study]));
});

document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('close', () => document.body.classList.remove('modal-open'));
modal.addEventListener('click', event => {
  if (event.target === modal) modal.close();
});

function simulateForm(formId, messageId, message) {
  const form = document.getElementById(formId);
  const output = document.getElementById(messageId);
  form.addEventListener('submit', event => {
    event.preventDefault();
    output.textContent = message;
    form.reset();
  });
}

simulateForm(
  'prayer-form',
  'prayer-message',
  'Pedido registrado nesta demonstração. Para recebê-lo por e-mail, conecte o formulário a um serviço de envio.'
);

simulateForm(
  'contact-form',
  'contact-status',
  'Mensagem registrada nesta demonstração. Conecte o formulário a um serviço de envio antes de publicar.'
);

simulateForm(
  'newsletter-form',
  'newsletter-message',
  'Cadastro demonstrativo concluído. Integre uma plataforma de e-mail para armazenar os contatos.'
);
