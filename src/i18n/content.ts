export type Language = 'en' | 'pt';

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  context?: string;
  highlights: string[];
  current?: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Content {
  meta: { title: string };
  nav: { about: string; experience: string; skills: string; portfolio: string; education: string; contact: string };
  languageToggle: { label: string; switchTo: string };
  hero: {
    headline: string;
    location: string;
    availability: string;
    ctaEmail: string;
    photoAlt: string;
  };
  highlights: { value: string; label: string }[];
  about: { title: string; paragraphs: string[] };
  experience: { title: string; currentBadge: string; items: Experience[] };
  skills: { title: string; groups: SkillGroup[] };
  portfolio: { title: string; badge: string; description: string; items: { name: string; summary: string; tags: string[] }[] };
  education: {
    title: string;
    degree: string;
    school: string;
    year: string;
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  contact: { title: string; description: string; rights: string };
}

const contactLinks = {
  email: 'james.almeida.ti@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jamesr-almeida/',
  github: 'https://github.com/jmsralmeida',
};

export { contactLinks };

const en: Content = {
  meta: { title: 'James Almeida | Senior Frontend Engineer' },
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    portfolio: 'Portfolio',
    education: 'Education',
    contact: 'Contact',
  },
  languageToggle: { label: 'Language', switchTo: 'Mudar para português' },
  hero: {
    headline: 'Senior Frontend Engineer | React, TypeScript & React Native | Micro-Frontends | AI-Driven Product Development',
    location: 'São Paulo, Brazil (UTC−3)',
    availability: 'Open to remote roles with US/EU time-zone overlap',
    ctaEmail: 'Get in touch',
    photoAlt: 'Photo of James Almeida',
  },
  highlights: [
    { value: '7+', label: 'years building web and mobile products' },
    { value: '~60k', label: 'daily active users on the app I rebuilt' },
    { value: '100k+', label: 'accounts migrated to a unified login' },
    { value: '40% → 80%', label: 'test coverage on a crypto exchange UI' },
  ],
  about: {
    title: 'About',
    paragraphs: [
      'Frontend engineer with 7+ years building web and mobile products in React, TypeScript and React Native, and 10+ years in tech. I modernize legacy platforms with micro-frontend architectures, ship secure authentication (AWS Cognito, 2FA) and lead AI-assisted, spec-driven development.',
      'Recently led an AI-assisted mobile rewrite shipped in one quarter to ~60k daily active users and migrated 100k+ accounts to a unified AWS Cognito login. Experienced with international, fully remote teams.',
    ],
  },
  experience: {
    title: 'Experience',
    currentBadge: 'Current',
    items: [
      {
        company: 'Hyperlocal (Avec, CrossX)',
        role: 'Frontend Software Engineer',
        period: 'Jan 2023 – Present',
        location: 'São Paulo, Brazil',
        current: true,
        highlights: [
          'Led the AI-assisted, spec-driven rewrite of Avec Pro, a legacy AngularJS salon-management app, into a cross-platform React Native/Expo app (iOS and Android), shipped in one quarter and now serving ~60k daily active users (Spec Kit, Cursor, MCP).',
          'Architected a micro-frontend platform with single-spa, React and TypeScript, now running 5 modules across 2 business verticals and letting teams ship new features into legacy web and mobile apps without full rewrites.',
          'Built a unified login for the Avec and CrossX products with AWS Amplify and Cognito, migrating 100k+ user accounts to a new user pool and enforcing 2FA to meet corporate security requirements.',
          "Delivered a receivables-advance product for commissioned professionals as a React/TypeScript micro-frontend integrated with a financial partner's API, increasing commission-advance requests throughout 2025.",
          "Built the frontend of Avec AI, a WhatsApp product for AI scheduling, appointment confirmation and marketing automation: WhatsApp connection management, Meta SDK integration and QR-code onboarding. Won the company's 2025 innovation award.",
          'Rebuilt the shared design system used by 2 product verticals (~40 components, icon library and theming), adding Cypress visual regression tests to catch breaking UI changes before release.',
        ],
      },
      {
        company: 'Klever',
        role: 'Frontend Software Engineer',
        period: 'Aug 2022 – Dec 2022',
        location: 'Remote',
        context: 'Crypto wallet and exchange ecosystem headquartered in Tallinn, Estonia (4M+ app downloads, 100+ employees worldwide).',
        highlights: [
          "Doubled automated test coverage of the exchange's trading interface from 40% to 80% with Jest, validating and rewriting tests before the refactor to protect critical trading flows.",
          'Refactored the real-time fee capture and calculation components with React, TypeScript and Redux, restructuring the store and splitting specialized components to eliminate cascading re-renders and prop drilling.',
          'Worked fully remote as part of a globally distributed engineering team.',
        ],
      },
      {
        company: 'Peerdustry',
        role: 'Frontend Software Engineer',
        period: 'Nov 2018 – Sep 2022',
        location: 'São Paulo, Brazil',
        context: 'Industrial machining marketplace startup; one of 3 engineers on the tech team (with the CTO and a senior engineer).',
        highlights: [
          'Built the end-to-end production dashboard with Ember.js and WebSockets (quotation, digital kanban tracking, delivery), handling ~1,000 machining quote requests per month across a network of 1,000+ registered supplier machines.',
          'Built a real-time chat between clients and manufacturing partners with Ember.js, Ruby on Rails and WebSockets, reducing production errors caused by misread technical drawings.',
          'Raised E2E, integration and unit test coverage by 30% ahead of the platform launch.',
          "Shaped the team's engineering practices across the full development lifecycle: code review, automated testing and lean agile delivery; designed the developer onboarding process, cutting new-hire ramp-up time by 40%.",
        ],
      },
      {
        company: 'Mastertech',
        role: 'Web Development Instructor',
        period: 'Nov 2017 – Nov 2018',
        location: 'São Paulo, Brazil',
        highlights: [
          'Taught web development bootcamps (HTML, CSS, JavaScript, React, PWA/Firebase) and Python fundamentals to 50+ students; assisted corporate training on microservices (Java/Spring Boot, Kafka, Jenkins CI/CD) for a major bank.',
        ],
      },
      {
        company: 'Tipp',
        role: 'Co-founder & Project Manager',
        period: 'Jan 2016 – Nov 2017',
        location: 'Mogi das Cruzes, Brazil',
        highlights: [
          'Led the pivot to a white-label supermarket e-commerce product, reaching the finals of a municipal startup acceleration program; secured a 6-month incubation and a pilot with a regional supermarket chain.',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        title: 'Frontend & Mobile',
        items: ['React', 'TypeScript', 'JavaScript', 'React Native / Expo', 'Redux', 'Next.js', 'Micro-Frontends (single-spa)', 'Design Systems', 'Ember.js'],
      },
      { title: 'Cloud & Auth', items: ['AWS Amplify', 'AWS Cognito', '2FA'] },
      { title: 'Testing & Quality', items: ['Jest', 'Cypress (E2E, visual regression)', 'CI/CD pipelines'] },
      {
        title: 'AI',
        items: ['Spec-driven development', 'Cursor', 'MCP', 'LLM integrations (OpenAI)', 'WhatsApp Business / Meta SDK'],
      },
      {
        title: 'Backend (working knowledge)',
        items: ['Node.js', 'PHP', 'Ruby on Rails', 'REST APIs', 'MongoDB', 'MySQL'],
      },
    ],
  },
  portfolio: {
    title: 'Portfolio',
    badge: 'Coming soon',
    description: 'Detailed case studies of personal and freelance projects are on the way.',
    items: [
      {
        name: 'meu-plano',
        summary: 'Personal finance PWA built end to end with Claude Code and a multi-agent team, from problem definition to design, implementation, testing and deployment.',
        tags: ['Next.js', 'TypeScript', 'Firebase', 'Claude Code', 'AI agents'],
      },
      {
        name: 'VotoSintese',
        summary: 'Route-tracking mobile app with real-time geolocation that calculates field workers\' pay from campaign performance.',
        tags: ['React Native', 'Geolocation', 'Maps'],
      },
    ],
  },
  education: {
    title: 'Education',
    degree: 'B.S. in Information Systems',
    school: 'Universidade de Mogi das Cruzes, Brazil',
    year: '2023',
    languagesTitle: 'Languages',
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'B2, professional working proficiency' },
    ],
  },
  contact: {
    title: "Let's work together",
    description: 'Open to remote frontend and mobile engineering roles. The best way to reach me is by email or LinkedIn.',
    rights: 'James Almeida. Frontend Software Engineer based in São Paulo, Brazil.',
  },
};

const pt: Content = {
  meta: { title: 'James Almeida | Engenheiro Frontend Sênior' },
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    skills: 'Skills',
    portfolio: 'Portfólio',
    education: 'Formação',
    contact: 'Contato',
  },
  languageToggle: { label: 'Idioma', switchTo: 'Switch to English' },
  hero: {
    headline: 'Engenheiro Frontend Sênior | React, TypeScript e React Native | Micro-Frontends | Desenvolvimento de Produto com IA',
    location: 'São Paulo, Brasil (UTC−3)',
    availability: 'Disponível para vagas remotas com sobreposição de fuso EUA/Europa',
    ctaEmail: 'Entre em contato',
    photoAlt: 'Foto de James Almeida',
  },
  highlights: [
    { value: '7+', label: 'anos construindo produtos web e mobile' },
    { value: '~60 mil', label: 'usuários ativos por dia no app que reescrevi' },
    { value: '100 mil+', label: 'contas migradas para um login unificado' },
    { value: '40% → 80%', label: 'de cobertura de testes na interface de uma exchange' },
  ],
  about: {
    title: 'Sobre',
    paragraphs: [
      'Engenheiro frontend com mais de 7 anos construindo produtos web e mobile com React, TypeScript e React Native, e mais de 10 anos em tecnologia. Modernizo plataformas legadas com arquitetura de micro-frontends, entrego autenticação segura (AWS Cognito, 2FA) e lidero desenvolvimento orientado a especificações com IA.',
      'Recentemente liderei a reescrita de um app mobile com IA, entregue em um trimestre para ~60 mil usuários ativos por dia, e migrei mais de 100 mil contas para um login unificado com AWS Cognito. Tenho experiência em times internacionais e 100% remotos.',
    ],
  },
  experience: {
    title: 'Experiência',
    currentBadge: 'Atual',
    items: [
      {
        company: 'Hyperlocal (Avec, CrossX)',
        role: 'Engenheiro de Software Frontend',
        period: 'Jan 2023 – atual',
        location: 'São Paulo, Brasil',
        current: true,
        highlights: [
          'Liderei a reescrita do Avec Pro, app legado de gestão de salões em AngularJS, para um app multiplataforma em React Native/Expo (iOS e Android), com desenvolvimento orientado a especificações e IA (Spec Kit, Cursor, MCP). Entregue em um trimestre, hoje com ~60 mil usuários ativos por dia.',
          'Arquitetei uma plataforma de micro-frontends com single-spa, React e TypeScript, hoje com 5 módulos em 2 verticais de negócio, permitindo lançar funcionalidades novas em apps web e mobile legados sem reescrevê-los.',
          'Construí o login unificado dos produtos Avec e CrossX com AWS Amplify e Cognito, migrando mais de 100 mil contas para um novo user pool e aplicando 2FA para atender requisitos corporativos de segurança.',
          'Entreguei um produto de antecipação de recebíveis para profissionais comissionados, como micro-frontend em React/TypeScript integrado à API de um parceiro financeiro, aumentando os pedidos de antecipação ao longo de 2025.',
          'Construí o frontend do Avec IA, produto de WhatsApp para agendamento com IA, confirmação de horários e automação de marketing: gestão da conexão do WhatsApp, integração com o SDK da Meta e onboarding por QR code. Vencedor do prêmio de inovação da empresa em 2025.',
          'Reconstruí o design system compartilhado por 2 verticais de produto (~40 componentes, biblioteca de ícones e temas), com testes de regressão visual em Cypress para barrar mudanças de UI indesejadas antes do release.',
        ],
      },
      {
        company: 'Klever',
        role: 'Engenheiro de Software Frontend',
        period: 'Ago 2022 – Dez 2022',
        location: 'Remoto',
        context: 'Ecossistema de carteira e exchange de criptoativos com sede em Tallinn, Estônia (4 mi+ de downloads, 100+ funcionários no mundo).',
        highlights: [
          'Dobrei a cobertura de testes automatizados da interface de negociação da exchange, de 40% para 80% com Jest, validando e reescrevendo os testes antes da refatoração para proteger os fluxos críticos.',
          'Refatorei os componentes de captura e cálculo de taxas em tempo real com React, TypeScript e Redux, reestruturando a store e separando componentes especializados para eliminar re-renders em cascata e prop drilling.',
          'Trabalhei 100% remoto em um time de engenharia distribuído globalmente.',
        ],
      },
      {
        company: 'Peerdustry',
        role: 'Engenheiro de Software Frontend',
        period: 'Nov 2018 – Set 2022',
        location: 'São Paulo, Brasil',
        context: 'Startup de marketplace de usinagem industrial; um dos 3 engenheiros do time de tecnologia (com o CTO e um engenheiro sênior).',
        highlights: [
          'Construí o dashboard de produção de ponta a ponta com Ember.js e WebSockets (orçamento, kanban digital, entrega), com ~1.000 pedidos de orçamento de usinagem por mês em uma rede de mais de 1.000 máquinas de fornecedores cadastradas.',
          'Construí um chat em tempo real entre clientes e parceiros de fabricação com Ember.js, Ruby on Rails e WebSockets, reduzindo erros de produção causados por leitura errada de desenhos técnicos.',
          'Aumentei em 30% a cobertura de testes E2E, de integração e unitários antes do lançamento da plataforma.',
          'Ajudei a moldar as práticas de engenharia do time em todo o ciclo de desenvolvimento: code review, testes automatizados e agile enxuto; estruturei o onboarding de desenvolvedores, reduzindo em 40% o tempo de adaptação.',
        ],
      },
      {
        company: 'Mastertech',
        role: 'Instrutor de Desenvolvimento Web',
        period: 'Nov 2017 – Nov 2018',
        location: 'São Paulo, Brasil',
        highlights: [
          'Ministrei bootcamps de desenvolvimento web (HTML, CSS, JavaScript, React, PWA/Firebase) e fundamentos de Python para mais de 50 alunos; apoiei treinamento corporativo de microsserviços (Java/Spring Boot, Kafka, Jenkins CI/CD) para um grande banco.',
        ],
      },
      {
        company: 'Tipp',
        role: 'Cofundador e Gerente de Projetos',
        period: 'Jan 2016 – Nov 2017',
        location: 'Mogi das Cruzes, Brasil',
        highlights: [
          'Liderei o pivô para um e-commerce white-label para supermercados, chegando à final de um programa municipal de aceleração de startups; conquistei 6 meses de incubação e um piloto com uma rede regional de supermercados.',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        title: 'Frontend e Mobile',
        items: ['React', 'TypeScript', 'JavaScript', 'React Native / Expo', 'Redux', 'Next.js', 'Micro-Frontends (single-spa)', 'Design Systems', 'Ember.js'],
      },
      { title: 'Cloud e Autenticação', items: ['AWS Amplify', 'AWS Cognito', '2FA'] },
      { title: 'Testes e Qualidade', items: ['Jest', 'Cypress (E2E, regressão visual)', 'Pipelines de CI/CD'] },
      {
        title: 'IA',
        items: ['Desenvolvimento orientado a especificações', 'Cursor', 'MCP', 'Integrações com LLMs (OpenAI)', 'WhatsApp Business / SDK da Meta'],
      },
      {
        title: 'Backend (conhecimento prático)',
        items: ['Node.js', 'PHP', 'Ruby on Rails', 'APIs REST', 'MongoDB', 'MySQL'],
      },
    ],
  },
  portfolio: {
    title: 'Portfólio',
    badge: 'Em breve',
    description: 'Estudos de caso detalhados de projetos pessoais e freelance estão a caminho.',
    items: [
      {
        name: 'meu-plano',
        summary: 'PWA de finanças pessoais construído de ponta a ponta com Claude Code e um time de agentes de IA, da definição do problema ao design, implementação, testes e deploy.',
        tags: ['Next.js', 'TypeScript', 'Firebase', 'Claude Code', 'Agentes de IA'],
      },
      {
        name: 'VotoSintese',
        summary: 'App mobile de rastreamento de percurso com geolocalização em tempo real que calcula a remuneração da equipe de campo pelo desempenho nas campanhas.',
        tags: ['React Native', 'Geolocalização', 'Mapas'],
      },
    ],
  },
  education: {
    title: 'Formação',
    degree: 'Bacharelado em Sistemas de Informação',
    school: 'Universidade de Mogi das Cruzes, Brasil',
    year: '2023',
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'B2, proficiência profissional' },
    ],
  },
  contact: {
    title: 'Vamos trabalhar juntos?',
    description: 'Aberto a vagas remotas de engenharia frontend e mobile. O melhor jeito de falar comigo é por e-mail ou LinkedIn.',
    rights: 'James Almeida. Engenheiro de Software Frontend em São Paulo, Brasil.',
  },
};

export const content: Record<Language, Content> = { en, pt };
