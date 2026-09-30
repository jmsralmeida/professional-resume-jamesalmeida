import { useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

import profileImage from './assets/images/profile.jpg';
import { contactLinks } from './i18n/content';
import { useLanguage } from './i18n/LanguageContext';

const CURRENT_YEAR = new Date().getFullYear();

const container = 'max-w-[1200px] mx-auto px-5 lg:px-10';

function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="m-0 font-mono font-medium text-[13px] lg:text-sm tracking-[0.06em] uppercase text-accent">{children}</h2>;
}

function RoundButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="w-11 h-11 flex items-center justify-center rounded-full border border-line text-ink hover:border-ink transition-colors"
    >
      {children}
    </button>
  );
}

function LanguageSwitch() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.languageToggle.switchTo}
      className="h-11 px-3.5 rounded-full border border-line font-mono text-xs lg:text-[13px] text-muted hover:border-ink transition-colors"
    >
      <span className={language === 'en' ? 'text-ink font-medium' : ''}>EN</span>
      {' / '}
      <span className={language === 'pt' ? 'text-ink font-medium' : ''}>PT</span>
    </button>
  );
}

function App() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [jobIndex, setJobIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  const jobs = t.experience.items;
  const job = jobs[jobIndex];
  const projects = t.portfolio.items;
  const pad = (n: number) => String(n).padStart(2, '0');
  const jobPosition = `${pad(jobIndex + 1)} / ${pad(jobs.length)}`;
  const prevJob = () => setJobIndex((i) => (i - 1 + jobs.length) % jobs.length);
  const nextJob = () => setJobIndex((i) => (i + 1) % jobs.length);
  const prevProject = () => setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
  const nextProject = () => setProjectIndex((i) => (i + 1) % projects.length);

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink font-sans text-[17px] leading-relaxed">
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
        <div className={`${container} h-[68px] lg:h-[100px] flex items-center justify-between gap-4`}>
          <a href="#top" className="font-serif text-[21px] lg:text-2xl font-medium tracking-[-0.01em]">James Almeida</a>
          <nav className="hidden lg:flex items-center gap-9 text-[15px]">
            {navItems.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="hover:text-accent transition-colors">{label}</a>
            ))}
            <LanguageSwitch />
          </nav>
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitch />
            <RoundButton label={menuOpen ? t.nav.closeMenu : t.nav.openMenu} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </RoundButton>
          </div>
        </div>
        {menuOpen && (
          <nav className="lg:hidden absolute inset-x-0 top-full flex flex-col px-5 pt-2 pb-5 bg-paper border-b border-line text-xl">
            {navItems.map(({ id, label }) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="py-3">{label}</a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className={`${container} grid gap-6 lg:gap-24 lg:grid-cols-[minmax(0,1fr)_420px] items-center pt-7 pb-10 lg:pt-[104px] lg:pb-24`}>
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
            <p className="m-0 flex items-start lg:items-center gap-2.5 font-mono text-[13px] lg:text-sm leading-normal text-muted">
              <span className="shrink-0 w-2 h-2 mt-1.5 lg:mt-0 rounded-full bg-accent" aria-hidden="true" />
              {t.hero.availability}
            </p>
            <h1 className="m-0 font-serif font-normal text-[42px] lg:text-[76px] leading-[1.06] lg:leading-[1.04] tracking-[-0.02em]">
              {t.hero.titleStart}
              <span className="text-accent italic">{t.hero.titleAccent}</span>
              {t.hero.titleEnd}
            </h1>
            <p className="m-0 max-w-[620px] text-base lg:text-[19px] text-muted">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-2.5 lg:gap-3 pt-0 lg:pt-2">
              <a
                href={`mailto:${contactLinks.email}`}
                className="flex items-center justify-center gap-2.5 h-[52px] px-[26px] rounded-full bg-accent hover:bg-accent-hover text-white font-medium text-base transition-colors"
              >
                {t.hero.ctaEmail}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <div className="grid grid-cols-2 sm:flex gap-2.5 lg:gap-3">
                <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center h-12 sm:h-[52px] px-[22px] rounded-full border border-line hover:border-ink text-base transition-colors">
                  LinkedIn
                </a>
                <a href={contactLinks.github} target="_blank" rel="noreferrer" className="flex items-center justify-center h-12 sm:h-[52px] px-[22px] rounded-full border border-line hover:border-ink text-base transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <figure className="m-0 flex flex-col gap-3 order-1 lg:order-2">
            <img
              src={profileImage}
              alt={t.hero.photoAlt}
              width={420}
              height={520}
              className="w-full aspect-[35/38] lg:aspect-[4/5] rounded-[18px] lg:rounded-[20px] object-cover object-top bg-line"
            />
            <figcaption className="hidden lg:block font-mono text-[13px] text-muted">{t.hero.photoCaption}</figcaption>
          </figure>
        </section>

        {/* Highlights */}
        <section className={container}>
          <dl className="m-0 grid grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-0 border-b lg:border-t border-line">
            {t.highlights.map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse justify-end gap-1 lg:gap-1.5 py-5 lg:py-9 lg:px-8 lg:first:pl-0 lg:last:pr-0 border-t lg:border-t-0 lg:border-l lg:first:border-l-0 border-line">
                <dt className="text-sm lg:text-[15px] leading-snug text-muted">{label}</dt>
                <dd className="m-0 font-serif text-[34px] lg:text-5xl leading-[1.1]">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <section id="about" className={`${container} scroll-mt-[68px] lg:scroll-mt-[100px] grid gap-4 lg:gap-16 lg:grid-cols-[280px_minmax(0,1fr)] pt-14 pb-6 lg:pt-28 lg:pb-16`}>
          <SectionLabel>{t.about.title}</SectionLabel>
          <div className="flex flex-col gap-4 lg:gap-5 max-w-[820px]">
            {t.about.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? 'm-0 font-serif text-[22px] lg:text-[30px] leading-[1.4] lg:leading-[1.35]' : 'm-0 text-base lg:text-lg text-muted'}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-[68px] lg:scroll-mt-[100px] py-10 lg:py-16">
          <div className={`${container} flex items-center justify-between mb-4 lg:mb-10`}>
            <SectionLabel>{t.experience.title}</SectionLabel>
            <div className="hidden lg:flex items-center gap-3">
              <RoundButton label={t.experience.previous} onClick={prevJob}><ArrowLeft size={16} aria-hidden="true" /></RoundButton>
              <span className="min-w-16 text-center font-mono text-[13px] text-muted">{jobPosition}</span>
              <RoundButton label={t.experience.next} onClick={nextJob}><ArrowRight size={16} aria-hidden="true" /></RoundButton>
            </div>
          </div>
          <div className="lg:max-w-[1200px] lg:mx-auto lg:px-10 grid gap-4 lg:gap-16 lg:grid-cols-[320px_minmax(0,1fr)]">
            <div className="flex lg:flex-col gap-2 lg:gap-1.5 overflow-x-auto px-5 lg:px-0 pb-1 lg:pb-0 [scrollbar-width:none]">
              {jobs.map((item, index) => {
                const active = index === jobIndex;
                return (
                  <button
                    key={item.company}
                    type="button"
                    onClick={() => setJobIndex(index)}
                    aria-current={active ? 'true' : undefined}
                    className={`shrink-0 flex flex-col items-start gap-0.5 h-10 lg:h-auto lg:min-h-11 justify-center px-3.5 lg:px-5 lg:py-4 rounded-full lg:rounded-xl border text-left whitespace-nowrap lg:whitespace-normal transition-colors ${
                      active ? 'bg-surface border-line text-ink' : 'bg-transparent border-line lg:border-transparent text-muted hover:text-ink'
                    }`}
                  >
                    <span className="lg:hidden text-sm font-medium">{item.company.split(' (')[0]}</span>
                    <span className="hidden lg:block text-[17px] font-semibold">{item.company}</span>
                    <span className="hidden lg:block font-mono text-[13px] text-muted">{item.period}</span>
                  </button>
                );
              })}
            </div>
            <article aria-live="polite" className="mx-5 lg:mx-0 lg:min-h-[620px] flex flex-col gap-2.5 lg:gap-3.5 p-6 lg:p-0 rounded-2xl lg:rounded-none bg-surface lg:bg-transparent border border-line lg:border-0">
              <div className="flex lg:hidden items-center justify-between gap-3 font-mono text-xs text-muted">
                <span>{job.period}</span>
                {job.current && <span className="px-2.5 rounded-full border border-accent text-accent">{t.experience.currentBadge}</span>}
              </div>
              <div className="flex items-center gap-3">
                <h3 className="m-0 font-serif font-normal text-[28px] lg:text-[40px] leading-[1.15] tracking-[-0.01em]">{job.company}</h3>
                {job.current && (
                  <span className="hidden lg:inline px-2.5 py-0.5 rounded-full border border-accent text-accent font-mono text-xs">{t.experience.currentBadge}</span>
                )}
              </div>
              <p className="m-0 text-[15px] lg:text-[17px] font-medium">
                {job.role}{' '}
                <span className="font-normal text-muted">
                  <span className="hidden lg:inline">· {job.period} </span>· {job.location}
                </span>
              </p>
              {job.context && <p className="m-0 text-sm lg:text-base leading-normal text-muted">{job.context}</p>}
              <ul className="mt-1.5 lg:mt-2.5 mb-0 pl-[18px] lg:pl-5 flex flex-col gap-2.5 lg:gap-3 text-[15px] lg:text-base leading-normal list-disc">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="lg:hidden flex items-center justify-between px-5 mt-4">
            <RoundButton label={t.experience.previous} onClick={prevJob}><ArrowLeft size={16} aria-hidden="true" /></RoundButton>
            <span className="font-mono text-[13px] text-muted">{jobPosition}</span>
            <RoundButton label={t.experience.next} onClick={nextJob}><ArrowRight size={16} aria-hidden="true" /></RoundButton>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={`${container} scroll-mt-[68px] lg:scroll-mt-[100px] grid gap-6 lg:gap-16 lg:grid-cols-[280px_minmax(0,1fr)] py-10 lg:py-16`}>
          <SectionLabel>{t.skills.title}</SectionLabel>
          <div className="grid gap-x-12 gap-y-7 lg:gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {t.skills.groups.map((group) => {
              const [name, qualifier] = group.title.split(' (');
              return (
                <div key={group.title} className="flex flex-col gap-2 lg:gap-3">
                  <h3 className="m-0 text-base font-semibold">
                    {name}
                    {qualifier && <span className="font-normal text-muted"> ({qualifier}</span>}
                  </h3>
                  <p className="m-0 text-[15px] lg:text-base leading-[1.8] text-muted">{group.items.join(' · ')}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className={`${container} scroll-mt-[68px] lg:scroll-mt-[100px] grid gap-4 lg:gap-16 lg:grid-cols-[280px_minmax(0,1fr)] py-10 lg:py-16`}>
          <div className="flex lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-3">
            <SectionLabel>{t.portfolio.title}</SectionLabel>
            <span className="text-[13px] lg:text-sm text-muted">{t.portfolio.note}</span>
          </div>
          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className={`${index === projectIndex ? 'flex' : 'hidden sm:flex'} flex-col gap-3 lg:gap-4 p-6 lg:p-8 rounded-2xl bg-surface border border-line`}
                >
                  <h3 className="m-0 font-serif font-medium text-[28px] lg:text-[30px]">{project.name}</h3>
                  <p className="m-0 text-[15px] lg:text-base leading-normal text-muted">{project.summary}</p>
                  <ul className="m-0 p-0 list-none flex flex-wrap gap-1.5 lg:gap-2 font-mono text-xs">
                    {project.tags.map((tag) => (
                      <li key={tag} className="px-2.5 py-1 rounded-md bg-paper">{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="sm:hidden flex items-center justify-between mt-4">
              <RoundButton label={t.portfolio.previous} onClick={prevProject}><ArrowLeft size={16} aria-hidden="true" /></RoundButton>
              <div className="flex items-center">
                {projects.map((project, index) => (
                  <button
                    key={project.name}
                    type="button"
                    aria-label={`${t.portfolio.goTo}: ${project.name}`}
                    aria-current={index === projectIndex ? 'true' : undefined}
                    onClick={() => setProjectIndex(index)}
                    className="w-8 h-11 flex items-center justify-center"
                  >
                    <span className={`h-1.5 rounded-full transition-all ${index === projectIndex ? 'w-5 bg-accent' : 'w-1.5 bg-line'}`} />
                  </button>
                ))}
              </div>
              <RoundButton label={t.portfolio.next} onClick={nextProject}><ArrowRight size={16} aria-hidden="true" /></RoundButton>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className={`${container} scroll-mt-[68px] lg:scroll-mt-[100px] grid gap-6 lg:gap-16 lg:grid-cols-[280px_minmax(0,1fr)] pt-10 pb-16 lg:pt-16 lg:pb-[120px]`}>
          <SectionLabel>{t.education.title}</SectionLabel>
          <div className="grid gap-7 lg:gap-12 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-lg lg:text-xl font-semibold">{t.education.degree}</h3>
              <span className="text-base text-muted">{t.education.school} · {t.education.year}</span>
              {t.education.courses.map(({ name, school, year }) => (
                <div key={name} className="flex flex-col gap-1.5 mt-4">
                  <h3 className="m-0 text-lg lg:text-xl font-semibold">{name}</h3>
                  <span className="text-base text-muted">{school} · {year}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-lg lg:text-xl font-semibold">{t.education.languagesTitle}</h3>
              {t.education.languages.map(({ name, level }) => (
                <span key={name} className="text-base text-muted">{name}: {level}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-[68px] lg:scroll-mt-[100px] bg-forest text-forest-text">
        <div className={`${container} flex flex-col gap-14 lg:gap-16 pt-16 lg:pt-[120px] pb-8 lg:pb-12`}>
          <div className="flex flex-col gap-6 lg:gap-7">
            <h2 className="m-0 font-serif font-normal text-5xl lg:text-[88px] leading-none tracking-[-0.02em]">{t.contact.title}</h2>
            <p className="m-0 max-w-[560px] text-base lg:text-[19px] text-forest-muted">{t.contact.description}</p>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10 pt-3 text-lg lg:text-xl">
              <a href={`mailto:${contactLinks.email}`} className="self-start flex items-center gap-2.5 pb-1 border-b border-forest-muted hover:opacity-80 break-all">
                {contactLinks.email}
                <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
              </a>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="self-start pb-1 hover:opacity-80">LinkedIn</a>
              <a href={contactLinks.github} target="_blank" rel="noreferrer" className="self-start pb-1 hover:opacity-80">GitHub</a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 pt-7 border-t border-forest-line font-mono text-xs lg:text-[13px] text-forest-muted">
            <span>© {CURRENT_YEAR} James Almeida</span>
            <span>{t.contact.footer}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
