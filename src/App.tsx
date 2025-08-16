import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FolderGit2, 
  Linkedin, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  User, 
  Calendar,
  Award
} from 'lucide-react';

import profileImage from './assets/images/profile.png';
import { imageConfig } from './assets/images';

const CURRENT_YEAR = new Date().getFullYear();

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'EmberJS', 'Webpack'],
    backend: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'Ruby on Rails', 'SQL', 'MySQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'DevOps', 'PWA', 'Jest', 'Cypress'],
    languages: ['Português', 'Inglês']
  };

  const experiences = [
    {
      company: 'Hyperlocal',
      location: 'São Paulo',
      period: 'Jan 2023 – atual',
      role: 'Desenvolvedor Fullstack',
      description: 'Desenvolvimento de aplicações web e mobile utilizando as arquiteturas e frameworks mais atuais, visando a escalabilidade e alta performance. Atuação em todas as etapas do ciclo de desenvolvimento, da concepção à entrega e manutenção.',
      achievements: [
        'Implementação de microfrontends com React',
        'Desenvolvimento de APIs robustas com PHP',
        'Containerização com Docker e testes com PHPUnit',
        'Aplicação de padrões DDD (Domain Driven Design)',
        'Desenvolvimento de design system (sistema de componentes para o projeto com design atômico)',
        'Desenvolvimento de testes unitários e de integração com PHPUnit',
        'Desenvolvimento de testes end-to-end com Cypress',
      ],
      current: true
    },
    {
      company: 'Klever Exchange',
      location: 'Tallinn',
      period: 'Ago 2022 – Dez 2022',
      role: 'Desenvolvedor Frontend',
      description: 'Criação de soluções inovadoras para plataformas de negociação de criptoativos, com ênfase em usabilidade, performance e segurança.',
      achievements: [
        'Criação de interface intuitiva com React e Redux',
        'Implementação de testes automatizados com Jest',
        'Desenvolvimento de novas funcionalidades para trading',
        'Correção de bugs críticos e otimização de performance'
      ],
      current: false
    },
    {
      company: 'Peerdustry',
      location: 'São Paulo',
      period: 'Nov 2018 – Ago 2022',
      role: 'Desenvolvedor Fullstack',
      description: 'Atuei na construção de produtos digitais para a startup, com foco em desenvolvimento frontend. Fiz parte das entregas essenciais para o lançamento do projeto para investidores e participei diretamente da estruturação do processo de onboarding de novos colaboradores.',
      achievements: [
        'Desenvolvimento completo com EmberJS e Ruby on Rails',
        'Participação em todo o ciclo de vida do produto',
        'Mentoria e treinamento de novos desenvolvedores',
        'Arquitetura de soluções escaláveis',
        'Gestão de projetos com metodologias ágeis'
      ],
      current: false
    }
  ];

  const projects = [
    {
      name: 'VotoSintese',
      description: 'Aplicativo de rastreamento de percurso com geolocalização, integrado a uma ferramenta para gestão de trajeto e monetização em campanhas de panfletagem e marketing de guerrilha. Desenvolvi o app responsável por iniciar e monitorar o trajeto do profissional, criando uma polyline no mapa para exibir o percurso em tempo real e calcular automaticamente a remuneração do colaborador de acordo com o desempenho nas campanhas.',
      technologies: ['React Native'],
      impact: 'Melhoria na eficiência da gestão do time de panfletagem e marketing de guerrilha',
      type: 'Mobile'
    },
    {
      name: 'E-commerce Desire',
      description: 'Frontend de loja virtual para confecção street wear Desire Creative Culture (São Paulo), integrado ao e-commerce Wix e ao gateway de pagamento PagBank. Fui responsável pela criação do layout do site, integração completa com a API do Wix e PagBank, e implementação do fluxo de vendas dos produtos da marca. Também realizei o tratamento automatizado de frete por meio da integração com ferramentas de logística, garantindo uma experiência eficiente para a loja e clientes.',
      technologies: ['Next.js', 'Wix API', 'PagBank'],
      impact: 'Melhoria na experiência do cliente e na eficiência da loja',
      type: 'E-commerce'
    },
    {
      name: 'Bot de Gestão Financeira (WhatsApp + OpenAI)',
      description: 'Bot pessoal integrado ao WhatsApp e OpenAI para registro automatizado de entradas e saídas financeiras. O sistema permite ao usuário cadastrar suas movimentações pelo WhatsApp, armazenar e extrair dados em tempo real para acompanhamento das finanças. Funcionalidades como geração de relatórios, dúvidas e recomendações inteligentes estão previstas para versões futuras.',
      technologies: ['Node.js', 'OpenAI', 'WhatsApp API', 'MongoDB'],
      impact: 'Melhoria na eficiência da gestão financeira pessoal',
      type: 'Web'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-gray-900">James Almeida</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'Sobre', icon: User },
                { id: 'skills', label: 'Skills', icon: Code2 },
                { id: 'experience', label: 'Experiência', icon: Briefcase },
                { id: 'projects', label: 'Projetos', icon: Award },
                { id: 'education', label: 'Formação', icon: GraduationCap }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={16} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  James Almeida
                </h1>
                <div className="text-xl text-blue-600 font-semibold">
                  Desenvolvedor de Software
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin size={18} />
                  <span>São Paulo, Brazil</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Desenvolvedor fullstack com experiência em tecnologia desde 2015 e atuação em desenvolvimento de software desde 2019. Trabalho com frontend, backend, gestão de projetos e design, utilizando ferramentas como React, Angular, Node.js e PHP. Integro práticas de organização e foco no usuário para criar soluções digitais modernas, eficientes e de alto impacto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  target='_blank'
                  href="mailto:james.almeida.ti@gmail.com"
                  className="flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Mail size={18} />
                  <span>Entrar em Contato</span>
                </a>
                <div className="flex flex-col mobile:flex-row space-y-3 mobile:space-y-0 mobile:space-x-4">
                  <a 
                    target='_blank'
                    href="https://github.com/jmsalmeida"
                    className="flex w-full items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                  >
                    <FolderGit2 size={18} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    target='_blank'
                    href="https://www.linkedin.com/in/jamesr-almeida/"
                    className="flex w-full items-center justify-center space-x-2 bg-blue-700 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>james.almeida.ti@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+55 11 97223-7267</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Imagem de perfil - você pode substituir o User icon por uma imagem */}
                <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={profileImage} 
                    {...imageConfig.profile}
                    // className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Code2 size={40} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Competências Técnicas</h2>
            <p className="text-lg text-gray-600">Tecnologias e ferramentas que tenho experiência</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Frontend', skills: skills.frontend, color: 'blue' },
              { title: 'Backend', skills: skills.backend, color: 'green' },
              { title: 'Ferramentas', skills: skills.tools, color: 'purple' },
              { title: 'Idiomas', skills: skills.languages, color: 'orange' }
            ].map(({ title, skills, color }) => (
              <div key={title} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className={`text-lg font-semibold mb-4 text-${color}-600`}>{title}</h3>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className={`inline-block bg-${color}-100 text-${color}-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experiência Profissional</h2>
            <p className="text-lg text-gray-600">Minha jornada no desenvolvimento de software</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                      {exp.current && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Atual
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-blue-600 font-semibold">{exp.role}</p>
                    <div className="flex items-center space-x-4 text-gray-600 mt-1">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Teaching Experience */}
          <div className="mt-8 bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="text-blue-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Mastertech</h3>
            </div>
            <p className="text-blue-600 font-semibold mb-2">Professor/Auxiliar</p>
            <p className="text-gray-700">
              Ministração de cursos e workshops de frontend e DevOps, 
              compartilhando conhecimento e formando novos profissionais na área de tecnologia.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projetos</h2>
            <p className="text-lg text-gray-600">Soluções desenvolvidas para clientes e projetos pessoais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Award size={16} className="text-green-600" />
                        <span className="text-sm text-green-700 font-medium">Resultado:</span>
                      </div>
                      <p className="text-sm text-green-600 mt-1">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Formação Acadêmica</h2>
            <p className="text-lg text-gray-600">Base sólida em tecnologia da informação</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Bacharel em Sistemas de Informação</h3>
                  <p className="text-blue-600 font-semibold">Universidade de Mogi das Cruzes</p>
                  <div className="flex items-center space-x-1 text-gray-600 mt-1">
                    <Calendar size={14} />
                    <span>Jan 2021 – Dez 2023</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">
                Formação abrangente em desenvolvimento de sistemas, estrutura de dados, 
                engenharia de software, gestão de projetos e tecnologias emergentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Vamos trabalhar juntos?</h3>
            <p className="text-gray-400 mb-6">
              Estou sempre interessado em novos projetos e oportunidades desafiadoras.
            </p>
            
            <div className="flex flex-col mobile:flex-row justify-center space-y-4 mobile:space-y-0 mobile:space-x-6 mb-8">
              <a 
                href="mailto:james.almeida.ti@gmail.com"
                className="flex items-center justify-center space-x-2 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail size={18} />
                <span>james.almeida.ti@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/5511972237267?text=Olá! Vi seu portfólio e gostaria de conversar sobre projetos de software. Podemos agendar uma conversa?"
                target="_blank"
                className="flex items-center justify-center space-x-2 bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Phone size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
            
            <div className="flex justify-center space-x-4 mb-8">
              <a 
                target='_blank'
                href="https://github.com/jmsalmeida" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FolderGit2 size={24} />
              </a>
              <a 
                target='_blank'
                href="https://www.linkedin.com/in/jamesr-almeida/"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm">
                © {CURRENT_YEAR} James Almeida. Desenvolvedor de Software em São Paulo, Brazil.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;// Last updated: Sat Aug 16 02:11:44 AM -03 2025
