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
  nav: { about: string; experience: string; skills: string; portfolio: string; contact: string; openMenu: string; closeMenu: string };
  languageToggle: { label: string; switchTo: string };
  hero: {
    availability: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    subtitle: string;
    ctaEmail: string;
    photoAlt: string;
    photoCaption: string;
  };
  highlights: { value: string; label: string }[];
  about: { title: string; paragraphs: string[] };
  experience: { title: string; currentBadge: string; previous: string; next: string; items: Experience[] };
  skills: { title: string; groups: SkillGroup[] };
  portfolio: {
    title: string;
    note: string;
    previous: string;
    next: string;
    goTo: string;
    items: { name: string; summary: string; tags: string[] }[];
  };
  education: {
    title: string;
    degree: string;
    school: string;
    year: string;
    courses: { name: string; school: string; year: string }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  contact: { title: string; description: string; footer: string };
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
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  languageToggle: { label: 'Language', switchTo: 'Mudar para português' },
  hero: {
    availability: 'Open to remote roles with US/EU time-zone overlap',
    titleStart: 'Senior Frontend Engineer building web & mobile products with ',
    titleAccent: 'React',
    titleEnd: '.',
    subtitle: 'React, TypeScript & React Native · Micro-Frontends · AI-driven product development. Based in São Paulo, Brazil (UTC−3).',
    ctaEmail: 'Get in touch',
    photoAlt: 'Photo of James Almeida',
    photoCaption: 'James Almeida · São Paulo',
  },
  highlights: [
    { value: '7+', label: 'years building web and mobile products' },
    { value: '~60k', label: 'daily active users on the app I rebuilt' },
    { value: '100k+', label: 'accounts migrated to a unified login' },
    { value: '15 → 3 days', label: 'to ship a new white-label app, across ~300 store apps' },
  ],
  about: {
    title: 'About',
    paragraphs: [
      'Frontend engineer with 7+ years building web and mobile products in React, TypeScript and React Native, and 10+ years in tech. As the only dedicated frontend engineer at a salon-tech company, I own 5+ B2B and B2C products and work directly with the design team on the design system and new products.',
      'I automated a white-label pipeline for ~300 iOS and Android apps (new-app SLA cut from 15 to 3 days), led an AI-assisted mobile rewrite shipped in one quarter to ~60k daily active users and migrated 100k+ accounts to AWS Cognito. Experienced with international, fully remote teams.',
    ],
  },
  experience: {
    title: 'Experience',
    currentBadge: 'Current',
    previous: 'Previous experience',
    next: 'Next experience',
    items: [
      {
        company: 'Hyperlocal (Avec, CrossX)',
        role: 'Frontend Software Engineer',
        period: 'Jan 2023 – Present',
        location: 'São Paulo, Brazil',
        current: true,
        context: "Salon-tech company behind SalãoVIP, a leading salon-management platform in South and Southeast Brazil. As the team's only dedicated frontend engineer, I own the frontend of its B2B and B2C products.",
        highlights: [
          "Own the management, evolution and production fixes of 5+ B2B and B2C products across web and mobile, ensuring cross-browser compatibility on the web apps: SalãoVIP (legacy PHP/CodeIgniter platform, the company's largest and most profitable product), Avec Pro and Avec App (React Native), Avec Portal (Next.js), Online Booking (embedded in the portal) and the white-label apps.",
          'Automated the white-label app pipeline for 150+ salon clients (~300 iOS and Android apps) with Expo EAS cloud builds and store submissions, automated asset swapping and icon/splash generation, and owned store credentials and integration users, cutting the new-app SLA from 15 to 3 days and letting non-engineering teams create and update apps without code.',
          'Led the AI-assisted, spec-driven rewrite of Avec Pro, a legacy AngularJS salon-management app, into a cross-platform React Native/Expo app (iOS and Android), shipped in one quarter and now serving ~60k daily active users (Spec Kit, Cursor, MCP).',
          'Architected a micro-frontend platform with single-spa, React and TypeScript, now running 5 modules across 2 business verticals (Avec AI, subscription club, bank-account onboarding, receivables advance, user migration) and letting teams ship new features into legacy web and mobile apps without full rewrites.',
          'Built a unified login for the Avec and CrossX products with AWS Amplify and Cognito, migrating 100k+ user accounts to a new user pool and enforcing 2FA to meet corporate security requirements.',
          'Partner directly with the design team on the design system and new products, turning Figma designs into reusable components; rebuilt the shared design system used by 2 product verticals (~40 components, icon library and theming) with Cypress visual regression tests to catch breaking UI changes before release.',
          "Built the frontend of Avec AI, a WhatsApp product for AI scheduling, appointment confirmation and marketing automation: WhatsApp connection management, Meta SDK integration and QR-code onboarding. Won the company's 2025 innovation award.",
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
        items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'React Native / Expo (EAS Build & Submit)', 'Redux', 'Next.js', 'Micro-Frontends (single-spa)', 'Ember.js'],
      },
      { title: 'Web Quality', items: ['Cross-browser compatibility', 'Responsive layouts'] },
      { title: 'Design & UX', items: ['Design Systems', 'Figma (basic)', 'UX fundamentals', 'Close collaboration with design teams'] },
      { title: 'Cloud & Auth', items: ['AWS Amplify', 'AWS Cognito', '2FA'] },
      { title: 'Testing & Quality', items: ['Jest', 'Cypress (E2E, visual regression)', 'CI/CD pipelines'] },
      {
        title: 'AI',
        items: ['Spec-driven development', 'Cursor', 'MCP', 'LLM integrations (OpenAI)', 'WhatsApp Business / Meta SDK'],
      },
      {
        title: 'Backend (working knowledge)',
        items: ['Node.js', 'PHP (CodeIgniter)', 'Ruby on Rails', 'REST APIs', 'MongoDB', 'MySQL'],
      },
    ],
  },
  portfolio: {
    title: 'Portfolio',
    note: 'Case studies coming soon.',
    previous: 'Previous project',
    next: 'Next project',
    goTo: 'Show project',
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
    courses: [{ name: 'UX Design Course (3 months)', school: 'Mastertech, São Paulo', year: '2019' }],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'B2, professional working proficiency' },
    ],
  },
  contact: {
    title: "Let's work together.",
    description: 'Open to remote frontend and mobile engineering roles. The best way to reach me is by email or LinkedIn.',
    footer: 'Frontend Software Engineer · São Paulo, Brazil',
  },
};

const pt: Content = {
  meta: { title: 'James Almeida | Engenheiro Frontend Sênior' },
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    skills: 'Skills',
    portfolio: 'Portfólio',
    contact: 'Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  languageToggle: { label: 'Idioma', switchTo: 'Switch to English' },
  hero: {
    availability: 'Disponível para vagas remotas com sobreposição de fuso EUA/Europa',
    titleStart: 'Engenheiro Frontend Sênior construindo produtos web e mobile com ',
    titleAccent: 'React',
    titleEnd: '.',
    subtitle: 'React, TypeScript e React Native · Micro-Frontends · Desenvolvimento de produto com IA. Baseado em São Paulo, Brasil (UTC−3).',
    ctaEmail: 'Entre em contato',
    photoAlt: 'Foto de James Almeida',
    photoCaption: 'James Almeida · São Paulo',
  },
  highlights: [
    { value: '7+', label: 'anos construindo produtos web e mobile' },
    { value: '~60 mil', label: 'usuários ativos por dia no app que reescrevi' },
    { value: '100 mil+', label: 'contas migradas para um login unificado' },
    { value: '15 → 3 dias', label: 'para lançar um app white-label novo, em ~300 apps nas lojas' },
  ],
  about: {
    title: 'Sobre',
    paragraphs: [
      'Engenheiro frontend com mais de 7 anos construindo produtos web e mobile com React, TypeScript e React Native, e mais de 10 anos em tecnologia. Como único engenheiro frontend dedicado de uma empresa de tecnologia para salões, sou dono de mais de 5 produtos B2B e B2C e trabalho direto com o time de design no design system e em produtos novos.',
      'Automatizei o pipeline de ~300 apps white-label para iOS e Android (SLA de um app novo caiu de 15 para 3 dias), liderei a reescrita de um app mobile com IA, entregue em um trimestre para ~60 mil usuários ativos por dia, e migrei mais de 100 mil contas para o AWS Cognito. Tenho experiência em times internacionais e 100% remotos.',
    ],
  },
  experience: {
    title: 'Experiência',
    currentBadge: 'Atual',
    previous: 'Experiência anterior',
    next: 'Próxima experiência',
    items: [
      {
        company: 'Hyperlocal (Avec, CrossX)',
        role: 'Engenheiro de Software Frontend',
        period: 'Jan 2023 – atual',
        location: 'São Paulo, Brasil',
        current: true,
        context: 'Empresa de tecnologia para salões, dona do SalãoVIP, plataforma de gestão de salões de referência no Sul e Sudeste do Brasil. Como único engenheiro frontend dedicado do time, sou dono do frontend dos produtos B2B e B2C.',
        highlights: [
          'Faço a gestão, evolução e correção de problemas de mais de 5 produtos B2B e B2C, web e mobile, garantindo compatibilidade cross-browser nos apps web: SalãoVIP (plataforma legada em PHP/CodeIgniter, o maior e mais rentável produto da empresa), Avec Pro e App Avec (React Native), Portal Avec (Next.js), Agendamento Online (embutido no portal) e os apps white-label.',
          'Automatizei o pipeline dos apps white-label de mais de 150 salões clientes (~300 apps iOS e Android) com builds e envio às lojas na nuvem via Expo EAS, troca automática de assets e geração de ícones e splash, além da gestão de credenciais das lojas e usuários de integração. O SLA de um app novo caiu de 15 para 3 dias, e outras áreas passaram a criar e atualizar apps sem depender de código.',
          'Liderei a reescrita do Avec Pro, app legado de gestão de salões em AngularJS, para um app multiplataforma em React Native/Expo (iOS e Android), com desenvolvimento orientado a especificações e IA (Spec Kit, Cursor, MCP). Entregue em um trimestre, hoje com ~60 mil usuários ativos por dia.',
          'Arquitetei uma plataforma de micro-frontends com single-spa, React e TypeScript, hoje com 5 módulos em 2 verticais de negócio (Avec IA, clube de assinaturas, credenciamento de contas bancárias, antecipação de recebíveis, migração de usuários), permitindo lançar funcionalidades novas em apps web e mobile legados sem reescrevê-los.',
          'Construí o login unificado dos produtos Avec e CrossX com AWS Amplify e Cognito, migrando mais de 100 mil contas para um novo user pool e aplicando 2FA para atender requisitos corporativos de segurança.',
          'Trabalho direto com o time de design no design system e em produtos novos, transformando designs do Figma em componentes reutilizáveis; reconstruí o design system compartilhado por 2 verticais de produto (~40 componentes, biblioteca de ícones e temas), com testes de regressão visual em Cypress para barrar mudanças de UI indesejadas antes do release.',
          'Construí o frontend do Avec IA, produto de WhatsApp para agendamento com IA, confirmação de horários e automação de marketing: gestão da conexão do WhatsApp, integração com o SDK da Meta e onboarding por QR code. Vencedor do prêmio de inovação da empresa em 2025.',
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
        items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'React Native / Expo (EAS Build e Submit)', 'Redux', 'Next.js', 'Micro-Frontends (single-spa)', 'Ember.js'],
      },
      { title: 'Qualidade Web', items: ['Compatibilidade cross-browser', 'Layouts responsivos'] },
      { title: 'Design e UX', items: ['Design Systems', 'Figma (básico)', 'Fundamentos de UX', 'Colaboração próxima com times de design'] },
      { title: 'Cloud e Autenticação', items: ['AWS Amplify', 'AWS Cognito', '2FA'] },
      { title: 'Testes e Qualidade', items: ['Jest', 'Cypress (E2E, regressão visual)', 'Pipelines de CI/CD'] },
      {
        title: 'IA',
        items: ['Desenvolvimento orientado a especificações', 'Cursor', 'MCP', 'Integrações com LLMs (OpenAI)', 'WhatsApp Business / SDK da Meta'],
      },
      {
        title: 'Backend (conhecimento prático)',
        items: ['Node.js', 'PHP (CodeIgniter)', 'Ruby on Rails', 'APIs REST', 'MongoDB', 'MySQL'],
      },
    ],
  },
  portfolio: {
    title: 'Portfólio',
    note: 'Estudos de caso em breve.',
    previous: 'Projeto anterior',
    next: 'Próximo projeto',
    goTo: 'Mostrar projeto',
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
    courses: [{ name: 'Curso de UX Design (3 meses)', school: 'Mastertech, São Paulo', year: '2019' }],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'B2, proficiência profissional' },
    ],
  },
  contact: {
    title: 'Vamos trabalhar juntos.',
    description: 'Aberto a vagas remotas de engenharia frontend e mobile. O melhor jeito de falar comigo é por e-mail ou LinkedIn.',
    footer: 'Engenheiro de Software Frontend · São Paulo, Brasil',
  },
};

export const content: Record<Language, Content> = { en, pt };
