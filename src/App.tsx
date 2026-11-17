import { useState, type KeyboardEvent, type ReactNode } from 'react';
import { ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react';

import profileImage from './assets/images/profile.jpg';
import { contactLinks } from './i18n/content';
import { useLanguage } from './i18n/LanguageContext';
import { CountUp, Reveal, useActiveSection, useInView, useScrollProgress, useScrolled } from './motion';

const CURRENT_YEAR = new Date().getFullYear();

const container = 'max-w-[72.5rem] mx-auto px-5 sm:px-8';
const sectionOffset = 'scroll-mt-14';

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="m-0 text-[0.9375rem] sm:text-[1.0625rem] font-semibold text-accent">{children}</p>;
}

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <Reveal className="flex flex-col gap-2 sm:gap-3 mb-10 sm:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="m-0 text-[2.125rem] sm:text-[3rem] lg:text-[3.5rem] font-semibold leading-[1.07] tracking-[-0.025em]">{children}</h2>
    </Reveal>
  );
}

function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();
  const options = [
    { id: 'en', label: 'EN' },
    { id: 'pt', label: 'PT' },
  ] as const;

  return (
    <div role="group" aria-label={t.languageToggle.label} className="relative flex p-0.5 rounded-full bg-ink/[0.06]">
      <span
        aria-hidden="true"
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-card shadow-sm transition-transform duration-300 ease-spring ${
          language === 'pt' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      {options.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => setLanguage(id)}
          aria-pressed={language === id}
          className={`relative z-10 w-10 h-7 text-xs font-semibold transition-colors ${language === id ? 'text-ink' : 'text-muted hover:text-ink'}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

/** Apple-style statement: words light up as the paragraph scrolls through the viewport. */
function ScrollLitText({ text }: { text: string }) {
  const { ref, progress } = useScrollProgress<HTMLParagraphElement>();
  const words = text.split(' ');
  const lit = progress * words.length * 1.15;

  return (
    <p ref={ref} className="m-0 text-[1.625rem] sm:text-[2.25rem] lg:text-[2.75rem] font-semibold leading-[1.18] tracking-[-0.02em]">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className={`transition-colors duration-300 ${index < lit ? 'text-ink' : 'text-ink/20'}`}>
            {word}{' '}
          </span>
        ))}
      </span>
    </p>
  );
}

function Highlights() {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDListElement>(0.3);

  return (
    <dl ref={ref} className="m-0 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {t.highlights.map(({ value, label }, index) => (
        <Reveal key={label} delay={index * 90} className="flex flex-col gap-2 p-5 sm:p-7 rounded-[22px] sm:rounded-[28px] bg-card">
          <dd className="m-0 order-1 text-[1.75rem] sm:text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.03em] text-gradient">
            <CountUp value={value} active={inView} />
          </dd>
          <dt className="order-2 text-sm sm:text-[0.9375rem] leading-snug text-muted">{label}</dt>
        </Reveal>
      ))}
    </dl>
  );
}

function Experience() {
  const { t } = useLanguage();
  const [jobIndex, setJobIndex] = useState(0);
  const jobs = t.experience.items;
  const job = jobs[jobIndex];

  // Arrow keys move between roles, like a native segmented control
  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown';
    const back = event.key === 'ArrowLeft' || event.key === 'ArrowUp';
    if (!forward && !back) return;
    event.preventDefault();
    const next = (index + (forward ? 1 : -1) + jobs.length) % jobs.length;
    setJobIndex(next);
    const tab = document.getElementById(`job-tab-${next}`);
    tab?.focus();
    tab?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };

  return (
    <div className="grid gap-6 lg:gap-12 grid-cols-[minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)] items-start">
      <Reveal className="min-w-0 lg:sticky lg:top-24 -mx-5 sm:mx-0">
        <div role="tablist" aria-label={t.experience.title} className="flex lg:flex-col gap-2 overflow-x-auto px-5 sm:px-0 pb-1 [scrollbar-width:none]">
          {jobs.map((item, index) => {
            const active = index === jobIndex;
            return (
              <button
                key={item.company}
                type="button"
                role="tab"
                aria-selected={active}
                id={`job-tab-${index}`}
                aria-controls="job-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => setJobIndex(index)}
                onKeyDown={(event) => onTabKey(event, index)}
                className={`shrink-0 flex flex-col items-start gap-0.5 px-4 py-2.5 lg:px-5 lg:py-4 rounded-full lg:rounded-2xl text-left whitespace-nowrap lg:whitespace-normal transition-[transform,background-color,color,box-shadow] duration-300 ease-spring active:scale-[0.97] active:duration-100 ${
                  active ? 'bg-ink text-canvas lg:bg-card lg:text-ink lg:shadow-[0_8px_30px_rgba(0,0,0,0.06)]' : 'bg-card lg:bg-transparent text-muted hover:text-ink'
                }`}
              >
                <span className="text-[0.9375rem] lg:text-[1.0625rem] font-semibold">
                  <span className="lg:hidden">{item.company.split(' (')[0]}</span>
                  <span className="hidden lg:inline">{item.company}</span>
                </span>
                <span className="hidden lg:block text-[0.8125rem] text-muted">{item.period}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal>
        <article key={`${t.meta.title}-${jobIndex}`} id="job-panel" role="tabpanel" aria-labelledby={`job-tab-${jobIndex}`} className="panel-enter p-6 sm:p-10 rounded-[28px] bg-card">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2 text-[0.8125rem] sm:text-sm text-muted">
            <span>{job.period}</span>
            <span aria-hidden="true">·</span>
            <span>{job.location}</span>
            {job.current && (
              <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">{t.experience.currentBadge}</span>
            )}
          </div>
          <h3 className="m-0 text-[1.625rem] sm:text-[2.125rem] font-semibold leading-[1.12] tracking-[-0.02em]">{job.company}</h3>
          <p className="mt-1 mb-0 text-[1.0625rem] sm:text-[1.1875rem] font-medium text-muted">{job.role}</p>
          {job.context && <p className="mt-5 mb-0 text-[0.9375rem] sm:text-[1.0625rem] leading-relaxed text-muted">{job.context}</p>}
          <ul className="mt-6 mb-0 p-0 list-none flex flex-col gap-4 text-[0.9375rem] sm:text-[1.0625rem] leading-relaxed">
            {job.highlights.map((highlight) => (
              <li key={highlight} className="relative pl-5">
                <span aria-hidden="true" className="absolute left-0 top-[0.62em] w-1.5 h-1.5 rounded-full bg-accent" />
                {highlight}
              </li>
            ))}
          </ul>
          {job.stack && (
            <div className="mt-8 pt-6 border-t border-line">
              <h4 className="m-0 mb-3 text-[0.8125rem] font-semibold text-muted">{t.experience.stackLabel}</h4>
              <ul className="m-0 p-0 list-none flex flex-wrap gap-2">
                {job.stack.map((tag) => (
                  <li key={tag} className="px-3 py-1 rounded-full bg-alt text-[0.8125rem] font-medium">{tag}</li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </Reveal>
    </div>
  );
}

function App() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ];
  const activeSection = useActiveSection(navItems.map(({ id }) => id));
  const [firstParagraph, ...otherParagraphs] = t.about.paragraphs;

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans text-[1.0625rem] leading-normal">
      {/* Frosted glass navigation */}
      <header
        data-material={scrolled || menuOpen ? 'on' : 'off'}
        className="nav-material fixed inset-x-0 top-0 z-50"
      >
        <div className={`${container} h-14 flex items-center justify-between gap-4`}>
          <a href="#top" className="text-[1.0625rem] font-semibold tracking-[-0.01em]">James Almeida</a>
          <nav className="hidden md:flex items-center gap-7 text-[0.8125rem]">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'true' : undefined}
                className={`font-medium transition-colors ${activeSection === id ? 'text-ink' : 'text-ink/65 hover:text-ink'}`}
              >
                {label}
              </a>
            ))}
            <LanguageSwitch />
          </nav>
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitch />
            <button
              type="button"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="w-10 h-10 -mr-2 flex items-center justify-center"
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
        <nav
          className={`menu-sheet md:hidden absolute inset-x-0 top-full origin-top transition-[opacity,transform,visibility] duration-300 ease-spring ${
            menuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-3 invisible'
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="flex flex-col px-5 pb-6 pt-1">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-[1.5rem] font-semibold tracking-[-0.01em] border-b border-line/60 last:border-0"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className={`${container} grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1fr)_380px] items-center pt-24 pb-16 sm:pt-32 lg:pt-40 lg:pb-28`}>
          <div className="flex flex-col gap-5 sm:gap-6 order-2 lg:order-1">
            <Reveal>
              <p className="m-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-alt text-[0.8125rem] sm:text-sm font-medium text-muted">
                <span className="relative flex w-2 h-2" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-[#30d158] animate-ping opacity-60 motion-reduce:animate-none" />
                  <span className="relative w-2 h-2 rounded-full bg-[#30d158]" />
                </span>
                {t.hero.availability}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="m-0 text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.05] tracking-[-0.035em]">
                {t.hero.titleStart}
                <span className="text-gradient">{t.hero.titleAccent}</span>
                {t.hero.titleEnd}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="m-0 max-w-[37.5rem] text-[1.1875rem] sm:text-[1.3125rem] leading-[1.45] text-muted">{t.hero.subtitle}</p>
            </Reveal>
            <Reveal delay={240} className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-4 pt-2">
              <a
                href={`mailto:${contactLinks.email}`}
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-accent hover:bg-accent-hover text-white text-[1.0625rem] font-medium transition-[transform,background-color] duration-100 ease-out active:scale-[0.97]"
              >
                {t.hero.ctaEmail}
              </a>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-0.5 text-[1.0625rem] text-accent hover:underline">
                LinkedIn
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a href={contactLinks.github} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-0.5 text-[1.0625rem] text-accent hover:underline">
                GitHub
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={120} className="order-1 lg:order-2 w-[200px] sm:w-[280px] lg:w-auto">
            <img
              src={profileImage}
              alt={t.hero.photoAlt}
              width={400}
              height={500}
              className="w-full aspect-[4/5] rounded-[28px] lg:rounded-[32px] object-cover object-top bg-alt shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]"
            />
          </Reveal>
        </section>

        {/* Highlights */}
        <section className="bg-alt py-16 sm:py-24">
          <div className={container}>
            <Highlights />
          </div>
        </section>

        {/* About */}
        <section id="about" className={`${container} ${sectionOffset} py-20 sm:py-32`}>
          <Reveal className="mb-6 sm:mb-8">
            <Eyebrow>{t.about.title}</Eyebrow>
          </Reveal>
          <div className="flex flex-col gap-8 max-w-[57.5rem]">
            <ScrollLitText text={firstParagraph} />
            {otherParagraphs.map((paragraph) => (
              <Reveal key={paragraph}>
                <p className="m-0 max-w-[45rem] text-[1.0625rem] sm:text-[1.3125rem] leading-[1.5] text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={`${sectionOffset} bg-alt py-20 sm:py-32`}>
          <div className={container}>
            <SectionTitle eyebrow={t.experience.title}>{t.experience.headline}</SectionTitle>
            <Experience />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={`${container} ${sectionOffset} py-20 sm:py-32`}>
          <SectionTitle eyebrow={t.skills.title}>{t.skills.headline}</SectionTitle>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.skills.groups.map((group, index) => {
              const [name, qualifier] = group.title.split(' (');
              return (
                <Reveal
                  key={group.title}
                  delay={(index % 3) * 90}
                  className={`flex flex-col gap-4 p-6 sm:p-8 rounded-[28px] bg-alt ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <h3 className="m-0 text-[1.1875rem] sm:text-[1.3125rem] font-semibold tracking-[-0.01em]">
                    {name}
                    {qualifier && <span className="font-normal text-muted"> ({qualifier}</span>}
                  </h3>
                  <ul className="m-0 p-0 list-none flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="px-3 py-1.5 rounded-full bg-card text-[0.875rem] font-medium">{item}</li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className={`${sectionOffset} bg-alt py-20 sm:py-32`}>
          <div className={container}>
            <SectionTitle eyebrow={t.portfolio.title}>{t.portfolio.note}</SectionTitle>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {t.portfolio.items.map((project, index) => (
                <Reveal key={project.name} delay={index * 90} className="flex flex-col gap-4 p-7 sm:p-10 rounded-[28px] bg-card">
                  <h3 className="m-0 text-[1.625rem] sm:text-[2rem] font-semibold tracking-[-0.02em]">{project.name}</h3>
                  <p className="m-0 text-[0.9375rem] sm:text-[1.0625rem] leading-relaxed text-muted">{project.summary}</p>
                  <ul className="mt-auto pt-2 mb-0 p-0 list-none flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="px-3 py-1 rounded-full bg-alt text-[0.8125rem] font-medium">{tag}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className={`${container} ${sectionOffset} py-20 sm:py-32`}>
          <SectionTitle eyebrow={t.education.title}>{t.education.degree}.</SectionTitle>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
            <Reveal className="flex flex-col gap-1 p-6 sm:p-8 rounded-[28px] bg-alt">
              <h3 className="m-0 text-[1.1875rem] font-semibold">{t.education.degree}</h3>
              <span className="text-[0.9375rem] text-muted">{t.education.school}</span>
              <span className="mt-3 text-[1.75rem] font-semibold tracking-[-0.02em]">{t.education.year}</span>
            </Reveal>
            {t.education.courses.map(({ name, school, year }) => (
              <Reveal key={name} delay={90} className="flex flex-col gap-1 p-6 sm:p-8 rounded-[28px] bg-alt">
                <h3 className="m-0 text-[1.1875rem] font-semibold">{name}</h3>
                <span className="text-[0.9375rem] text-muted">{school}</span>
                <span className="mt-3 text-[1.75rem] font-semibold tracking-[-0.02em]">{year}</span>
              </Reveal>
            ))}
            <Reveal delay={180} className="flex flex-col gap-3 p-6 sm:p-8 rounded-[28px] bg-alt">
              <h3 className="m-0 text-[1.1875rem] font-semibold">{t.education.languagesTitle}</h3>
              {t.education.languages.map(({ name, level }) => (
                <div key={name} className="flex flex-col">
                  <span className="text-[1.0625rem] font-medium">{name}</span>
                  <span className="text-[0.9375rem] text-muted">{level}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      {/* Contact */}
      <footer id="contact" className={`${sectionOffset} bg-black text-[#f5f5f7]`}>
        <div className={`${container} flex flex-col items-center text-center gap-6 pt-24 sm:pt-36 pb-10`}>
          <Reveal>
            <h2 className="m-0 text-[3rem] sm:text-[5rem] lg:text-[6rem] font-bold leading-[1] tracking-[-0.04em] text-gradient">{t.contact.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="m-0 max-w-[35rem] text-[1.1875rem] sm:text-[1.3125rem] leading-[1.45] text-[#a1a1a6]">{t.contact.description}</p>
          </Reveal>
          <Reveal delay={200} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-4">
            <a
              href={`mailto:${contactLinks.email}`}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#2997ff] hover:bg-[#40a3ff] text-white text-[1.0625rem] font-medium transition-[transform,background-color] duration-100 ease-out active:scale-[0.97] break-all"
            >
              {contactLinks.email}
              <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
            </a>
            <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-0.5 text-[1.0625rem] text-[#2997ff] hover:underline">
              LinkedIn
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a href={contactLinks.github} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-0.5 text-[1.0625rem] text-[#2997ff] hover:underline">
              GitHub
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Reveal>
          <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-2 mt-20 sm:mt-28 pt-6 border-t border-[#424245] text-xs text-[#86868b]">
            <span>© {CURRENT_YEAR} James Almeida</span>
            <span>{t.contact.footer}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
