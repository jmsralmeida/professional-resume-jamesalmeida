import type { ReactNode } from 'react';
import { Mail, MapPin, Globe2, FolderGit2, Linkedin, GraduationCap, Languages, Clock } from 'lucide-react';

import profileImage from './assets/images/profile.png';
import { contactLinks, type Language } from './i18n/content';
import { useLanguage } from './i18n/LanguageContext';

const CURRENT_YEAR = new Date().getFullYear();

function Section({ id, title, children, muted = false }: { id: string; title: string; children: ReactNode; muted?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 ${muted ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();
  const options: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div role="group" aria-label={t.languageToggle.label} className="flex items-center rounded-full border border-slate-300 p-0.5 text-sm font-semibold">
      <Globe2 size={16} className="mx-1.5 text-slate-500" aria-hidden="true" />
      {options.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          title={language === code ? undefined : t.languageToggle.switchTo}
          className={`px-3 py-1 rounded-full transition-colors ${
            language === code ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-blue-600'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function App() {
  const { t } = useLanguage();

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#top" className="font-bold text-lg text-slate-900 whitespace-nowrap">James Almeida</a>
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navItems.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="px-3 py-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-50">
                {label}
              </a>
            ))}
          </nav>
          <LanguageSwitch />
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid gap-10 md:grid-cols-[1fr_auto] items-center">
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">James Almeida</h1>
              <p className="text-lg sm:text-xl text-blue-200 font-medium leading-snug">{t.hero.headline}</p>
              <div className="flex flex-col gap-2 text-slate-300">
                <span className="flex items-center gap-2"><MapPin size={18} aria-hidden="true" />{t.hero.location}</span>
                <span className="flex items-center gap-2"><Clock size={18} aria-hidden="true" />{t.hero.availability}</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={`mailto:${contactLinks.email}`} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg font-semibold">
                  <Mail size={18} aria-hidden="true" />{t.hero.ctaEmail}
                </a>
                <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg font-semibold">
                  <Linkedin size={18} aria-hidden="true" />LinkedIn
                </a>
                <a href={contactLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg font-semibold">
                  <FolderGit2 size={18} aria-hidden="true" />GitHub
                </a>
              </div>
            </div>
            <img
              src={profileImage}
              alt={t.hero.photoAlt}
              width={240}
              height={240}
              className="w-44 h-44 sm:w-60 sm:h-60 rounded-2xl object-cover shadow-2xl ring-4 ring-white/10 justify-self-center"
            />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {t.highlights.map(({ value, label }) => (
              <div key={label} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">{value}</div>
                <div className="text-sm text-slate-300 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <Section id="about" title={t.about.title}>
          <div className="space-y-4 text-lg leading-relaxed text-slate-700 max-w-3xl">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" title={t.experience.title} muted>
          <ol className="relative border-l-2 border-slate-200 ml-2 space-y-10">
            {t.experience.items.map((job) => (
              <li key={job.company} className="pl-6 sm:pl-8 relative">
                <span className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white ${job.current ? 'bg-blue-600' : 'bg-slate-400'}`} aria-hidden="true" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  {job.current && (
                    <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{t.experience.currentBadge}</span>
                  )}
                </div>
                <p className="text-blue-700 font-semibold">{job.company}</p>
                <p className="text-sm text-slate-500 mt-0.5">{job.period} · {job.location}</p>
                {job.context && <p className="text-sm italic text-slate-600 mt-2">{job.context}</p>}
                <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-blue-600 text-slate-700">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title={t.skills.title}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.skills.groups.map((group) => (
              <div key={group.title} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900 mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="text-sm bg-blue-50 text-blue-800 px-3 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="portfolio" title={t.portfolio.title} muted>
          <p className="text-slate-600 mb-6">{t.portfolio.description}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.portfolio.items.map((project) => (
              <div key={project.name} className="rounded-xl border-2 border-dashed border-slate-300 bg-white p-6">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide bg-amber-100 text-amber-800 px-2 py-1 rounded-full whitespace-nowrap">
                    {t.portfolio.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title={t.education.title}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-6 flex gap-4">
              <GraduationCap className="text-blue-600 shrink-0" size={28} aria-hidden="true" />
              <div>
                <h3 className="font-bold text-slate-900">{t.education.degree}</h3>
                <p className="text-slate-600">{t.education.school}</p>
                <p className="text-sm text-slate-500 mt-1">{t.education.year}</p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 flex gap-4">
              <Languages className="text-blue-600 shrink-0" size={28} aria-hidden="true" />
              <div>
                <h3 className="font-bold text-slate-900">{t.education.languagesTitle}</h3>
                <ul className="text-slate-600 space-y-1 mt-1">
                  {t.education.languages.map(({ name, level }) => (
                    <li key={name}><span className="font-medium text-slate-800">{name}:</span> {level}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer id="contact" className="scroll-mt-20 bg-slate-900 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{t.contact.title}</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">{t.contact.description}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href={`mailto:${contactLinks.email}`} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg">
              <Mail size={18} aria-hidden="true" />{contactLinks.email}
            </a>
            <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg">
              <Linkedin size={18} aria-hidden="true" />LinkedIn
            </a>
            <a href={contactLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg">
              <FolderGit2 size={18} aria-hidden="true" />GitHub
            </a>
          </div>
          <p className="text-slate-500 text-sm border-t border-slate-800 pt-6">© {CURRENT_YEAR} {t.contact.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
