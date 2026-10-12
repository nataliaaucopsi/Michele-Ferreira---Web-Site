export interface Specialty {
  id: string;
  title: string;
  description: string;
  iconName: string;
  detailedText: string;
}

export interface ReflectionArticle {
  id: string;
  category: string;
  readTime: string;
  title: string;
  summary: string;
  author: string;
  fullContent: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}

export const CLINICAL_INFO = {
  name: 'Michele Ferreira',
  role: 'Psicóloga Clínica',
  crp: 'CRP 06/209038',
  phoneDisplay: '(11) 96752-6546',
  whatsappUrl: '5511967526546',
  approach: 'Fenomenológica-Existencial',
  targetAudience: 'Adultos, Idosos e Adolescentes',
  education: 'Graduação em Psicologia (UNIP) · Pós-graduanda em Neuropsicologia dos Transtornos Mentais',
  email: 'contato@michelepsi.com.br',
  instagram: '@_psimichele',
  instagramUrl: 'https://www.instagram.com/_psimichele',
  googleMapsUrl: 'https://www.google.com/maps/place/Michele+Ferreira+de+Souza+-+Psic%C3%B3loga+Cl%C3%ADnica/@-14.4095261,-51.3168626,4z/data=!4m8!3m7!1s0x94ce5378e35bbb23:0x6543bf7b1660d21!8m2!3d-14.4095262!4d-51.3168626!9m1!1b1!16s%2Fg%2F11z1fmkrn2?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D'
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'ansiedade',
    title: 'Ansiedade',
    description: 'Manejo de pensamentos acelerados, preocupações constantes, crises e sintomas físicos do medo.',
    iconName: 'Wind',
    detailedText: 'A ansiedade se manifesta como uma mente constantemente no futuro, antecipando cenários angustiantes. Na psicoterapia sob a ótica fenomenológica-existencial, acolhemos essas sensações para compreender o que elas revelam sobre suas vivências, desenvolvendo recursos para viver o presente com serenidade e equilíbrio.'
  },
  {
    id: 'depressao',
    title: 'Depressão',
    description: 'Acompanhamento sensível da falta de energia, melancolia profunda e perda do prazer nas atividades.',
    iconName: 'CloudRain',
    detailedText: 'A depressão silencia a vitalidade e torna o cotidiano um fardo pesado. Oferecemos uma escuta atenta e humanizada, sem exigências irreais de "positividade", construindo passo a passo novos caminhos para resgatar o sentido das experiências e o calor da existência.'
  },
  {
    id: 'autoconfianca',
    title: 'Autoconfiança',
    description: 'Desenvolvimento da segurança interna para agir, expressar a própria voz e acreditar no próprio potencial.',
    iconName: 'Shield',
    detailedText: 'A autoconfiança não é ausência de medo, mas a capacidade de se sustentar diante dos desafios. Na terapia, investigamos as origens da insegurança e fortalecemos suas certezas internas para que você assuma suas escolhas e posicione-se no mundo com autenticidade.'
  },
  {
    id: 'autoconhecimento',
    title: 'Autoconhecimento',
    description: 'Compreensão dos próprios desejos, padrões inconscientes e fortalecimento da maturidade emocional.',
    iconName: 'Compass',
    detailedText: 'Quem é você para além das expectativas que os outros depositaram em você? Exploramos suas reais vontades, valores e sentimentos, permitindo que você tome decisões autônomas e construa um projeto de vida coerente com sua singularidade.'
  },
  {
    id: 'alteracoes-de-humor',
    title: 'Alterações de humor',
    description: 'Acolhimento de oscilações emocionais intensas, instabilidade e busca pelo equilíbrio interior.',
    iconName: 'Activity',
    detailedText: 'Mudanças bruscas no estado de ânimo podem gerar desgaste nos relacionamentos e na vida pessoal. O espaço clínico oferece suporte e compreensão dos gatilhos emocionais e neuropsicológicos para restaurar a estabilidade e o autocuidado diário.'
  },
  {
    id: 'traumas',
    title: 'Traumas',
    description: 'Elaboração de feridas psíquicas, vivências dolorosas do passado e reconstrução da segurança emocional.',
    iconName: 'HeartHandshake',
    detailedText: 'Experiências traumáticas podem paralisar o presente e gerar sensações constantes de ameaça. Em um ambiente protegido e no seu próprio tempo, ajudamos a ressignificar memórias difíceis, restaurando a sensação de segurança no corpo e na mente.'
  },
  {
    id: 'conflitos-familiares',
    title: 'Conflitos familiares',
    description: 'Compreensão de dinâmicas familiares desafiadoras, limites relacionais e fortalecimento de laços saudáveis.',
    iconName: 'Users',
    detailedText: 'As relações familiares moldam grande parte da nossa história. A terapia apoia a diferenciação saudável, a comunicação assertiva e a desconstrução de culpas herdadas, promovendo relações mais pacíficas e libertadoras.'
  },
  {
    id: 'autoestima',
    title: 'Autoestima',
    description: 'Reconstrução do valor próprio, diminuição da autocrítica destrutiva e reconciliação consigo.',
    iconName: 'Heart',
    detailedText: 'Exigências excessivas sobre quem deveríamos ser corroem nosso bem-estar. O espaço terapêutico permite desarmar a autocrítica impiedosa e cultivar uma relação mais amorosa, realista e compassiva com a sua própria trajetória.'
  },
  {
    id: 'dependencia-emocional',
    title: 'Dependência emocional',
    description: 'Superação do apego excessivo, medo do abandono e conquista de autonomia afetiva nas relações.',
    iconName: 'Link',
    detailedText: 'Quando o valor próprio depende inteiramente da aprovação ou da presença do outro, o afeto se torna fonte de angústia. Trabalhamos o fortalecimento da autonomia para que você viva vínculos afetivos seguros sem perder a sua própria individualidade.'
  },
  {
    id: 'tristeza',
    title: 'Tristeza',
    description: 'Espaço acolhedor para sentir e dar sentido à tristeza profunda, sem julgamentos ou pressa.',
    iconName: 'Droplets',
    detailedText: 'Em um mundo que exige felicidade constante, a tristeza muitas vezes é silenciada e reprimida. Na clínica, a tristeza é acolhida com respeito como uma resposta humana legítima, permitindo compreender suas mensagens e abrir caminho para a renovação.'
  }
];

export const REFLECTIONS: ReflectionArticle[] = [
  {
    id: 'esgotamento-silencioso',
    category: 'PSICOLOGIA CLÍNICA',
    readTime: '4 min de leitura',
    title: 'A necessidade de dar conta de tudo e o esgotamento silencioso',
    summary: 'Vivemos sob o imperativo da hiperprodutividade. Quando a busca por perfeição se torna um mecanismo de defesa contra o medo de não ser suficiente?',
    author: 'Por Michele · CRP 06/209038',
    fullContent: [
      'Vivemos em uma cultura que premia a exaustão como se fosse um distintivo de honra. Estar cansado tornou-se sinônimo de dedicação, enquanto o repouso é frequentemente acompanhado por sentimentos corrosivos de culpa.',
      'Contudo, na clínica psicológica, percebemos que a necessidade compulsiva de "dar conta de tudo" raramente é apenas uma questão de má gestão do tempo. Ela costuma ser uma couraça protetora: enquanto estamos ocupados resolvendo demandas externas, evitamos o encontro com o vazio, com as próprias angústias ou com o temor profundo de não sermos amados caso paremos de produzir.',
      'Aprender a delegar, a dizer "não" e a tolerar a imperfeição não é um ato de fraqueza, mas sim o início de uma reconciliação vital consigo mesmo. A terapia oferece esse refúgio seguro onde você não precisa provar nada a ninguém.'
    ]
  },
  {
    id: 'medo-do-julgamento',
    category: 'VÍNCULOS',
    readTime: '5 min de leitura',
    title: 'O medo do julgamento e a busca por aprovação nas relações',
    summary: 'Muitas vezes, a dificuldade de dizer "não" revela o pavor do abandono. Compreender essa dinâmica abre espaço para laços mais espontâneos e seguros.',
    author: 'Por Michele · CRP 06/209038',
    fullContent: [
      'Quantas vezes você silenciou um desconforto legítimo apenas para manter a harmonia em um relacionamento? O receio de desagradar costuma ter raízes antigas, quando aprendemos que ser aceito dependia de sermos sempre agradáveis, prestativos e fáceis de conviver.',
      'Com o tempo, essa adaptação custa caro: perdemos o contato com as nossas reais vontades e passamos a viver em função da validação alheia. Surge uma sensação de solidão acompanhada, pois quem as pessoas conhecem é o personagem bonzinho, não o nosso eu autêntico.',
      'Desenvolver limites saudáveis não significa afastar as pessoas, mas permitir que elas conheçam quem você verdadeiramente é. A psicoterapia fortalece sua voz interior para que o afeto não custe o cancelamento da sua própria identidade.'
    ]
  },
  {
    id: 'viver-longe-de-casa',
    category: 'VIDA NO EXTERIOR',
    readTime: '6 min de leitura',
    title: 'Viver longe de casa: os desafios emocionais da adaptação',
    summary: 'A euforia da partida costuma ceder lugar a um luto sutil pela terra natal. Como cultivar raízes em novo solo sem perder a própria identidade?',
    author: 'Por Michele · CRP 06/209038',
    fullContent: [
      'Mudar de país costuma ser retratado como uma grande conquista celebrada em fotos ensolaradas. No entanto, os bastidores da migração envolvem um luto migratório sutil e persistente: o afastamento da família, a barreira do idioma, o choque cultural e a perda de referências familiares cotidianas.',
      'Muitos brasileiros no exterior relatam a sensação de não pertencer mais completamente ao Brasil, mas também de nunca pertencer por inteiro ao novo país. Esse entrelugar gera um cansaço emocional profundo, agravado pela solidão de não poder desabafar em sua língua nativa.',
      'O atendimento psicológico em português para quem vive fora reconstrói uma ponte afetiva com as próprias origens, oferecendo suporte especializado para lidar com o choque cultural e ressignificar o pertencimento em qualquer parte do globo.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'simone',
    quote: '"Profissional excelente, de uma sensibilidade incrível e extraordinária. Tem me ajudado imensamente no processo de superação do luto e nos momentos mais difíceis da minha vida. Sou muito grata por todo o acolhimento."',
    author: 'Simone M.',
    location: 'Avaliação Verificada no Google Maps'
  },
  {
    id: 'paciente-8-meses',
    quote: '"Estou em acompanhamento com a Michele há 8 meses e posso dizer que ela é uma profissional incrível e extremamente acolhedora. Me sinto ouvida sem julgamentos e vejo transformações reais na minha vida e no manejo da ansiedade."',
    author: 'Paciente Verificado(a)',
    location: 'Avaliação Verificada no Google Maps'
  },
  {
    id: 'fernanda',
    quote: '"Profissional impecável, muito ética, pontual e ao mesmo tempo afetuosa e humana. A Michele tem uma escuta tão atenta e calma que desde o primeiro encontro me senti completamente segura. Recomendo de olhos fechados."',
    author: 'Fernanda T.',
    location: 'Avaliação Verificada no Google Maps'
  },
  {
    id: 'rodrigo',
    quote: '"Morar fora do Brasil trouxe uma carga emocional pesada. Encontrar a Michele me deu o suporte acolhedor na minha língua materna que eu precisava. O processo tem sido essencial para a minha adaptação e equilíbrio emocional."',
    author: 'Rodrigo M.',
    location: 'Avaliação Verificada no Google Maps'
  },
  {
    id: 'camila',
    quote: '"Cheguei com crises frequentes de ansiedade e me sentindo perdida. A Michele me ajudou a desacelerar, compreender meus gatilhos e construir limites saudáveis. Hoje vivo com muito mais leveza e segurança interna."',
    author: 'Camila R.',
    location: 'Avaliação Verificada no Google Maps'
  },
  {
    id: 'lucas',
    quote: '"Excelente psicóloga! As intervenções dela são muito precisas, respeitosas e no meu tempo. A abordagem fenomenológica me fez enxergar minhas decisões e conflitos de uma maneira muito mais clara e autônoma."',
    author: 'Lucas P.',
    location: 'Avaliação Verificada no Google Maps'
  },
  {
    id: 'beatriz',
    quote: '"Espaço terapêutico de puro respeito e empatia. Trabalhar minha autoestima e a dependência emocional com a Michele tem sido um divisor de águas. Me sinto acolhida de verdade a cada sessão."',
    author: 'Beatriz S.',
    location: 'Avaliação Verificada no Google Maps'
  },
  {
    id: 'mariana',
    quote: '"Fazer terapia online com a Michele é tão próximo e acolhedor quanto presencialmente. Ela tem uma sensibilidade rara para escutar o que não conseguimos dizer com clareza. Sou muito grata pelo acompanhamento."',
    author: 'Mariana C.',
    location: 'Avaliação Verificada no Google Maps'
  },
  {
    id: 'gabriel',
    quote: '"Iniciei o processo em um momento de transição de carreira difícil e angústia constante. A Michele foi fundamental para que eu reencontrasse meu norte sem me perder nas expectativas alheias. Super recomendo!"',
    author: 'Gabriel A.',
    location: 'Avaliação Verificada no Google Maps'
  },
  {
    id: 'juliana',
    quote: '"Uma profissional dedicada, empática e ética. Me sinto ouvida sem nenhuma pressa e sem pré-julgamentos. A terapia tem me ajudado a ressignificar momentos difíceis e a me acolher com mais gentileza."',
    author: 'Juliana F.',
    location: 'Avaliação Verificada no Google Maps'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funcionam as sessões online?',
    answer: 'Os atendimentos ocorrem por videochamada via plataformas criptografadas e seguras (como Google Meet). Recomenda-se apenas que você esteja em um local privado e confortável, com fones de ouvido e boa conexão à internet.'
  },
  {
    id: 'faq-2',
    question: 'Qual a frequência e a duração de cada encontro?',
    answer: 'As sessões têm duração padrão de 50 minutos e ocorrem semanalmente, em dia e horário fixos pré-acordados, garantindo a regularidade indispensável ao vínculo e aos avanços terapêuticos.'
  },
  {
    id: 'faq-3',
    question: 'Aceita plano de saúde ou emite recibo para reembolso?',
    answer: 'Os atendimentos são exclusivamente particulares, o que assegura tempo adequado de dedicação e total sigilo. No entanto, forneço recibos ou notas fiscais com todos os dados exigidos pelo seu convênio médico para solicitação de reembolso.'
  },
  {
    id: 'faq-4',
    question: 'Como posso agendar minha primeira sessão?',
    answer: 'Basta entrar em contato pelo WhatsApp (11) 96752-6546. Você conversará diretamente comigo para tirar dúvidas, checar disponibilidades de horários e acertar as diretrizes iniciais.'
  },
  {
    id: 'faq-5',
    question: 'Como funciona para quem mora fora do Brasil?',
    answer: 'O atendimento a brasileiros no exterior é totalmente regularizado perante o CFP. Os pagamentos podem ser efetuados via plataformas internacionais (como Wise, PayPal ou transferência bancária), com agendamentos ajustados ao fuso horário local.'
  }
];
