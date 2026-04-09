export const brand = {
  name: '+Fortes',
  codeName: 'MaisFortes',
  tagline: 'Juntos, somos +Fortes',
  domain: 'maisfortes.com.br',
  version: '1.0',
  year: 2026,
  edition: 'Warm Light Edition',

  manifesto: `Ninguém muda sozinho.
A gente sabe que a mudança é difícil. Que tem dia que você não vai querer nem abrir o app. Que a vontade de desistir aparece mais do que a vontade de continuar.
Mas a gente sabe também que quando alguém está olhando por você — de verdade, sem julgamento, sem cobrança pesada — fica mais fácil dar o próximo passo.
+Fortes existe porque acreditamos que as pessoas ao redor de quem está lutando por uma mudança precisam de um papel claro: estar junto sem invadir, apoiar sem sufocar, celebrar sem exagerar.
Porque juntos, somos +Fortes.`,

  purpose: 'Dar estrutura ao apoio que já existe ao redor de quem precisa mudar — transformando boa vontade em acompanhamento real.',

  values: [
    { name: 'Presença', description: 'Estar junto importa mais do que ter respostas', icon: 'heart' },
    { name: 'Honestidade', description: 'Sem julgamento, sem máscaras', icon: 'eye' },
    { name: 'Constância', description: 'Um dia de cada vez, todos os dias', icon: 'flame' },
    { name: 'Confiança', description: 'O protagonista controla tudo', icon: 'shield' },
    { name: 'Leveza', description: 'Firme não precisa ser pesado', icon: 'feather' },
  ],

  archetypes: {
    primary: {
      name: 'Cuidador',
      desire: 'Proteger e ajudar os outros',
      goal: 'Fazer a diferença na vida de alguém',
      fear: 'Egoísmo, ingratidão',
      strategy: 'Fazer pelos outros, cuidar, servir',
      gift: 'Empatia e generosidade',
      shadow: 'Martírio, autoabandono',
      brands: ['Johnson & Johnson', 'UNICEF', 'Volvo'],
    },
    secondary: {
      name: 'Herói',
      desire: 'Provar valor através da ação corajosa',
      goal: 'Superar desafios e melhorar o mundo',
      fear: 'Fraqueza, vulnerabilidade',
      strategy: 'Ser forte, competente, corajoso',
      gift: 'Coragem e determinação',
      shadow: 'Arrogância, obsessão por vencer',
      brands: ['Nike', 'FedEx', 'Under Armour'],
    },
  },

  positioning: {
    statement: 'Para pessoas que estão mudando um comportamento e para quem as apoia, +Fortes é a plataforma que conecta a jornada de mudança com uma rede de apoio estruturada — porque mudança real acontece quando tem alguém caminhando junto.',
    category: 'Plataforma de accountability social para mudança comportamental',
    enemy: 'A solidão de quem tenta mudar sozinho',
    taglines: [
      'Juntos, somos +Fortes',
      'Ninguém muda sozinho',
      'Um dia de cada vez, com quem te apoia',
      'Sua jornada, acompanhada',
    ],
  },

  brandscript: {
    character: 'Uma pessoa lutando para mudar um comportamento',
    problem: {
      external: 'Não consegue manter consistência sozinha',
      internal: 'Sente vergonha de pedir ajuda e medo de decepcionar',
      philosophical: 'Ninguém deveria ter que lutar sozinho contra si mesmo',
    },
    guide: {
      empathy: 'Sabemos que mudar é difícil e que todo mundo precisa de alguém',
      authority: 'Plataforma desenhada com base em apoio social estruturado',
    },
    plan: [
      'Defina sua meta',
      'Convide quem te apoia',
      'Faça check-in diário',
      'Evolua acompanhado',
    ],
    cta: {
      direct: 'Comece sua jornada',
      transitional: 'Convide quem te apoia',
    },
    failure: 'Continuar tentando sozinho, desistir de novo, as pessoas ao redor assistem sem poder fazer nada',
    success: 'Manter a mudança com consistência, sentir-se apoiado, sua rede celebra com você',
  },

  voice: {
    traits: ['próximo', 'honesto', 'firme', 'leve', 'acolhedor'],
    doNot: ['clínico', 'punitivo', 'invasivo', 'genérico', 'corporativo'],
    sounds_like: 'Amigo próximo que senta do lado e pergunta: Ei, como foi hoje?',
    avoidSounding: 'Coach motivacional gritando, clínica fria, app genérico de hábitos.',
  },

  users: {
    protagonista: { label: 'Protagonista', description: 'Quem está na jornada de mudança' },
    apoiador: { label: 'Apoiador', description: 'Quem acompanha e apoia' },
    profissional: { label: 'Profissional', description: 'Terapeuta, nutricionista (futuro)' },
  },

  colors: {
    forest: { hex: '#2D6A4F', rgb: '45, 106, 79', name: 'Forest', usage: 'Cor principal, CTAs, headers', token: 'brand-forest' },
    forestLight: { hex: '#40916C', rgb: '64, 145, 108', name: 'Forest Light', usage: 'Hover, ênfase', token: 'brand-forest-light' },
    forestDark: { hex: '#1B4332', rgb: '27, 67, 50', name: 'Forest Dark', usage: 'Texto sobre claro, profundidade', token: 'brand-forest-dark' },
    coral: { hex: '#F4845F', rgb: '244, 132, 95', name: 'Coral', usage: 'Destaques, warmth', token: 'brand-coral' },
    amber: { hex: '#FFB703', rgb: '255, 183, 3', name: 'Amber', usage: 'Celebração, streak, conquistas', token: 'brand-amber' },
    sky: { hex: '#90E0EF', rgb: '144, 224, 239', name: 'Sky', usage: 'Informacional, calm', token: 'brand-sky' },
    night: { hex: '#0D1117', rgb: '13, 17, 23', name: 'Night', usage: 'Background dark mode', token: 'brand-night' },
    darkSurface: { hex: '#161B22', rgb: '22, 27, 34', name: 'Dark Surface', usage: 'Cards dark mode', token: 'brand-dark-surface' },
    white: { hex: '#FFFFFF', rgb: '255, 255, 255', name: 'White', usage: 'Background light mode', token: 'brand-white' },
    snow: { hex: '#F8F9FA', rgb: '248, 249, 250', name: 'Snow', usage: 'Surfaces light mode', token: 'brand-snow' },
    charcoal: { hex: '#212529', rgb: '33, 37, 41', name: 'Charcoal', usage: 'Texto principal light mode', token: 'brand-charcoal' },
  },

  typography: {
    display: { family: 'Outfit', weights: ['500', '600', '700'], usage: 'Headlines, títulos de impacto' },
    body: { family: 'Plus Jakarta Sans', weights: ['400', '500', '600', '700'], usage: 'Body, UI, parágrafos' },
    mono: { family: 'JetBrains Mono', weights: ['400', '700'], usage: 'Números de streak, dados, metadata' },
  },

  ecosystem: {
    website: { url: 'https://maisfortes.com.br' },
    github: { url: '#' },
  },
} as const;

export type Brand = typeof brand;
