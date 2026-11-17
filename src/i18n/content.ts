export type Language = 'en' | 'pt';

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  context?: string;
  highlights: string[];
  current?: boolean;
  stack?: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface KeyProject {
  name: string;
  company: string;
  summary: string;
  stack: string[];
}

export interface Content {
  meta: { title: string };
  nav: { about: string; projects: string; experience: string; skills: string; contact: string; openMenu: string; closeMenu: string };
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
  projects: { title: string; headline: string; items: KeyProject[] };
  experience: { title: string; headline: string; currentBadge: string; stackLabel: string; items: Experience[] };
  skills: { title: string; headline: string; groups: SkillGroup[] };
  portfolio: {
    title: string;
    note: string;
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

const hyperlocalStack = [
  'React',
  'TypeScript',
  'React Native/Expo (EAS)',
  'Next.js',
  'PHP/CodeIgniter',
  'single-spa',
  'AWS Amplify',
  'AWS Cognito',
  'Azure DevOps',
  'Cypress',
  'Sentry',
  'Figma',
  'Spec Kit',
  'Cursor',
  'MCP',
];

const en: Content = {
  meta: { title: 'James Almeida | Senior Frontend Engineer' },
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
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
    subtitle: 'React, TypeScript & React Native · Scalable Frontend Architecture (Micro-Frontends) · AI-Driven Development. Based in São Paulo, Brazil (UTC−3).',
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
      'Senior Frontend Engineer with 7+ years building web and mobile products in React, TypeScript and React Native (10+ years in tech). Sole dedicated frontend engineer owning 5+ B2B and B2C products at a salon-tech company.',
      'I automated a white-label pipeline for ~300 iOS and Android apps (new-app SLA cut from 15 to 3 days), led an AI-assisted mobile rewrite shipped in one quarter to ~60k daily active users and migrated 100k+ accounts to AWS Cognito. Experienced with CI/CD, micro-frontends, design systems and fully remote international teams.',
    ],
  },
  projects: {
    title: 'Key Projects',
    headline: 'What I built at Hyperlocal.',
    items: [
      {
        name: 'White-Label App Pipeline',
        company: 'Hyperlocal (Avec)',
        summary:
          'Built an automated pipeline that generates, builds and submits branded iOS and Android apps for 150+ salon clients (~300 apps), swapping assets and generating icons and splash screens in CI; cut the new-app SLA from 15 to 3 days and let non-engineering teams create and update apps without code.',
        stack: ['Azure DevOps Pipelines', 'Expo EAS Build & Submit', 'Automation scripts'],
      },
      {
        name: 'Avec Pro Mobile Rewrite',
        company: 'Hyperlocal (Avec)',
        summary:
          'Led the AI-assisted, spec-driven rewrite of a legacy AngularJS salon-management app into a cross-platform iOS and Android app, shipped in one quarter and now serving ~60k daily active users.',
        stack: ['React Native', 'Expo', 'TypeScript', 'Spec Kit', 'Cursor', 'MCP'],
      },
      {
        name: 'Unified Login & Account Migration',
        company: 'Hyperlocal (Avec, CrossX)',
        summary:
          'Built a single login for the Avec and CrossX products, migrating 100k+ user accounts to a new Cognito user pool and enforcing 2FA to meet corporate security requirements.',
        stack: ['AWS Amplify', 'AWS Cognito', '2FA'],
      },
    ],
  },
  experience: {
    title: 'Experience',
    headline: '10+ years in tech, 7+ building products.',
    currentBadge: 'Current',
    stackLabel: 'Stack',
    items: [
      {
        company: 'Hyperlocal (Avec, CrossX)',
        role: 'Frontend Software Engineer',
        period: 'Jan 2023 – Present',
        location: 'São Paulo, Brazil',
        current: true,
        stack: hyperlocalStack,
        context:
          'Salon-tech company behind SalãoVIP, a leading salon-management platform in South and Southeast Brazil. Sole dedicated frontend engineer, working directly with product and design in sprint planning, backlog refinement and Figma-to-component handoff.',
        highlights: [
          "Own the management, evolution and production fixes of 5+ B2B and B2C products across web and mobile: SalãoVIP (frontend of the legacy PHP/CodeIgniter platform, the company's largest product), Avec Pro and Avec App (React Native), Avec Portal (Next.js), Online Booking and the white-label apps, ensuring cross-browser compatibility on the web.",
          'Architected a micro-frontend platform with single-spa, React and TypeScript to modernize legacy products incrementally, shipping 5 modules with shared caching and state management and integrating REST APIs across verticals (core Laravel API, data APIs, embedded Metabase dashboards), without disrupting a large existing customer base.',
          "Implemented LGPD (Brazil's GDPR) privacy requirements across the products' frontends, alongside the unified Cognito login with 2FA.",
          'Rebuilt the shared design system as a versioned npm package (~40 components, icons, theming) used across 3 product verticals, giving every squad a single place to fix UI bugs and keeping layouts consistent; added Cypress visual regression tests to catch breaking changes before release.',
          'Wrote Azure DevOps CI/CD pipelines (YAML) to build and release micro-frontends to AWS S3/CloudFront, and monitored web and mobile apps in production with Sentry, Firebase Crashlytics, Snyk, Google Play Console and App Store Connect.',
        ],
      },
      {
        company: 'Klever',
        role: 'Frontend Software Engineer',
        period: 'Aug 2022 – Dec 2022',
        location: 'Remote',
        stack: ['React', 'TypeScript', 'Redux', 'Jest', 'E2E testing'],
        context: 'Crypto wallet and exchange ecosystem headquartered in Tallinn, Estonia (4M+ app downloads, 100+ employees worldwide).',
        highlights: [
          "Established a test pyramid for the exchange's trading interface with Jest, doubling unit test coverage from 40% to 80%, adding missing integration tests and E2E tests for the full trading flow against a real staging wallet using Klever coins.",
          'Refactored the real-time fee calculation components with React, TypeScript and Redux, removing prop drilling and cleaning up store state to eliminate cascading re-renders.',
        ],
      },
      {
        company: 'Peerdustry',
        role: 'Frontend Software Engineer',
        period: 'Nov 2018 – Sep 2022',
        location: 'São Paulo, Brazil',
        stack: ['Ember.js', 'JavaScript', 'WebSockets', 'Ruby on Rails', 'Microservices', 'Message queues', 'Automated testing', 'Agile'],
        context: 'Industrial machining marketplace startup; one of 3 engineers on the tech team (with the CTO and a senior engineer).',
        highlights: [
          'Built the end-to-end production dashboard with Ember.js and WebSockets (quotation, digital kanban tracking, delivery), handling ~1,000 machining quote requests per month across a network of 1,000+ registered supplier machines.',
          'Built a real-time chat between clients and manufacturing partners with Ember.js, Ruby on Rails and WebSockets, reducing production errors caused by misread technical drawings.',
          'Raised E2E, integration and unit test coverage by 30% ahead of the platform launch.',
          "Shaped the team's engineering practices (code review, automated testing, lean agile delivery) and designed the developer onboarding process, cutting new-hire ramp-up time by 40%.",
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
    ],
  },
  skills: {
    title: 'Skills',
    headline: 'The tools I ship with.',
    groups: [
      {
        title: 'Frontend & Mobile',
        items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'Advanced CSS3 (8 years)', 'React Native/Expo', 'Redux', 'Next.js', 'Micro-Frontends (single-spa)', 'Ember.js', 'Cross-browser compatibility', 'Responsive layouts'],
      },
      { title: 'Design & UX', items: ['Design Systems', 'Figma (basic)', 'UX fundamentals'] },
      { title: 'Cloud, Auth & Privacy', items: ['AWS Amplify', 'AWS Cognito', 'AWS S3/CloudFront (deploy)', '2FA', 'LGPD/GDPR-aligned privacy'] },
      { title: 'DevOps & Observability', items: ['CI/CD pipelines (Azure DevOps, YAML)', 'Expo EAS Build & Submit', 'Sentry', 'Firebase Crashlytics', 'Snyk'] },
      { title: 'Testing & Quality', items: ['Jest', 'Cypress (E2E, visual regression)', 'Test pyramid'] },
      { title: 'AI', items: ['Claude Code', 'Multi-agent orchestration', 'Spec-driven development', 'Cursor', 'MCP', 'LLM integrations (OpenAI)'] },
      {
        title: 'Backend (working knowledge)',
        items: ['Node.js', 'PHP (CodeIgniter)', 'Laravel APIs', 'Ruby on Rails', 'REST APIs', 'MongoDB', 'MySQL'],
      },
    ],
  },
  portfolio: {
    title: 'Side projects',
    note: 'Case studies coming soon.',
    items: [
      {
        name: 'meu-plano',
        summary: 'Personal finance PWA built end to end with Claude Code and a multi-agent team, from problem definition to design, implementation, testing and deployment.',
        tags: ['Next.js', 'TypeScript', 'Firebase', 'Claude Code', 'AI agents'],
      },
      {
        name: 'VotoSintese',
        summary: "Route-tracking mobile app with real-time geolocation that calculates field workers' pay from campaign performance.",
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
      { name: 'English', level: 'B2 (upper-intermediate), professional working proficiency' },
    ],
  },
  contact: {
    title: "Let's work together.",
    description: 'Open to remote frontend, fullstack and mobile engineering roles. The best way to reach me is by email or LinkedIn.',
    footer: 'Frontend Software Engineer · São Paulo, Brazil',
  },
};

const pt: Content = {
  meta: { title: 'James Almeida | Engenheiro Frontend Sênior' },
  nav: {
    about: 'Sobre',
    projects: 'Projetos',
    experience: 'Experiência',
    skills: 'Skills',
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
    subtitle: 'React, TypeScript e React Native · Arquitetura Frontend Escalável (Micro-Frontends) · Desenvolvimento com IA. Baseado em São Paulo, Brasil (UTC−3).',
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
      'Engenheiro Frontend Sênior com mais de 7 anos construindo produtos web e mobile com React, TypeScript e React Native (mais de 10 anos em tecnologia). Único engenheiro frontend dedicado de uma empresa de tecnologia para salões, dono de mais de 5 produtos B2B e B2C.',
      'Automatizei o pipeline de ~300 apps white-label para iOS e Android (SLA de um app novo caiu de 15 para 3 dias), liderei a reescrita de um app mobile com IA, entregue em um trimestre para ~60 mil usuários ativos por dia, e migrei mais de 100 mil contas para o AWS Cognito. Tenho experiência com CI/CD, micro-frontends, design systems e times internacionais 100% remotos.',
    ],
  },
  projects: {
    title: 'Projetos em destaque',
    headline: 'O que construí na Hyperlocal.',
    items: [
      {
        name: 'Pipeline de apps white-label',
        company: 'Hyperlocal (Avec)',
        summary:
          'Construí um pipeline automatizado que gera, compila e envia às lojas apps iOS e Android personalizados para mais de 150 salões clientes (~300 apps), trocando assets e gerando ícones e splash screens no CI. O SLA de um app novo caiu de 15 para 3 dias, e outras áreas passaram a criar e atualizar apps sem depender de código.',
        stack: ['Azure DevOps Pipelines', 'Expo EAS Build e Submit', 'Scripts de automação'],
      },
      {
        name: 'Reescrita do app Avec Pro',
        company: 'Hyperlocal (Avec)',
        summary:
          'Liderei a reescrita, orientada a especificações e com IA, de um app legado de gestão de salões em AngularJS para um app multiplataforma iOS e Android, entregue em um trimestre e hoje com ~60 mil usuários ativos por dia.',
        stack: ['React Native', 'Expo', 'TypeScript', 'Spec Kit', 'Cursor', 'MCP'],
      },
      {
        name: 'Login unificado e migração de contas',
        company: 'Hyperlocal (Avec, CrossX)',
        summary:
          'Construí um login único para os produtos Avec e CrossX, migrando mais de 100 mil contas para um novo user pool do Cognito e aplicando 2FA para atender requisitos corporativos de segurança.',
        stack: ['AWS Amplify', 'AWS Cognito', '2FA'],
      },
    ],
  },
  experience: {
    title: 'Experiência',
    headline: 'Mais de 10 anos em tecnologia, 7+ construindo produtos.',
    currentBadge: 'Atual',
    stackLabel: 'Stack',
    items: [
      {
        company: 'Hyperlocal (Avec, CrossX)',
        role: 'Engenheiro de Software Frontend',
        period: 'Jan 2023 – atual',
        location: 'São Paulo, Brasil',
        current: true,
        stack: hyperlocalStack,
        context:
          'Empresa de tecnologia para salões, dona do SalãoVIP, plataforma de gestão de salões de referência no Sul e Sudeste do Brasil. Único engenheiro frontend dedicado, trabalhando direto com produto e design em plannings, refinamentos e na passagem do Figma para componentes.',
        highlights: [
          'Faço a gestão, evolução e correção de problemas em produção de mais de 5 produtos B2B e B2C, web e mobile: SalãoVIP (frontend da plataforma legada em PHP/CodeIgniter, o maior produto da empresa), Avec Pro e App Avec (React Native), Portal Avec (Next.js), Agendamento Online e os apps white-label, garantindo compatibilidade cross-browser na web.',
          'Arquitetei uma plataforma de micro-frontends com single-spa, React e TypeScript para modernizar produtos legados aos poucos, entregando 5 módulos com cache e gerenciamento de estado compartilhados e integrando APIs REST entre verticais (API principal em Laravel, APIs de dados, dashboards do Metabase embutidos), sem impactar uma base grande de clientes.',
          'Implementei os requisitos de privacidade da LGPD no frontend dos produtos, junto com o login unificado no Cognito com 2FA.',
          'Reconstruí o design system compartilhado como um pacote npm versionado (~40 componentes, ícones e temas) usado em 3 verticais de produto, dando a todos os squads um único lugar para corrigir bugs de UI e mantendo os layouts consistentes; adicionei testes de regressão visual em Cypress para barrar mudanças indesejadas antes do release.',
          'Escrevi pipelines de CI/CD no Azure DevOps (YAML) para compilar e publicar micro-frontends no AWS S3/CloudFront, e monitoro os apps web e mobile em produção com Sentry, Firebase Crashlytics, Snyk, Google Play Console e App Store Connect.',
        ],
      },
      {
        company: 'Klever',
        role: 'Engenheiro de Software Frontend',
        period: 'Ago 2022 – Dez 2022',
        location: 'Remoto',
        stack: ['React', 'TypeScript', 'Redux', 'Jest', 'Testes E2E'],
        context: 'Ecossistema de carteira e exchange de criptoativos com sede em Tallinn, Estônia (4 mi+ de downloads, 100+ funcionários no mundo).',
        highlights: [
          'Estruturei a pirâmide de testes da interface de negociação da exchange com Jest, dobrando a cobertura de testes unitários de 40% para 80%, adicionando os testes de integração que faltavam e testes E2E do fluxo completo de negociação em uma carteira real de staging com moedas da Klever.',
          'Refatorei os componentes de cálculo de taxas em tempo real com React, TypeScript e Redux, eliminando prop drilling e limpando o estado da store para acabar com re-renders em cascata.',
        ],
      },
      {
        company: 'Peerdustry',
        role: 'Engenheiro de Software Frontend',
        period: 'Nov 2018 – Set 2022',
        location: 'São Paulo, Brasil',
        stack: ['Ember.js', 'JavaScript', 'WebSockets', 'Ruby on Rails', 'Microsserviços', 'Filas de mensagens', 'Testes automatizados', 'Agile'],
        context: 'Startup de marketplace de usinagem industrial; um dos 3 engenheiros do time de tecnologia (com o CTO e um engenheiro sênior).',
        highlights: [
          'Construí o dashboard de produção de ponta a ponta com Ember.js e WebSockets (orçamento, kanban digital, entrega), com ~1.000 pedidos de orçamento de usinagem por mês em uma rede de mais de 1.000 máquinas de fornecedores cadastradas.',
          'Construí um chat em tempo real entre clientes e parceiros de fabricação com Ember.js, Ruby on Rails e WebSockets, reduzindo erros de produção causados por leitura errada de desenhos técnicos.',
          'Aumentei em 30% a cobertura de testes E2E, de integração e unitários antes do lançamento da plataforma.',
          'Ajudei a moldar as práticas de engenharia do time (code review, testes automatizados, agile enxuto) e estruturei o onboarding de desenvolvedores, reduzindo em 40% o tempo de adaptação.',
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
    ],
  },
  skills: {
    title: 'Skills',
    headline: 'As ferramentas com que eu entrego.',
    groups: [
      {
        title: 'Frontend e Mobile',
        items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 avançado (8 anos)', 'React Native/Expo', 'Redux', 'Next.js', 'Micro-Frontends (single-spa)', 'Ember.js', 'Compatibilidade cross-browser', 'Layouts responsivos'],
      },
      { title: 'Design e UX', items: ['Design Systems', 'Figma (básico)', 'Fundamentos de UX'] },
      { title: 'Cloud, Autenticação e Privacidade', items: ['AWS Amplify', 'AWS Cognito', 'AWS S3/CloudFront (deploy)', '2FA', 'Privacidade e LGPD'] },
      { title: 'DevOps e Observabilidade', items: ['Pipelines de CI/CD (Azure DevOps, YAML)', 'Expo EAS Build e Submit', 'Sentry', 'Firebase Crashlytics', 'Snyk'] },
      { title: 'Testes e Qualidade', items: ['Jest', 'Cypress (E2E, regressão visual)', 'Pirâmide de testes'] },
      { title: 'IA', items: ['Claude Code', 'Orquestração multiagente', 'Desenvolvimento orientado a especificações', 'Cursor', 'MCP', 'Integrações com LLMs (OpenAI)'] },
      {
        title: 'Backend (conhecimento prático)',
        items: ['Node.js', 'PHP (CodeIgniter)', 'APIs em Laravel', 'Ruby on Rails', 'APIs REST', 'MongoDB', 'MySQL'],
      },
    ],
  },
  portfolio: {
    title: 'Projetos pessoais',
    note: 'Estudos de caso em breve.',
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
      { name: 'Inglês', level: 'B2 (intermediário avançado), proficiência profissional' },
    ],
  },
  contact: {
    title: 'Vamos trabalhar juntos.',
    description: 'Aberto a vagas remotas de engenharia frontend, fullstack e mobile. O melhor jeito de falar comigo é por e-mail ou LinkedIn.',
    footer: 'Engenheiro de Software Frontend · São Paulo, Brasil',
  },
};

export const content: Record<Language, Content> = { en, pt };
